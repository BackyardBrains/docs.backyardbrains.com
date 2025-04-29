from microbit import *
import radio

# Configure radio group and turn on the radio
radio.config(group=123)
radio.on()

# Initialize variables for left and right sensor values
left_value = 0
right_value = 0
threshold = 200  # Threshold value for sensor activation
calibration_duration = 3  # Duration for sensor calibration in seconds

previous = -1  # Previous position value for smoothing
i2cInitialized = False  # Is i2c initialized

# Set analog output period and initial value for pin 8
pin8.set_analog_period(5)
pin8.write_analog(300)

# Initialize I2C with address and frequency
I2C_ADDRESS = 0x08
try:
    i2c.init(freq=100000, sda=pin20, scl=pin19)
    i2cInitialized = True
except:
    i2cInitialized = False

playing = False  # Flag to indicate if the game is playing

def constrain(val, min_val, max_val):
    # Constrain the value between min_val and max_val
    return min(max_val, max(min_val, val))

def normalize():
    # Normalize the sensor value over a calibration duration
    start = end = running_time()
    max_val = 0

    while start + calibration_duration * 1000 >= end:
        new_val = pin0.read_analog()
        if new_val > max_val:
            max_val = new_val
        end = running_time()

    return max_val

# Calibrate the sensor and get the maximum value
my_max = normalize()
display.show(Image.YES)  # Display a check mark after calibration

while True:
    # Receive the left value via radio
    message = radio.receive()
    if message:
        left_value = int(message)

    # Read and normalize the right sensor value
    right_value = constrain(int(pin0.read_analog() * 1023 / my_max), 0, 1023)

    # Apply threshold to sensor values
    if left_value < threshold:
        left_value = 0

    if right_value < threshold:
        right_value = 0

    # Calculate the position based on sensor values
    position = 300 + 150 * ((left_value - right_value) / 1023)

    # Initialize previous position if not set
    if previous == -1:
        previous = position

    # Smooth the position value
    final = (previous * 0.99) + (position * 0.01)
    previous = final
    
    # Write the final position to pin 8 as an analog value
    pin8.write_analog(int(final))

    # Send the final position via I2C if available
    if i2cInitialized:
        i2c.write(I2C_ADDRESS, "{}".format(int(final)).encode("utf-8"))
