---
id: software_spikerecorder_troubleshooting
sidebar_position: 5
title: Troubleshooting
---

# Troubleshooting #
___
## Spike Recorder Is Recording Background Audio

**Symptoms:**

* The waveform changes when you clap near the computer or phone.
* You hear or see room noise instead of the experiment signal.

**Cause:** Spike Recorder is probably using the built-in microphone instead of the SpikerBox input.

**Fix on Desktop:**

1. Open Spike Recorder.
2. Turn on the SpikerBox.
3. Connect the SpikerBox.
4. Look for the USB/device button if using USB.
5. Open the **Config** screen.
6. Select the external audio input. (for non-USB type of connection).
7. Set the built-in microphone channel to black so Spike Recorder ignores it (for non-USB type of connection).
8. Return to the live view.
9. Clap near the computer again. The SpikerBox channel should not respond strongly to the clap.
___

## No USB Button Appears

**Try this order:**

1. Disconnect the USB cable.
2. Turn on the SpikerBox.
3. Open Spike Recorder.
4. Plug in the USB cable.
5. Wait a few seconds.
6. Look for the USB/device button.

**If the USB button still does not appear:**

1. Try using a different USB cable, and make sure it supports data transfer, not just charging.
2. Try connecting to a different USB port.
3. Make sure the device is powered on.
4. Confirm that your device supports USB connection with Spike Recorder.

You may also find these forum posts helpful:
* [Connection Issues: USB Not Recognized](https://forum.backyardbrains.com/t/connection-issue-with-heart-brain-spikerbox-on-windows-on-arm-com-port-failures/136/2?u=marija)
* [How to Update the Firmware on Arduino-Based Devices](https://forum.backyardbrains.com/t/how-to-update-the-firmware-on-arduino-based-devices/29)

If you still need help, please email us at **[hello@backyardbrains.com](mailto:hello@backyardbrains.com)**.
___

## Green Cable Does Not Work

* Check the cable labels.
* Make sure the end labeled **“SpikerBox”** is plugged into the SpikerBox.
* Plug the other end into the phone, tablet, or combined audio port.
* Do not use a generic audio cable.
* On desktop, make sure that the device is recognized by system, chek audio drivers, and that the app has all required permissions
* On desktop, open **Config** and select the correct audio input.
* On mobile, make sure the app has all required permissions and is not only recording from the built-in microphone.
___

## Signal Is Too Small

* Confirm electrode placement or preparation setup.
* Confirm that the correct channel is selected.
* Increase the vertical zoom in Spike Recorder.
* Check that cables are fully connected.
* Check battery or device power.
* Follow the experiment guide for improving contact or electrode placement.
___

## Signal Is Clipped or Has Flat Tops

* Reduce the vertical zoom.
* Confirm that the electrodes or preparation are not creating large movement artifacts.
* Check the filter settings.
___

## Signal Is Noisy

* Confirm that Spike Recorder is not using the built-in microphone.
* Check all cable connections.
* Keep electrode leads still.
* Move away from strong sources of electrical noise when possible. Also unplug your laptop charger from both the laptop and the wall outlet.
* Use the notch filter if the noise appears to be mains hum.
___

## Cannot Open or Analyze a Recording

* Confirm that the recording file is a Spike Recorder-supported audio recording.
* On desktop, click the **folder** icon in the top right corner to browse for a `.wav` file
* Keep the associated `.txt` event files in the same folder. The event marker file should have the same name as the `.wav` file, with `-events` added: for example, `eeg1.wav` and `eeg1-events.txt`.
* If analysis options are missing, complete spike sorting first.
* Try a longer or clearer recording if spike detection fails.