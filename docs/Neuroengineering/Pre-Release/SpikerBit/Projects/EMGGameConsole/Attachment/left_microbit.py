from microbit import *
import radio

# Configure radio group and turn on the radio
radio.config(group=123)
radio.on()

# Initialize variable for the left sensor value
left_value = 512
calibration_duration = 3  # Duration for sensor calibration in seconds

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
    # Read and normalize the left sensor value
    left_value = constrain(int(pin0.read_analog() * 1023 / my_max), 0, 1023)

    # Send the left sensor value via radio
    radio.send(str(left_value))
