---
sidebar_position: 4
sidebar_label: SpikerBot
---

# SpikerBot #

![image of robot](./robot.png)

SpikerBot is a **neurorobot**: a robot controlled by a computer model of a biological brain. It is equipped with a camera, a distance sensor, a speaker, four lights and two motors. It communicates via Wi-Fi with the [SpikerBot app](https://docs.backyardbrains.com/Software/Pre-Release/SpikerBot/), which runs its spiking neural networks.

## Getting Started with SpikerBot ##

1. **Power on**: Flip the switch under the robot.
2. **Connect Wi-Fi**: Find the network name (written on the robot).
3. **Wait for green lights**: Indicates successful connection.
4. **Press Play in the SpikerBot app** to run a brain.

![robot-app connection](./wifi.png)

Once connected, SpikerBot relies on its **sensors** to detect the environment and **effectors** to act.

## SpikerBot’s Sensors ##
SpikerBot is equipped with a camera and a distance sensor. The **camera** detects red, blue, and green, as well as 16 objects, including people. Detection can be localized to the left or right side of the visual field. The **distance sensor** identifies objects at varying proximities: ‘far’ (100-20 cm), ‘medium’ (20-5 cm), and ‘near’ (less than 5 cm) directly in front of the robot.

## SpikerBot’s Effectors ##
SpikerBot features two independently controlled motors, four lights, and a speaker. The **motors** allow precise control of direction and speed for each wheel. The **lights** can be set to different colors independently, enabling dynamic visual signals. Additionally, the **speaker** can generate tones ranging from 50 to 4950 Hz for auditory communication.

## Technical Specifications ##

|||
|---|---|
|CPU | ESP32 |
|Camera | 320x240 |
|Power | 4x AA |
|Wi-Fi | 2.4 GHz |
|Switch | On/Off |
|||

## Troubleshooting ##

1. No Response from Robot: Check that it's turned on and charged.
2. Wi-Fi Connection Issues: Ensure you’re connected to the correct robot's Wi-Fi network, the robot's LEDs should change from blue to green when the WiFi connection is established.
3. Movement Problems: Check wheels and tires, re-seat if necessary.
4. Camera Recognition Issues: Adjust lighting, use a clearer color sample and check the camera view to see what the robot 'sees'.