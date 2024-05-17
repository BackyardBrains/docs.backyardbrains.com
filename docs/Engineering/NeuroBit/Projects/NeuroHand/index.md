---
sidebar_position: 1
sidebar_label: DIY Neuroprosthetic
---

# DIY Hand Neuroprosthetic #


|     |       |
|--------------|--------------
| Inventor     | Will Wharton            
| Micro:Bit IDE     | MakeCode
| Best Location     | Classroom  



## Background ##
The Neuro:Bit can record the the electrical signals our brain sends to our muscles.  Our [Getting Started in Block](../../Block/) guide shows how we can capture those electrical signals and use them in a Micro:Bit Project.  This project will show you how to use that signals to control a neuroprosthetic hand.  Neuroprosthetics are assistive devices, which are used to help people who have suffered from neurological illness or physical injury. They can also be used to create new and exciting control systems to enhance human ability!

Here you will create your very own Cyborg Hand which you will then control with the electrical systems in your nervous system. But, don't stop there! These same principals can be applied to countless other projects. This is *the exact way* many very advanced neuroprosthetics work today! 

## Build Instructions ##
Begin by assembling your materials at your work station. Plug in your hot glue gun to get it warming up, but it will be a few minutes before you need to use it.
![](./prosthetic_hand_1.webp)

### Cut the Straws ###
![](./prosthetic_hand_2.webp)
Pick out your favorite colored straws and cut them with your scissors until you have at least 25 short segments (approx the width of a fingernail). For our example, we are using two colors to identify the fingers stimulated by the Ulnar and Median nerves. If you would also like to include this anatomical element in your model, pick out two colors and cut at least 10 of one color (for the pinky and ring finger pulleys), and 15 of the other color (for thumb, index, and middle finger pulleys)

### Prepare for Hot Gluing ###
![](./prosthetic_hand_3.webp)
Ready your short straw segments, your hand, and your hotglue gun. Let your glue gun heat up.  

