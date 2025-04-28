---
id: spikerbit_project_snoozesmacker
sidebar_position: 9
sidebar_label: Snooze Smacker
description: Dozing off in class? The snooze smacker will help.
---

# The Snooze Smacker #
![Snooze Smacker](./nb_ss_00.png)

|     |       |
|--------------|--------------
| Inventor     | Ana Markovic and Milica Ivankovic           
| micro:bit IDE     | Block Code 
| Best Location     | Classroom

## Project Overview ##
Description: The Snooze Smacker is a small device designed to prevent dozing off by delivering
a gentle slap when it detects that your eyes have closed for more than five seconds. It uses a
micro:bit programmed to detect eye closure and activate a hand to wake you up.

Functionality: The device is ideal for people who struggle with staying awake during long
meetings, lectures, or late-night study sessions. Its quirky and humorous approach combines
with practical functionality to make it both a conversation starter and a productivity booster.
Additionally, it provides an element of fun and excitement to the task of staying alert.

Purpose: The device addresses the issue of drowsiness at inconvenient times, which can lead to
missed information, reduced productivity, and dangerous situations like falling asleep while
driving. By ensuring wakefulness and alertness, it helps improve focus, learning efficiency, and
overall safety.

## Materials Needed  ##

To assemble the Muscle Maze, you will need to have the following items.

- 1x Spiker:bit and micro:bit with electrodes and orange cable
- 1x stick
- 1x old over-the-ear headset / headphones for cutting up
- 1x roll of duct tape
- 1x foam sheet and piece of paper for making a hand
![Materials](./1.png)
## Coding
Below is the python makecode. Millis are used to set a countdown for 6 seconds. This countdown resets based on the calibration at the beginning ( if the user opens their eyes or has them already open, this is detected and the servo is stationary ). However, should the user fall asleep and have their eyes closed for more than 6 seconds, the boolean ( true or fales variable ) for sleeping is set to true and they are smacked!

```
timeClosed = 0
sleeping = False
eye = 0
val = 0
basic.pause(3000)
pins.servo_write_pin(AnalogPin.P8, 0)
maximum = 0
openThreshold = 0
minimum = 1000
closedTrashold = 1000
startTime = control.millis()
music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
    music.PlaybackMode.UNTIL_DONE)
while control.millis() - startTime < 5000:
    val = pins.analog_read_pin(AnalogPin.P0)
    minimum = min(minimum, val)
    maximum = max(maximum, val)
startTime = control.millis()
music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
    music.PlaybackMode.UNTIL_DONE)
while control.millis() - startTime < 3000:
    val = pins.analog_read_pin(AnalogPin.P0)
    closedTrashold = min(closedTrashold, val)
startTime = control.millis()
music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
    music.PlaybackMode.UNTIL_DONE)
while control.millis() - startTime < 3000:
    val = pins.analog_read_pin(AnalogPin.P0)
    openThreshold = max(openThreshold, val)
basic.show_number(closedTrashold)
basic.pause(100)
basic.show_number(openThreshold)
basic.pause(100)
basic.show_number(minimum)
basic.pause(100)
basic.show_number(maximum)
while True:
    eye = pins.analog_read_pin(AnalogPin.P0)
    if eye <= minimum * 0.9:
        music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        sleeping = True
        timeClosed = control.millis()
        while control.millis() - timeClosed < 6000:
            eye = pins.analog_read_pin(AnalogPin.P0)
            if eye >= openThreshold * 0.9:
                music.play(music.tone_playable(659, music.beat(BeatFraction.HALF)),
                    music.PlaybackMode.UNTIL_DONE)
                sleeping = False
                break
        if sleeping:
            pins.servo_write_pin(AnalogPin.P8, 170)
            basic.pause(1000)
            pins.servo_write_pin(AnalogPin.P8, 0)
        basic.pause(1000)

def on_forever():
    pass
basic.forever(on_forever)
```
## Assembly
1. First, trace out your hand on the foam materials
![foam_Tracing](./2.png)
2. Do the same for the sheet of paper, and cut both out
![CuttingFoam](./4.png)
![CuttingHand](./5.png)
3. Attach the foam and hand together with the stick in the middle, either with glue or with adhesive already on the foam
![StickingTogether](./6.png)
4. Take the glue gun, and glue the servo hat to the same stick
![StickHat](./8.png)
5. Glue the servo ( with no hat attached ) to the headset
![ServoToHeadset](./10.png)
6. Plug in the servo to the micro:bit
![ServoConnect](./12.png)
7. Take the duct tape and make two strips one about the length of your arm and the other about 1/2 of the first. Place the smaller strip in the middle of the first. This smaller strip should roughly be the length and 2x the width of the microbit
![MicrobitPocket1](./16.png)
8. Wrap the duct tape around one end of the headset ( this will hold the micro:bit to the headset )
![MicrobitPocket2](./17.png)
9. Add an additional piece of tape to connect the bottom of this pocket to the headset
![MicrobitPocket1](./20.png)
![MicrobitPocket1](./21.png)
10. Slide in microbit to the pocket, adjust the pocket as needed so the microbit is snug but not impossible to get out
![MicrobitPocket3](./22.png)
11. Now continue taping the headset. We recommend a Zig Zag pattern around the edges of the servo ( to prevent it from popping off )
![ExtraTape1](./24.png)
![ExtraTape2](./25.png)
12. Now attach the stick with your hand
![Ending](./26.png)
And there you have it, your very own snooze smacker!
![Done](./27.png)

## Conclusion
The result is a unique, functional, and entertaining gadget that helps keep users awake and
attentive whenever drowsiness threatens to take over.
