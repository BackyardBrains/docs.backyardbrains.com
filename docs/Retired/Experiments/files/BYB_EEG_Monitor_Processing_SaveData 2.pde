// Graphing sketch BYB EEG monitor
import processing.serial.*;
import javax.swing.JOptionPane;

//Variable you will have to change
//int portnumber = 2; //your serial port number, it's either 0,1,2,3,4, or 5. Change it until you the program works. This value depends on your computer.
String serialPortNumber[];

//Variables you can change, but you shouldn't change unless you know what you are doing
int Smoother =70;
int SamplingRate = 125; //Note, see the Arduino Code to figure out your sampling rate. This can be changed. Default is 125 Hz.
int bitrate = 9600; //change this as you change you your modem speed int portnumber = 2; //change this from 1-5 as you find your computer's SUB port identity.
int RecordRate = 1; ///Make 10 to record at 12.5 Hz, Make 5 to record at 25Hz, Make 1 to record at 125 Hz. This is to provent recording data files getting too big.

// Variables you shouldn't need to change ever.
Serial myPort;        // The serial port
float xPos = 1;         // horizontal position of the graph
int young, old, time_now, count;         
int inByte = 0;         
int ReadingA =0;
int ReadingB =0;
int ReadingC =0;
int time_last, time_last2, time_origen = millis();
int t;
float hr;
Table mesa;
boolean record = false;
int valueToCSV = 0;
String Nombre, nombre2;
float xIncrement=9600.0f/bitrate;
int time_marker = 0;
float time_seconds; // this is to convert time into seconds to storing in .csv file
float RealmV; // this is to store actual mV values in the .csv file

public void keyPressed() {
  if (key == 'r') {
    record = !record;
    if (count != 0) {
      count = 0;
    }
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
  for (int i = 0; i < serialPortNumber.length; i++){
    println(serialPortNumber[i]);
  }
}

void setup () {
  setPortNum();
  // set the window size:
  size(800, 600); 
  mesa = new Table();
  mesa.addColumn("Time (sec)");
  mesa.addColumn("Readings");
  Nombre= "eeg_record_" + str(year())+str(month()) + str(day())+ "_"+str(hour())+str(minute())+".csv"; 
  println(Nombre);
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
    ReadingA=ReadingB; //this is to smooth burps 
    ReadingB=ReadingC; //this is to smooth burps
    ReadingC = inByte;  //
    if ((ReadingB<((Smoother * ReadingA)/100)) & (ReadingB<((Smoother * ReadingC)/100))) {
      ReadingB = (ReadingA + ReadingC)/2;
    }
    time_marker = time_marker + (1000/SamplingRate);
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
  old = inByte; //Stores temporarily
  stroke(0, 255, 0);//REG notation. R = 0, G= 255 (max), B = 0
  //line(xPos, height, xPos, height - inByte);
  if (xPos >1) {
    line(xPos, height - inByte, xPos-1, height - young);
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
  count = count + 1;
  if (count % RecordRate == 0) { // Tells the program to recording the data depending on sampling rate
    time_seconds = time_marker; 
    time_seconds = time_seconds / 1000; //converts ms to seconds, and thus, integer to float (decimal point)
    //println(time_seconds);
    TableRow newRow = mesa.addRow();
    newRow.setFloat("Time (sec)", time_seconds);
    newRow.setFloat("Readings", ReadingB);
    if (mesa.getRowCount() % (1000 / RecordRate) == 0) {//// This is to prevent overload of saving. Saves file every 8 seconds.
      saveTable(mesa, Nombre);
    }
  }
}





