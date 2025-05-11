---
id: spikerbot
sidebar_position: 2
sidebar_label: SpikerBot
slug: "/neuroengineering/spikerbot"
---

# SpikerBot

*Design, simulate, and deploy real‑time spiking‑neural‑network brains.*

SpikerBot pairs a browser‑based design studio with a palm‑sized robot, letting learners sketch circuits on‑screen and watch them come alive on the floor.

---

## Get the App

[Download the SpikerBot App](https://robot.backyardbrains.com) — Windows, macOS, iOS, Android, and Chrome.

When the app opens you’ll see a brain‑shaped canvas. Drag **black (excitatory)** or **white (inhibitory)** neurons, wire them up, and press **Play** to run the network.

![App screenshot](./img/screenshot1.png)

---

## Hardware at a Glance

| Sensor / Effector | Spec |
|-------------------|------|
| **RGB Camera**    | 320 × 240 px, forward‑facing |
| **Distance Sensor** | IR, ≈ 1 m range |
| **Microphone**    | Mono, 8‑bit PCM stream |
| **Motors**        | Differential, fwd/back on L & R |
| **RGB LEDs**      | Four addressable |
| **Speaker**       | PWM tone + PCM |
| **MCU**           | ESP32‑S3 (Wi‑Fi + BLE) |
| **Power**         | 4 × AA |

The ESP32 handles sensing and actuation; neural simulation runs in the app over 2.4 GHz Wi‑Fi.

![SpikerBot](./img/robot.png)

---

## Getting Started

1. **Power on** – flip the underside switch.  
2. **Connect** – join the Wi‑Fi SSID printed on the robot.  
3. **Wait** – LEDs turn **green** when ready.  
4. **Launch the App**, load or build a brain, press **Play**.

![Robot‑app link](./img/wifi.png)

---

## Inside the App

* **Drag & Drop** neurons into the workspace.  
* **Connect** using the triangular axon handle.  
* **Tune** neuron type (Quiet, Burst, Custom) and polarity. *Quiet neurons fire only single, isolated spikes when pushed; Burst neurons produce rapid clusters of spikes before resting again; Custom lets you edit the Izhikevich parameters to recreate virtually any biological spiking pattern.* **Polarity** sets whether outgoing synapses are *excitatory* (black, depolarizing and boosting downstream firing) or *inhibitory* (white, hyperpolarizing and suppressing competing activity).  
* **Play** – spikes animate; the robot responds.

Under the hood SpikerBot uses the *Izhikevich* model. Synapse weights 1‑100 set strength: > 25 is reliable; > 90 forms persistent loops akin to short‑term memory.

---

## Neural‑Circuit Building Blocks

* **Reflex Arc** – sensor drives effector directly.  
* **Crossed Circuit** – left sensor → right motor (steering).  
* **Synaptic Integration** – weak converging inputs act as a coincidence detector (< 10).  
* **Recurrent Excitation** – strong feedback (> 90) stores state.  
* **Mutual Inhibition** – competing loops enable decisions.

![Recurrent Excitation](./img/circuit1.png)  
![Lateral Inhibition](./img/circuit2.png)

---

## How to Design Brains

1. **Define** an observable goal.  
2. **Decompose** into functional subtasks.  
3. **Draft** a motif for each task.  
4. **Use Inhibition** to resolve conflicts.  
5. **Test → Refine** using spikes and behavior.

---

## Brain Library  <span style="font-weight:400;font-size:0.85em;">— import & run, then dissect how they work</span>

### Quick‑Look Catalog

| Brain | What It Does | Key Motifs | Download |
|-------|--------------|------------|----------|
| **Find Green** | Roams until it sees green, then approaches | Exploration suppressor, crossed circuit | [`Find-Green.brain`](./static/brains/Find-Green@@@@@@1745279789457094.brain) |
| **Two‑Mood Pet** | Switches between *Curious* and *Sleepy* states | Dual recurrent loops, mutual inhibition | [`Two-Mood-Pet.brain`](./static/brains/Two-Mood-Pet@@@@@@1746977028089230.brain) |
| **Left or Right** | Turns toward green (L) or blue (R); stops on red | Competing recurrent loops + veto | [`Left-Or-Right.brain`](./static/brains/Left-Or-Right@@@@@@1746975758682269.brain) |
| **Tracker** | Smoothly centers on a green object | Retinotopic map, graded drive | [`Tracker.brain`](./static/brains/Tracker@@@@@@1746208384489279.brain) |

<small>Download brains into `Documents/SpikerBot/text` then **File → Load** in the app.</small>

---

### Detailed Profiles

#### Find Green
![Find Green](./img/brain-find_green.png)

* **Connectome:** 10 neurons (9 E / 1 I) · 11 synapses  
* **Purpose:** Exploratory until green appears; then drives straight toward it.  
* **Why it works:** A crossed sensor‑to‑motor circuit overrides the roaming loop, steering the robot toward green while inhibiting exploration.

---

#### Two‑Mood Pet
![Two Mood Pet](./img/brain-two-mood-pet.png)

* **Connectome:** 30 neurons (25 E / 5 I) · 49 synapses  
* **Purpose:** Demonstrates persistent internal state. *Curious* mood wanders and investigates color; *Sleepy* mood idles with soft LEDs and snores until disturbed.  
* **Under the hood:** Two mutually inhibitory recurrent circuits act as a bistable flip‑flop, each gating its own sensor triggers and motor outputs.

---

#### Left or Right
![Left or Right](./img/brain-left_or_right.png)

* **Connectome:** 6 neurons (4 E / 2 I) · 8 synapses  
* **Purpose:** Simple color‑based steering demo—green → left, blue → right, red → stop.  
* **Teaching hook:** Swap sensor colors or effector outputs to see how small edits change behavior.

---

#### Tracker
![Tracker](./img/brain-tracker.png)

* **Connectome:** 17 neurons all excitatory · 8 synapses  
* **Purpose:** Maintains a smooth orienting response by mapping nine retinal zones to proportional motor commands.  
* **Highlight:** Shows how graded responses beat binary reflexes for fine control.

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| **Robot silent / immobile** | Check power & batteries. |
| **Wi‑Fi won’t connect** | Toggle **Play** in the app; confirm SSID; wait for LEDs → green. |
| **No movement** | Ensure wheels are seated. |
| **Color mis‑detect** | Improve lighting; inspect camera feed. |

---

### Next Steps

* Tweak synapse weights—feel how reliability and memory emerge.  
* Combine motifs to craft your own behavior—then share it back!
