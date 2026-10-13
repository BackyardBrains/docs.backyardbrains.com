---
id: record-and-save
slug: /record-and-save
title: Record and save
sidebar_position: 4
---

# Record and save

## Before you press Record

- [Connect a SpikerBox](./connection-methods/index.md) and confirm that the signal responds to your experiment.
- Open **SpikerBox → Channels** and turn on the channels you want in the file. The channels enabled when recording starts determine what is recorded.
- Check the signal and choose an appropriate display scale. Moving the trace or changing its display scale is not a substitute for correcting a poor electrode connection.

## Start

Press **Record** at the upper right. The button changes to **Stop**, and the recording clock shows the elapsed recording time.

If you see **“Connect a SpikerBox to record,”** the app has no live device to record. Connect the device first; opening an existing file does not provide a live recording source.

Starting a recording resumes a paused live signal. During recording, Play/Pause and setup tools are unavailable: the live signal continues until you stop.

## Stop and save

1. Press **Stop** once you have captured the experiment.
2. **In the browser:** complete the save-file dialog if it appears. Depending on browser support and settings, the file may instead be downloaded. Check the browser's downloads.
3. **In the desktop app:** wait for the saved-location message. Note that location so you can find the file again.
4. **On a phone or tablet:** open **File** to find the recording in the app's list.
5. Reopen the recording and check that it contains the section you expected.

New recordings use **`.nwb`** files. Give exported or copied files meaningful names, such as the experiment and date.

:::important Finish the save step
Canceling a browser save dialog does not save a file. A save error also means the file is not safely stored. Keep the app open while saving, check the destination, and confirm the recording by reopening it before closing the session.
:::

## Pause versus Stop

**Pause** is for inspecting a live signal or pausing playback. While live acquisition is paused, incoming samples are not retained; resuming returns to the current live signal. It does not create a file or record the time you spent paused.

**Stop** finishes an active recording and starts saving it. To record another trial, press **Record** again after the first save finishes.

## Save changes to an existing recording

After opening a file, marking events or changing saved analysis information can make a disk-shaped **Save** button appear beside File. Use that button to save your edits. See [Files and sharing](./files-and-sharing.md#save-edits-or-keep-a-copy) before replacing a file.

Next: [Open and review your recording](./open-and-review.md).
