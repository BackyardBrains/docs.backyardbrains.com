---
sidebar_position: 2
---

# Python #

   Python is seen by many as a kind of universal coding language. It's simple, doesn’t require you to define anything but what the variables are equal to, and the process of making functions and editing variables is super easy. This will be a good entry point into coding if you want to learn the barebones concepts and still write it yourself without any blocks.

        So, it is heavily suggested you use the Python Editor, because the translation between Java and blocks to Python is not always very accurate. When you do open the editor, it should look something like this.

    First things first, you’ll have to delete everything but the first line of text and the comment above it. This should be all that’s left. 

So what does it mean? Basically, the “imports” the code is talking about is you telling your code to pull out some information from what's called a library. In these libraries, there's a lot of information about how certain bits of code should work. For the purposes of this code, you’re drawing from the microbit library so your code knows what to do with certain lines of code.

    Now that that's been covered, you will need to define variables. It's a lot like saying “x=10”. Normally, you would have to say what kind of variable you’re defining, but here, that's not an issue. You’re working in Python! Here, you just have to title your variable, and the first variable you need to define is your “servo_pin”. And yes, you do need to write it that way, it's important for later. 

Note the red dot. It just means something is wrong with the code and it needs to be fixed. Here, it’s just that your variable needs to be equal to something. If you remember how micro:bits pin systems work, you’ll know that to send data to your servo, you have to send it through pin eight. So, after your equal sign, write in “pin8”.

    From here, you need to do something and define a new variable called “Analog”. You will use this later to get data from those EMGs you should have placed on your forearm and the back of your. You’ll write it similarly to the first variable, but this time you’ll be setting it to “pin0” instead, this is because it's your general receiver pin on your micro:bit board. 

    Now, you need to create something called a method. A lot of the time, they need to be used inside of a function–more on those later–so you normally just can’t use them outside of a function. Here, the method can be used outside of a function. Write this into your code:

What does this do? It uses your “servo_pin” variable and does a bit of computer work behind-the-scenes to tell your servo how long it should run. The servo uses little bursts of electricity–imagine it a lot like a switch being “on” or “off”-- and a thing called a “duty cycle” calculates how long your servo will be “on” or “off”. If it's on for half the time, then you have a 50% duty cycle, if it's only on for a quarter of the time, then it has a 25% duty cycle. If we apply this to servos, this means that the motor is “on” or “off” inside the servo half the time, or a quarter of the time. Now, that number can get bigger or smaller, and however much it is, it determines how much your motor rotates and how powerful it is. So what you’re doing with this line of code is saying “I want my motor to have a duty cycle of 20 milliseconds”. This means that those “on”s and “off”s you send your motor will only happen in those 20 milliseconds and update after 20 milliseconds. You’ll define how long your motor is “on” and “off” later though.

    Because your motor on your neuroprosthetic is going to be moving in angles–like a circle–you’ll have to create a maximum angle it’s allowed to move to, and a minimum angle that it starts at. These can be written like this:

It's a good idea to set your Maximum to 180 and your Minimum to 0. Why? Because if it moves past 180 degrees, it might bend or break something more than you want, because 180 degrees is effectively looking from your right to your left. If you look too far to your left though, you could hurt your neck. The same idea is applied here, but with a pencil and a motor.

    Next, you’ll need to start making a function. They work just like a math problem, you put in something, then you get something back. What's different when it comes to coding is just the way you write it, and that its a lot more flexible. Some functions you can even put words into, and get out a whole sentence, or a series of letters, or even make something jump up and down in a videogame! For this, you want to write “def” first to tell the code you’re making a function.

Then, you can name the function whatever you want. For the sake of this tutorial, it will be named “setSignal” in every image you see. It's important to note that if you want a function to be recognized as a function, you have to put two parentheses at the end of your name for it and a colon, like this.

    From here, you have to outline your math problem. For this, you need to also know about a new concept called “global variables”. Effectively, global variables are variables you’ve told the code that can be edited. Here, you’re going to write “global” into your function. Make sure to indent though, Python is very strict about indenting. 

Then, define a new variable inside your function called “currentSignal”. You’ll use this to keep track of the data you’re sending with your EMG signals.

To do that, you use the “Analog” variable you defined earlier to make currentSignal equal to everything coming through pin0 with this line of code.

    After that, you have to make a “while True” loop that will stay running in the background effectively forever. Loops do that in code, and a “while True” loop in Python will perform a function over and over until you tell it specifically to stop, or until something in no longer True. Start by writing “while True”. 

Now, you have to call the function you just made. What this means is that you just write the name of a function–with the parentheses after its name–so that your code knows to use whatever that function does in the loop or function you’re calling it in.

Next, you’re going to define another variable as “global”. This will be the angle you tell your servo to move to. Then, below that, you have to write “angleAdded =”, so you can edit what angleAdded is equal to.

After that, you’ll want to write “int” after the equal sign. This is because what you’re making the angleAdded equal to is going to be a number and making the rest of that line of code an “int” ( short for integer ) means that it will be equal to a number.

              This is where things get a little bit difficult to understand. To make your servo move the amount you want it to, you can’t take your data from your EMG and plug it directly into a method and make your servo move that amount. Why? Because your servo uses something called PWM ( Pulse Width Modification ) to move the servo. It doesn’t use degrees, it uses a bit of algebra to take inputs and affect the duty cycle of the servo with its outputs. This is how you control how long your servo is “on” and long it is “off”. 

So, because you can’t just plug currentSignal right into a method to make your servo move, you need to “scale” it. This basically just means you need to do some math to take one value and make it make sense in another format. Like decimals to fractions and vice versa. In coding, you’re taking an EMG Signal and transferring it to a PWM Signal. For that, you will divide currentSignal by 1023 inside a set of parentheses. This is because, given the system you’re using, 1023 is the max PWM signal value you can have.

And yes, those extra parenthese will be important later, make sure to type the code exactly like that.

    Now, you need to do something called setting a range. This range will make sure that your servo doesn’t “hurt its neck”, like in the example I gave earlier. Basically, if your servo moves too far in either direction, it could break itself or a part of your hand. It's like having a top floor in a hotel and a bottom floor, and an elevator inside it. So putting a kind of “top floor” and “bottom floor” limits how much your signal–the elevator in the hotel, in this example–can move up and down the floors. You would do this like so:

With this code, you’re multiplying the currentSignal–divided by the maximum PWM signal value–by your MAX_ANGLE. Because MIN_ANGLE is equal to 0, you’re really just multiplying the divided currentSignal by 180. Using your minimum in making ranges is an important habit though, so keep all uses of those in the code.

    After you’ve done all that, you just have to tell your servo that it has to move by some amount. That amount is going to be “angleAdded”. All the work you just did with currentSignal and setting a range means you’ll have a number the code can take in and move your servo with. To do that, you’ll have to use pin8, so write “servo_pin” in the while True loop first.

Now, write a “.” and follow it with “write_analog()”. This won’t call your Analog variable, but it will send the instructions your code made to your servo. By the end it, it should look like this:

You have to make sure to put “angleAdded” in the parentheses however, because that's the number that the “currentSignal/1023” math problem will put out to move your servo.

    Enjoy your neuroprosthetic! If you feel up to the challenge, here are a few open-ended questions to test what you can do with everything you’ve learned. 

-Can you make an animation play based on how strong your currentSignal is?

-Can you make it so that you define all parts of your and don’t have to use any numbers like 1023 in your loops or functions at all?

-Can you make a word appear on your micro:bit if you make the hand flex?

-Can you make the hand react to button inputs instead?