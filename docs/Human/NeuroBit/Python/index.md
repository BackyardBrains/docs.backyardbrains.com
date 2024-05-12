---
sidebar_position: 2
sidebar_label: Getting Started with Python
---

# Getting Started with Neuro:Bit Python Programming #

## Overview ##

Python is a programming language that can be used with the Neuro:Bit to easily develop Brain Machine Interfaces.  It is a powerful language, easy to learn, and a great way to get started with Neuro:Bit. [ Greg Stopped here ]

## Software Set-up ## 

To code your project, you will need to head to the [micro:bit Python Editor](https://python.microbit.org/v/3/ideas) This is the software Microsoft developed to code the micro:bit with. It will open with the micro:bit library already imported, and a loop in place. Delete the code inside the workspace and you can start.

![Python newproject ](./python_newproject.png)

## Read EMG Signal into a Variable ##

Variables store information in your code so you can easily access it.   We will need to create a variable to hold the values coming in from the EMG Signal.  This will be a "global" variable, because it is a variable that will change. So within your "while True" loop, indent and write "global currentSignal ". 

![Python Global Signal ](./python_global_currentSignal.png)

This variable will be storing the data, but it needs to be made equal to something. Because micro:bit uses pins to communicate with the Neuro:Bit, you need to make currentSignal equal to the signal. But, it also needs that signal to be a number. So you need a variable that is equal to the signal, while currentSignal will make that signal into a fixed number. 

![Value Global Variable](








