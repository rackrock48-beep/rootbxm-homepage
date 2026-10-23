// 회사 정보. 상호·설명·메뉴·연락처는 여기서만 바꾸면 전 페이지(상단 메뉴, 문의 섹션, 플로팅 버튼, 바닥글)에 반영된다.
// 각 섹션에 들어가는 글은 src/content.ts에 있다.
export const SITE = {
  name: 'ROOT Branding × Marketing',
  description: '병원의 뿌리부터 브랜딩합니다. 전문(TRUST)과 프리미엄(CARE)을 설계하는 병원 브랜딩·마케팅 회사 ROOTBXM.',
  locale: 'ko_KR',
  ogImage: '/og.png', // 1200x630, public/에 추가
  // 검색엔진 소유 확인 코드. 각 콘솔의 "HTML 태그" 방식에서 content="..." 값만 넣는다.
  verification: {
    google: 'ILMSA86LU_89iTWsY1R3Daj4VAyyfy5THyrGgLwkAeY',
    naver: '',
  },
  // 상단 메뉴. 원페이지라 섹션 id로 이동한다. index.astro의 Section id와 맞춘다.
  nav: [
    { href: '/#conditions', label: '브랜드 철학' },
    { href: '/#company', label: '대표 소개' },
    { href: '/#campaigns', label: '캠페인' },
    { href: '/#results', label: '성과' },
    { href: '/#services', label: '서비스' },
    { href: '/#promise', label: '약속' },
    { href: '/#contact', label: '문의' },
  ],
  contact: {
    phone: '010-9966-4156',
    kakao: 'https://open.kakao.com/o/srJjr8Fi', // 카카오톡 채널 주소. "문의하기" 버튼이 여기로 연결된다.
    email: 'brius525@naver.com',
    address: '', // 비워 두면 바닥글에서 주소 줄이 빠진다.
    hours: '평일 10:00 – 18:00 (주말·공휴일 휴무)',
  },
  // 바닥글 표기 사항
  legal: {
    representative: '노규락',
    businessNumber: '365-81-03349',
  },
};

// GitHub Pages는 https://아이디.github.io/저장소명/ 아래에서 서비스되므로 내부 링크는 반드시 url()로 감쌀 것.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => base + path;
