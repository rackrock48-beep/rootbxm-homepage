import type { APIRoute } from 'astro';
import { url, SITE } from '../site';

export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL(url('/sitemap-index.xml'), site).href}\n` +
      (SITE.verification.daum ? `\n${SITE.verification.daum}\n` : ''),
  );
