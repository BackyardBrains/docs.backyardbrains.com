# Blocks #

So you want to try Block Code? Well, it’s the easiest of the three options and it's surprisingly flexible too. When you first open the tab, you’ll see an “on start” block, like this.

You’ll want to keep that around, as well as familiarize yourself with the other tabs. They’re all pretty self-explanatory, but just so you know now, we will mostly be using the “Variables”, “Basic”, “Pins”, and “Serial” tabs. To help speed up finding certain things, always be sure to use the search tab. Now, let's begin!

    Now that everything is open, you’ll want to put out a “Forever” block. It will be in the “Basic” tab, near the bottom. What this block will do is run something called a “loop”. This loop will update itself over and over, and you can put all kinds of things into this block to make something continuously.

 

    Now, to do anything with that block, you’ll want to define variables. That's where the Variables tab comes in. First, you will want a tab to track the incoming EMG signals. We’ll call that “currentSignal”. You set those by going to the Variables tab and just clicking “Make a Variables”, found here.

    Now, you’ll want to click it, then set your variables name. For the sake of this tutorial, the version you see will be called “currentSignal”. Whatever you name this variable will be tracking the EMG signals. And, in the Variables tab, there will not be a few blocks to start using your variable. 

    To use currentSignal to do anything, you’ll need to put it into the “On Start” block, then set it to 0. This is done because the variable will be changed, and the code needs a “starting point”.

And, for future reference, anything you put in the “On Start” block will normally be variables, methods and other things like that should be put into loops, logic blocks or “Forever”.

    You will also need to set a previousSignal variable, so you can track what the currentSignal JUST was. This is important to compare the two so you can tell if you’ve stopped flexing your muscles. You’ll also set this variable to 0 in the On Start block, and you can really name it whatever you want. But, for this tutorial, it will be previousSignal.

    You’re also going to need to add a variable that will track how much you’re going to move the servo. We could use a lot of blocks to make the servo move if you flex hard enough inside the “Forever” block, but a big part of coding is learning how to simplify a solution and make it as efficient as possible. So, we’re going to make a variable that can be edited outside of your “Forever” block. It will be called “angleAdded”.\

    The servo moves based on angles, but because it's glued and tied to the hand and the pencil, it can’t move a full 360 degrees to make a circle without breaking itself or the pencil/hand. You need to set a kind of limit for how low and high your angles can be. These variables will be MAX_ANGLE and MIN_ANGLE. Once again, put them in your “On Start” block and set your MAX_ANGLE to an amount below 140. Setting it below 140 means it won’t start grinding and potentially break itself. 

    Now that you have your variables, you’ll want to start using them in your “Forever” block. To start, you need to make it so that the code knows you want to make previousSignal equal to the currentSignal, but just a little bit ago. This means you need to go to the “Functions” tab. Here, you’ll find a menu that should look like this.

 

You can name it too, so in this tutorial, it will be “compareSignals”.

    Click “done” and you can move on to using it. Now, you will need to make previousSignal equal to currentSignal with a “Set variable to _” block from within the variable menu. 

It's the first of two options, and you can set the variable inside the block of code to “previousSignal” with the dropdown arrow.

Now, you want to change the 0 with “compareSignal”. This block of code will make it so that previousSignal is equal to currentSignal. You can drag the currentSignal block out of the variable menu and put it right in the space where 0 is.

    Now, you need to make it so that, when the code is looking for previousSignal, it will just be a delayed version of currentSignal. What it JUST was. So, to do that, you need to use something called a “pause” block. It's in the Basic menu, but you can also just search for it. 

With that block, your data will be put on hold for a bit.  But, because the pause block counts everything in milliseconds, you need to remember to set your numbers in hundreds if you want it to wait a second or more. Luckily, the block already does that, so if you want a seconds worth of delay, it has you covered. Now, put this block into your version of the “compareSignals” function.

    From here, you’ll need to start using the–hopefully–empty forever block. Firstly, you want to make it so that your compareSignals variable is showing the data from your EMG readings. If you read the micro:bit-based introduction, you’ll know that the motherboard and the micro:bit use a pin system to give and receive information. Its a bit like mailing addresses. To make sure the right information is sent to and received by the right places, you have to define where it's going. So, by setting currentSignals to Pin0, you’re making sure that the code is being sent to and received by the right places. A lot like the last step, you’re going to choose a “set variable to _” block, then put it in your forever block. 

