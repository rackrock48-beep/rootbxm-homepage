// RSS(/rss.xml): 새 칼럼을 네이버 서치어드바이저·구글 등에 알리는 글 목록. 네이버 서치어드바이저의 "RSS 제출"에 이 주소를 넣는다.
// 내용은 src/insights.ts의 칼럼에서 자동으로 만든다. 여기서 따로 고칠 필요는 없다.
import type { APIRoute } from 'astro';
import { SITE, url } from '../site';
import { columns } from '../insights';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rfc822 = (d: string) => new Date(`${d}T09:00:00+09:00`).toUTCString();

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(url(p), site).href;
  const list = [...columns].sort((a, b) => b.date.localeCompare(a.date));
  const items = list
    .map((c) => {
      const link = abs(`/insights/${c.slug}/`);
      const text = c.body.map((p) => p.replace(/^(## |> )/, '')).join('\n\n');
      return `    <item>
      <title>${esc(c.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${rfc822(c.date)}</pubDate>
      <author>${esc(SITE.contact.email)} (${esc(c.author)})</author>
      <category>병원 브랜딩</category>
      <description>${esc(c.summary)}</description>
      <content:encoded><![CDATA[${text.replace(/]]>/g, ']]&gt;').split('\n\n').map((p) => `<p>${esc(p)}</p>`).join('')}]]></content:encoded>
    </item>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE.name)} 고민과 생각</title>
    <link>${abs('/#insights')}</link>
    <atom:link href="${abs('/rss.xml')}" rel="self" type="application/rss+xml" />
    <description>병원 전문 브랜딩·마케팅 회사 루트(ROOT) 대표가 직접 쓰는 병원 브랜딩·마케팅 칼럼</description>
    <language>ko</language>
    ${list[0] ? `<lastBuildDate>${rfc822(list[0].date)}</lastBuildDate>` : ''}
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
