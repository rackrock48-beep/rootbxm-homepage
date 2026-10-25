import type { APIRoute } from 'astro';
import { url, SITE } from '../site';

// 모든 검색엔진·AI 봇의 수집을 허용한다. 주요 AI 봇은 이름을 적어 허용을 분명히 해 둔다.
const aiBots = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', // OpenAI
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', // Anthropic
  'PerplexityBot', 'Perplexity-User', // Perplexity
  'Google-Extended', // Google Gemini
  'Applebot-Extended', // Apple
  'Bingbot', // Microsoft Bing·Copilot
  'Yeti', // 네이버
  'Daumoa', // 다음
];

export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\n` +
      aiBots.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n') +
      `\nSitemap: ${new URL(url('/sitemap-index.xml'), site).href}\n` +
      `# AI용 사이트 요약: ${new URL(url('/llms.txt'), site).href}\n` +
      (SITE.verification.daum ? `\n${SITE.verification.daum}\n` : ''),
  );
