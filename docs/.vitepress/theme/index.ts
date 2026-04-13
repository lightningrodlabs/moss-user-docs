import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './custom.css';

export default {
  extends: DefaultTheme,
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
