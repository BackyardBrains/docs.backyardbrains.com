# Spike Recorder 4.0 documentation plan

October 13, 2026

Spike Recorder 4.0 should have one guide that teaches the same recording workflow across computers, Chromebooks, phones, and tablets. Introduce operating-system differences only where they change the reader's next action. The default guide will be labeled **Current**; the existing guides will be preserved as **Classic**.

This first delivery upgrades Docusaurus. The new guide and version switch are the next implementation, described below. Existing instructions remain available during the transition.

## The story to tell

Start with a first successful recording: connect a SpikerBox, see a signal, press Record, press Stop, find the saved recording, and open it again. Explain analysis after the reader can complete that sequence.

Use “select” for instructions that work with a mouse or touch. Identify an icon by both its appearance and its visible or accessible name. Each procedure should say what the reader does, what changes on screen, and how they know it worked. Put a small, annotated screenshot beside the step that needs it.

Suggested opening:

> Spike Recorder displays the electrical signals measured by your SpikerBox. You can watch a signal live, record an experiment, and open the recording to look at it again. The main controls work the same way across devices. Your device may ask for permission to connect or show its own window when you save or open a file.

## Pages and reading order

| Page | What the reader will accomplish |
| --- | --- |
| Start here | Open the released app, connect a device, make a short recording, stop and save, then reopen it. This is the default landing page. |
| Connect your SpikerBox | Prepare the hardware, connect it, grant permission where required, and recognize a successful connection. Link to existing hardware guides for electrode placement. |
| Know the screen | Learn the SpikerBox control, Record/Stop, File, Play/Pause, time scale, channel controls, and workspace tabs from an annotated overview. Explain controls that appear only in particular states. |
| Record and save | Choose channels before starting, recognize the recording clock, stop, complete any save dialog, and verify where the file went. Explain interrupted recordings and save errors. |
| Open and review recordings | Open a file or use the phone recordings list, play/pause, move through time, adjust the view, close the file, and return to the live device. |
| Channels and signal settings | Select a channel, adjust scale and filters, choose preparation settings, and explain which changes affect the view or the next recording. |
| Detect spikes | Explain thresholds and supported spike-analysis controls with a short worked example and the app's exact labels. |
| Mark and compare events | Add and name events, inspect them, and save changes to an open recording. Keep marking separate from any advanced event analysis. |
| Explore the spectrum | Explain frequency and spectrum controls with a simple signal example. |
| Files and sharing | Explain the .nwb recording format, platform save locations, supported import/export/share actions, and opening Classic WAV recordings. Include only formats actually supported by the release. |
| Troubleshooting | Start with symptoms: device missing, permission denied, no signal, recording not found, file will not open, save failed. Link directly back to the relevant procedure. |

Write the first five pages first. Finish the deeper reference pages before switching Current on publicly, so the new default has working destinations rather than placeholders.

## Behaviors the guide must get right

The current application source establishes these distinctions:

- **Record and Stop are the same control in two states.** Recording requires a connected SpikerBox. Starting from a paused live view resumes acquisition before recording.
- **A moving trace is not proof that a file is being recorded.** Use the Record/Stop state and recording clock to teach that distinction.
- **Stop starts saving the recording.** On the web, the reader must complete the browser save prompt or verify the download. Canceling the save prompt does not produce a saved file.
- **Play/Pause has a different purpose.** With a file open it controls playback. In live mode it pauses/resumes the live signal; the code discards incoming data while paused. It is unavailable during recording. Do not describe it as a recording-pause button or promise a continuous history through a live pause.
- **Opening a file changes the active source.** The app disconnects the live device and opens the recording. Show how to return to live use.
- **Phone file selection differs.** iPhone/iPad and Android use an in-app recordings list; desktop and web use file selection dialogs.
- **Choose channels before pressing Record.** The recording contains the channels enabled when it starts. Hiding a channel while viewing an existing recording does not remove that channel from the stored file.
- **Saving edits is separate from stopping acquisition.** The Save control appears for changes to an open recording. Explain the same-name overwrite and new-name copy behavior, and verify the browser variant on screen.

Use code as the behavior reference, then reproduce these steps in the released app before publishing screenshots and exact prompt wording.

## Platform notes at the point of need

