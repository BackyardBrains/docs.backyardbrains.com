# The War Game
|     |       |
|--------------|--------------
| Inventor     | Todor Šolajić and Mila Urošević            
| micro:bit IDE     | Block Code 
| Best Location     | Classroom

## Project Overview
Are you tired of the powerful red army always winning over your troops? Well, fear no more,
because we have a solution for you! The War Game is a fun 2-player game which tests your
logical skills and makes the time fly by.

With one grip of your hand you can choose which move you want to make, but be careful!
Each move makes you vulnerable in a different way and gives the opponent a chance to
make a move in their favour. So choose wisely and most importantly have fun!
We used two neuro:bit kits with micro:bit, electrodes and cables combined with some
programming skills to bring this idea to life.


## Materials needed


At first we needed to make the game accessible to everybody, which is why we needed to
create a separate code that automatically measures the strength each player needs to use
to make each move. This is important because the strength needed differs from person to
person and it also depends on the placement of electrolytes. We achieved this with the
following code:

We also needed to make sure the players made their moves at the same time for the game
to work, which is why added the sound effects and time intervals:

A big part of the game is the communication between the two micro:bits. We wanted them to
register which moves the players chose, but also to react to the other player’s decision and
react based on that. With this communication we were able to program the micro:bits to
automatically count and display the amount of arrows each player has, as well as count their
lives and display the outcome in the end
