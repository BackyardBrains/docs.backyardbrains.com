---
sidebar_position: 3
sidebar_label: Eye Pulse
---

# Overview #
Welcome to project Eye Pulse where you can have experiment with eye blink detection in REAL TIME!!. This project uses a pair of Micro:Bit and Neuro:Bit. We will utilze muscle movenemnt from your eyes and EOG filtering to catch your eyeblinks!!

## Check supplies ##
For this project, you would need following material

1. Micro:bit
2. Neuro:bit
3. Cable
4. Three Electrodes

## Know where to place electrodes ##
Once you are ready to place your electrodes, first, choose which side you want to place the electrodes at.

Place first electrode on outer canthus of whichever side you choose.

Place second electode just below the eye. Also choose side of the eye you pick.

Place last electrode behind the ears where you can feel the bone. This also must be the same side of the eye you choose.
We refer this as "Ground" electrodes which is important for noise reduction from signal.

## Connecting right cables to right place ##
Take a look at the red colored aligator clips. If you see the black dot, place it on the electrodes located below the eye. 

Second red aligator clops (one with no black dot) will be placed on the electrode located outer cathus. 

The black colored aligator clips will be placed on the "Ground" electrodes.(located behind the ear)

Don't see the black dot? 
  No worries! Just place your red clips randomly and black on the behind the ear. We will show how to check the correct placement later.  

Pro Tip:
  If you don't see the black dot or you got confuse which one is which, you can always check with device that allows to to check the connectivity of electric flow. For example: Digital Multimeter(DMM).

  Here are the instructions if you are interested: 
  
  1. Grab positive cable (usually a red colored) and clip the red aligator clip.
  2. Grab negative cable (usually a black colored) and slides over the audio jack port
  3. If you have done it correctly, you should be able to know which part of the audiojack port corresponds to the red aligator tip. (In case of DMM, you would hear the sound of beep)
  4. If the device signals you at the edge of audiojack, this will BE a black-dotted red aligator clip. (Also known as inverting input voltage) Therefore, it should be placed at bottom of the eye.
  5. If the device signals you at the middle of audiojack this will NOT BE a black-dotted red aligator clip. (Also known as non-inverting input voltage) Therefore, it should be placed at outer cathus of the eye.

## Prepare Preprocessing ##
Take out your Micro:Bit, insert into Neruo:Bit, and connect Cable to the Neuro:Bit, now you are ready to do some code!

For this project, step for preprocessing is going to be very crusial. Therefore, please follow the instruction carefully.

First, we will going to use an online Python editor provided by the Micro:Bit. You can access directly from [here](https://python.microbit.org/v/3).

Paste the following code to the editor.

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

At this point, your program is ready to installed. However, please always make sure that your Neuro:Bit power is turned off since this may cause some issues later on.
After successfull installation of the program, within 3 seconds, please unplug the USB connector from the Micro:Bit. If you powered off the Neuro:Bit earlier, then there should be no LED lights displayed on the Micro:Bit screen.
Also, make your your Neuro:Bit switch (on the back) is in "ECG" mode. 

## Begin Preprocessing ##
Now, that your program is installed, it is time for preprocessing!!
PLEAZE READ ALL instructions before your begin.

1. Turn on the Neuro:Bit
2. Soon after, you will see GHOST LED appear on your screen
3. With in few seconds (deafault 3 to 5 seconds) the LED will change to HEART. Once you see the HEART, blink as usual.
4. Repeat this until the DIAMOND LED appears on the screen.

CAUTION:
  Note that this process is curtial for accurate data aquisition happening later on. Therefore, while the program is running, please make sure your heads  are fixed and eyes focus on the center of screen ALL THE TIME. 

## Check Preprocessed Data ## :
As explained previously, if you were not able to figure out the correct placement for red aligtor clips, this is where to check!! 
  
  1. After the preprocessing, turn the power of Neuro:Bit off, then using USB cable, connect it with your local computer.
  2. Open the file explorer, then you should see new  drive call "MICROBIT".
  3. Naviate yourself to the MICROBIT drive, then you should now see a HTML file named, "MY_DATA"
  4. Double click to open it, then click "Open Visual Preview"
  5. Compare with figure below. Does the shape of greeen looks similar? If so, you are in good shape!! If not, flip your red aligator clips and try again!!
  6. If it is still not working, please check your electrode placement, aligator clips placement, Neuro:Bit switch (ECG mode) and try again.


## Prepare Real-Time Blink Aquisition ##
Good job for making this far!! Now that you have good preprocessed data, it is time to move on to real-time blink  aquisiton!!

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

Now you should have all the program to run the everything, including the preprocessing. 

## Begin Real-Time Blink Aquisition ##

  

