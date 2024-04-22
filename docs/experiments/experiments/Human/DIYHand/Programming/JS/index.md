---
sidebar_position: 1
---

# JavaScript #

        You have the Javascript menu open, and it might seem confusing at first, but don’t worry. You’re going to want to delete everything that's already there and start fresh,

First things first, you’re going to want to define a few things called “variables”. Basically, “variables” are just things the code will be keeping track of, updating and using to run “functions”. If you have taken algebra courses, you might recognize the word. Functions use variables to output whatever you want really. For example, we want to move the pencil tied to your hand to make the hand close, right? Well, we need some variables to work with first.

    First, define a variable we can use to set the angle of the servo for the pencil. You define variables in any coding language by saying what type of variable it is before you write it. In Javascript, you’re going to write “let” in front of any variable that has to do with numbers. For the sake of this, we’re  going to call the variable “angleAdded”.

After you name it and define it, you need to make the variable equal to something. For this, we’re going to set it to 0 so we can add or subtract from it later, and not have to worry about anything.

Remember, variables can be whatever you want them to be, but if there's more than one word, they have to be all together in one place. And, the first word has to be uncapitalized, while every word after is Capitalized.

    Then, define a variable called “currentSignal”. This will be used to take incoming signals from your electrodes about how your muscles are moving. If you want to make currentSignal equal to incoming signals, you need to make it equal to P0. P0 is the pin on your micro:bit that takes in incoming data and can show it to you. 

To do this though, you need to define which pin you’re trying to use, just like how you define variables. You’re telling the code where it needs to look for the information you need. To get P0’s data, you need to set currentSignal to 0 first, so it can be edited. Then, later, you can write some other code that can change this variable.

    Now, you’re going to need to make another variable, this time, it will be called “previousSignal”. You can use this to record what currentSignal–the incoming EMG signals–just were, so you can know if it's decreasing. If it's decreasing, that means that you’re not flexing the muscle as much anymore, so the hand can let go.

    Now, you’re going to have to define two more variables. These are going to be in all-caps. That's because they’re terms in a kind of library that the code has. You still have to put “let” in front of them though, because you need to define their type. To make sure the servo doesn’t turn so much it breaks the string on the pencil, or breaks itself, you need to set a maximum and minimum angle. In other words, a range. It would look something like this. 

But, you need to say what you want those minimums or maximums will be, because otherwise the code doesn’t know what to do. In my experience, it's a good idea to set the Max to 100 and the Min to 0.

    Once you have those variables, you need to set a threshold for the incoming signals. That way, if the EMG signal you’re sending your micro:bit is big enough, it can know whether or not to start moving the servo. 

This variable can be set to whatever you want, but for the sake of this tutorial, it will be set to 150. Just know that the lower the value, the less you have to flex to make the servo move. The higher the value, the more you have to flex.

    Now, you have to start making a few functions. Like I mentioned earlier, functions are just little bits of code that use variables to do something very specific. Here, we’re going to make a function that can tell us what the previousSignal is. So let's start by naming it first.

Make sure that every time you make a new function, you have two parentheses after the name of the function, like this “()”. And, that you have a set of brackets you put all your code inside, like this “{ }”.

        You have the function set up, now you need to code how to find what currentSignal was, but a little bit before now. To do that, you make previousSignal equal to currentSignal, like this.

    Then, you need to make sure there's a delay. You use a “method” called “basic.pause.” Methods do specific tasks, and you can combine them with variables or other types of code in functions. Basic.pause needs you to set an amount of milliseconds that it needs to pause things. So, because 1000 milliseconds make a second, if you want the delay to be a second, you would set the amount to 1000 or higher. If you want it to be less, decrease it. You would write your numbers in parentheses, like this.

    Now you need to make another function, this time to store a lot of bigger code. This would be a “basic.forever” function. With this line of code, the function will update a lot, so it acts like a loop, but you can still give the line of code instructions to do things like turn on a light if something else happens. You would write a basic.forever function of code like this.

    One thing you will need to know is what signals are coming in from the EMG. This will help you a lot if any issues pop up later on. So, you’ll be using another method called a “serial write line”. Serial write methods will take information and record it wherever the board or chip you’re using has space for it. In this case, you can find the information by scrolling down on the side with the micro:bit visible.

Click on “Show data” and you’ll see this screen.

To change that, you have to write in your basic.forever function a line of code like this. “serial.writevalue”, with two other values in parentheses. In this case, write “x”, and then “currentSignal” in the parentheses, like this.

