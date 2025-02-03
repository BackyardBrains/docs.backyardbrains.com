---
sidebar_position: 4
sidebar_label: SpikerBot
---

# SpikerBot #

![image of robot](./robot.png)

SpikerBot is a neurorobot - a robot controlled by a computer model of a biological brain. SpikerBot uses a camera to see, a distance sensor to touch, a speaker and lights to communicate, and motors to move around. It communicates via Wi-Fi with the [SpikerBot app](https://docs.backyardbrains.com/Software/SpikerBot/), which runs the neural networks.

## Getting Started with SpikerBot ##

1. Turn the SpikerBot on using the power switch underneath the robot.
2. Connect your device to the SpikerBot's Wi-Fi network (the network name is written on the robot).
3. Wait for the robot’s lights to change from blue to green, indicating its Wi-Fi is connected and ready to use.
4. Open the SpikerBot app and press play to start controlling the robot with your neural networks.

![robot-app connection](./wifi.png)

## SpikerBot’s Sensors ##
SpikerBot is equipped with a camera and a distance sensor. The camera processes images in real-time, detecting red, blue, and green colors, along with 16 distinct objects. Detection can be localized to the left, right, or either side of the visual field. The distance sensor identifies objects at varying proximities: ‘far’ (100-20 cm), ‘medium’ (20-5 cm), and ‘near’ (less than 5 cm) directly in front of the robot.

## SpikerBot’s Effectors ##
SpikerBot features two independently controlled motors, four LED lights, and a speaker. The motors allow precise control of direction and speed for each wheel. The LEDs can be set to different colors independently, enabling dynamic visual signals. Additionally, the speaker can generate tones ranging from 50 to 4950 Hz for auditory feedback.

## Technical Specifications ##

|||
|---|---|
|Step time |	100ms|
|Power supply |	4xAA batteries|
|Battery life |	4 hrs|
|Control Buttons | On/Off|

## Troubleshooting ##

1. No Response from Robot: Check that it’s turned on and charged.
2. Wi-Fi Connection Issues: Ensure you’re connected to the correct robot’s Wi-Fi network, the robot’s LEDs should change from blue to green when the WiFi connection is established.
3. Movement Problems: Check wheels and tires, re-seat if necessary.
4. Camera Recognition Issues: Adjust lighting, use a clearer color sample and check the camera view to see what the robot “sees”.