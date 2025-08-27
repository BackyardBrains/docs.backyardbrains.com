// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

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

  trailingSlash: false,

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
        ignorePatterns: [
          '/retired/**/*.pdf',                      // exclude legacy PDFs
          '/tags/**',                               // exclude tag pages
        ],
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
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
        sitemap: false,
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
  stylesheets: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
    },
  ],
};

export default config;
