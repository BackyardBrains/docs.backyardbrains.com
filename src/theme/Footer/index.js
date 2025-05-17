/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  return (
    <footer className="footer">
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <div className="copyright">
              <div className="copyright__text">Copyright © 2025 Backyard Brains | Protected under the Creative Common License</div>
              <ul className="creative-commons">
                <li className="creative-common">
                  <a
                    href="http://creativecommons.org/licenses/"
                    target="_blank"
                    rel="nofollow"
                    className="creative-common__link">
                    <img
                      src="//backyardbrains.com/cdn/shop/files/cc_1_1024x1024.svg?v=1722955668"
                      alt=""
                      width="30"
                      height="30"
                      className="creative-common__icon"
                    />
                  </a>
                </li>
                <li className="creative-common">
                  <a
                    href="http://creativecommons.org/licenses/by-sa/3.0/"
                    target="_blank"
                    rel="nofollow"
                    className="creative-common__link"
                  >
                    <img
                      src="//backyardbrains.com/cdn/shop/files/cc_2_1024x1024.svg?v=1722955697"
                      alt=""
                      width="30"
                      height="30"
                      class="creative-common__icon"
                    />
                  </a>
                </li>
                <li className="creative-common">
                  <a
                    href="https://creativecommons.org/licenses/by-nc/3.0/"
                    target="_blank"
                    rel="nofollow"
                    className="creative-common__link"
                  >
                    <img
                      src="//backyardbrains.com/cdn/shop/files/cc-icons_1024x1024.svg?v=1739780252"
                      alt=""
                      width="30"
                      height="30"
                      className="creative-common__icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <nav className="bottom-nav">
              <ul className="bottom-nav__list">
                <li>
                  <a href="https://shop.backyardbrains.com/pages/faq-1">FAQ</a>
                </li>
                <li>
                  <a href="https://shop.backyardbrains.com/pages/legal">T&C</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default React.memo(Footer);
