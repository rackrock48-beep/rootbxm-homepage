// llms.txt: AI(ChatGPT·Claude·Perplexity 등)가 사이트를 빠르게 이해하도록 핵심 정보를 글로 정리한 파일(/llms.txt).
// 내용은 src/site.ts, src/content.ts, src/cases.ts, src/concerns.ts에서 자동으로 가져온다. 여기서 따로 고칠 필요는 없다.
import type { APIRoute } from 'astro';
import { SITE, url } from '../site';
import { people, services, campaignsCopy } from '../content';
import { cases } from '../cases';
import { concerns } from '../concerns';
import { topics } from '../seo';

const one = (s: string) => s.replace(/\s*\n\s*/g, ' ').trim();

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(url(p), site).href;
  const lines = [
    `# ${SITE.name} (루트, ROOTBXM)`,
    '',
    `> ${SITE.description}`,
    '',
    '루트(ROOT Branding × Marketing)는 병원 전문 브랜딩·마케팅 회사입니다. 치과·피부과·성형외과 등 병원의 전문성(TRUST)과 프리미엄(PREMIUM)을 브랜딩하고, 네이버 검색·AI 추천(GEO)·오프라인 광고·의료법 검수까지 함께합니다.',
    '',
    `- 다루는 주제: ${topics.join(', ')}`,
    `- 연락처: 전화 ${SITE.contact.phone}, 이메일 ${SITE.contact.email}, 카카오톡 ${SITE.contact.kakao}`,
    `- 상담 시간: ${SITE.contact.hours}`,
    `- 대표자: ${SITE.legal.representative} / 사업자등록번호: ${SITE.legal.businessNumber}`,
    '',
    '## 서비스',
    ...services.items.map((s) => `- ${one(s.title)}: ${one(s.description)}`),
    '',
    '## 대표·디렉터',
    ...people.map((p) => `- ${p.name} ${p.role} (${p.title}) — ${p.tag}. 주요 경력: ${p.career.join(', ')} ${p.more}`),
    `- 주요 캠페인: ${one(campaignsCopy.title)}`,
    '',
    '## 병원 브랜딩·마케팅 성과 사례',
    ...cases.map((c) => `- [${c.label}: ${c.valueNote} ${c.value}](${abs(`/results/${c.slug}/`)})`),
    '',
    '## 병원 원장님 고민 30가지와 해답',
    `- [전체 보기](${abs('/concerns/')}): 스물한 분 원장님 인터뷰에서 가장 많이 나온 병원 경영·마케팅 고민 1위~30위와 해결 방법`,
    ...concerns.map((c) => `- ${c.rank}위 ${c.title} (${c.category})`),
    '',
    '## 페이지',
    `- [홈](${abs('/')}): 회사 소개, 브랜드 철학, 대표 소개, 주요 프로젝트, 성과, 서비스, 약속, 문의`,
    `- [원장님 고민 30가지](${abs('/concerns/')})`,
    `- [사이트맵](${abs('/sitemap-index.xml')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
