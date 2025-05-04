---
sidebar_position: 2
sidebar_label: SpikerBot
---

# SpikerBot #

SpikerBot is an educational robot designed for hands-on experimentation with embodied spiking neural networks. It is equipped with camera, distance sensor, microphone, speaker, lights and motors, and communicates via Wi-Fi with the [SpikerBot app](https://docs.backyardbrains.com/Software/Pre-Release/SpikerBot/), which runs its spiking neural networks.

![image of robot](./robot.png)

## Getting Started with SpikerBot ##

1. **Power on**: Flip the switch under the robot.
2. **Connect Wi-Fi**: Find the network name (written on the robot).
3. **Wait for green lights**: Indicates successful connection.
4. **Press Play in the SpikerBot app** to run a brain.

![robot-app connection](./wifi.png)

## Technical Specifications ##

The SpikerBot robot's sensor suite comprises a forward-facing RGB camera with a resolution of 320x240 pixels, a microphone, and an infrared distance sensor with a range up to 100 centimeters. Effectors on the robot include two motors for locomotion, four individually controllable RGB LEDs, and a tone-producing speaker.

The computational core of the SpikerBot robot is an ESP32-S3 microcontroller that handles sensor data acquisition, Wi-Fi communication and effector control. The robot operates using four AA batteries. Wireless connectivity is provided via 2.4 GHz Wi-Fi for direct communication with the SpikerBot app, running on a nearby laptop or mobile device.

## Troubleshooting ##

1. **No Response from Robot:** Check that it's turned on and charged.
2. **Wi-Fi Connection Issues:** Click pause, then play. Ensure you’re connected to the correct robot's Wi-Fi network, the robot's LEDs should change from blue to green when the WiFi connection is established.
3. **Movement Problems:** Check wheels and tires, re-seat if necessary.
4. **Camera Recognition Issues:** Adjust lighting, use a clearer color sample and check the camera view to see what the robot 'sees'.