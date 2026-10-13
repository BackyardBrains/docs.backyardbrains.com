# docs.backyardbrains.com
BYB product documentation and experiments. We aim to provide a single documentation platform for all our products, software, and development walk-throughs.

Editing the docs folder will result in the generation of new document pages.

## Build requirements

Use Node.js 20 or newer. Install the exact locked dependencies with `npm ci`,
then run `npm run build`. Docusaurus packages are pinned together at 3.10.2.
When deploying a dependency update, run `npm ci` before building; the existing
server webhook does not install dependencies itself.

The Spike Recorder 4.0 documentation plan is in
[planning/spike-recorder-4-documentation-plan.md](planning/spike-recorder-4-documentation-plan.md).
