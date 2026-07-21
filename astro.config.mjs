// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Vercel 루트 배포라 base 경로 불필요.
// 커스텀 도메인 붙이면 site 값만 교체하면 됩니다.
export default defineConfig({
  site: 'https://zero-log.vercel.app',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
