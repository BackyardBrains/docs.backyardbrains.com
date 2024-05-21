---
sidebar_position: 4
sidebar_label: Spiker-Man Web Slinger
---

![Web Slinger in Action](./Spiker-Man.png)
# Spiker-Man Web Slinger # 



*"Spiker-Man, Spiker-Man, does whatever a Spiker-Man can"*

Make your very own string shooting device that shares startling similarities to a certain Marvel / Sony superhero!


# Materials Needed #
- Loop Lasso / two wheels close to each other
- A loop of string with no knots
- Micro bit and Neurobit
- EMG Signal Cable
- 3 Electrodes
- A relay, we used [this one from grove / seeed studio] (https://www.seeedstudio.com/Grove-Relay.html) but any one-way electromechanical switch will do. 

**Optional**
- 3D printer / a case to hold both the neurobitand
- Soldering iron, solder, protective gear
- Arm Bands
- Three small screws or bolts

# Software #
This project is fairly simple from a software perspective: you'll simply pair the input from an EMG to a signal output. To make this work, we'll re-use code from the EMG lecture and pair it to a DigitalWrite command in an if-else statement. 

```py title="Spiker-Man Controller"
threshold = 0
EMG = 0

def on_forever():
    global threshold, EMG
    threshold = 200
    EMG = pins.analog_read_pin(AnalogPin.P0)
    serial.write_value("x", EMG) #Can be commented out, used for confirming EMG works
    if EMG >= threshold:
        pins.digital_write_pin(DigitalPin.P8, 1) #Shoot out string
    else:
        pins.digital_write_pin(DigitalPin.P8, 0)
basic.forever(on_forever)
```
# Hardware - Electronic #
This is were things get a bit more advanced. We'll first do a simple project to test that the code and relay work, and then get-into the full project. 

I would recommend attaching pin 8 ( the same Y pin we've used in the past for the servo-based projects ), to a relay, and the relay should connect 3v to a resistor and LED, which then connects to ground.

But I'm getting ahead of myself, how does a relay work? In a nut shell it's an electromechanical switch. A mechanical switch, like a simple Single Pole Single Throw (SPST) switch, works great for connecting two wire but requires manual input. A transistor, in a very broad and simple manner, is an electrical switch that connects a collector and emitter wire via a base, which can be controlled by whether the base pin is high ( 1 ) or low ( 0 ) in digital electronics terminology. The relay functions as a bit of a mix - it's very reliable and is an actual switching motion ( you can hear the click as a small bad moves back and forth to bridge a wire ), but is much faster and can be controlled electronically. 

What I've done for my parts is to cut open the loop lasso, remove the physical switch, and solder a wire from the motors, into the relay, then back into ground. This means that when our code sends out a 1 to pin 8, the wires are shorted together and the motors recieve current. When our code sends a zero, 

# Hardware - Mechanical #

We have a fantastic in-house designer / inventor / general-knows-how-to-do-it guy here at Backyard Brains, and he designed the case I'm using in the pictures above. You can find the STL files here as the following:
1. The back case
2. The
3. The
4. The

Putting in the pieces into their 3D printed frames will look like this:
[!Shooting part](./19A2C5F9-0177-45AE-BEE3-7796ED721018.jpeg)


# Demos #
Finally, here's some other cool footage I took of messing around with the Spiker-Man toy
