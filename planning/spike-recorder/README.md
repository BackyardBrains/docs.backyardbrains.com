# Spike Recorder guide source record

Keep this record with the software guide. It identifies the app and code behind the instructions, preserves screenshot originals, and shows what needs review when the app changes. Greg requested this on October 13, 2026.

## Current baseline

- Documentation family: **Spike Recorder 4.0**, intended label **Current**. Older instructions will be **Classic**.
- Capture set: [October 13 web app captures](captures/2026-10-13-web-4.0.0/manifest.json). Includes eight original PNGs, captions, dimensions, and SHA-256 hashes.
- Published web metadata at capture: **4.0.0, build 1**. The manifest records the deployed JavaScript hash.
- Separately reviewed app source: [main at e27a1cb](https://github.com/BackyardBrains/SpikeRecorder/tree/e27a1cb6464965bd0dcc36098f8e562426977f3b). Its commit concerns 4.0.1. **The deployed web commit was not established; do not equate this source revision with the captured build.**
- [Documentation plan](../spike-recorder-4-documentation-plan.md). The new guide and version selector remain to be implemented.

The manifest links each tracked source file to a fixed GitHub revision and records which guide topics it affects. These are historical evidence links, not moving links to main.

## Refresh the guide with a software release

1. Identify the exact released app version, platform, and build. Record the deployed source revision when the release pipeline provides it.
2. Compare the release source against the previous record. Run the checker below and review the release diff, including files added or renamed. The checker covers selected files, not every possible source of a user-facing change.
3. Recheck the affected controls and workflows in the actual release. Update wording, platform notes, captions, and screenshots together. A changed file is a review signal, not proof the corresponding screenshot is wrong.
4. Capture new originals in a new dated folder. Preserve the old folder. Record the sample, viewport, permissions, steps, build identifiers, and limitations. Keep screenshot annotations separate from original pixels.
5. Verify connect → record → stop/save → reopen on each supported platform. Browser resizing does not replace native-device checks.
6. Update the current baseline link here, preserve the old manifest, and commit the guide, images, and source record together. Keep Classic tied to the older app.

## Check for changes

From any directory, using a local checkout of the release being documented:

```sh
python3 /path/to/docs/planning/spike-recorder/check_sources.py \
  --source /path/to/SpikeRecorder \
  --web-build /path/to/published/web/app
```

`--web-build` is optional. When supplied, the checker compares the deployed `main.dart.js`, version metadata, and saved screenshot hashes. It never writes to the app or updates the baseline automatically. The screenshots are checked even without `--web-build`.

The default record is the October 13 baseline. Use `--record /path/to/new/manifest.json` for a later one. Exit status 0 means the tracked comparisons match, 1 means changes need review, and 2 means the check could not complete. A match is not an end-to-end test of the release.

## Screenshot capture recipe

Start a fresh browser session at the app URL recorded in the manifest. Open the repository's `spike_recorder_sample.nwb`. It is a real sample supplied by Stanislav; its repository path, provenance link, and hash are recorded. Do not overwrite the input file.

These recipes describe the states actually captured. They are not a script that promises pixel-identical results: playback timing and selection positions can change between releases.

| Original | State and capture steps |
| --- | --- |
| `01-start.png` | Open the app at 1440 × 1000 without hardware or a file. Wait for the start prompt and all controls. |
| `02-review-recording.png` | Use File to open the sample. Pause near 7 seconds. Adjust the displayed amplitude scale to 0.5 mV and time scale to 0.5 s. Show the position slider and Play control. |
| `03-measure.png` | From the paused Signal view, select Measure and drag across the waveform. This capture shows 1.98 s and 15.5 µV RMS. Recheck the values after any recapture; do not retain the old numbers automatically. |
| `04-detect.png` | Select Detect, play the recording, and move the right threshold handle near the signal baseline. Capture during playback with the dashed threshold and waveform visible. This capture shows about 9 seconds, a 0.5 mV scale, and a 0.2 s time scale. |
| `05-spectrum.png` | From the paused sample near 7 seconds, select Spectrum. Wait for the waveform and spectrogram to draw. |
| `06-event-and-save.png` | After threshold selection, return to Signal and press 1. Capture the Event 1 marker and the disk-shaped Save control. The screenshot shows unsaved edits; it does not prove that saving succeeded. |
| `07-events-analysis.png` | Open Events after threshold selection and event marking. Show the train list and average with standard deviation. This capture lists CH 1 (38) and event 1 (0). Counts depend on the selection and playback interval. |
| `08-tablet-web.png` | Return to Signal and resize the same browser to 820 × 1180. Capture the responsive layout. Label it tablet-sized web, never native iPad. |

The original capture used Playwright with the app's accessibility controls, keyboard input, and pointer drags. Flutter's semantics overlay intercepted some ordinary automated clicks; dispatching click events to the corresponding accessible control invoked the app's own handlers. No app UI or waveform was replaced. All original PNGs were visually inspected.

## Checks completed and still needed

Completed: real sample playback, interval measurement, threshold selection, event marking, the Save control's appearance, Events, Spectrum, and responsive web capture. The screenshot reference page passed desktop and mobile layout checks, light/dark checks, eight-image loading, callout toggling, and navigation checks with no JavaScript errors; results are preserved in `guide-validation.json`.

Still needed: a connected SpikerBox and live signal; Record changing to Stop with the recording clock; actual completed save/reopen flows; Chromebook's real permission window; native iOS/iPadOS and Android recordings lists. Record those as new evidence when available. Do not infer them from these browser screenshots.
