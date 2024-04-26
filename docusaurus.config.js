// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BYB docs',
  tagline: 'Neuroscience for everyone',
  favicon: 'https://blog.backyardbrains.com/wp-content/uploads/2017/06/Icon-60@3x-150x150.png',

  // Set the production url of your site here
  url: 'https://docs.backyardbrains.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Vikara-Industries', // Usually your GitHub org/user name.
  projectName: 'BYBDeviceDocs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      
      navbar: {
        title: 'Backyard Brains',
        logo: {
          alt: 'My Site Logo',
          src: 'https://blog.backyardbrains.com/wp-content/uploads/2017/06/Icon-60@3x-150x150.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          
          {
            href: 'https://github.com/BackyardBrains',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Website',
            items: [
              {
                label: 'BackyardBrains.com',
                to: 'https://backyardbrains.com/',
              },
            ],
          },
          {
            title: 'Code',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/backyardbrains',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Backyard Brains Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