Now, you need to either search for, or find an “analog read pin” block. It should be round like a circle, and if you want to go looking for it, it should be at the top of the pins tab, as seen here.

Like with the compareSignals function, all you need to do is drag and drop “analog read pin” into the block where 0 currently is and you’re all set! And, because the block is already set to pin 0, you don’t need to worry about changing the block's information.

    Now, so you can actually see what the data is that you’re being sent from your EMG electrodes, you’re going to need to grab a “serial write value” block from the serial section. As seen here:

Place it below the “set currentSignal” block, and put “currentSignal” into the spot where the 0 should be. What this will do is create a small graph you can look at and see what the EMG values are.

Which you can view in this “show data; device” tab, beneath the virtual version of your micro:bit.

        When you open it, having made your code, it should look like this.

        

Your values don’t need to be the same as what you see here, but you should see a little line that rises and falls if you’re flexing your muscles or not.

    Now you need to use a conditional statement. These are blocks of code that check if something is happening, then do something in response. If anything else is happening, it either does nothing, or it can do something else. They’re like small gates that tell the code whether or not it should do something if the right thing is trying to get through the gate. To find an if/else conditional statement, either search for it, or look here in the “logic” tab. 

Put it in your forever block, then grab one of the “comparison” blocks. Don’t worry about which one, you can edit what the symbol is between the 0’s like you can with the variable blocks drop-down. This will go where the “true” currently is in the block of “if/else” code. By the end, it should look like this.

    To make a lot of things easier, you will want to create a new variable to put in your “On Start” block. This variable will be called “threshold”, and the variable will make sure that if you’ve flexed your arm hard enough, the motor in your neuroprosthetic will keep moving, even if it's just a little over that amount. You can make a new variable in the variable tab, like you did before. 

Name it “threshold”, then put a “set threshold to _” block in your On Start block.

A lot of other blocks have been set to 0 because you need to change those numbers later in the code and you want those numbers to be at the lowest amount possible, so you can add a lot to them. With your threshold though, you’ll want this to be at a set amount. This is because once you find the right number, it doesn't need to change. For this tutorial, it will be set to 200. Feel free to change it for your own code.

In a way, it's a lot like your MAX_ANGLE and MIN_ANGLE variables. But, now that you have threshold defined, you want to put it in the comparison in your if/else statement, because if your currentSignal is higher than the threshold, your code will know to start moving the servo and keep it moving until currentSignal isn’t the same or greater than your threshold.

Also, be sure to change the symbol for the comparison so that it is “greater than or equal to” rather than just “greater than”. This will make sure that even if your currentSignal just barely meets the threshold, it will still move.

    Now, so the code knows whether or not you’re flexing your muscles, The code knows it needs to do something if currentSignal is greater than your threshold. So, you have to tell it what that something is. In this case, you’ll want to use a servo block. Either search for “servo write pin” or scroll down to the bottom of the pins menu, as seen here. 

As you’ve learned before, micro:bit has a pin system. The pin to send information to your servo is pin 8. You can select it in the dropdown menu where “P0” is. It should say “( write pin only )” in front of it. All this really means is that it can only tell other things, like a motor, what to do. It can’t give the code, or you, any information. When you put it into your if/else statement, it should look like this.

    You might’ve noticed the number right at the end of that block. That number is the amount of degrees you want to move the servo on your hand. So you can change how many degrees the servo moves outside of that line of code, you have to set it to a variable you have somewhere else in your code. Otherwise, you have to keep coming back and changing the one line of code over and over to get it right. It makes it a lot faster! So, replace that 0 with your “angleAdded” variable. 

Then, you’ll want to add another line to the code by pressing the “+” symbol at the bottom of your if/else statement, just underneath the else section.

In the empty space after “if”, you will have to put another comparison, a lot like the one that compares currentSignal and threshold. Only this time, it will compare if currentSignal is less than or equal to previousSignal. Like this:

The reason for this is that if your previousSignal is greater than your currentSignal, that means you’re flexing less than before, so the servo shouldn’t be moving. Also, you can delete the “else” section if you want to by hitting the “-” button at the end of its space.

    Now, to make angleAdded change and actually move the servo, you’re going to need to add a few more variables blocks into your “if” or “else if” spaces. If you remember how you set currentSignal to pin 0, you’ll need to do something similar here. But instead of setting it to anything, the block will instead be “change variable by“ block. It's the second one down when you open the menu.

        

