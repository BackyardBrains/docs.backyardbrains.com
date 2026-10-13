import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {useActiveDocContext, useVersions, useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

function sidebarLinks(items) {
  return items.flatMap(item => item.type === 'category'
    ? [...(item.href ? [{label: item.label, href: item.href}] : []), ...sidebarLinks(item.items)]
    : item.href ? [{label: item.label, href: item.href}] : []);
}

export default function SpikeRecorderGuideNav() {
  const {pathname} = useLocation();
  const {activeVersion, alternateDocVersions} = useActiveDocContext('spikerecorder');
  const versions = useVersions('spikerecorder');
  const sidebar = useDocsSidebar();
  if (!activeVersion || !pathname.startsWith('/software/spike-recorder')) return null;
  const classic = activeVersion.name === 'classic';
  const links = sidebarLinks(sidebar?.items ?? []);
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
      <details className={styles.contents} key={pathname}>
        <summary>In this guide</summary>
        <nav aria-label="Spike Recorder guide pages">
          {links.map(link => <Link key={link.href} to={link.href}
            aria-current={pathname.replace(/\/$/, '') === link.href.replace(/\/$/, '') ? 'page' : undefined}>{link.label}</Link>)}
        </nav>
      </details>
    </div>
  );
}
