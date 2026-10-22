// 첫 페이지 각 섹션에 들어가는 글. 문구를 바꾸거나 항목을 더하고 빼려면 이 파일만 고친다.
// 회사 정보(상호·연락처·메뉴)는 src/site.ts에 있다.
// 사진은 src/assets/에 두고 맨 위에서 import한 뒤 image 자리에 넣는다. 없으면 회색 자리 표시가 나온다.
import type { ImageMetadata } from 'astro';
import heroRoots from './assets/hero-roots.jpg';
import nohPhoto from './assets/people-noh.jpg';
import jooPhoto from './assets/people-joo.jpg';
import nohLogos from './assets/logos-noh.png';
import jooLogos from './assets/logos-joo.png';

// 첫 화면. background에 들판의 나무 사진을 import해서 넣으면 그라데이션 대신 사진이 깔린다.
export const hero = {
  eyebrow: '뿌리깊은 나무가 단단한 열매를 맺습니다',
  title: '브랜딩의 기본을 생각합니다',
  name: 'ROOT Branding × Marketing',
  image: undefined as ImageMetadata | undefined,
  imageAlt: '',
  background: heroRoots as ImageMetadata | undefined,
};

// 왜 '루트(ROOT)'인가. 오른쪽에는 흐린 나무 그림 위에 열매/뿌리 비교 카드가 놓인다.
export const brand = {
  eyebrow: "왜 '루트(ROOT)'인가",
  title: '병원의 전문성과 프리미엄이라는\n두 개의 뿌리를 브랜딩으로 깊게 내리는 것\n그래서 회사 이름이 ROOT입니다',
  highlight: 'ROOT', // title 안에서 녹색으로 강조할 부분
  bright: ['전문성', '프리미엄'], // title 안에서 밝은 녹색으로 강조할 낱말
  paragraphs: [
    '많은 대행사가 **열매(노출·클릭·숫자)**부터 이야기합니다.\n하지만 열매는 한 철이고, 뿌리는 수십 년을 갑니다.',
    '뿌리는 눈에 보이지 않지만,\n나무가 얼마나 크게 자랄지는 **뿌리의 깊이**가 결정합니다.',
    '그래서 루트는 **뿌리(브랜드)**부터 다집니다.',
  ],
  others: { label: '많은 대행사가 보는 곳', title: '열매', keywords: '노출 · 클릭 · 숫자', term: '한 철' },
  root: { label: '루트가 보는 곳', title: '뿌리', keywords: '브랜드 · 전문성 · 프리미엄', term: '수십 년' },
  banner: { title: 'ROOT Branding × Marketing', text: '브랜딩으로 뿌리를 내리고, 마케팅으로 열매를 맺습니다.' },
};

// 성과 카드. 병원명은 동의받은 표기만, 숫자는 근거 자료가 있는 것만 넣는다.
export const results = [
  { slug: 'changwon-j-derma', label: '창원 J피부과', description: '루트와 함께\n지역 밀착 분석에 맞게\n브랜딩을 한 후', metric: '5개월 동안 성장한\n예약 증가 건수', value: '250건+' },
  { slug: 'mapo-k-plastic', label: '마포 K성형외과', description: '루트와 함께\n해외 유입 환자에 대한\n타깃 마케팅을 한 후', metric: '4개월 만에 늘어난\n월 매출', value: '6000만원' },
  { slug: 'guri-c-dental', label: '구리 C치과', description: '루트와 함께\n원장님의 진료 철학을\n깊이 있게 전달한 후', metric: '매출 30% 자라는 데\n걸린 시간', value: '150일' },
  { slug: 'paju-k-dental', label: '파주 K치과', description: '루트와 함께\n14년 된 치과의\n토탈 브랜드 리뉴얼 후', metric: '늘어난\n월 신규 환자 수', value: '38명' },
];


// 대표 소개. 사진·로고는 src/assets/에 있다(원본 고화질 파일로 바꿔 넣으면 더 선명해진다).
export const leaders = {
  eyebrow: 'ROOT BxM 대표 소개',
  title: 'LG그룹의 광고 프로세스와\n프리미엄 브랜드 런칭 경험으로\n원장님만의 브랜드를 만듭니다',
};

