# HeartBit
Andrija Gajic
## Project Overview
Have you ever decided to exercise or dance, but you were just not
feeling the music that was playing? Well rest assured, the handy
little HeartBit device is there to come to rescue.
The HeartBit device works by checking your position, vitals, and
muscle signals to make a totally unique and personalized music
experience for you! Now Imagine THAT with your workout routine!
## Material and parts
1 x micro:bit kit
1 x neuro:bit kit
1 x 3D printer and filament
3 x EMG electrodes (Hot, Hot, Ground)
1 x EMG cable
1 x Grove heart rate sensor
2 x Cables with pins for connecting to an external speaker
1 x RadioShack external speaker
How it all works - There is a multitude of ways that the HeartBit
device makes it’s sound, but let’s go through them one by one:
1. The micro:bit and neuro:bit devices - They constantly check
their position and based on it produce a select tone from the C
Major scale. As such, tilting your wrist upwards produces a C,
laying your wrist flat produces a D, then tilting your wrist
downwards produces an E, tilting it sideways to the left
Inventors Andrija Gajic
micro:bit IDE Micro:bit Python
Best Location Classroom

produces an F, tilting it sideways to the right produces a G, and
then shaking the whole contraption produces an A, touching
the golden logo of the neuro:bit produces an H and finally
flipping your hand upside-down produces an octave leap and a
C an octave higher.
2. The heart rate monitor - It constantly checks your vitals, more
specifically your heart rate per minute via an oximeter. And
when It measures it, then it accordingly updates the BPM of the
notes produced to be twice that of your actual hearts BPM.
Thus making a sick dance music gadget too!
3. The EMG electrodes - They check for muscle contractions. And
based on how much the muscle Is tensed up, that’s how loud
the produced notes will be. Thankfully, through test runs we
have seen that it is very tiring to be constantly tensing your
muscle to produce a sound, so I have implemented a lower
limit where you can still hear a tone without much effort. Of
course, you can still tense up to produce louder tones!
Connecting it all together
(You can now insert the different pictures here, it all goes around
connecting the neuro:bit and micro:bit, putting it in the casing,
connecting the heart rate monitor via the digital serial port,
connecting the EMG electrodes and connecting to the external
speaker)
Voila! This is what the finished product should look like! We have
the micro:bit and neuro:bit devices connected together and
inserted into their 3D printed casing. While the external sensors like
the heart rate monitor and the EMG electrodes are connected to
their ports. With an additional external speaker so that everyone
can hear your physiological symphony! Now the only thing left is to
put in the code to make it all alive!
Coding it all together
The whole project was coded in Python on the micro:bit web IDE.
Here is the code:

——Insert code box here ——
And with that you got everything you need to jump into a rave and
be the star of the night! That’s everything needed for this project.
With the final touch of the python code, everything should be ready
to go! You are now free to experiment and make your own music,
try playing Beethoven’s Ode to Joy! �
