import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { h } from 'vue';
import './custom.css';

// GitHub mark SVG — same shape VitePress uses for its built-in 'github'
// socialLink, so the icon is visually identical to the default.
const GITHUB_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
  <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
</svg>`;

const DOCS_REPO_URL = 'https://github.com/lightningrodlabs/moss-user-docs';

export default {
  extends: DefaultTheme,
  // Inject our own GitHub link into the navbar so we can set a real
  // `title` attribute (VitePress's built-in socialLink only sets
  // `aria-label`, which browsers don't surface as a hover tooltip).
  // Points at the docs repo, not the moss repo — clicks go to where
  // people would actually fix a typo.
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () =>
        h('a', {
          href: DOCS_REPO_URL,
          target: '_blank',
          rel: 'noopener',
          title: 'Improve this guide',
          'aria-label': 'Improve this guide',
          class: 'VPSocialLink no-icon improve-this-guide',
          innerHTML: GITHUB_SVG,
        }),
    }),
  enhanceApp({ app, router, siteData }) {
    // Default to light mode on first visit; users can still toggle to dark.
    if (typeof window !== 'undefined') {
      const KEY = 'vitepress-theme-appearance';
      if (localStorage.getItem(KEY) === null) {
        localStorage.setItem(KEY, 'light');
        document.documentElement.classList.remove('dark');
      }
    }
  },
} satisfies Theme;