| Platform | Guidance to include |
| --- | --- |
| Chromebook and browser | Put connection permission before “look for your signal.” The app requests access through the browser's serial-port chooser. Capture the actual chooser and its button wording. Explain that a USB-connected device still needs browser permission. Check managed-school restrictions separately. |
| Windows and macOS | Show the released installer/download path and real connection behavior. Explain the saved-location message and opening a recording through the file chooser. Use the location actually reported by the app rather than promising one universal folder. |
| iPhone and iPad | Verify supported hardware/cables, the recordings list, importing through Files/share, and exporting or sharing a recording. Capture portrait and landscape differences only where instructions change. |
| Android | Show any USB access prompt and the recordings list. Verify the supported sharing/import flow and avoid directing people to private app storage. |
| Linux | Include release/install instructions only if a supported 4.0 distribution is actually available. The presence of Linux source code does not establish release availability. |

The same Flutter application provides a shared workflow, but responsive layouts and system dialogs are not identical. Use one common explanation with short platform callouts rather than five copies of every page.

## Current and Classic versioning

Use a dedicated Docusaurus docs-plugin instance for Spike Recorder, with the route base `/software/spike-recorder`. Leave the general product, experiment, and policy documentation unversioned.

1. Inventory the existing eight Spike Recorder pages and their images, internal links, anchors, and inbound links.
2. Move the existing Spike Recorder content into the dedicated instance. Preserve document IDs where useful for mapping between versions. Keep the USB communication reference reachable without labeling a hardware protocol obsolete merely because the old app is Classic.
3. Create a `classic` snapshot using Docusaurus versioning before replacing the working guide. Preserve the images with it and repair absolute links that would otherwise send a Classic reader into Current instructions.
4. Author the 4.0 guide in the instance's working directory.
5. Configure `lastVersion: 'current'`, `current: {label: 'Current', path: '', banner: 'none'}`, and `classic: {label: 'Classic', path: 'classic'}`. Set each landing document's slug so the guide root stays `/software/spike-recorder/`.
6. Add a version selector targeting this instance. It should show **Current** and **Classic**, with a brief “Spike Recorder 4.0” identifier in Current and an older-app notice in Classic. Avoid the default “Next” label.
7. Keep the existing guide root as the entry to Current. Redirect old platform-specific URLs to their preserved Classic equivalents so old support links still match the instructions they originally referenced. Link both versions clearly to one another.
8. Add a link from the main Documentation sidebar to the new guide, and verify its order within Software. Test switching versions on pages that have counterparts and pages that do not.

This uses Docusaurus's supported [version labels and default-version settings](https://docusaurus.io/docs/versioning) with its [multi-instance docs support](https://docusaurus.io/docs/docs-multi-instance). Do not snapshot the whole site: that would create needless Classic copies of all hardware and policy pages.

## Screenshots and verification before publication

Capture real release screens for: disconnected start; permission chooser; connected live signal; recording with clock and Stop; saved recording open with Play/Pause; phone recordings list; channels/settings; event edits with Save; Detect; Spectrum. Use numbered callouts and useful alternative text. Keep browser/system permission screenshots separate from app screenshots.

Check the full first-recording sequence on Chrome/Chromebook, Windows, macOS, iOS/iPadOS, and Android. For each, record the app build, hardware, connection permission, save result, reopen result, and any difference from the common guide. Hardware and native-device steps require actual device evidence; browser emulation is not a substitute.

Verify every documented button against its release state, every download URL against its destination, and every image and internal link in the built site. Check desktop and narrow-screen navigation, both version roots, the version selector, old URL redirects, and Classic's image links. Keep the previous built site available for rollback.

## Source record for the author

The app's `main` branch was checked against GitHub at `e27a1cb6464965bd0dcc36098f8e562426977f3b` on October 13. That commit describes Spike Recorder 4.0.1; confirm the exact public build when capturing release screenshots and use **4.0** as the documentation family requested by Greg.

Primary code references in `BackyardBrains/SpikeRecorder`:

- `apps/spikerecorder/lib/main.dart`: `_onRecordStop`, `_onPlayPause`, `_onSelectFile`, `_onSave`, `boardRowModeFor`, and the browser port chooser.
- `apps/spikerecorder/lib/acquisition/recording_controller.dart`: Stop/save, browser cancellation, recorded-channel selection, saved-location messages.
- `apps/spikerecorder/lib/acquisition/recordings_folder_io.dart` and `recordings_folder_web.dart`: native locations and browser-owned files.
- `apps/spikerecorder/lib/recording_view/recordings_list_dialog.dart` and `open_wav_on_pick*`: phone selection and Classic import.
- `packages/sr_ui/lib/src/shell/shell_top_bar.dart` and `workspace_shell.dart`: control names, availability, and placement.

The old docs were inspected at `BackyardBrains/docs.backyardbrains.com` commit `670c04c2e1e2ca6c7a9d5f3a5d6e4bd383edb1ca`. Some old platform pages are placeholders and the web page points to an old beta, so they must not simply be relabeled Current.
