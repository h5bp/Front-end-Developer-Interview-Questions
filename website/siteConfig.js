/*
 * List of projects/orgs using your project for the users page
 * TODO: Spread the word to people that want their companies listed here.
 */
const users = [
  {
    caption: 'User1',
    image: '/img/h5bp.png',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Front-end Developer Interview Questions',
  tagline: 'A list of helpful front-end related questions you can use to interview potential candidates, test yourself or completely ignore.',
  url: 'http://h5bp.github.io/Front-end-Developer-Interview-Questions/',
  baseUrl: '/',
  projectName: 'Front-end-Developer-Interview-Questions',
  headerLinks: [
    {
      doc: 'gettingstarted',
      label: 'Questions'
    },
    {
      href: 'https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/.github/CONTRIBUTING.md',
      label: 'Contribute',
      external: true
    },
    {
      href: 'https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTORS.md',
      label: 'Hall of Fame',
      external: true
    },
    {
      doc: 'about',
      label: 'About'
    },
    {
      href: 'https://github.com/h5bp/Front-end-Developer-Interview-Questions/',
      label: 'Check on GitHub',
      external: true
    }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/h5bp.png',
  footerIcon: 'img/h5bp.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  copyright: 'Copyright © ' + new Date().getFullYear() + ' H5BP',
  organizationName: 'h5bp',
  projectName: 'Front-end-Developer-Interview-Questions',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/h5bp/Front-end-Developer-Interview-Questions/',
};

module.exports = siteConfig;