export const people = [
  {
    tag: 'LG광고대행사 출신 광고 전략가',
    name: '노규락',
    role: '대표',
    title: 'Account Executive',
    career: ['LG U+', 'K2', '제주 삼다수', 'KT', '현대자동차', '연세대학교 의과대학', '보건복지부', 'LG생활건강'],
    more: '외 400여 개 브랜드 및 기업 광고 캠페인 기획',
    image: nohPhoto,
    logos: nohLogos,
    logosAlt: '연세대학교 의과대학, 보령제약, 보건복지부, LG생활건강',
  },
  {
    tag: '프리미엄 브랜딩 및 공간 마케팅 전문가',
    name: '주현아',
    role: '이사',
    title: 'Creative Director',
    career: ['CNP화장품_차앤박 피부과(본사)', 'VIDIVICI 코스메틱', '아모레퍼시픽', '골프존', '삼성전자 H&M 사업부', '더 조각 스킨메디', 'CJ'],
    more: '외 80여 개 브랜드 런칭 및 공간 마케팅 설계 제작',
    image: jooPhoto,
    logos: jooLogos,
    logosAlt: 'CNP 차앤박피부과, VIDIVICI, AMOREPACIFIC, GOLFZON',
  },
];

// 주요 캠페인 소개 (흰 배경 섹션). 사진 모음은 src/assets/campaigns-top.png, campaigns-bottom.png
export const campaignsCopy = {
  eyebrow: 'ROOT 대표의 주요 캠페인',
  title: '총괄 디렉터로 10년 넘게 만들어 온\n런칭 브랜드와 광고 캠페인',
  count: 480, // 크게 녹색으로 나오는 숫자. 화면에 들어오면 0부터 빠르게 올라간다
  countSuffix: '+', // 숫자 뒤에서 통통 움직이는 기호
  boxTitle: '건강 및 의학 관련 주요 프로젝트', // 흰 상자 맨 위 제목
  logosAlt: '연세대학교 의과대학, 보령제약, 보건복지부, LG생활건강',
};

// 서비스 범위. 한 줄 흐름도의 점마다 제목과 설명이 놓인다(순서 = 왼쪽→오른쪽).
export const services = {
  eyebrow: '서비스 범위',
  title: '브랜드 전략부터\n네이버 검색, AI, 오프라인 광고, 의료법까지\n우리 병원에 딱 맞게 마케팅합니다',
  items: [
    { title: '브랜딩', description: '지역·경쟁·타깃 정밀 분석\n브랜드 전략\n슬로건·네이밍\n이미지 컨셉 설정\n공간·접점 컨설팅' },
    { title: '콘텐츠', description: '원장님 진료 철학에\n병원 컨셉을 반영한\n글·영상·이미지' },
    { title: '네이버 검색\n통합 운영', description: '플레이스·블로그·카페\n클립·지식iN\n신규 섹션까지\n검색 전 영역' },
    { title: 'AI 추천 설계\n(GEO)', description: '검색을 넘어\nAI가 먼저\n추천하는 병원' },
    { title: '오프라인 광고', description: '지역 TV 광고\n엘리베이터 영상\n버스 광고\n현수막\n전단지' },
    { title: '의료법 관리', description: '전 콘텐츠 의료법 검수\n외부 광고 심의 안내\n분기별 의료법 점검\n민원·제재 리스크 사전 차단' },
  ],
};

// 살아남는 병원의 조건. 왼쪽은 대표의 글, 오른쪽은 TRUST / Premium Care 두 기둥.
export const conditions = {
  eyebrow: '살아남는 병원의 조건',
  title: '환자가 기꺼이 비용을 지불하는 병원에는\n두 가지가 있습니다',
  subtitle: 'Trust와 Premium',
  letter: [
    '지금까지 많은 병원 마케팅은\n병원의 격과 급은 보지 못한 채\n마구잡이 노출에만 급급해 병원을 싸 보이게 만들었습니다',
    '저는 여기서 기회를 봤습니다\n원장님의 실력과 전문성을 기본으로\n진료의 가치를 제대로 평가받게 하자\n병원의 태도와 수준에 맞게 프리미엄한 이미지를 더하자',
    '그것이\n학생 때부터 지금까지 환자만을 위해 달려온\n원장님의 진짜 모습과 진정성임을\n수많은 원장님을 인터뷰하며\n깨달았기 때문입니다',
    '누구나 마케팅은 할 수 있지만\n아무나 브랜딩은 할 수 없습니다',
    '우리 병원의 성장과 명성이 어떻게 커가는지\n뿌리부터 열매까지 제대로 보여드리겠습니다',
  ],
  signature: '대표 노규락',
  pillars: [
    { label: '환자가 선택하는 이유', title: 'TRUST', description: '실력과 전문성에 대한 신뢰', quote: '“이 병원은 잘한다”' },
    { label: '환자가 지불하는 이유', title: 'PREMIUM', description: '나를 제대로 케어하고 돌봐준다는 경험', quote: '“이 병원은 나를 소중히 대한다”' },
  ],
};

// 원장님 인터뷰에서 들은 한마디 (첫 화면 바로 다음 섹션)
export const voice = {
  intro: '스물한 분의 원장님을 인터뷰하며 알게 된\n많은 원장님이 바라는 1가지',
  quote: '가격 경쟁 때문에 힘들어요\n다른 병원 다 하니까 안 맞춰 드리기도 그렇고...',
  answer: '우리 병원의 진료 가치를 제대로 알게 해 주세요',
};

