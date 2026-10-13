import {usePluginData} from '@docusaurus/useGlobalData';
import {useActiveDocContext} from '@docusaurus/plugin-content-docs/client';

export default function useSharedDocsSidebar() {
  const {sidebars} = usePluginData('shared-docs-navigation');
  const {activeVersion} = useActiveDocContext('spikerecorder');
  return sidebars[activeVersion?.name ?? 'current'];
}
