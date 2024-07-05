---
sidebar_position: 7
sidebar_label: MyoTyper
description: No keyboard? No Problem. Put the MyoTyper to work.
---

# Muscle Maze #
![MyoTyper](./nb_mt_01.png)

|     |       |
|--------------|--------------
| Inventor     | XX             
| micro:bit IDE     | Block Code
| Best Location     | Classroom   

## Project Overview ##
Welcome to Muscle Maze!! This project uses two neuro:bit with a micro:bit to control Maze using both arm muscles. 

## Materials Needed  ##

To assemble the Muscle Maze, you will need to have the following items.

1. 3D-Printer + Filiment
2. Small sheet of acylic
3. Laser Cutter or sharp blade. 
4. 2× CFsunbird 9g micro servo with screws
5. Tiny ball (small bead or bering) 
6. 2x [neuro:bit kits](../../) with micro:bit, electrodes, and cables.

### Parts ###

You will make a few parts.  Below are the 4 3d printed parts we will need:

![Parts needed for MyoTyper](./nb_mt_01.png)


The .rd file extension is associated with various file types depending on the context in which it is used. One common use is for laser cutting.

## Assembling the Maze ##
1. Place Ball inside the maze, then seal with  Maze Cover with hot glue ![Step1](./maze_step1.png)

![Cut to length](./nb_mt_02.png)

2. Glue plastic arm that comes with the servo to the pocket of Base

![Cut to length](./nb_mt_03.png)

3. Glue the other plastic arm to the pocket of Center Bracket

4. Join one of the servos to the Top Bracket using the servo screws provided, as shown below ![Step4](./maze_step4.png)

5. Join the other servo to the Center Bracket using two screws, as shown below ![Step7](./maze_step5.png)

6. Assemble the parts from Steps 2 and 5 above using a small servo screw.

7. Assemble the parts from Steps 3 and 6, using small screw.

8. Now pull it all together by combining the assmbly from step 1 with step 7.  You can these 2 parts with a hot glue gun. ![Step8](./maze_step8.png)


## Preparing micro:bit ##
Refer to "Connecting Muscles to Read an EMG Signal" from our [Getting Started with neuro:bit Block Programming](../../Block) page to learn how to record an EMG signal from the arm. You will need two neuro:bits, one connected to each the left and right arm.

Connect the two servo motors from Muscle Maze to each neuro:bit. See the [The neuro:bit](../../) Hardware Overview page for more information on how to connect servos.

## Programing the micro:bit for the Muscle Maze ##

To program the micro:bit, you can refer to the code below. 

```py title="Muscle Maze - "Beginner""
val = 0
stop = True
key = True
threshold = 50
bound = 10
original_angle = 70
zero_angle = 70
seconds = 100000
pins.servo_write_pin(AnalogPin.P8, zero_angle)
# Main Program
while key:
    val = pins.analog_read_pin(AnalogPin.P0)
    # Controll continue/pause of servo using buttom B
    if input.button_is_pressed(Button.B):
        basic.pause(500)
        if stop: # Continue
            basic.show_icon(IconNames.DIAMOND)
            stop = False
        else: # Pause
            basic.show_icon(IconNames.HEART)
            stop = True
    if not (stop):
        if int(val) >= threshold:
            if zero_angle < original_angle + bound:
                basic.pause(150)
                zero_angle = zero_angle + 1
                pins.servo_write_pin(AnalogPin.P8, zero_angle)
        elif int(val) < threshold:
            if zero_angle > original_angle - bound:
                basic.pause(150)
                zero_angle = zero_angle - 1
                pins.servo_write_pin(AnalogPin.P8, zero_angle)
    if input.button_is_pressed(Button.A):
        key = False
basic.pause(1000)
# Reset the position to original angle
if zero_angle != original_angle:
    if zero_angle < original_angle:
        while zero_angle < original_angle:
            basic.pause(100)
            zero_angle = zero_angle + 1
            pins.servo_write_pin(AnalogPin.P8, zero_angle)
    else:
        while zero_angle > original_angle:
            basic.pause(100)
            zero_angle = zero_angle - 1
            pins.servo_write_pin(AnalogPin.P8, zero_angle)
# Done!!
basic.show_icon(IconNames.GHOST)
```
However, we always need to be aware that there is variation in signal between individuals. Sometimes this is due to electrode placement, and sometimes it is due to individual body differences. To account for these differences, I have provided additional code below. All you have to do is add a few lines of code between lines 9 and 10. 

By adding this optional code, we will need to go through a calibration process. Here are the steps to follow:
1. Turn on both micro:bit.
2. Quickly relax both of your arm and hold still.
3. Wait until you see HAPPY face appear on both of the micro:bit

```py title="Muscle Maze - "Advanced"
# Optional: Threshold controll (Calibration)
basic.pause(3000)
while seconds > 0:
    val = pins.analog_read_pin(AnalogPin.P0)
    if threshold < int(val) and int(val) < 50 and int(val) > 10:
        threshold = int(val)
    seconds += 0 - 1
basic.show_icon(IconNames.HAPPY)
```

If you would like to, you can also download both codes for the Muscle Maze program from below. 
1. [Muscle Maze](./micro:bit-Muscle-Maze-general.hex)

2. [Muscle Maze with calibration](./micro:bit-Muscle-Maze-individual.hex)
   
Install either version of the Muscle Maze program on your local computer. Then, drag and drop the installed file into the project you have created. This will allow you to see the entire code in the project.

Connect the micro:bit to your computer, then click "download." After this, you should now have the program inside the micro:bit.

## Operation ##

1. Turn on both neuro:bits
2. (Advance Mode Only) Relax both of your arms and wait 3s for a smiley face to appear on micro:bit.   
3. Contract your muscles to tilt the maze in 2 directions.
4. Get the ball into the small hole at the end of the maze!

Pressing the "B" Button on the micro:bit will pause the maze game from moving.
  
## Credits ##

The triangle maze model was first developed by John Lazarevic. Alex Hatch designed the updated base for easier assembly and stability. Teruaki Kimishima developed the Muscle Maze program and oversaw the project.
