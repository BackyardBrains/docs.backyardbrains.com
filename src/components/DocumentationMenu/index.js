import React from 'react';
import {useLocation} from '@docusaurus/router';
import DocSidebarItems from '@theme/DocSidebarItems';
import useSharedDocsSidebar from '@site/src/hooks/useSharedDocsSidebar';
import styles from './styles.module.css';

export default function DocumentationMenu() {
  const {pathname} = useLocation();
  const sidebar = useSharedDocsSidebar();
  return (
    <details className={styles.mobileMenu} key={pathname}>
      <summary>Documentation menu</summary>
      <nav className="menu" aria-label="Documentation menu">
        <ul className="menu__list">
          <DocSidebarItems items={sidebar} activePath={pathname} level={1} />
        </ul>
      </nav>
    </details>
  );
}
