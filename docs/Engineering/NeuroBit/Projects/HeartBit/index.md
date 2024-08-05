# HeartBit

|             |                       |
|--------------|--------------
| Inventor     | Andrija Gajic             
| micro:bit IDE     | Python Editor
| Best Location     | Makerspace

## Project Overview
Have you ever decided to exercise or dance, but you were not
feeling the music? Well, rest assured, the handy
little HeartBit device is there to come to the rescue.

The HeartBit device converts your position, vitals, and
muscle signals into a unique and personalized music
experience! Now imagine THAT with your workout routine!

## Material and parts
- 1 x micro:bit & neuro:bit kit
- 1 x 3D printer and filament
- 3 x EMG electrodes (Hot, Hot, Ground)
- 1 x EMG cable
- 1 x Grove heart rate sensor
- 2 x Cables with pins for connecting to an external speaker
- 1 x RadioShack external speaker
  
## How it all works
There is a multitude of ways that the HeartBit device makes its sound; let’s go through them one by one:

The micro:bit and neuro:bit devices - They constantly check
their position and based on it produce a select tone from the C
Major scale. The commands are as follows:
- Tilting your wrist upwards produces a C
- Laying your wrist flat produces a D
- Tilting your wrist downwards produces an E
- Tilting it sideways to the left produces an F
- Tilting it sideways to the right produces a G
- Shaking the whole contraption produces an A
- touching the golden logo of the micro:bit produces an H and
- Flipping your hand upside-down produces an octave leap and a C an octave higher.

The heart rate monitor - It constantly checks your vitals, more
specifically your heart rate per minute via an oximeter. 
This value then updates the BPM of the notes produced to be twice that of your actual heart's BPM. Thus making a sick dance music gadget too!

The EMG electrodes - They check for muscle contractions. The muscle's tension from your brain's electrical signals determines how loud
the produced notes will be. I noticed it's tiring to tightly flex for long periods of time, so I have implemented a lower limit where you can still hear a tone without much effort. Of course, you can still tense up to produce louder tones!

## Connecting it all
(You can now insert the different pictures here, it all goes around
connecting the neuro:bit and micro:bit, putting it in the casing,
connecting the heart rate monitor via the digital serial port,
connecting the EMG electrodes and connecting to the external
speaker)

Voila! This is what the finished product should look like! We have
the micro:bit and neuro:bit devices connected and
inserted into their 3D printed casing. While external sensors like
the heart rate monitor and the EMG electrodes are connected to
their ports. With an additional external speaker so that everyone
can hear your physiological symphony! Now the only thing left is to
put in the code to make it all alive!
Coding it all together
The project was coded in Python on the micro:bit web IDE.
Here is the code:

——Insert code box here ——

## Conclusion
And with that you got everything you need to jump into a rave and
be the star of the night! That’s everything needed for this project.
With the final touch of the Python code, everything should be ready
to go! You are now free to experiment and make your music,
try playing Beethoven’s Ode to Joy!
