// 검색엔진·AI가 읽는 구조화데이터(JSON-LD). 화면에는 보이지 않는다.
// 회사 정보는 src/site.ts, 사람·서비스는 src/content.ts에서 가져오므로 그쪽만 고치면 여기도 따라 바뀐다.
import { SITE, url } from './site';
import { people, services } from './content';
import type { Column } from './insights';

// 회사가 다루는 주제(검색·AI가 "무엇을 하는 회사인지" 판단하는 단서)
export const topics = [
  '병원 마케팅',
  '병원 브랜딩',
  '병원 전문 마케팅',
  '의료 마케팅',
  '치과 마케팅',
  '피부과 마케팅',
  '성형외과 마케팅',
  '네이버 플레이스 마케팅',
  '병원 블로그 마케팅',
  'AI 검색 최적화(GEO)',
  '의료광고 의료법 검수',
];

const abs = (path: string, site: URL) => new URL(url(path), site).href;

// 모든 페이지 공통: 회사(병원 마케팅 전문 회사) + 웹사이트
export function baseSchema(site: URL) {
  const orgId = abs('/#organization', site);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': orgId,
      name: SITE.name,
      alternateName: ['루트', 'ROOT', 'ROOTBXM', 'ROOT BxM', '루트 브랜딩 마케팅'],
      description: SITE.description,
      url: abs('/', site),
      logo: abs('/favicon.svg', site),
      image: abs(SITE.ogImage, site),
      telephone: SITE.contact.phone,
      email: SITE.contact.email,
      areaServed: { '@type': 'Country', name: '대한민국' },
      knowsAbout: topics,
      founder: people
        .filter((p) => p.role === '대표')
        .map((p) => ({ '@type': 'Person', '@id': personId(p.name, site), name: p.name, jobTitle: `${p.role} · ${p.title}` })),
      employee: people.map((p) => ({ '@type': 'Person', '@id': personId(p.name, site), name: p.name, jobTitle: `${p.role} · ${p.title}`, description: p.tag })),
      taxID: SITE.legal.businessNumber,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '병원 브랜딩·마케팅 서비스',
        itemListElement: services.items.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title.replace(/\n/g, ' '), description: s.description.replace(/\n/g, ', ') },
        })),
      },
      ...(SITE.contact.address ? { address: { '@type': 'PostalAddress', streetAddress: SITE.contact.address, addressCountry: 'KR' } } : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: abs('/', site),
      inLanguage: 'ko-KR',
      publisher: { '@id': orgId },
    },
  ];
}

// 페이지 위치(홈 > 현재 페이지)
export function breadcrumb(site: URL, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: '홈', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path, site),
    })),
  };
}

// 사람마다 고정 주소(@id). 칼럼 글쓴이와 회사 대표가 같은 사람임을 검색·AI가 알 수 있게 이어 준다.
export const personId = (name: string, site: URL) => abs(`/#person-${encodeURIComponent(name)}`, site);

// 칼럼 한 편의 구조화데이터(누가, 언제, 무엇을 쓴 글인지). 첫 페이지와 칼럼 개별 페이지가 함께 쓴다.
export function columnSchema(c: Column, site: URL) {
  const pageUrl = abs(`/insights/${c.slug}/`, site);
  const author = c.author.replace(/ ?대표$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: c.title,
    description: c.summary,
    datePublished: c.date,
    dateModified: c.date,
    inLanguage: 'ko-KR',
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    articleSection: '고민과 생각',
    about: ['병원 마케팅', '병원 브랜딩'],
    author: { '@type': 'Person', '@id': personId(author, site), name: author, jobTitle: '대표', worksFor: { '@id': abs('/#organization', site) } },
    publisher: { '@id': abs('/#organization', site) },
    image: abs(SITE.ogImage, site),
    articleBody: c.body.map((p) => p.replace(/^(## |> )/, '')).join('\n\n'),
  };
}
