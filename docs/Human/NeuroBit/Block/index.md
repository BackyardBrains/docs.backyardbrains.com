---
sidebar_position: 1
sidebar_label: Getting Started with Block 
---

# Getting Started with Neuro:Bit Block Programming #

## Overview ##

In this example, we will read in the EMG signal from the Neuro:Bit and display it on the Micro:Bit.  You will need a Neuro:Bit with a Micro:Bit connected to the front slot, some large motor electrodes, and a USB and electrode cable.

## Software Setup ##
We will use the [Make Code editor](https://makecode.microbit.org/ devloped by Microsoft for Micro:Bit to program our Brain Machine Interfaces.  Navigate to the Make Code website, and click on the "New Project" button.

![Add a Block Variable]( ./blk_newProject.png)

Give your project a name and click "Create".  This will let you into the code editor.  You will see the Micro:Bit, code block pallette, and a workspace.  You can add blocks to the project by dragging them from the center section to the workspace on the right.

![Add a Block Variable]( ./blk_editor.png)

## Read EMG Signal into a Block Variable ##
We will start by afdding a variable.  Variables store information in your code so you can easily access it.   We will need to create a variabele to hold the values coming in from the EMG Signal.  Navigate to the Variables section and make a variable called "currentSignal".

![Add a Block Variable]( ./blk_var.png)

Drag a "Read Analog" block to the workspace and set the variable to "currentSignal".  The pin for the electrode is P0.   The "forver" block will allow the code continue to read in the latest signals from the electrode while the code is running.

![Set Variable to Pin0]( ./blk_varReadPort.png)


