---
id: software_spikerecorder_web
sidebar_position: 4
title: Web (in development)
---

# Spike Recorder Web (in development)#
---

# Spike Recorder Web App Beta

We’ve been working on a new browser-based version of our recording software, and it’s finally ready for early testing! Here is everything you need to know to dive in.

---

## What It Is

The new **Spike Recorder Web App** runs directly in **Chrome** or **Edge**, with **no installation required**.

It is fully compatible with:

- ✅ Windows
- ✅ macOS
- ✅ Chromebooks

---

## Test the App

>[Open the Spike Recorder Web App Beta](https://bybrain-staging.web.app/)

---

## How to Get Started

**1. Grant Permissions**
Open the app and allow **microphone access** when prompted.

**2. Connect Your Device**
Plug your Backyard Brains device into your laptop via **USB** and power it on.

**3. Pair Your Device**
Click the **USB** button, select the correct **COM port** for your device, and click **Pair**.

> **Note:** Pairing can take up to **15 seconds** in this current beta build.

**4. Optimize the Signal**
Once paired, the **USB button will turn yellow** and you’ll see a signal on screen.

For the cleanest signal possible:
- Unplug your laptop charger
- Turn off Bluetooth

**5. Set Filters**
Open the configuration menu using the icon in the **top-left corner**.

From there, you can set your signal filters and notch filter:
- Use **60 Hz** in the United States
- Use **50 Hz** in most other regions

**6. Start Recording**
Close the configuration menu and start your experiment.

---

## File Format

**Recordings**
Recordings are automatically saved in the `.nwb` format.

**Legacy Support**
If you have older `.wav` files, you can still open them directly in the app for playback.

---

## Features Still in Progress

A few features are still actively in development and will be added in the coming weeks:
- FFT display function
- RMS value readout
- Event markers in playback mode

> **Note:** Event markers work in recording mode right now, but they will not appear during playback yet.

---

## Why We’re Building This

Windows 11 update cycles have been causing ongoing compatibility issues, and we wanted Chromebook users to finally have a fully supported option.

Many educational facilities also block users from installing third-party software on school devices. A browser-based app bypasses this restriction, making it easier to deploy Spike Recorder in classrooms.

---

## Send Us Feedback

This project is actively in development, so things will change quickly.

If you run into bugs, experience unexpected behavior, or have feature suggestions, please share them with us.

You can send comments, feedback, and conclusions directly to:

📩 **hello@backyardbrains.com**

Every report helps us prioritize what to fix first.

Thanks for testing!