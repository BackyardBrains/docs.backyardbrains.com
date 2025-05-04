/* Reaction Timer v1.0
   Alex Hatch - Backyard Brains
   Attiny2313 programmed via Arduino ISP

-------------------------------pinout-----------------------------------

                              +--\_/--+
                  (D17) PA2  1|   a   |29  VCC
 LED 3 Green    RX (D0) PD0  2|   t   |19  PB7 (D16)
                TX (D1) PD1  3|   t   |18  PB6 (D15)
 LED 1 Red         (D2) PA1  4|   i   |17  PB5 (D14)
 LED 1 Green       (D3) PA0  5|   n   |16  PB4 (D13)*  LED 2 Green
 Button 1     INT0 (D4) PD2  6|   y   |15  PB3 (D12)*  LED 2 Red
 Button 2     INT1 (D5) PD3  7|   2   |14  PB2 (D11)*  Speaker
 LED 3 Red         (D6) PD4  8|   3   |13  PB1 (D10)   Switch 3
 Audio Jack       *(D7) PD5  9|   1   |12  PB0 (D9)    Switch 2
                        GND 10|   3   |11  PD6 (D8)    SWitch 1
 * = PWM pin                  +-------+


*/

 #define BTN1 4   // Pin definitions
 #define BTN2 5
 #define SW1 8
 #define SW2 9
 #define SW3 10
 #define SPK 11
 #define AUD 7
 const int led[6]={2,3,12,13,0,6};      // LED order from left to right. 

 byte counter = 0;                                // button cycle counts
 byte counterB = 0;
 boolean readingA;                          // current state of button 1
 boolean readingB;                                          //  button 2
 boolean currentStateA = HIGH;            // debounced state of button 1
 boolean currentStateB = HIGH;                              //  button 2

 unsigned int time = 0;                          
 int debounceCount = 10;        // number of cycles to read for debounce
 byte randomLed;
 boolean randomPitch;

void setup() {

  for (byte i = 0; i < 6; i = i + 1) {   // Array of LEDS set to outputs
    pinMode(led[i], OUTPUT);
  }
  pinMode(SPK,OUTPUT);
  pinMode(AUD,OUTPUT);
  
  pinMode(BTN2,INPUT_PULLUP);    // Buttons, switches inputs pulled HIGH
  pinMode(BTN1,INPUT_PULLUP);          // with internal pullup resistors
  pinMode(SW1,INPUT_PULLUP);
  pinMode(SW2,INPUT_PULLUP);
  pinMode(SW3,INPUT_PULLUP);
}

void loop() {
  
  if(millis() != time)
  {
    readingA = digitalRead(BTN1);
    readingB = digitalRead(BTN2);

    if(readingA == currentStateA && counter > 0) {
      counter--;
    }
    if(readingA != currentStateA) {
       counter++; 
    }
    if(readingB == currentStateB && counterB > 0) {
      counterB--;
    }
    if(readingB != currentStateB) {
       counterB++; 
    }
    
    if(counter >= debounceCount){  //left button, red lights high pitch
      if(readingA == LOW){
        counter = 0;
        currentStateA = readingA;
        if(digitalRead(SW1) == LOW){
          if(digitalRead(SW2) == LOW){
            if(digitalRead(SW3) == LOW){  //external sensor
              tick();
            }else {                       //external sensor
              tick();
            }
          }else {
            if(digitalRead(SW3) == LOW) {  //sound
            tick();            
            highTone();
          }else {                          //sound + random
            tick();
            randomTone();
          }
        }   
      }
      else {
        if(digitalRead(SW2) == LOW) {
          if(digitalRead(SW3) == LOW) {  //light
            tick();
            pulseLed(2);
          }else {                        //light + random
            tick();
            if((randomLed%2) == 1) {
              randomLed = randomLed - 1;
            }
            randomLight();
          }
        }else {                          //light + sound
          if(digitalRead(SW3) == LOW) {
            tick();
            toneLed(2,1);
          }else{                         //light + sound + random
            tick();
            if((randomLed%2) == 1) {
              randomLed = randomLed - 1;
            }
            toneLed(randomLed, randomPitch);
          }
        }
      }
    }
    
  if(counterB >= debounceCount){  //right button, green light low pitch
    if(readingB == LOW){
      counterB = 0;
      currentStateB = readingB;
      if(digitalRead(SW1) == LOW){
        if(digitalRead(SW2) == LOW){
          if(digitalRead(SW3) == LOW){  // double tick, not used
            tick();
            delay(5);
            tick();
          }else {                       // double tick, not used
            tick();
            delay(5);
            tick();
          }
        }else {
          if(digitalRead(SW3) == LOW) {  // sound
            tick();
            delay(5);
            tick();
            midTone();
          }else {                        // sound + random
            tick();
            delay(5);
            tick();
            randomTone();
          }
        }   
      }
      else {
        if(digitalRead(SW2) == LOW) {
          if(digitalRead(SW3) == LOW) {  // light
            tick();
            delay(5);
            tick();
            pulseLed(3);
          }else {                        // random light
            tick();
            delay(5);
            tick();
            randomLed = time % 5;
            if((randomLed%2) == 0) {
              randomLed = randomLed + 1;
            }
            randomLight();
          }
        }else {                          // light  + sound
          if(digitalRead(SW3) == LOW) {
            tick();
            delay(5);
            tick();
            toneLed(3,0);
          }else{                         // light + sound + random
            tick();
            delay(5);
            tick();
            randomLed = time % 5;
            if((randomLed%2) == 0) {
              randomLed = randomLed + 1;
            }
            toneLed(randomLed, randomPitch);
          }
        }
      }
    }
  }
  }
  } 
  time = millis();
  randomLed = time % 7;
  randomPitch = time % 2;
}

void onOff(byte pin, int fall, int post) {       // function for pulsing
    digitalWrite(pin, HIGH);                     // digital ouputs
    delay(fall);
    digitalWrite(pin, LOW);
    delay(post);
}

void randomLight() {                  // random light pulse function
  onOff(led[randomLed],750,10);
}

void pulseLed(byte ledPin) {          // Pulse Led
  onOff(led[ledPin],750,10);
}

void toneLed(byte pinny, boolean lowhigh ) {  // light and tone together
  digitalWrite(led[pinny],HIGH);
  if(lowhigh == LOW) {
    midTone();
  } else {
    highTone();
  }
  digitalWrite(led[pinny],LOW);
}

void highTone() {                            // higher pitch note
  for (byte thisPin = 150; thisPin >= 10; thisPin--) { 
    onOff(SPK,1,1);
  }
}

void midTone() {                             // lower pitch note
  for (byte thisPin = 100; thisPin >= 10; thisPin--) { 
    onOff(SPK,1,2);
  }
}

void randomTone() {                          //random tone
  if(randomPitch == 0) {
    midTone();
  } else {
    highTone();
  }
}

void cycleLight() {                          // function testing LEDS      
  for(byte i = 0; i<6; i++) {
    onOff(led[i],450,10);
  }
}

void tick() {        //makes a tick for audio recordings
  digitalWrite(AUD,HIGH);
  delayMicroseconds(50);
  digitalWrite(AUD,LOW);
  delayMicroseconds(1000);
}
