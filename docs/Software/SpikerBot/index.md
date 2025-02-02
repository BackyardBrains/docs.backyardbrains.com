---
sidebar_position: 2
sidebar_label: The SpikerBot App
---
# The SpikerBot App #
The [SpikerBot robot](https://docs.backyardbrains.com/Engineering/SpikerBot/) is meant to be used with our SpikerBot app, available for Windows, macOS, iOS, Android and Chrome at [robot.backardbrains.com](https://robot.backyardbrains.com). The app provides a visual, drag-and-drop interface to create and simulate neural networks. Users can add neurons, define synapses (excitatory or inhibitory), and assign sensory and motor functions.

## How the app works ##
- Drag and drop neurons to form neural networks.
- Connect neurons with synapses that excite or inhibit targets.
- Adjust neuron properties (spike pattern, excitatory/inhibitory) to change robot behavior.
- Drop neurons onto sensors to create sensory neurons that respond to the environment.
- Press play to run the neural network in real time and watch the robot move and react.

![screenshot](screenshot1.png)

## Example Brains ##
The SpikerBot app includes several pre-built brains.

**Threat Avoidance.** A single neuron is activated by the distance sensor, driving the robot backwards while blinking and beeping.

![screenshot](brain1.png)

**Target Tracking.** Two neurons respond to a visual target appearing on the left or right, driving the wheel on the opposite side forward.

![screenshot](brain2.png)

**Explore Autonomously.** Five bursting neurons activate the motors at random intervals. A single quiet distance sensing neuron produces backward movement.

![screenshot](brain3.png)

**Blink And Beep At People.** A single quiet neuron responds to seeing people, and activates five light-and-sound producing neurons at random intervals.

![screenshot](brain4.png)

**Sustained Activity.** Two neurons strongly activate each other, forming a recurrent excitatory circuit. Both neurons drive the robot forward. A sensory neuron detects green and activates the recurrent circuit. A second, inhibitory sensory neuron detects red and stops the recurrent circuit.

![screenshot](brain5.png)

**Make Decisions.** Two recurrent excitatory circuits drive the robot forward and backward, respectively. Two sensory neurons respond to green and red, respectively. The green-detecting neuron activates the forward circuit and inhibits the backward circuit. The red-detecting neuron has the opposite effect.

![screenshot](brain6.png)

## Troubleshooting ##

1. No Response from Robot: Check that it’s turned on and charged.
2. Wi-Fi Connection Issues: Ensure you’re connected to the correct robot’s Wi-Fi network, the robot’s LEDs should change from blue to green when the WiFi connection is established.