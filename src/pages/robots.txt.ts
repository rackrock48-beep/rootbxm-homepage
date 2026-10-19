import type { APIRoute } from 'astro';
import { url } from '../site';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(url('/sitemap-index.xml'), site).href}\n`);
