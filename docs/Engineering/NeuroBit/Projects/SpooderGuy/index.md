---
sidebar_position: 4
sidebar_label: Spiker-Man Web Slinger
---

![Web Slinger in Action](./Spiker-Man.png)
# Spiker-Man Web Slinger # 



*"Spiker-Man, Spiker-Man, does whatever a Spiker-Man can"*

Make your very own string shooting device that shares startling similarities to a certain Marvel / Sony superhero!

This guide is still being developed, but below is a general overview.

# Materials Needed ( Shown Left->Right, Top->Bottom ) #
- Loop Lasso / two wheels close to each other
- A loop of string with no knots
- Micro bit and Neurobit
- EMG Signal Cable
- 3 Electrodes

Optional
- 3D printer / Some casing
- Arm Bands
  
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
We have a fantastic in-house designer / inventor / general-knows-how-to-do-it guy here at Backyard Brains, and he designed the case I'm using in the pictures above. You can find the a
# Demos #
Finally, here's some other cool footage I took of messing around with the Spiker-Man toy
