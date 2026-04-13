import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Moss User Guide',
  description: 'Get started with Moss — composable peer-to-peer collaboration.',
  // Served from the root of docs.moss.social — no `base` needed.
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Intro', link: '/intro/what-is-moss' },
      { text: 'Install', link: '/install/download' },
      { text: 'Groups & Tools', link: '/groups-and-tools/creating-a-group' },
      { text: 'Dev Docs', link: 'https://lightningrodlabs.github.io/moss/' },
    ],

    sidebar: [
      {
        text: '🌱 Introduction',
        collapsed: false,
        items: [
          { text: 'What is Moss?', link: '/intro/what-is-moss' },
          { text: 'Why Moss?', link: '/intro/why-moss' },
          { text: 'Use Cases', link: '/intro/use-cases' },
        ],
      },
      {
        text: '📦 Installation',
        collapsed: false,
        items: [
          { text: 'Download', link: '/install/download' },
          { text: 'First Launch', link: '/install/first-launch' },
          { text: 'Updating', link: '/install/updating' },
        ],
      },
      {
        text: '👥 Groups & Tools',
        collapsed: false,
        items: [
          { text: 'Creating a Group', link: '/groups-and-tools/creating-a-group' },
          { text: 'Inviting Members', link: '/groups-and-tools/inviting-members' },
          { text: 'Adding Tools', link: '/groups-and-tools/adding-tools' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/lightningrodlabs/moss' }],
  },
});
