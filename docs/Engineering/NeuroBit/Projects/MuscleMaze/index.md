---
sidebar_position: 3
sidebar_label: Muscle Maze
---

# Muscle Maze #
![Muscle Maze](./maze_title.png)

|     |       |
|--------------|--------------
| Inventor     | Teruaki Kimishima             
| Micro:Bit IDE     | Python Editor
| Best Location     | Makerspace   

## Project Overview ##
Welcome to Muscle Maze!! This project uses two Neuro:Bit with a Micro:Bit to control Maze using both arm muscles. 

## Materials Needed  ##

To assemble the Muscle Maze, you will need to have the following items.

1. 3D-Printer + Filiment
2. Small sheet of acylic
3. Laser Cutter or sharp blade. 
4. 2× CFsunbird 9g micro servo with screws
5. Tiny ball (small bead or bering) 
6. 2x [Neuro:Bit kits](../../) with Micro:Bit, electrodes, and cables.

### Parts ###

You will make a few parts.  Below are the 4 3d printed parts we will need:

![3d parts needed for maze](./maze_3dParts.png)

You can donload the STL files and print them on your 3D printer.

1. [Body](./MazeBody.stl)
2. [Top Bracket](./TopBracket.stl)
3. [Center Bracket](./CenterBracket.stl)
4. [Base](./Base.stl)

You also need to laser cut the following parts (or you can cut out the triangle cover from acylic using a blade):

1. [Maze Cover](AcrylicCut.rd) What is an RD file?  Need to explain or link to a PDF.


## Assembling the Maze ##
1. Place Ball inside the maze, then seal with  Maze Cover with hot glue ![Step1](./maze_step1.png)

2. Glue plastic arm that comes with the servo to the pocket of Base

3. Glue the other plastic arm to the pocket of Center Bracket

4. Join one of the servos to the Top Bracket using the servo screws provided, as shown below ![Step4](./maze_step4.png)

5. Join the other servo to the Center Bracket using two screws, as shown below ![Step7](./maze_step5.png)

6. Assemble the parts from Steps 2 and 5 above using a small servo screw.

7. Assemble the parts from Steps 3 and 6, using small screw.

8. Now pull it all together by combining the assmbly from step 1 with step 7.  You can these 2 parts with a hot glue gun. ![Step8](./maze_step8.png)


## Preparing Microbit ##
Refer to "Connecting Muscles to Read an EMG Signal" from our [Getting Started with Neuro:Bit Block Programming](../../Block) page to learn how to record an EMG signal from the arm. You will need two Neuro:Bits, one connected to each the left and right arm.

Connect the two servo motors from Muscle Maze to each Neuro:Bit. See the [The Neuro:Bit](../../) Hardware Overview page for more information on how to connect servos.

## Programing the Micro:Bit for the Muscle Maze ##

Below you can download the code for the Muscle Maze program.  The first option is a good for general use cases.  The second option is more complex, but is more flexible with individual differences in EMG signal. 

1. [Muscle Maze - "Beginner"](./microbit-Muscle-Maze-general.hex)

2. [Muscle Maze - "Advanced"](./microbit-Muscle-Maze-indiviudal.hex)

While the advance option runs more smoothly, the Beginner code is easier to follow for education purposes.

Install either Muscle Maze code on your local computer. Then, drag and drop the installed file to the project you have created. This will allow you to see the entire code on the project.

Connect Microbit to your computer, then click "download". After this, you should now have the program inside the Microbit.

## Operation ##

1. Turn on both Neuro:Bits
2. (Advance Mode Only) Relax both of your arms and wait 3s for a smiley face to appear on Micro:Bit.   
3. Contract your muscles to tilt the maze in 2 directions.
4. Get the ball into the small hole at the end of the maze!

Pressing the "B" Button on the Micro:Bit will pause the maze game from moving.
  
## Credits ##

The triangle maze model was first developed by John Lazarevic. Alex Hatch designed the updated base for easier assembly and stability.  Teruaki Kimishima developed the Muscle Maze program and oversaw the project.
