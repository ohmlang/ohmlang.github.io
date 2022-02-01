// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
async function createConfig() {
  const remarkComment = (await import('remark-comment')).default;
  return {
    title: 'Ohm',
    tagline:
      'A JavaScript library for building parsers, interpreters, compilers, and more.',
    url: 'https://ohmjs.org',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'harc', // Usually your GitHub org/user name.
    projectName: 'ohm', // Usually your repo name.

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            remarkPlugins: [remarkComment],
          },
          // blog: {
          //   showReadingTime: true,
          //   // Please change this to your repo.
          //   editUrl:
          //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'Ohm',
          style: 'dark',
          logo: {
            alt: 'Ohm logo',
            src: 'img/ohmjs-logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Docs',
            },
            //            {to: '/blog', label: 'Blog', position: 'left'},
            { to: 'pathname:///editor', label: 'Editor', position: 'left' },
            {
              href: 'https://github.com/harc/ohm',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'light',
          links: [
            {
              title: 'Learn',
              items: [
                {
                  label: 'Tutorial',
                  href: 'https://nextjournal.com/dubroy/ohm-parsing-made-easy',
                },
                {
                  label: 'Docs',
                  to: 'docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Discord',
                  href: 'https://discord.gg/KwxY5gegRQ',
                },
                {
                  label: 'GitHub Discussions',
                  href: 'https://github.com/harc/ohm/discussions',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/harc/ohm',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/_ohmjs',
                },
              ],
            },
          ],
          copyright: `Copyright © 2014–${new Date().getFullYear()} Alessandro Warth, Patrick Dubroy, and the Ohm project contributors. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };
}
module.exports = createConfig;
