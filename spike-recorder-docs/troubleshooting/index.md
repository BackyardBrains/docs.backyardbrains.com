---
id: software_spikerecorder_troubleshooting
slug: /troubleshooting
title: Troubleshooting
sidebar_position: 11
---

# Troubleshooting

## No SpikerBox or no live signal

1. Check power and use a USB **data** cable.
2. Close other apps or browser tabs that may be using the device.
3. Choose **SpikerBox → Connect**. If several devices appear, choose the correct one.
4. In the browser, select the device and allow access in its chooser. A Chromebook needs this permission before recording over USB.
5. Confirm that channels are enabled and follow the electrode/setup checks in your [device's guide](/#choose-your-device).

If the browser offers no device chooser, use a browser with Web Serial support for USB recording. On a managed Chromebook, check device-access policy with the administrator. See [Connect a SpikerBox](../connection-methods/index.md).

## The trace is moving, but there is no recording

A live trace alone is not a recording. Press **Record** and look for **Stop** and the recording clock. Finish with Stop and complete the save step.

## Record says “Connect a SpikerBox to record”

There is no connected live device. An opened recording is for playback and analysis. Use **SpikerBox → Connect** to switch to a live source.

## Buttons disappeared or do not respond while recording

Recording limits the available controls. Use **Stop**, finish saving, and then change channels, open a file, or use the analysis tools.

## The live trace froze

Check whether live acquisition is paused. Press **Play** to resume at the current live signal. Samples arriving during a live pause are not kept. Also check the cable and connection if resuming does not restore the trace.

## I cannot find the saved file

- **Browser:** check the chosen destination and Downloads. Canceling the save dialog did not save the recording.
- **Desktop:** use the location in the app's saved message; it may differ from the usual Documents folder.
- **Phone/tablet:** press **File** to open the app's recordings list.

A save error means you still need a successful save. See [Files and sharing](../files-and-sharing.md).

## I added an event, but it is missing after reopening

For an opened file, use the disk-shaped **Save** button after editing and complete the save prompt. Open the copy you actually saved, especially if you changed the name or the browser downloaded another copy.

## Events shows no average

Check that you have selected spikes in Detect or placed event marks, that the intended channel is on, and that the selected entry has contributing events. A threshold that misses the signal will not provide spikes to average.

## The signal is noisy or too small

Check electrode contact, the device's setup, the selected channel, and the displayed amplitude scale. Review channel preparation/filter settings. Changing the visual scale makes the trace larger or smaller on screen; it does not repair the source signal.

## Ask for help

Email [hello@backyardbrains.com](mailto:hello@backyardbrains.com) with your SpikerBox model, app version from **SpikerBox → Settings**, OS/browser version, the action you tried, and the exact error. A screenshot and a short example recording, when you can share one, help explain the problem.

Using the older app? Switch to [Classic troubleshooting](/software/spike-recorder/classic/troubleshooting/).
