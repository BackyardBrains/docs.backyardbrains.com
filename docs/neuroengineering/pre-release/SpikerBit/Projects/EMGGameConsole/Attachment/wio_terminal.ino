#include <TFT_eSPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include "RawImage.h"
#include <Wire.h>

// I2C address for communication
#define I2C_ADDRESS 0x08

TFT_eSPI tft = TFT_eSPI(); // Initialize TFT screen object

bool isInitialScreen = true; // Flag for initial screen display

int tugX = 50;              // Variable to store the position of the tug-of-war flag
bool isGameStarted = false; // Flag to check if the game has started

// Constants for the flag dimensions
#define FLAG_WIDTH 24
#define FLAG_HEIGHT 65

// Buffer to store background pixels
uint16_t backgroundBuffer[FLAG_WIDTH * FLAG_HEIGHT];

void setup()
{
    // Initialize SD card
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI))
    {
        while (1)
            ; // Halt if SD card initialization fails
    }

    // Initialize I2C communication
    Wire.begin(I2C_ADDRESS);
    Wire.onReceive(receiveEvent);

    // Initialize TFT screen
    tft.begin();
    tft.setRotation(1); // Set screen rotation

    // Initialize the joystick button with a pull-up resistor
    pinMode(WIO_5S_PRESS, INPUT_PULLUP);

    drawInitialScreen(); // Draw the initial screen
}

void loop()
{
    handleJoystickInput(); // Check joystick input

    if (isGameStarted)
    {
        drawTugOfWarGame(); // Draw the tug-of-war game if started
    }
}

void drawInitialScreen()
{
    tft.fillScreen(TFT_BLACK); // Clear the screen to black

    // Draw background image for the initial screen
    drawImage<uint16_t>("/background-tug.bmp", 0, 0);

    // Draw icon outline
    tft.fillRect(125, 85, 70, 70, TFT_WHITE);

    // Draw centered icon
    drawImage<uint16_t>("/icon.bmp", 128, 88);
}

void startTugOfWarGame()
{
    // Draw background image for the tug-of-war game
    drawImage<uint16_t>("/background-home.bmp", 0, 0);
    isGameStarted = true; // Set the game started flag
}

void drawTugOfWarGame()
{
    // Calculate the X position of the flag based on tugX value
    int flagXPosition = map(map(tugX, 150, 450, 450, 150), 150, 450, 64, 256);

    // Store the background pixels before drawing the flag
    for (int i = 0; i < FLAG_WIDTH; i++)
    {
        for (int j = 0; j < FLAG_HEIGHT; j++)
        {
            backgroundBuffer[i + j * FLAG_WIDTH] = tft.readPixel(flagXPosition - FLAG_WIDTH / 2 + i, 85 + j);
        }
    }

    // Draw the flag image
    drawImage<uint16_t>("/flag.bmp", flagXPosition - FLAG_WIDTH / 2, 85);

    delay(200); // Wait for a short period

    // Restore the background pixels
    for (int i = 0; i < FLAG_WIDTH; i++)
    {
        for (int j = 0; j < FLAG_HEIGHT; j++)
        {
            tft.drawPixel(flagXPosition - FLAG_WIDTH / 2 + i, 85 + j, backgroundBuffer[i + j * FLAG_WIDTH]);
        }
    }
}

void handleJoystickInput()
{
    // Check if the joystick press button is pressed
    if (digitalRead(WIO_5S_PRESS) == LOW)
    {
        // Wait until the button is released
        while (digitalRead(WIO_5S_PRESS) == LOW)
            ;

        if (isGameStarted)
        {
            // If game is started, stop the game and show the initial screen
            isGameStarted = false;
            isInitialScreen = true;
            drawInitialScreen();
            return;
        }

        if (isInitialScreen)
        {
            // If initial screen is displayed, start the game
            isInitialScreen = false;
            startTugOfWarGame();
        }
    }
}

void receiveEvent(int numBytes)
{
    // Receive data from I2C and update tugX position
    char received[3];
    Wire.readBytes(received, 3);
    tugX = atoi(received); // Convert received data to integer
}
