---
sidebar_label: Neuro:Talk
description: The future of silent communication
---

#  Neuro:Talk #
![DIY Hand Neuroprosthetic _title.png)

|     |       |
|--------------|--------------
| Inventor     | 	Masha Kosanovic and Nadja
| micro:bit IDE     | MakeCode
| Best Used    | Classroom 

## Project Overview
**Welcome to Neuro:Talk, Your Gateway to Expressive Communication Through ASL!**

These instructions will guide you through the process of building and programming your Neuro:Talk device, which takes Electromyography (EMG) signals from American Sign Language (ASL) gestures, converts them into Morse code, and displays the output via tones, an LED display, and a rotating pointer on a servo and cup. Let's dive in and explore this unique method of communication!

## Materials needed
- 1x Micro:Bit and Neuro:Bit
- 1x Servo motor
- 1x EMG Signal Cable
- 3x Electrodes
- 1x Servo
- 1x Cup (for the rotating pointer)
- An assortment of Wires and connectors
- 1x Cardboard, tape, and scissors for housing

# Programming Your Neuro:Talk Device

Now that your device is assembled, it's time to program it to decode ASL gestures into Morse code and display it.

### Step 1: Set Up the Programming Environment

- Download and install the Arduino IDE (or your preferred microcontroller programming environment).
- Connect your microcontroller to your computer via USB.

![Programming Setup /neurotalk_05_programming_setup.png)

## Step 2: Code the EMG Signal Interpretation

Write code to interpret EMG signals from your muscles.

- Use analog readings to capture EMG data.
- Filter and threshold the signals to detect muscle contractions associated with ASL gestures.
- Map these contractions to specific Morse code patterns.

```cpp
// Example code snippet for EMG signal reading
int emgSignal = analogRead(A0);
if (emgSignal > threshold) {
    // Process as Morse code input
}
```

## Step 3: Convert Morse Code to Output Signals

Once you've mapped the ASL gestures to Morse code, you'll need to display this information.

- Use the LED display to show Morse code in real-time.
- Control the buzzer to emit corresponding tones.
- Rotate the pointer using the servo motor to visually indicate the Morse code.

```cpp
// Example code snippet for Morse code output
void displayMorseCode(char* morseCode) {
    for (int i = 0; i < strlen(morseCode); i++) {
        if (morseCode[i] == '.') {
            digitalWrite(buzzerPin, HIGH);
            delay(dotDuration);
            digitalWrite(buzzerPin, LOW);
        } else if (morseCode[i] == '-') {
            digitalWrite(buzzerPin, HIGH);
            delay(dashDuration);
            digitalWrite(buzzerPin, LOW);
        }
        delay(interSymbolDelay);
    }
}
```

## Step 4: Test and Calibrate

Test your device by performing ASL gestures and observing the outputs.

- Adjust the sensitivity of the EMG signal reading if necessary.
- Fine-tune the Morse code timing for accurate interpretation.

![Testing Neuro:Talk ./neurotalk_06_testing.png)

## Build Instructions

### Build the Rotating Pointer Mechanism

For visual feedback, we'll use a servo motor to rotate a pointer attached to a cup.

- Mount the servo motor securely inside the cup.
- Attach a small pointer or arrow to the servo horn.
- Connect the servo motor to a digital pin on the microcontroller.

![Rotating Pointer Setup ./neurotalk_03_pointer_setup.png)

### Assemble the Housing

Use cardboard to build a housing for your components.

- Cut out shapes to fit your microcontroller, EMG sensor connectors, LED display, and servo motor.
- Tape everything together securely, ensuring all wires are neatly organized.

![Assembled Housing ./neurotalk_04_housing.png)


# Using Neuro:Talk

Now that your device is ready, it's time to use it!

- Turn on the device and start performing ASL gestures.
- The EMG sensors will detect your muscle contractions, convert them into Morse code, and display the output via tones, the LED display, and the rotating pointer.

### Practice Makes Perfect

As you practice using the Neuro:Talk, you'll become more adept at controlling the output, ensuring that your ASL gestures are accurately represented.


# Customizing Your Neuro:Talk Device

You can further enhance your device with additional features:

### Multiple Output Modes

- **Visual Mode:** Use the LED display for quiet environments.
- **Auditory Mode:** Use the buzzer for audible communication.
- **Kinetic Mode:** Use the rotating pointer for a more tactile feedback option.

### Advanced EMG Mapping

- Explore more complex ASL gestures and map them to longer Morse code sequences.
- Integrate additional sensors for more nuanced control and feedback.


# Conclusion

Congratulations on building and programming your Neuro:Talk device! By translating ASL gestures into Morse code, you've created a unique bridge between physical expression and digital communication. Keep exploring, customizing, and sharing your innovations with the world!
