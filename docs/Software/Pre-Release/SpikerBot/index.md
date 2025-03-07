---
sidebar_position: 2
sidebar_label: The SpikerBot App
---

# The SpikerBot App #
The SpikerBot app is the neural network simulator that controls the [SpikerBot](https://docs.backyardbrains.com/Neuroengineering/Pre-Release/SpikerBot/). It runs on multiple platforms and allows users to design and test custom brains in real-time.

Get it here: [robot.backyardbrains.com](https://robot.backyardbrains.com).

## How The App Works ##
- Drag and drop neurons from the panel on the left into the brain area.
- Drag the handle that appears under selected neurons to form synapses.
- Press **Play** to put your brain in control of the robot and see what it does.

![screenshot](screenshot1.png)

## Neurons ##
- **Activity Mode** - Neurons can be quiet or spontaneously active. They can generate spikes individually or in bursts.
- **Synaptic Polarity** - Neurons can either excite or inhibit their synaptic targets.

## Neural Circuits ##
- **Recurrent Excitation** - When two or more neurons excite each other, they create a feedback loop that can sustain activity indefinitely. This process underlies behaviors such as walking, breathing, or holding a thought in memory.

![screenshot](circuit1.png)

- **Lateral Inhibition** - When two or more neurons inhibit each other, only one remains active. Lateral inhibition helps clarify perception and enables decision-making.

![screenshot](circuit2.png)

## How To Build Brains ##
1. Define the target behavior.
2. Break it into key components.
3. Design a spiking neural network for each:
    - Assign neurons (quiet/bursting, excitatory/inhibitory).
    - Link sensors (color, object, location, distance).
    - Connect neurons to effectors (motors, lights, speaker).
    - Wire neurons together.
4. Use inhibition to prevent conflicts.

## Examples ##
Each example consists of a **behavior** and a **brain** that makes SpikerBot perform that behavior. Neurons are quiet and excitatory unless otherwise indicated.

### Behavior: Avoid Obstacles ###
**Brain**: A neuron responds to distance detection, and drives both wheels backward while activating the speaker and turning red lights on.

[Download Brain](./AvoidObstacles@@@@@@1741355891776312.zip)

![screenshot](brain1.png)

---

### Behavior: Approach Green ###
**Brain**: A neuron responds to a green visual target appearing to the left, and drives the right wheel forward. A second neuron responds to green appearing on the right, and drives the left wheel forward. Both neurons activate the speaker and turn on green lights.

[Download Brain](./ApproachGreen@@@@@@1741374496739371.zip)

![screenshot](brain2.png)

---

### Behavior: Explore ###
**Brain**: Five spontaneously active neurons drive the wheels in different directions. A single neurons is activated by distance detection and drives both wheels backward.

[Download Brain](./ExploExplore@@@@@@1741374617065859.zip)

![screenshot](brain3.png)

---

### Behavior: Blink And Beep At Nearby People ###
**Brain**: Two neurons respond to people, and distance, respectively. Five neurons activate different light colors and speaker tones. A neuron sits inbetween. Both stimulus-detecting neurons synapse onto the in-between neuron with weak synapses (weight 15) so that both must be active  to trigger a response. That neuron, in turn, activates the five output neurons.

[Download Brain](./GreetNearbyPeople@@@@@@1741374676649059.zip)

![screenshot](brain4.png)

---

### Behavior: Sustained Movement ###
**Brain**: Two neurons strongly activate each other (forming a recurrent excitatory circuit that can sustain activation indefinitely). Each neuron drives one of the wheels forward. A neuron detects green and activates the recurrent circuit. A second, inhibitory neuron responds to red, and stops the recurrent circuit.

[Download Brain](./SustainedMovement@@@@@@1741357186235744.zip)

![screenshot](brain5.png)


---

### Behavior: Make Decisions ###
**Brain**: Two recurrent excitatory circuits drive the robot forward and backward, respectively. Two sensory neurons respond to green and red, respectively. The green-detecting neuron activates the forward circuit and inhibits the backward circuit. The red-detecting neuron has the opposite effect.

[Download Brain](./MakeDecisions@@@@@@1741357550554323.zip)

![screenshot](brain6.png)

---

### Behavior: Search For Green ###
**Video**: https://youtu.be/RObP80CZoho

**Brain**: Eight excitatory and one inhibitory neuron.

[Download Brain](./SearchForGreen@@@@@@1741374814353702.zip)

![screenshot](brain7.png)

---

### Behavior: Thigmotaxis ###
**Brain**: Fourteen excitatory and two inhibitory neurons.

[Download Brain](./Thigmotaxis@@@@@@1741374894177525.zip)

![screenshot](brain8.png)

---

### Behavior: Chase Red ###
**Brain**: Thirteen excitatory and one inhibitory neuron.

[Download Brain](./ChaseRed@@@@@@1741361409563828.zip)

![screenshot](brain9.png)

---

## Troubleshooting ##
1. No Response from Robot: Check that it's turned on and charged.
2. Wi-Fi Connection Issues: Ensure you're connected to the correct robot's Wi-Fi network. The robot's lights should change from blue to green when the Wi-Fi connection with your device is established.