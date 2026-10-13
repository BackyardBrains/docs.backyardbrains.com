// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BYB documentation',
  tagline: 'Neuroscience for Everyone!',
  favicon: 'img/byb-favicon.png',

  url: 'https://docs.backyardbrains.com/',
  baseUrl: '/',

  organizationName: 'Backyard Brains',
  projectName: 'docs.backyardbrains.com',

  onBrokenLinks: 'ignore',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'warn'},
  },
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: undefined,

  plugins: [
    ['@docusaurus/plugin-content-docs', {
      id: 'spikerecorder',
      path: 'spike-recorder-docs',
      routeBasePath: 'software/spike-recorder',
      sidebarPath: './sidebarsSpikeRecorder.js',
      lastVersion: 'current',
      versions: {
        current: {label: 'Current', path: '', banner: 'none'},
        classic: {label: 'Classic', path: 'classic', banner: 'none'},
      },
    }],
    [
      '@docusaurus/plugin-google-tag-manager',
      { containerId: 'GTM-W4T4PRXR' },
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
          ...['desktop', 'ios-ipados', 'android', 'web', 'usb-communication-guide'].map(page => ({
            from: `/software/spike-recorder/${page}`,
            to: `/software/spike-recorder/classic/${page}`,
          })),
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
          sidebarItemsGenerator: async ({defaultSidebarItemsGenerator, ...args}) => {
            const items = await defaultSidebarItemsGenerator(args);
            const link = {type: 'link', label: 'Spike Recorder', href: '/software/spike-recorder/'};
            const software = items.find(item => item.type === 'category' && item.label === 'Software');
            if (software) software.items.unshift(link);
            else {
              const index = items.findIndex(item => item.type === 'category' && item.label === 'Policies');
              items.splice(index < 0 ? items.length : index, 0, {type: 'category', label: 'Software', items: [link]});
            }
            return items;
          },
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
        src: 'img/byb-logo-horizontal.svg',
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
