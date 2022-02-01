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
    onBrokenLinks: 'error',
    onBrokenMarkdownLinks: 'error',
    favicon: 'img/favicon.ico',

    // These are used for deployment.
    organizationName: 'ohmlang',
    projectName: 'ohmlang.github.io',
    deploymentBranch: 'gh-pages',

    // As recommended by https://docusaurus.io/docs/deployment#deploying-to-github-pages
    trailingSlash: false,

    plugins: [require.resolve('docusaurus-plugin-fathom')],
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            sidebarCollapsible: false,
            // Please change this to your repo.
            editUrl: ({ docPath }) =>
              `https://github.com/harc/ohm/edit/master/doc/${docPath}`,
            remarkPlugins: [remarkComment],
          },
          blog: false,
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
            {
              to: 'pathname:///editor',
              label: 'Editor',
              position: 'left',
              target: '_self',
            },
            {
              href: 'https://github.com/harc/ohm',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            },
            {
              href: 'https://twitter.com/_ohmjs',
              position: 'right',
              className: 'header-twitter-link',
              'aria-label': '@_ohmjs on Twitter',
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
        fathomAnalytics: {
          siteId: 'KJSMJZEV',
          customDomain: 'https://thirteen-six.ohmjs.org',
        },
      }),
  };
}
module.exports = createConfig;
