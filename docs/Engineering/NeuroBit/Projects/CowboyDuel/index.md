---
sidebar_position: 8
sidebar_label: Cowboy Duel
description: It's high noon!  Are you ready for a duel?
---

# Cowboy Duel #
![Cowboy Duel](./np_cd_00.png)

|     |       |
|--------------|--------------
| Inventor     | Petar Barlov            
| micro:bit IDE     | Python Editor
| Best Location     | Classroom

## Project Overview
As a kid, I always enjoyed cowboy movies; they were thrilling. I even got to play some high-quality cowboy games (“Red Dead
Redemption”, for example). My favorite moment was always the standoff when two cowboys dueled at high noon.

One thing that disappointed me is, when I talk to others about it,
nobody in Serbia seems to know anything about cowboys at all. So, I decided to make a project based on cowboys and show them what they have been missing.

## Design and functionality
Now, the question is how does “Cowboy Duel” work? Here is the order of
operation:
1. Ready system- Before the game starts, both players confirm
they are ready. They do so by pressing the golden
logo on the micro:bit. The LED display will show a checkmark when
pressed properly.
2. Beginning phase- After both players confirm they are ready, the
display will show a dot and the beginning phase starts. Suspenseful
music will start playing and all you need to do is focus and wait for
the sound signal.
3. Sound signal- After a certain amount of time (between 5 and 20
seconds) a sound signal will play and the display will show “X”, which is a
sign to shoot.
4. Action phase- After the sound signal, players point
the gun at the other player and press the trigger as hard as possible;
so that the proper motion would occur. The player that “shoots” first will
see a “W” on their display (winner), and others will see an “L” (loser).
“Cowboy Duel” went through a major design change. At first, it was meant
to be just a micro:bit held in one hand, and the other hand would be finger guns. This could be much more fun, so I added a 3D-printed gun with a micro:bit on top.

## Code
There are three main parts to this program: the ready system, the beginning phase, and the duel.

The on logo pressed and on start blocks represents the ready system. First, it sets all variables to 0 and the radio group (server) to 5. It also has a variable “Random” which is a timer for the
beginning phase. When the logo is pressed, it sets the “Ready” variable to 1
(or to 0 if it’s already 1) and sends values “Ready” and “Random” to the
other player. When a player receives the variables, it equalizes the
“Random” value and it checks whether the other player is ready, and it
begins the game with the “Start” variable.

The first forever block represents the beginning phase. Firstly, it checks whether the “Start”
the variable is “activated” (equal to 1), it displays a dot and starts playing the
suspense melody. Then, it waits the “Random” amount of time and plays the sound signal. After that, it activates the “Signal” variable and
deactivates the “Start” and “Ready” variables.


Finally, the second forever block and the on_recieved_value block represents the action phase. First of all, it reads the digital
EMG signal and sets the “Key” variable to it. I found the digital read command to be a bit more effective than analog read. This is because digital read only shows 0 (when no motion is present) and
1 (when some motion is present), while analog needs more
optimization. Whoever activates “Key” first, sets their “Signal” to 0, gets the “W” screen, and sets the others' screens to “L”.

```
def on_received_number(receivedNumber):
    global Signal
    basic.show_leds("""
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        """)
    Signal = 0
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    global Start
    Start = 1
radio.on_received_string(on_received_string)

def on_received_value(name, value):
    global Random, Start
    if name == "Random":
        Random = value
    elif Ready == value:
        radio.send_string("Start")
        Start = 1
radio.on_received_value(on_received_value)

def on_logo_pressed():
    global Ready
    if Ready == 0:
        basic.show_icon(IconNames.YES)
        Ready = 1
        radio.send_value("Random", Random)
        radio.send_value("Ready", Ready)
    else:
        basic.clear_screen()
        Ready = 0
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

Key = 0
timer = 0
Start = 0
Random = 0
Ready = 0
Signal = 0
radio.set_group(5)
Signal = 0
Ready = 0
Pobednik = 0
Random = Math.round(randint(10, 20))

def on_forever():
    global timer, Signal, Start, Ready
    if Start == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        music.play(music.string_playable("C5 B A G F E D C ", 120),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        basic.pause(Random * 1000)
        music.stop_melody(MelodyStopOptions.ALL)
        timer = control.millis()
        music.play(music.string_playable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
        Signal = 1
        Start = 0
        Ready = 0
basic.forever(on_forever)

def on_forever2():
    global Key, Signal
    Key = pins.digital_read_pin(DigitalPin.P0)
    if Signal == 1 and Key == 1:
        Signal = 0
        radio.send_number(0)
        basic.show_leds("""
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            . # . # .
            """)
basic.forever(on_forever2)
```
