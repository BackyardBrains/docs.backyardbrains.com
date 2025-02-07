// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BYB documentation',
  tagline: 'Neuroscience for Everyone!',
  favicon: 'https://api.backyardbrains.com/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.backyardbrains.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Backyard Brains', // Usually your GitHub org/user name.
  projectName: 'docs.backyardbrains.com', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',     // If this exists, ensure it is set to 'warn'

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
          path: 'docs', // Path to the documentation files
          routeBasePath: '/', // Route base for docs
          sidebarPath: './sidebars.js',
          exclude: ['.hidden/**'], // Exclude the .hidden folder
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
      noSSR: false,
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'Backyard Brains',
        logo: {
           alt: 'Backyard Brains Logo',
           src: 'https://api.backyardbrains.com/static/images/BYBLogoFull_512.png',
           href: 'https://backyardbrains.com',
        },
        items: [
           {
             type: 'docSidebar',
             sidebarId: 'tutorialSidebar',
             position: 'left',
             label: 'Documentation',
           },
          
        //   {
        //     href: 'https://github.com/BackyardBrains',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
       ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Website',
            items: [
              {
                label: 'Home',
                to: 'https://backyardbrains.com/',
              },
              {
                label: 'Store',
                to: 'https://backyardbrains.com/collections/featured?grade=all',
              },
              {
                label: 'Community',
                to: 'https://forum.backyardbrains.com/',
              },
              {
                label: 'Blog',
                to: 'https://blog.backyardbrains.com/',
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
        copyright: `Copyright © ${new Date().getFullYear()} Backyard Brains.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;