// 첫 페이지 각 섹션에 들어가는 글. 지금은 모두 자리 표시용 더미 문구다. 문구를 바꾸거나 항목을 더하고 빼려면 이 파일만 고친다.
// 회사 정보(상호·연락처·메뉴)는 src/site.ts에 있다.
// 사진은 src/assets/에 두고 맨 위에서 import한 뒤 image 자리에 넣는다. 없으면 회색 자리 표시가 나온다.
import type { ImageMetadata } from 'astro';

// 첫 화면
export const hero = {
  eyebrow: '작은 라벨이 들어갑니다',
  title: '첫 화면 제목이 들어갑니다. 무엇을 하는 곳인지 한 줄로 적습니다',
  highlight: '제목이 들어갑니다', // title 안에서 형광펜 밑줄을 칠 부분. 없으면 ''
  lead: '첫 화면 설명이 들어갑니다. 누구를 위한 곳이고 무엇을 해 주는지 두 문장 정도로 적습니다. 길이는 이 정도가 알맞습니다.',
  tags: ['키워드 1', '키워드 2', '키워드 3', '키워드 4', '키워드 5'],
};

// 소개: 글 + 이미지
export const about = {
  title: '소개 섹션 제목이 들어갑니다',
  paragraphs: [
    '소개 문단 1이 들어갑니다. 회사나 서비스가 무엇을 하는지, 어떤 사람들이 일하는지 두세 문장으로 적습니다. 문단 길이는 이 정도가 알맞습니다.',
    '소개 문단 2가 들어갑니다. 일하는 방식이나 지켜 온 원칙처럼 읽는 사람이 믿을 수 있는 근거를 적습니다. 숫자를 쓸 때는 출처를 함께 둡니다.',
    '소개 문단 3이 들어갑니다. 마지막 문단은 짧게 마무리합니다.',
  ],
  image: undefined as ImageMetadata | undefined, // src/assets/에 두고 import해서 넣는다.
  imageAlt: '이미지 설명이 들어갑니다',
};

// 카드 그리드: 항목 수는 자유. 카드마다 제목·설명·(선택) 불릿 목록
export const features = [
  { title: '카드 제목 1', description: '카드 설명이 들어갑니다. 한두 문장이 알맞습니다.', items: ['항목 1', '항목 2', '항목 3'] },
  { title: '카드 제목 2', description: '카드 설명이 들어갑니다. 한두 문장이 알맞습니다.', items: ['항목 1', '항목 2', '항목 3'] },
  { title: '카드 제목 3', description: '카드 설명이 들어갑니다. 한두 문장이 알맞습니다.', items: ['항목 1', '항목 2'] },
  { title: '카드 제목 4', description: '카드 설명이 들어갑니다. 한두 문장이 알맞습니다.', items: ['항목 1', '항목 2', '항목 3', '항목 4'] },
];

// 단계: 순서가 곧 번호. 개수는 자유
export const steps = [
  { title: '단계 제목 1', description: '이 단계에서 하는 일을 한 문장으로 적습니다.' },
  { title: '단계 제목 2', description: '이 단계에서 하는 일을 한 문장으로 적습니다.' },
  { title: '단계 제목 3', description: '이 단계에서 하는 일을 한 문장으로 적습니다.' },
  { title: '단계 제목 4', description: '이 단계에서 하는 일을 한 문장으로 적습니다.' },
];

// 갤러리: 가로로 넘겨 보는 이미지. image가 없으면 자리 표시가 나온다
export const gallery: { image?: ImageMetadata; alt: string; caption?: string }[] = [
  { alt: '이미지 설명 1', caption: '사진 설명 1' },
  { alt: '이미지 설명 2', caption: '사진 설명 2' },
  { alt: '이미지 설명 3', caption: '사진 설명 3' },
  { alt: '이미지 설명 4', caption: '사진 설명 4' },
  { alt: '이미지 설명 5', caption: '사진 설명 5' },
];

// 링크 카드: 외부 글·기사 등으로 가는 링크. 개수는 자유
export const posts = [
  { title: '링크 제목이 들어갑니다 1', source: '출처', date: '2026.01.01', href: 'https://example.com/1' },
  { title: '링크 제목이 들어갑니다 2', source: '출처', date: '2026.01.01', href: 'https://example.com/2' },
  { title: '링크 제목이 들어갑니다 3', source: '출처', date: '2026.01.01', href: 'https://example.com/3' },
  { title: '링크 제목이 들어갑니다 4', source: '출처', date: '2026.01.01', href: 'https://example.com/4' },
];
