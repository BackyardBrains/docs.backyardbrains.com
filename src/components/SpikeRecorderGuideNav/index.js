import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {useActiveDocContext, useVersions} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

export default function SpikeRecorderGuideNav() {
  const {pathname} = useLocation();
  const {activeVersion, alternateDocVersions} = useActiveDocContext('spikerecorder');
  const versions = useVersions('spikerecorder');
  if (!activeVersion || !pathname.startsWith('/software/spike-recorder')) return null;
  const classic = activeVersion.name === 'classic';
  return (
    <div className={styles.guideNav}>
      <div className={styles.topRow}>
        <Link to="/">All documentation</Link>
        <nav className={styles.versions} aria-label="Spike Recorder version">
          <span>Spike Recorder</span>
          {versions.map(version => {
            const target = alternateDocVersions[version.name] ?? version.docs.find(doc => doc.id === version.mainDocId);
            return <Link key={version.name} to={target.path}
              aria-current={activeVersion.name === version.name ? 'true' : undefined}
              className={activeVersion.name === version.name ? styles.selected : undefined}>
              {version.label}
            </Link>;
          })}
        </nav>
      </div>
      {classic && <p className={styles.notice}>This is the older Spike Recorder guide. For Spike Recorder 4.0, choose <Link to="/software/spike-recorder/">Current</Link>.</p>}
    </div>
  );
}
