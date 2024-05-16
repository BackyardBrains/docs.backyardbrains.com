---
sidebar_position: 2
sidebar_label: Getting Started with Python
---

# Getting Started with Neuro:Bit Python Programming #

## Overview ##

Python is a programming language that can be used with the Neuro:Bit to easily develop Brain Machine Interfaces.  It is a powerful language, easy to learn, and a great way to get started with Neuro:Bit.

## Software Set-up ## 

To code your project, you will need to head to the [micro:bit Python Editor](https://python.microbit.org/v/3/ideas) This is the software Microsoft developed to code the micro:bit with. It will open with the micro:bit library already imported, and a loop in place. Delete the code inside the workspace and you can start.


```py title="Basic Python Code"
from microbit import *

# Code in a 'while True:' loop repeats forever
while True:
  display.show Image.HEART)
  sleep (1000)
  display.scroll('Hello')
```

## Read EOG Signal into a Variable ##

Variables store information in your code so you can easily access it.   We will need to create a variable called EOG to hold the values coming in from the EOG Signal.  Since the EOG signal is sent to Pin0 on the Micro:Bit, we can read in a sample using the following code.  

```py title="Basic Python Code"
from microbit import *

# Code in a 'while True:' loop repeats forever
while True:
  EOG =  pin0.read_analog()
```
We use the "read_analog()" method to take a sample of the EOG each time.  Congrats! The variable *EOG* now is reading in the EOG signal on each loop! 


## Connecting Muscles to Read an EOG Signal ##

Place 2 Large Motor Electrodes over the particular muscle you are recording from.  We tend to use the forearm as it is an easy movement to make while testing and performing your BMI. 

![Placement of Electrodes](  ) //>>>

Place the electrode stickers *along* the muscle you want to read and connect the 2 red alligator leads.  You can place the black ground clip on a sticker behind your hand. This is good spot as we do not expect to see a lot of muscle activity on the hand.  This keeps the recordings quiet.

## See the EOG Signal ##

A good way to start using EOG is to see what the signal looks like.  To do this, we will send the data from the Micro:Bit to the host computer.  Add a command that send the EOG data to the computer over the serial port:


```py title="Basic Python Code"
from microbit import *
import log
log.set_labels('EOG')
# Code in a 'while True:' loop repeats forever
while True:
    EOG =  pin0.read_analog()
    log.add({'EOG':EOG})
```
Once the program is downloaded, you can click on "Show Data".  This will plot the variables we are sending over serial! They can then be accessed in the storage of the microbit via the folders, Microbit, log, and then access. These instructions will also appear in the pop-up window,. //NEED TO ADD Log Explanation  - cannot be done in real time

![EOG Values in Log](../Block/blk_serialViewer.png)





