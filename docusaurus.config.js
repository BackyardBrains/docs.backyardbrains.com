// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BYB documentation',
  tagline: 'Neuroscience for Everyone!',
  favicon: 'https://api.backyardbrains.com/favicon.ico',

  url: 'https://docs.backyardbrains.com/',
  baseUrl: '/',

  organizationName: 'Backyard Brains',
  projectName: 'docs.backyardbrains.com',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-google-tag-manager',
      { containerId: 'GTM-K3GMCF3Q' },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
        additionalPaths: async () => [
          { path: '/', priority: 1.0 },   // ← adds https://docs.backyardbrains.com/
        ],
        ignorePatterns: ['/retired/**/*.pdf'],
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/Invertebrate/', to: '/invertebrate/' },
          { from: '/Neuroengineering/', to: '/neuroengineering/' },
          { from: '/Plant/', to: '/plant/' },
          { from: '/Human/', to: '/human/' },
          { from: '/Software/', to: '/software/' },
          { from: '/Policies/', to: '/policies/' },
          { from: '/Retired/', to: '/retired/' },
        ],
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          exclude: ['.hidden/**'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    noSSR: false,
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
        {
          href: 'https://github.com/BackyardBrains/docs.backyardbrains.com',
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
            { label: 'Home', to: 'https://backyardbrains.com/' },
            { label: 'Store', to: 'https://backyardbrains.com/collections/featured?grade=all' },
            { label: 'Community', to: 'https://forum.backyardbrains.com/' },
            { label: 'Blog', to: 'https://blog.backyardbrains.com/' },
          ],
        },
        {
          title: 'Code',
          items: [{ label: 'GitHub', href: 'https://github.com/backyardbrains' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Backyard Brains.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