What does this mean? This means that angleAdded to will change ( add, divide, multiple or subtract ) based on whether or not currentSignal is meeting your threshold, or if it's less than it was before ( previousSignal ). In the first line, the if section, you’ll want to put a “change variable by_” block down, and set the variable to angleAdded.

Now, search “add” or “subtract”, or go to the math tab and find the block of code that looks like 0 being added to 0.

From here, put it into the bubble with a “1” in it in the angleAdded block.

        

Now, it might seem odd, but you’re going to want to leave the left bubble as 0, and only change the right bubble. You’re doing this because angleAdded is already at 0, so by setting the variable as 0 plus anything, it will only increase by the amount you add. For this tutorial, the right 0 will be set to 20.

    You also have to do the same thing in your “else if” section, and that includes your block that changes pin 8. This way, your motor will be told how much to move, and decrease angleAdded. So, if you stop flexing your muscle, angleAdded will go down and your servo will decrease as well. In the end, it should look like your “if” section, just with a subtraction symbol rather than an addition symbol. 

    By now, you should have a claw that can raise or lower based on whether or not you’re flexing! However, you might be running into a few issues. For example, your pencil might be moving too far, causing your servo's gears to grind, or maybe the servo just gets stuck and doesn’t move. This is where you need to add more variables and functions to make sure your servo doesn’t go too far, and that it is always moving whenever there is an input. Firstly, you’ll want to create a new variable called “lowThreshold”, for when your servo reaches a certain point. Set it to any number below ten, then put it in your “on start” block. 

Then, you will need to expand your if/else if statement. You’ll have to expand it twice to get a new “else if” section ( You should also probably delete the “else” section that is created in the process ). In the empty space, after “else if”, you need to put a comparison operator like the ones you have for currentSignal and threshold.

Then, put currentSignal in the left and lowThreshold in the right. Change the symbol to a “less than or equal to” symbol and it's done. This will check if your currentSignal ever falls in a low range when you unflex, and it tells the code to start doing something if that happens.

    All that's left to do with your new variable is to tell your code what happens if currentSignal is less than or equal to it. For that, copy and paste the “servo write pin” block into the empty space. 

        

Then, copy another “change angleAdded” block and put it right above the “servo write pin” block. But instead of “20”, here you’re going to put “angleAdded” into the empty space after the minus sign.

Why? Because by subtracting angleAdded from angleAdded if the signal gets too low, you’re basically telling the code that if it isn't getting a high enough signal from your muscles, it needs to make your hand unclench and set the servo to 0.

    All that's left to do is create a way to limit your servo so it stays between two specific points. Think of it like a ladder. “angleAdded” is a lot like whatever step your servo is on at any second, but there's a bottom step and a top step. Obviously, you don’t want angleAdded going too high and breaking something in your servo, like how you might break your leg falling off a ladder. And angleAdded also shouldn’t go below the bottom step and put its imaginary foot through the floor. So, you as the coder have to make something called a “clamp”. This will make sure your code knows to not go over or under the top and bottom steps. You start by grabbing a new “set angleAdded” block from your variables folder. Don’t worry about order, as long as it's outside the “if/else” statement, but inside the forever block, you’ll be okay. 

From here, you have to find a new math block called “max of _” with two empty bubbles after it with zeroes in it. If you type in “max of”, you can find it in your search bar.

And, because this is going to be a clamp for the “top” and “bottom”, you need to put the MIN_ANGLE into the left-most bubble.

Then, put another operator that’s similar to “max of”, but this time, it's “min of”.

Inside the first bubble, put “angleAdded”, and inside the second put “MAX_ANGLE”.

The end result should look like this. As for why things are ordered like this inside the “max of” statement, you need to understand how the “max” and “min” methods work in coding. Basically, within the “min of _” section, the code is checking if angleAdded is above the MAX_ANGLE, and if it is, it sets it to that amount. Then, it does the opposite with the “max of_” section. Basically, if it's less than MIN_ANGLE–0 in this case–it puts it there. And the code does this infinitely, so you don’t have to worry about this being a problem for later unless it is coded wrong.

    Here’s a few challenges and extra puzzles to solve once you have it working!

    Can you make an animation play based on the currentSignal? ( Hint: Try looking into the “Basic” tab )
    Can you make a song play the harder you flex? ( Hint: The Music tab is always an option )
    Can you try to remake the code with entirely new variable names and start the project from scratch?
    Can you make the hand only go to MAX_ANGLE and MIN_ANGLE like a fast-twitch muscle when currentSignal reaches its threshold? 