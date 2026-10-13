// Reuse Docusaurus's resolved sidebar labels, links, ordering, and categories.
// The docs dependency is pinned; recheck this converter when upgrading it.
const {toSidebarsProp} = require('@docusaurus/plugin-content-docs/lib/props.js');

module.exports = function sharedDocsNavigation() {
  return {
    name: 'shared-docs-navigation',
    allContentLoaded({allContent, actions}) {
      const docs = allContent['docusaurus-plugin-content-docs'];
      const mainVersion = docs.default.loadedVersions.find(version => version.versionName === 'current');
      const mainSidebar = toSidebarsProp(mainVersion).tutorialSidebar;
      const sidebars = Object.fromEntries(docs.spikerecorder.loadedVersions.map(version => {
        const guide = toSidebarsProp(version).spikeRecorderSidebar;
        let replaced = false;
        function merge(items) {
          return items.map(item => {
            if (item.type === 'link' && item.href === '/software/spike-recorder/') {
              replaced = true;
              return {type: 'category', label: 'Spike Recorder', href: version.path,
                collapsible: true, collapsed: true, items: guide};
            }
            return item.type === 'category' ? {...item, items: merge(item.items)} : item;
          });
        }
        const sidebar = merge(mainSidebar);
        if (!replaced) throw new Error('The main sidebar must link to /software/spike-recorder/.');
        return [version.versionName, sidebar];
      }));
      actions.setGlobalData({sidebars});
    },
  };
};
