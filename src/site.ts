// 회사 정보. 상호·설명·메뉴·연락처는 여기서만 바꾸면 전 페이지(상단 메뉴, 문의 섹션, 플로팅 버튼, 바닥글)에 반영된다.
// 각 섹션에 들어가는 글은 src/content.ts에 있다.
export const SITE = {
  name: 'ROOTBXM',
  description: '사이트 설명 한 줄이 들어갑니다. 검색 결과에 보이는 기본 설명입니다.',
  locale: 'ko_KR',
  ogImage: '/og.png', // 1200x630, public/에 추가
  // 검색엔진 소유 확인 코드. 각 콘솔의 "HTML 태그" 방식에서 content="..." 값만 넣는다.
  verification: {
    google: '',
    naver: '',
  },
  // 상단 메뉴. 원페이지라 섹션 id로 이동한다. index.astro의 Section id와 맞춘다.
  nav: [
    { href: '/#features', label: '메뉴 1' },
    { href: '/#about', label: '메뉴 2' },
    { href: '/#steps', label: '메뉴 3' },
    { href: '/#gallery', label: '메뉴 4' },
    { href: '/#posts', label: '메뉴 5' },
  ],
  contact: {
    phone: '02-000-0000',
    kakao: 'https://pf.kakao.com/_xxxxx', // 카카오톡 채널 주소. "문의하기" 버튼이 여기로 연결된다.
    email: 'hello@example.com',
    address: '서울특별시 ○○구 ○○로 00, 0층',
    hours: '평일 10:00 – 18:00 (주말·공휴일 휴무)',
  },
  // 바닥글 표기 사항
  legal: {
    representative: '홍길동',
    businessNumber: '000-00-00000',
  },
};

// GitHub Pages는 https://아이디.github.io/저장소명/ 아래에서 서비스되므로 내부 링크는 반드시 url()로 감쌀 것.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => base + path;