// 우리가 보는 차이: 왼쪽 기존 병원 마케팅 → 오른쪽 루트의 병원 브랜딩
export const compare = {
  eyebrow: '우리가 보는 차이',
  title: '이번 달의 매출은 물론,\n10년 뒤의 명성까지 봅니다',
  left: '기존 병원 마케팅',
  right: '루트의 병원 브랜딩',
  rows: [
    ['이번 달 매출을 봅니다', '10년 뒤 명성까지 봅니다'],
    ['노출과 클릭에서 시작', '브랜드 진단에서 시작'],
    ['채널별 단기 운영', '뿌리 → 줄기 → 열매 → 숲의 브랜드 성장 구조'],
    ['가격 프로모션으로 환자 유입', '품격과 신뢰로 가격 저항 해소'],
    ['“얼마나 보였나”', '“얼마나 선택받고, 얼마에 결제됐나”'],
  ],
  footnote: '루트가 정의하는 성과는 노출이 아니라 **내원과 결제, 그리고 평판**입니다.',
};

// 루트의 약속. icon 이름은 src/components/Promises.astro의 icons에 있다.
export const promise = {
  eyebrow: 'ROOT의 약속',
  title: '루트가 성장해서 커져도\n원장님의 담당자는 바뀌지 않습니다',
  quote: '“지금 믿어 주신 원장님을 가장 마지막까지 책임지겠습니다”',
  signature: '대표 노규락',
  items: [
    { icon: 'userCheck', title: '끝까지 같은 사람', description: '루트가 커져도 대표가\n프로젝트 매니저로 직접 전담합니다.' },
    { icon: 'team', title: '두 디렉터 공동 브랜딩', description: '노규락 대표와 주현아 Director가\n브랜딩 전략부터 마케팅 실행까지\n직접 설계하고 실행합니다.' },
    { icon: 'calendar', title: '3개월마다 새로운 제안', description: '지역, 경쟁 병원, 환자 타깃 분석과\n브랜드 점검, 새로운 아이디어를\n분기별로 직접 찾아뵙고 제시합니다.' },
    { icon: 'shield', title: '의료법 대비부터 해결까지', description: '모든 콘텐츠는 의료광고 기준을 검토한 뒤 발행하고\n이슈 발생 시 끝까지 해결합니다.' },
    { icon: 'pin', title: '같은 진료권 한 곳만 대행', description: '원장님 병원을 위한 전략은 오직\n원장님 병원에만 쓰입니다.' },
    { icon: 'test', title: '신규 콘텐츠 1회 무료 제공', description: '새로 나온 콘텐츠를 저희 비용으로\n테스트하고 효과 검증 후 제안드립니다.' },
  ],
};

// 병원 연차별 4단계. art: 카드 위 그림(seed·stem·tree·forest — src/components/Stages.astro에 그려져 있다)
export const stages = {
  eyebrow: '병원 연차별 4단계',
  title: '병원의 나이와 상황에 맞게\n전략을 정교하게 설계해 브랜딩합니다',
  items: [
    { art: 'seed', badge: '씨앗', name: 'SEED', period: '개원 1년 이내', headline: '처음 심는 씨앗이\n병원의 10년을 결정합니다', lead: '시작부터 흔들리지 않는\n브랜드의 뿌리를 만듭니다', tag: '초기 정착', points: ['첫 브랜드 설계', '지역 인지도', '기본 채널 세팅'] },
    { art: 'stem', badge: '줄기', name: 'GROW', period: '3년 차', headline: '찾아오는 환자를\n선택하는 환자로', lead: '문의가 진료로 이어지는\n성장 구조를 세웁니다', tag: '성장 체계', points: ['문의 대비 결제율', '객단가', '대표 진료 브랜딩'] },
    { art: 'tree', badge: '나무', name: 'THRIVE', period: '7년 차', headline: '지역에서 가장 먼저\n떠오르는 병원으로', lead: '경쟁 속에서도 흔들리지 않는\n대표 병원의 자리를 굳힙니다', tag: '지역 대표 병원', points: ['지역 대표 진료 포지셔닝', '재방문·소개 환자 관리', '원장 전문성 브랜딩'] },
    { art: 'forest', badge: '숲', name: 'RENEW', period: '10년 이상', headline: '한 병원을 넘어\n지역이 신뢰하는 이름으로', lead: '쌓아 온 명성을 새롭게 다듬어\n다음 10년을 준비합니다', tag: '리뉴얼', points: ['브랜드 이미지 재정립', '리브랜딩', '쌓아 온 명성을 다음 10년의 자산으로'], highlight: true },
  ],
  footnote: '어느 단계든 기준은 같습니다. 지금의 매출과 10년 뒤의 명성을 함께 설계합니다.',
};