But, because you didn’t connect currentSignal to anything, you need to make it equal to something other than 0 ( see step 2 ). For that, you want to set it equal to “pins.analogReadPin”, then put “AnalogPin.P0” in parentheses right next to it, like you can see here.

Now you can track incoming EMG signals in the “Show Data” tab!

     Once that's done, now you’re going to use an “if/else” statement. These kinds of statements can be used to check if something is true and do something if that condition has been met. It’s a lot like a coding flowchart that only keeps going if certain conditions are met. The “else” part is if any of those conditions are met. You would write the outline of one like this. 

You probably note the parentheses and these guys “{ }”. In the parentheses, we’re going to put a comparison statement. Then, use the servo pin to finally start moving the servo.

     First, you need to write a comparison using “operators”. These are like +, -, =, etc. in math. They help you utilize variables within methods, loops and functions. Here, you’re going to compare your currentSignal to the threshold you set.

You want the currentSignal to reach the threshold or be greater than the threshold to make the servo start moving. So, you use “>” and “=”.

     Next, you have to write a line of code to make the servo start moving. For that, you need to use Pin 8. It's similar to how you wrote the “pins.analogReadPin”, except you change what's after the period to “servoWritePin”. And, you’re going to put “P8” after the AnalogPin section. 

But, your code needs to know how much you want the servo to turn, or it won’t work. This is where the angleAdded variable you made comes in handy. You’re going to write a small line of code so that when the threshold is met by your currentSignal, angleAdded will be added to. You can choose however much you want, but for mine, I’m going to put in 15. This way, when the basic.forever function updates, it will make the servo move 15 degrees every few milliseconds if the person wearing the electrodes flexes hard enough.

And remember, to make the servo move the amount you want it to, you need to set the second value in your parentheses to your “angleAdded” variable.

             Now, you need to make it so that when the person stops flexing, your rubber hand stops flexing into a fist. For that, you’re going to add a similar line of code to the “else” section. This line of code also has “angleAdded” in your parentheses, BUT, you’ll be subtracting from angleAdded instead of adding. You can decide for your own code how much it goes down or up, like before. 

             This is an optional step, but it can show you how useful an if else statement can be. If you want the hand to decrease if the currentSignal is the same as the previousSignal, then you would write another comparison. But, instead of it saying “else”, it would say “else if”, like this. 

For the comparison, you would make a comparison between currentSignal and previousSignal. In the comparison, using this symbol, /< , you would be saying that if your currentSignal is less than your previousSignal, something will happen.

Here, you would do the same thing as before, the only thing that would change would be how your “else” section works. In the end, it should look something like this.

What this would do is cause your hand to start slowly uncurling if you relax your muscle, even if it met the threshold. And, if you start increasing your currentSignal by flexing again, your hand will ball up into a fist again.

     Also, using your MAX and MIN angles, you’ll want to limit how far your pencil can move. You don’t want the strings on your hand or the servo to break. So, you need a special kind of trick in coding called a “clamp”. It's a lot like setting a start and a finish line on a race track. You don’t want your cars to go past the finish line, so you keep them behind it. Like if a number is over 100 ( your finish line ), the clamp would put it behind that point. And if your number is too far below 0 ( your start line ), it would set it at or slightly above your startline. 

To make the clamp, you need to use something called “math methods”. They’re a lot like the comparisons you used to make your servo move. And you would code it so that the Math.max would be the MIN_ANGLE, and the Math.min would be MAX_ANGLE. This might seem a bit backwards, but the Math.min and Math.max set “lines”, or boundaries for a number to stay within. So, if written like this:

You can think of it a lot like a ladder. There's a top step and a bottom step. And angleAdded is whatever step you’re currently on. The “Math.max(MIN_ANGLE, Math.min(angleAdded, MAX_ANGLE)” line of code checks if you’re 1.) Above the top step with the section about MAX_ANGLE, then sets you below it and 2.) Below the bottom step with the section about MIN_ANGLE and sets you there if you’re below it.

It might seem a bit odd, but try it for yourself and you’ll see the results!

    Here are a few open-ended questions you can use to fuel your creativity!

    Can you make the fist only go from fully clenching and unclenching, without only going up by little bits? ( Hint: like going directly from the MAX_ANGLE to the MIN_ANGLE )
    Can you make the micro:bit do other things based on the EMG Signals? ( Hint: Check out the Music, Basic tabs in blocks for inspiration )
    Can you code the hand to open and close based on things other than EMG Signals? ( Hint: Inputs methods is a good place to start )
    Can you re-code the entire program from scratch using different names, but the same ideas?