---
sidebar_position: 2
sidebar_label: The SpikerBot App
---
# The SpikerBot App #
The [SpikerBot robot](https://docs.backyardbrains.com/Neuroengineering/Pre-Release/SpikerBot/) is meant to be used with the **SpikerBot app**, available for Windows, macOS, iOS, Android and Chrome at [robot.backardbrains.com](https://robot.backyardbrains.com). The app is a neural network simulator that receives sensory data from the robot while controlling its behavior.

## How the app works ##
- Drag and drop **neurons** from the panel on the left into the brain area.
- Drag the handle that appears under selected neurons to form **synapses**.
- Press play to put your brain in control of the robot and see what it does.
<br />

![screenshot](screenshot1.png)
User interface.

## Neural Circuits ##
- **Recurrent Excitation** is when two or more neurons excite each other, creating a feedback loop that can maintain activity indefinitely. Recurrent excitation underlies sustained activities like walking, breathing, or holding a thought in memory.

![screenshot](circuit1.png)

- **Lateral Inhibition** is when two or more neurons inhibit each other, suppressing activity in all but one. Lateral inhibition clarifies perception and enables decision-making.

![screenshot](circuit2.png)

## How To Build Brains ##
1. Describe the behavior you want to model. 
2. Describe the different parts of the behavior.
3. Design a spiking neural netwrok for each of part. Begin by placing neurons in the brain. Neurons can be quiet or bursting, and excitatory or inhibitory. Connect sensors to neurons. Visual stimuli can be red, blue, green or one of 16 common objects, and can be on the left, right or anywhere in the visual field. Distance stimuli can be near, medium or far. Connect neurons to effectors. The left and right motors go forward or backward. The lights turn red, blue and green. The speaker makes tones (50-4950 Hz). Connect neurons to other neurons. Synapses can be excitatory or inhibitory (-100-100).
4. Connect the neural networks with inhibitory neurons so their behaviors don't interfere.

## Examples ##
To download a brain, click download and save the text file to your Documents/spikerbot/text folder

### Behavior: Avoid Obstacles ###
**Brain**: A single neuron is activated by the distance sensor, driving the robot backwards while blinking and beeping.

![screenshot](brain1.png)

---

### Behavior: Approach Red ###
**Brain**: Two neurons respond to a visual target appearing on the left or right, driving the wheel on the opposite side forward.

![screenshot](brain2.png)

---

### Behavior: Explore ###
**Brain**: Five bursting neurons activate the motors at random intervals. A single quiet distance sensing neuron produces backward movement.

![screenshot](brain3.png)

---

### Behavior: Blink And Beep At Nearby People ###
**Brain**: A single quiet neuron responds to seeing people, and activates five light-and-sound producing neurons at random intervals.

![screenshot](brain4.png)

---

### Behavior: Sustained Movement ###
**Brain**: Two neurons strongly activate each other, forming a recurrent excitatory circuit. Both neurons drive the robot forward. A sensory neuron detects green and activates the recurrent circuit. A second, inhibitory sensory neuron detects red and stops the recurrent circuit.

![screenshot](brain5.png)

---

### Behavior: Make Decisions ###
**Brain**: Two recurrent excitatory circuits drive the robot forward and backward, respectively. Two sensory neurons respond to green and red, respectively. The green-detecting neuron activates the forward circuit and inhibits the backward circuit. The red-detecting neuron has the opposite effect.

![screenshot](brain6.png)

---

### Behavior: Explore Unless Seeing Green ###
**Video**: https://youtu.be/RObP80CZoho
**Brain**: 

![screenshot](brain7.jpg)

---

### Behavior: Thigmotaxis ###
**Brain**: 

![screenshot](brain8.jpg)

---

### Behavior: Find and Chase Red ###
**Brain**: 

![screenshot](brain9.jpg)

---

## Troubleshooting ##
1. No Response from Robot: Check that it's turned on and charged.
2. Wi-Fi Connection Issues: Ensure you're connected to the correct robot’s Wi-Fi network, the robot’s LEDs should change from blue to green when the WiFi connection is established.