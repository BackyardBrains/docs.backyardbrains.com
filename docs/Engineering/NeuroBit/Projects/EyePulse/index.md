---
sidebar_position: 3
sidebar_label: Eye Pulse
---

# Overview #
Welcome to Project Eye Pulse! Here, you can experiment with real-time eye blink detection. This project utilizes a pair of Micro:Bit and Neuro:Bit devices, leveraging muscle movements around your eyes and EOG (Electrooculography) filtering to detect blinks.

## Check supplies ##
To get started with this project, you will need the following materials:

1. Micro:bit
2. Neuro:bit
3. Cable
4. Three Electrodes

## Know where to place electrodes ##
Proper placement of the electrodes is crucial for accurate detection. Follow these steps to correctly position them:

1. First Electrode: Place the first electrode on the outer canthus (the outer corner) of the eye on your chosen side.
2. Second Electrode: Position the second electrode just below the eye on the same side you selected.
3. Third Electrode (Ground): Place the last electrode behind the ear, on the bony area. This electrode serves as the "Ground" and is essential for reducing noise in the signal.

Make sure all electrodes are placed on the same side of the face for optimal performance.

## Connecting right cables to right place ##
Identifying and Placing the Red Alligator Clips
- Red Clip with Black Dot:
  Look for the red alligator clip with a black dot.
  Attach this clip to the electrode placed below the eye.
- Red Clip without Black Dot:
  The second red alligator clip, which does not have a black dot, should be attached to the electrode on the outer canthus of the eye.
  Placing the Black Alligator Clips
  
The black alligator clips are to be connected to the "Ground" electrode, which is located behind the ear.

Troubleshooting: Identifying the Clips Without a Black Dot
  If you don't see a black dot, don't worry. You can place the red clips randomly and the black clip behind the ear. We'll guide you on how to verify the correct placement later.

Pro Tip:
If you're unsure about the clips or can't find the black dot, use a device to check the electrical connectivity, such as a Digital Multimeter (DMM). Follow these steps to identify the clips:

Using a Digital Multimeter (DMM):

Positive Cable: Attach the positive cable (usually red) to one of the red alligator clips.
Negative Cable: Connect the negative cable (usually black) to the audio jack port on the device.

Checking Connectivity:
Edge of Audio Jack: If the DMM beeps when the positive cable is connected to the edge of the audio jack, this is the black-dotted red alligator clip (inverting input voltage). Therefore, it should be placed below the eye.
Middle of Audio Jack: If the DMM beeps when the positive cable is connected to the middle of the audio jack, this is the non-black-dotted red alligator clip (non-inverting input voltage). Therefore, it should be placed on the outer canthus of the eye.
Using these methods will ensure that your alligator clips are correctly placed, leading to accurate eye blink detection.

## Prepare Preprocessing ##
1. Setup:
   
Take out your Micro:Bit.
Insert it into the Neuro:Bit.
Connect the cable to the Neuro:Bit.

2. Using the Online Python Editor:

We will use the online Python editor provided by Micro:Bit. You can access it directly from [here](https://python.microbit.org/v/3).

3. Install the Program:

Ensure that the power of the Neuro:Bit is turned off. This is important to prevent potential issues.

Download and flash the program to the Micro:Bit:
  Paste the code below to the editor
  Connect your Micro:Bit to your computer via USB.
  Click on the download
  This should download the program to Micro:Bit.

```py title="EOG-Preprocessing"
from microbit import *
import log
import random

trials = 0 
size = 90 #Size of an array/number of points
set_trials = 5 #Modify set_trials to change number of blink tirals
preprocessing = True
processing = False
T = [0.0] * 90
T_tmp = []
log.set_labels('Blink','ERP')
real_time_recording = False
T_avg = 0


#Preprocessing function
@run_every(s=random.randint(3,5)) 
def preprocessing_function():
    global preprocessing, trials
    if preprocessing:
        trials += 1
        count = 0
        display.show(Image.HEART)
        while count < size:
            val = pin0.read_analog()
            T[count] += val
            log.add({'Blink': val})
            count += 1
            sleep(5)
    
#Preprocessing
while trials < set_trials:
    display.show(Image.GHOST)

#Stop preprocessng
preprocessing = False

#Pause the program for 0.5sec
sleep(500)

#ERP calculation
for i in range(len(T)):
    T[i] = T[i] / set_trials

#ERP bounding
max_index = T.index(max(T))
min_index = T.index(min(T))
upper_bound = T[max_index] * 0.85
lower_bound = T[min_index] * 1.15
start = 0
end = len(T)
padding = 5
if max_index - padding > 0:
    start = max_index - padding
if min_index + padding < end:
    end = min_index + padding
T = T[start:end]

#ERP plot
for i in range(len(T)):
    log.add({'ERP':T[i]})

#T_avg caluculation
size = len(T)
T_avg = sum(T) / size

display.show(Image.DIAMOND)
```

4. Post-Installation:

After a successful installation, within 3 seconds, unplug the USB connector from the Micro:Bit.
If you turned off the Neuro:Bit earlier, there should be no LED lights displayed on the Micro:Bit screen.
Ensure that the Neuro:Bit switch (on the back) is in "ECG" mode.

## Begin Preprocessing ##
Now that your program is installed, it is time for preprocessing!

PLEASE READ ALL INSTRUCTIONS BEFORE YOU BEGIN.

1. Turn on the Neuro:Bit:

2. Switch on the Neuro:Bit device.
Ghost LED:
Soon after powering on, you will see a GHOST LED appear on your screen.

Heart LED:
Within a few seconds (default is 3 to 5 seconds), the LED will change to a HEART. Once you see the HEART. Please blink as usual.

Repeat Until Diamond LED:
Continue blinking as usual until the DIAMOND LED appears on the screen.


CAUTION:
This process is crucial for accurate data acquisition later on. Therefore, while the program is running, please ensure that:

Your head remains fixed.
Your eyes stay focused on the center of the screen at all times.
Following these steps carefully will help ensure the success of your eye blink detection project.

## Check Preprocessed Data ## :
As explained previously, if you were not able to figure out the correct placement for the red alligator clips, this is where to check!

1. Connect Neuro:Bit to Your Computer:
After the preprocessing, turn off the power of the Neuro:Bit.
Using a USB cable, connect the Neuro:Bit to your local computer.

2. Open File Explorer:
Open the file explorer on your computer.
You should see a new drive named "MICROBIT".

3. Navigate to MICROBIT Drive:
Navigate to the MICROBIT drive.
You should see an HTML file named "MY_DATA".

4. Open Visual Preview:
Double-click the "MY_DATA" file to open it.
Click on "Open Visual Preview".

5 Compare Data:
Compare the displayed data with the figure below. Does the shape of the green line look similar? If so, you're in good shape!
If not, flip your red alligator clips and try again.

Troubleshooting:
If it is still not working, please check:
- Your electrode placement.
- Alligator clips placement.
- Neuro:Bit switch (ensure it's in ECG mode).

Try again after making these adjustments.


## Prepare Real-Time Blink Aquisition ##
Great job getting this far! Now that you have your preprocessed data ready, it's time to move on to real-time blink acquisition.

BENEATH the program for preprocessing, paste the code below.

```py title="EOG-Real_Time"
#Pause the program for three seconds
sleep(3000)

#Begin processing
S = [0.0] * size
S_avg = 0

NCC_list = [2.0] * 3
real_time_recording = True
processing = True

@run_every(ms=1)
def processing_function():
    global processing,size,upper_bound,lower_bound
    if processing:
        val = pin0.read_analog()
        top = 0
        bottom_T = 0
        bottom_S = 0
        pass_upper_bound = False
        pass_lower_bound = False
        run_NCC = False
        S.pop(0)
        S.append(val)
        S_avg = sum(S)/size
        NCC = 0
        for i in range(size):
            if S[i] > upper_bound:
                pass_upper_bound = True
            if S[i] < lower_bound:
                pass_lower_bound = True
            if pass_upper_bound and pass_lower_bound:
                run_NCC = True
                break
        if run_NCC:
            for i in range(size):
                top += (T[i] - T_avg) * (S[i] - S_avg)
                bottom_T += (T[i] - T_avg) ** 2
                bottom_S += (S[i] - S_avg) ** 2
            NCC = top / ((bottom_T ** 0.5) * (bottom_S ** 0.5))
        NCC_list.pop(0)
        NCC_list.append(NCC)
        if NCC > 0.5:
            if NCC_list[0] < NCC_list[1] and NCC_list[1] > NCC_list[2]:
                display.show(Image.SAD)
                sleep(100)



while real_time_recording:
    display.show(Image.HAPPY)
    if button_a.get_presses():
        break

display.show(Image.DIAMOND)
```
Now you should have a complete program that includes everything you need to run the entire process, from preprocessing to real-time blink acquisition.

## Begin Real-Time Blink Aquisition ##

Before running the real-time aquisition, you must go through the preprocessing every time. After that is done, you will see a SMILEY FACE appear on your screen. This is indicating that preproccessing is over and ready to test your blink!!

If everything was done correctly, you should see blip of SAD FACE appear on the screen. 

## Tips for improvement ##
As this projects reslult varies due to many factors can influence, I decided to put some tips you can make to imporve the results.

If you are seeing or not seeing SAD FACE when it supposed to be, below is few things you can try

- Adjust NCC (Normalized Cross Correlation) threshold
  At the end of the code, you should see the line,
  ```py title="NCC"
  if NCC > 0.5:
  ```
  The general rule is, if the threshold (0.5) is higher, harder for the detection to occur and vice verse. Therefore, you should make this threshold to be higher if you see too many false posives (seeing SAD FACE when it shouldn't) and lower if you see too many true negatives (not seeing SAD FACE when it shouldn't)
  The range of value is -1 to 1 but I reccomend not to adjust threshold lower than 0.4

- Change number of blinks in preproccessing stage
  This is to imporve the preproccessing accuraccy. By default, you blink five times before beggining real-time data aquisition. You can increase or decrease the number by assigning different value at,
  ```py title="set trials"
  set_trials = 5 #Modify set_trials to change number of blink tirals
  ```
  Usually, more data is better, however I reccomend to have it less than 10 times.

  Lastly, please note that there is no perfect data processing in real time. Regardless of adjustment, there would be false data as eye movement are very precise. It is better to keep in mind too many adjustment may cause the result to be worse than previous and do the adjustment one by one.

