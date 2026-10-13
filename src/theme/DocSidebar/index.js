/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import useSharedDocsSidebar from '@site/src/hooks/useSharedDocsSidebar';
import {useWindowSize} from '@docusaurus/theme-common';
import DocSidebarDesktop from '@theme/DocSidebar/Desktop';
import DocSidebarMobile from '@theme/DocSidebar/Mobile';
export default function DocSidebar(props) {
  const windowSize = useWindowSize();
  const sidebar = useSharedDocsSidebar();
  // Desktop sidebar visible on hydration: need SSR rendering
  const shouldRenderSidebarDesktop =
    windowSize === 'desktop' || windowSize === 'ssr';
  // Mobile sidebar not visible on hydration: can avoid SSR rendering
  const shouldRenderSidebarMobile = windowSize === 'mobile';
  return (
    <>
      {shouldRenderSidebarDesktop && <DocSidebarDesktop {...props} sidebar={sidebar} />}
      {shouldRenderSidebarMobile && <DocSidebarMobile {...props} sidebar={sidebar} />}
    </>
  );
}