### Glue Straws on Fingers ###
![](./prosthetic_hand_4.webp)
Begin to apply dabs of hot glue to your digits (don't cover the holes)!
3.With every dab of hot glue, stick on one of your colored straw segments. As you can see in our picture, we are using the yellow straws on the pinky and ring finger, and red straws for the thumb, pointer, and middle fingers. You can do this too, or, if your creativity is speaking to you, pattern the colors however you'd like (Infinity Gauntlet Colors are also approved.)

### Glue the Hand Together ###
![](./prosthetic_hand_5.webp)
4.Continue until you have straws glued to the digits of every finger (pulleys), and straws glue to the base of the hand (tendon sheath). Once the glue dries, pick off any of the hot glue "spiderwebs" and make sure that all the finger joints still bend and the fist can close.

### Cut the Thread ###
![](./prosthetic_hand_6.webp)
5.Take your long string and fold it in half. Then, like in the shape of an S sandwiched flat, fold it in thirds. Then, with three cuts, one at each bend in the thread, you can cut the entire length of thread into 6 equally long pieces.

### Thread the First Finger ###
![](./prosthetic_hand_7.webp)
6.Thread one of the lengths of string from the bottom of the hand up through the finger pulleys. Once you have pulled the thread out the tip of the finger, use your hotglue gun to fill **ONLY** that final straw segment with glue - locking the thread in place. Give the glue a minute to dry, then give a tug on the string from the bottom of the hand. The finger should curl in!

### Finish threading the Hand ###
![](./prosthetic_hand_8.webp)
Follow the above step for the rest of the fingers on your hand. You should have 1 length of thread left over at the end.

### Prepare for Servo Motor ##

Set aside your hand a moment to let the glue dry. Take your servo motor out of its plastic baggy, and find the longest of the white plastic arms.

![](./prosthetic_hand_9.webp)
**This step is important for the Orientation of the motor**: with the wires of the servo motor coming in towards you, press the lever arm into place on the servo motor's gear so that the action arm makes a 90 degree angle (or close to it) with the rectangular body of the servo motor. 

![](./prosthetic_hand_10.webp)
If you have a small screwdriver, you can screw it into place, but the friction fit should be good enough too (especially once we get a bit of hot glue on it!)

### Measure Wood Cuts ###

![](./prosthetic_hand_11.webp)


We need to measure a slot on our sheet of balsa wood to fit the servo motor. With the included pencil, measure and mark from the bottom right hand corner of the balsa wood up as far as the long side of the servo motor with it oriented as you see in the picture.

Similarly, mark the width of the servo motor. As you see, we are measuring out a slot in the bottom corner of the balsa wood to glue our servo motor in to.
![](./prosthetic_hand_12.webp)

### Cut the Balsa Wood ###
![](./prosthetic_hand_13.webp)
Balsa wood is soft, so you should be able to use your scissors to cut out this small chunk of the wood. Make the long cut first, the short cut will be a little harder. If you can't cut all the way through, weaken it with your scissors, then bend and break off this small piece with your hands.

### Orient the Servo Motor ###
**Note: this step is important for the Orientation of the motor**: Glue the servo motor into this slot, and **make sure the wires coming out of the servo motor come out the tail end.**
![](./prosthetic_hand_14.webp)

### Glue a Pencil ###
![](./prosthetic_hand_15.webp)
Glue the pencil on to the servo motor's action arm by applying a line of glue dow the servo motor's arm, then pressing your pencil into place. Careful not to let globs of glue get under the arm into the gears of the servo motor!

### Glue the Hand ###
![](./prosthetic_hand_16.webp)
Apply glue to the top side of the balsa wood. This is where we will be gluing the hand you created earlier.

![](./prosthetic_hand_17.webp)

Press the hand down into the glue. We recommend that the base of the fingers extend just past the end of the balsa wood.

### Trim the Strings ###

Trim the loose threads hanging from the hand, leaving plenty dangling, but evening out the lengths. 

![](./prosthetic_hand_18.webp)

We keep at least half the length of the thread, as you measure from the base of the balsa wood to the base of the foam hand.

### Tie a Knot ###
![](./prosthetic_hand_19.webp)

Use your last thread to tie a knot around the dangling threads.

## Adjust the Tension
Pull the knot tight. You can adjust the tension of the individual fingers by pulling on the thread past the knot until the fingers seem "taut".
![](./prosthetic_hand_20.webp)

### 17: Finish it up! ###
Wrap the thread you used to make the knot around the pencil close to the tip of the pencil and hotglue the thread into place. Once that glue dries, you are done! Plug the hand into the Muscle SpikerShield, plug in two batteries.
![](./prosthetic_hand_21.webp)

## Code ##



Here’s the code you need to get started on your experiment. You’ll see the inputs are set to P8 for the servo and P0 for your EMG. This code uses a nifty threshold function that adjusts to each person's unique threshold.

```
threshold = 0
val = 0
seconds = 100000
key = True
pins.servo_write_pin(AnalogPin.P8, 0)
while seconds > 0:
    val = pins.analog_read_pin(AnalogPin.P0)
    if threshold < int(val):
        threshold = int(val)
    seconds += 0 - 1
basic.show_number(threshold)
while key:
    val = pins.analog_read_pin(AnalogPin.P0)
    serial.write_value("EMG", val)
    degree = val * (1 / threshold) * 90
    if int(val) >= int(threshold):
        pins.servo_write_pin(AnalogPin.P8, int(degree))
    else:
        pins.servo_write_pin(AnalogPin.P8, int(degree))
```

Check out the code blocks below and let’s get experimenting! 🚀

![image](https://github.com/BackyardBrains/docs.backyardbrains.com/assets/117298723/d71c7376-1e5c-44d3-a7f6-d18f183199f0)

## Operating Instructions ##



Test your hand by pressing the red button. It should change the resting state of the hand from open to closed! **Troubleshooting: If, when you plug it in, the servo motor and pencil immediately move the hand to the "closed" position, you can either adjust the starting position with the red button (needs to be done every time you plug it in), or pop the pencil off and reset it to the 90 degree position it was originally set to.**

# Plug in your orange cable and control it by flexing your own muscles!

![](./prosthetic_hand_22.webp)

![](./prosthetic_hand_23b.webp)

