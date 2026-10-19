// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH는 GitHub Actions(deploy.yml)가 저장소 설정에 맞춰 자동 주입한다.
// 로컬 개발 땐 비어 있어서 localhost 기준으로 동작.
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [tailwindcss()]
  },

  // base 경로 빌드 시 홈이 "/repo"와 "/repo/"로 중복 등록되는 것 방지(canonical은 슬래시 있는 쪽)
  integrations: [sitemap({ filter: (page) => page.endsWith("/") })]
});
