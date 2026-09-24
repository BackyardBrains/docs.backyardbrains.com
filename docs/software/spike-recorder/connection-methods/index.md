---
id: software_spikerecorder_connection
sidebar_position: 1
title: Connection Methods
---

### Spike Recorder Connection Methods

Choosing a connection method depends on your SpikerBox and the device running Spike Recorder.

## USB Connection

Use USB when both your device and platform support a USB connection.

USB is usually the preferred connection method for newer Backyard Brains devices because **Spike Recorder** can recognize the device directly.

Open the **Spike Recorder app**, plug in the **USB cable**, and turn on the **SpikerBox**.

When connected by USB, **Spike Recorder** displays a **USB/device button** near the top-left area of the interface. A highlighted outline around the button indicates that the device is connected.

![image](device.png)

## Blue “Laptop” Cable

Use the [**blue cable**](https://backyardbrains.com/products/laptop-cable) for computers with separate **headphone** and **microphone** ports.

Plug the signal into the **microphone** input, **not** the headphone output.

>Note: A generic audio cable will not work. The blue cable routes the SpikerBox signal into the computer’s microphone input.

After plugging in the blue cable, select the correct audio input in **Spike Recorder**:

1. Open the **Config** menu by clicking the small **gear icon** in the top-left corner.
2. Look below the filtering options.
3. You should see a list of available **audio input devices**.

![image](audioinput.png)

Each input device has a dropdown menu on the left side. This menu controls two things for that input channel: the graph color and whether the channel is active.

Select a visible color, such as **green**, for the external audio input connected to the SpikerBox.

Select **black** for any input channels you want **Spike Recorder** to ignore, such as the computer’s built-in microphone or webcam microphone.

![image](audioinput2.png)

## Green “Smartphone” Cable

The green “smartphone” cable is **no longer supported** and no longer ships with any SpikerBox. Please connect by **USB** instead.

## Connecting to Other Software

If you are using the blue cable to connect your SpikerBox, you can use any program that records audio, such as **Audacity**.

Keep in mind that the Plant SpikerBox, Heart and Brain SpikerBox use amplitude modulation (AM) with a 5 kHz carrier signal. **Spike Recorder** automatically removes this carrier signal.

If you are connecting via USB, you can also load the data directly into your own program. Here are a few resources for setting up your own host software:

* [**Implementation Guide for SpikerBox Host Software**](https://github.com/BackyardBrains/SpikerBoxPro/blob/master/Muscle/documentation/SpikeRecorderHIDspecification.pdf)
* [**Example Python Script**](https://raw.githubusercontent.com/BackyardBrains/SpikeTools/master/spikerecorder.py)