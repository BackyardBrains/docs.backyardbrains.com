---
id: files-and-sharing
slug: /files-and-sharing
title: Files and sharing
sidebar_position: 10
---

# Files and sharing

Spike Recorder saves new recordings as **`.nwb`** files. Keep the file itself when moving a recording between devices; a screenshot preserves only the visible picture.

## Where to find a recording

| Platform | After Stop | Open it again |
| --- | --- | --- |
| **Browser / Chromebook** | Finish the browser save dialog, or check Downloads if the browser downloads the file. | Press **File** and choose the saved file. |
| **Windows / macOS desktop app** | Read the saved-location message. The app normally uses a **Spike Recorder** folder under Documents; permissions can cause it to use an app-specific location. | Press **File** and browse to the location shown. |
| **iPhone / iPad app** | The recording is stored by the app. | Press **File** to open its recordings list. |
| **Android app** | The recording is stored in a location the app can write to. OS storage restrictions affect whether a file manager can see it. | Press **File** to open its recordings list. |

The buttons in the main app are shared. The save dialog and file access are provided differently by each platform, so do not expect every device to show the same file window.

## Save edits or keep a copy

When an opened recording has unsaved changes, a disk-shaped **Save** button appears beside File. Use it after adding event marks or changing saved analysis information.

On native platforms, saving under the same name can replace the opened file; choosing a new name makes a separate file. In the browser, follow the destination/overwrite prompt or keep the downloaded copy. Choose a new name when you want to preserve the original.

If you cancel the save or see **“The changes were not saved,”** your edits have not been written successfully. Keep the recording open and retry with a writable destination.

## Share a recording

On a computer or Chromebook, find the saved `.nwb` file using the location shown by the app or the browser's downloads. Use your usual file-copy or sharing workflow to send a copy. On the receiving device, open it with **File** in Spike Recorder.

On iPhone/iPad, look for the app's documents in **Files** and use the operating system's share action. On Android, access through a file manager or USB depends on the OS's storage permissions. The app's recordings list opens files; it does not currently provide a Share button. If your OS does not expose the recording folder, do not assume that seeing a file in the list means another app can access it.

On mobile devices, files received through the operating system's **Open in / Share to Spike Recorder** workflow can be imported into the app's recordings list. The wording and available actions depend on the OS. Use the app's list if an Android file manager cannot access the app's storage.

## Older WAV recordings

Spike Recorder can convert supported older Spike Recorder **WAV** recordings when you open them. Let the conversion finish; the working recording uses NWB. Keep your original WAV and any accompanying event files as an archive, and check the converted signal and marks before relying on it for analysis.

For instructions specific to the older app and its recording workflow, use [Classic](/software/spike-recorder/classic/).
