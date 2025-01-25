//* Processing code for this example
// Graphing sketch BYB Heart Monitor
import processing.serial.*;
import javax.swing.JOptionPane;


Serial myPort;        // The serial port
float xPos = 1;         // horizontal position of the graph
int young, old, time_now;         // Tim just declaring this variable so it has a very on program opening
int inByte = 0;         // Tim just declaring this variable so it has a very on program opening
int threshold =355;
int dt;
int ReadingA =0;
int ReadingB =0;
int ReadingC =0;
int time_last, time_last2, time_origen = millis();
int t;
int Smoother =70;
float hr;
Table mesa;
boolean record = false;
int valueToCSV = 0;
String Nombre, nombre2;
int bitrate = 9600; //change this as you change you your modem speed
//int portnumber = 2; //change this from 1-5 as you find your computer's SUB port identity.
String serialPortNumber[];
float xIncrement=9600.0f/bitrate;

public void keyPressed() {
  if (key == 'r') {
    record = !record;
  }
}

void setPortNum() {
  String[] portStr = Serial.list();
  int nPort = portStr.length;
  if (nPort < 1) {
    javax.swing.JOptionPane.showMessageDialog(frame, "No devices detected. Please check USB connection to the Arduino and shield (the green light on the shield should be on).");  
    exit(); 
    return;
  }
  for (int i=0; i<nPort; i++) {
    portStr[i] =  i+ " "+portStr[i] ;
  }  
  String respStr = (String) JOptionPane.showInputDialog(null, "Select the port (this varies from computer to computer.\n Just change ports until you find the right one).\n On Macs your Arduino Port is typically called 'cu.USBmodem...', \n On PCs it is typically called 'COM...'\n If all you see is a black screen without a moving green line,\n or Processing gives you a 'port busy' error, \n you have selected the wrong port", "Select Port for Arduino", 
  JOptionPane.PLAIN_MESSAGE, null, portStr, portStr[0]);
  serialPortNumber = split(respStr, ' ');
  //println(serialPortNumber);
  //println(serialPortNumber[0]);
  for (int i = 0; i < serialPortNumber.length; i++) {
    println(serialPortNumber[i]);
  }
}

void setup () {
  setPortNum();
  // set the window size:
  size(800, 600); 
  mesa = new Table();
  mesa.addColumn("HourMinSeg");
  mesa.addColumn("MillisDiference");
  mesa.addColumn("reading");
  Nombre= "heart_record_" + str(year())+str(month()) + str(day())+ "_"+str(hour())+str(minute())+".csv"; 
  println(Nombre);
  // List all the available serial ports
  //  println(Serial.list());

  // I know that port 2 is the USB port in the serial list on my mac
  // is always my  Arduino, so I open Serial.list()[2].
  // Open whatever port is the one you're using.
 try {
    myPort = new Serial(this, serialPortNumber[1], bitrate);
  } catch (NullPointerException e) {
    println(e);
    exit();
  }
  // don't generate a serialEvent() unless you get a newline character:
  try {
    myPort.bufferUntil('\n'); //won't read off the serial port until you get a new line character
  } catch (NullPointerException e) {
    println(e);
    exit();
  }
  // set inital background:
  background(0);
}

void serialEvent (Serial myPort) {//This part grabs the data off the serial port

    //println("getting data");
  // get the ASCII string:
  String inString = myPort.readStringUntil('\n');
  if (inString != null) {
    inString = trim(inString);  
    young = old; // stores old Value for drawing, as old value will be rewritten below 
    inByte = int(inString); 


    ReadingA=ReadingB; //this is too smooth burps 
    ReadingB=ReadingC; //this is too smooth burps
    ReadingC = inByte;  //
    if ((ReadingB<((Smoother * ReadingA)/100)) & (ReadingB<((Smoother * ReadingC)/100))) {
      ReadingB = (ReadingA + ReadingC)/2;
    }

    if (record) {  
      writeFile();
    }
  }


  if (record) {
    stroke(255, 0, 0); //This lets you know that Program is Recording
    fill(255, 0, 0);
    textSize(32);
    text("Recording", 10, 40);
  } else {  //This just makes the Recording Text Invisible if not Recording
    stroke(0, 0, 0);
    fill(0, 0, 0);
    textSize(32);
    text("Recording", 10, 40);
  }

  // convert to an int and map to the screen height:
  inByte = int(map(float(inByte), 0, 1023, 0, height));
  // println("new ",inByte,"old ",old, " young", young); // Tim is trying to debug
  old = inByte; //Stores temporarily
  // Smoothing Routine


    if (young < threshold && inByte > threshold) {
    /// This prevents multiple counting of the same spike. takes an event if a threshold is reached
    t = millis();
    dt = t - time_last;
    time_last = millis() ;
    hr = 60000 / dt; // heart rate calculator
    // println("dt="+dt +", heart rate="+hr); // Tim is trying to debug
  }  
  // draw the line:
  stroke(0, 255, 0);//REG notation. R = 0, G= 255 (max), B = 0
  //line(xPos, height, xPos, height - inByte);
  if (xPos >1) {
    line(xPos, height - inByte, xPos-1, height - young);
    fill(0, 0, 0);
    stroke(0, 0, 0);//This is Tim deleting the old reading by drawing a black rectangle
    rectMode(CORNERS);
    rect(0, 600, 280, 560);
    stroke(0, 255, 0);
    fill(0, 255, 0);
    textSize(32);
    text("Heart Rate: " + Float.toString(hr), 10, 600);
    stroke(199, 199, 199);
    line(0, height - threshold, 800, height-threshold); //this permanantly is drawing the threshold line in grey
    stroke(199, 199, 199); //
    fill(199, 199, 199);
    textSize(24);
    //  text("Threshold", 680, height-threshold-10);
  }
  // at the edge of the screen, go back to the beginning:
  if (xPos >= width) {
    xPos = 0;
    background(0);
  } else {
    // increment the horizontal position:
    xPos+=xIncrement;
  }
}  

void draw () {
}
// Nada


void writeFile() {

  time_now=(int(millis()-time_last2)); //the time marker for the market
  TableRow newRow = mesa.addRow();
  newRow.setString("HourMinSeg", hour()+":"+minute()+":"+second());
  newRow.setFloat("MillisDiference", time_now);
  newRow.setInt("reading", ReadingB);
  if (mesa.getRowCount() % 1000 == 0) {
    saveTable(mesa, Nombre);
  }
  time_last2 = millis() ;
}





