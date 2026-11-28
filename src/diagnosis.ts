// 병원 브랜딩 타입 진단(간이판 13문항: 기획서 v3 12문항 + 브랜딩 축 문항 1개). /diagnosis 페이지가 이 파일을 그린다.
// 문항·선택지·타입 이름·설명은 여기서만 고친다. 기준(축)과 채점 방식은 기획서 v3(진료 트랙)와 같다.
//
// 점수 표기: 'D2' = 원장님 쪽 2점, 'T1' = 우리 팀 쪽 1점.
//   D 원장님 / T 우리 팀 · C 설명과 공감 / S 실력과 결과 · L 우리 동네 / P 전문 분야
// 타입 코드는 화면에 나오지 않는다(내부 채점용).

export type Side = 'D' | 'T' | 'C' | 'S' | 'L' | 'P';
export type AxisKey = 'face' | 'trust' | 'place';

// 세 가지 기준. left/right는 결과 막대의 왼쪽·오른쪽 끝 글자다.
export const axes: { key: AxisKey; question: string; left: { side: Side; label: string }; right: { side: Side; label: string }; core: number }[] = [
  { key: 'face', question: '환자는 누구를 보고 오나요?', left: { side: 'D', label: '원장님' }, right: { side: 'T', label: '우리 팀' }, core: 1 },
  { key: 'trust', question: '무엇으로 믿음을 얻나요?', left: { side: 'C', label: '설명과 공감' }, right: { side: 'S', label: '실력과 결과' }, core: 8 },
  { key: 'place', question: '어디에서 선택받고 싶나요?', left: { side: 'L', label: '우리 동네' }, right: { side: 'P', label: '전문 분야' }, core: 12 },
];

// 0번 진료과목. 점수에는 들어가지 않는다. beauty=true면 결과 아래에 미용 트랙 준비 중 안내가 붙는다.
export const subjects = [
  { value: 'dental', label: '치과' },
  { value: 'korean', label: '한의원' },
  { value: 'derma', label: '피부과(피부질환)' },
  { value: 'ortho', label: '정형외과' },
  { value: 'beauty', label: '미용피부과·성형외과', beauty: true },
];

// 12문항, 문항마다 보기 5개(가운데 보기는 진료 실력이 드러나도록 보강한 것. 한쪽으로 몰리지 않게 기준 양쪽에 고르게 1점씩). no = 기획서 v3 간이판 번호(채점·동점 처리에 쓰는 번호). 화면에는 기준이 섞이도록 order 순서로 나온다.
export const questions: { no: number; axis: AxisKey; text: string; options: { text: string; score: string }[] }[] = [
  { no: 1, axis: 'face', text: '5년 뒤, 환자가 지인에게 우리 병원을 이렇게 소개했으면 좋겠다.', options: [
    { text: '“원장님이 처음부터 끝까지 직접 봐주셔.”', score: 'D2' },
    { text: '“누구한테 물어봐도 설명을 잘해줘.”', score: 'T1' },
    { text: "원장님 실력이 좋아서 처음부터 끝까지 믿고 맡겨.", score: 'D1' },
    { text: '“원장님이 좋고, 직원들도 친절해.”', score: 'D1' },
    { text: '“진료부터 안내까지 병원 전체가 체계적이야.”', score: 'T2' },
  ] },
  { no: 2, axis: 'face', text: '홈페이지 첫 화면에 가장 크게 보여주고 싶은 것은?', options: [
    { text: '원장님 사진과 진료 철학', score: 'D2' },
    { text: '의료진 전체 사진과 팀 소개', score: 'T1' },
    { text: "의료진 각자의 전문 분야와 경력", score: 'T1' },
    { text: '병원 공간과 진료 시스템', score: 'T2' },
    { text: '원장님 소개와 함께 일하는 의료진', score: 'D1' },
  ] },
  { no: 3, axis: 'face', text: '원장님이 일주일 휴가를 간다면, 병원은 이랬으면 좋겠다.', options: [
    { text: '평소처럼 운영된다. 시스템이 알아서 돌아간다.', score: 'T2' },
    { text: '급한 진료만 대진하고, 중요한 진료는 복귀 후에 한다.', score: 'D1' },
    { text: "어느 의료진이 봐도 같은 실력이 나오도록 체계를 갖춰 둔다.", score: 'T1' },
    { text: '휴진한다. 내 환자는 내가 봐야 한다.', score: 'D2' },
    { text: '다른 의료진이 대부분의 진료를 이어받는다.', score: 'T1' },
  ] },
  { no: 4, axis: 'face', text: '홍보 콘텐츠에 원장님 얼굴이 나오는 정도는?', options: [
    { text: '적극적으로. 영상과 칼럼 모두 원장님이 주인공', score: 'D2' },
    { text: '최소한으로. 병원과 팀 중심', score: 'T1' },
    { text: "원장님의 진료 실력과 생각을 영상·칼럼으로 꾸준히", score: 'D1' },
    { text: '칼럼 위주로 적당히', score: 'D1' },
    { text: '병원 브랜드가 주인공. 개인 노출은 없어도 된다', score: 'T2' },
  ] },
  { no: 5, axis: 'trust', text: '환자가 치료를 망설일 때 가장 좋은 방법은?', options: [
    { text: '비슷한 케이스의 결과를 보여준다.', score: 'S1' },
    { text: '시간을 들여 걱정을 충분히 들어준다.', score: 'C2' },
    { text: "비슷한 케이스를 치료해 온 경험을 들려준다.", score: 'S1' },
    { text: '정확한 진단 근거로 판단을 제시한다.', score: 'S2' },
    { text: '그림이나 모형으로 쉽게 설명한다.', score: 'C1' },
  ] },
  { no: 6, axis: 'trust', text: '환자가 우리 병원을 이렇게 기억했으면 좋겠다.', options: [
    { text: '마음을 편하게 해준 병원', score: 'C2' },
    { text: '정확하게 진단해준 병원', score: 'S1' },
    { text: "어려운 진료도 쉽게 이해시켜 믿고 맡기게 해준 병원", score: 'C1' },
    { text: '이해될 때까지 설명해준 병원', score: 'C1' },
    { text: '결과가 확실한 병원', score: 'S2' },
  ] },
  { no: 7, axis: 'trust', text: '원장님이 스스로 가장 자신 있는 것은?', options: [
    { text: '정확한 진단', score: 'S1' },
    { text: '환자의 마음을 읽는 것', score: 'C2' },
    { text: "정확한 진단을 환자가 납득하도록 설명하는 것", score: 'C1' },
    { text: '어려운 케이스를 해결하는 실력', score: 'S2' },
    { text: '어려운 내용을 쉽게 설명하는 것', score: 'C1' },
  ] },
  { no: 8, axis: 'trust', text: '처음 온 환자의 첫 방문에서 가장 중요한 것은?', options: [
    { text: '정밀 검사로 상태를 정확히 파악하는 것', score: 'S1' },
    { text: '환자의 이야기를 끝까지 들어주는 것', score: 'C2' },
    { text: "정확한 진단으로 “여기는 다르다”를 느끼게 하는 것", score: 'S1' },
    { text: '첫 진료부터 “여기는 다르다”를 느끼게 하는 것', score: 'S2' },
    { text: '앞으로의 치료 과정을 환자가 이해하게 하는 것', score: 'C1' },
  ] },
  { no: 9, axis: 'place', text: '가장 많이 와 주었으면 하는 환자는?', options: [
    { text: '걸어서 오는 동네 주민과 그 가족', score: 'L2' },
    { text: '특정 진료를 받으러 먼 곳에서도 오는 환자', score: 'P2' },
    { text: "실력 좋다는 소문을 듣고 걸어서 오는 동네 주민과 가족", score: 'L1' },
    { text: '동네 주민 대부분, 가끔 전문 진료를 찾는 환자', score: 'L1' },
    { text: '특정 진료를 받으러 인근 지역에서 오는 환자', score: 'P1' },
  ] },
  { no: 10, axis: 'place', text: '네이버에서 이 검색어 1위를 하고 싶다.', options: [
    { text: '“[진료명] 잘하는 곳” (지역 없이)', score: 'P2' },
    { text: '“[동네 이름] + 진료과”', score: 'L2' },
    { text: "“[원장님 이름] 원장님”", score: 'P1' },
    { text: '“[넓은 지역] + [전문 진료]”', score: 'P1' },
    { text: '“[구·시] + 진료과 추천”', score: 'L1' },
  ] },
  { no: 11, axis: 'place', text: '환자와 이런 관계를 맺고 싶다.', options: [
    { text: '대를 이어 다니는 평생 주치의', score: 'L2' },
    { text: '큰 치료 한 번을 제대로 해내는 병원', score: 'P2' },
    { text: "어려운 치료를 실력으로 제대로 해내는 병원", score: 'P1' },
    { text: '가족 전체가 오래 다니는 병원', score: 'L1' },
    { text: '치료 후 몇 년간 정기 관리를 이어가는 병원', score: 'P1' },
  ] },
  { no: 12, axis: 'place', text: '우리 병원을 한 문장으로 소개한다면?', options: [
    { text: '“우리 가족 주치의”', score: 'L2' },
    { text: '“○○ 분야는 이 병원”', score: 'P2' },
    { text: "“동네에서 실력 좋기로 소문난 병원”", score: 'L1' },
    { text: '“동네에서 믿고 가는 병원”', score: 'L1' },
    { text: '“○○ 잘하는 우리 지역 병원”', score: 'P1' },
  ] },
  // 13번: 루트의 두 브랜딩 축(TRUST 실력·기술 / PREMIUM 응대·고급)이 보기에 녹아든 문항. 새 기준을 만들지 않고 "무엇으로 믿음을 얻나요?" 기준에 점수를 넣는다
  { no: 13, axis: 'trust', text: '환자가 우리 병원에서 “역시 여기는 다르다”고 느끼는 순간이 이랬으면 좋겠다.', options: [
    { text: '원장님의 정밀한 진단과 섬세한 손기술을 직접 경험할 때', score: 'S2' },
    { text: '최신 장비와 체계적인 진료 과정을 눈으로 확인할 때', score: 'S1' },
    { text: '원장님만의 진료 철학과 개성이 상담에서 자연스럽게 묻어날 때', score: 'C1' },
    { text: '공간부터 응대, 안내까지 대접받는 고급스러움이 느껴질 때', score: 'C2' },
    { text: '실력도 응대도 한결같이 ‘이 병원답다’는 품격이 느껴질 때', score: 'C1' },
  ] },
];

// 화면에 나오는 순서. 세 기준이 번갈아 나오게 섞었다.
export const order = [1, 5, 9, 2, 6, 10, 3, 7, 11, 4, 8, 12, 13];

// 8타입. code는 내부용(원장님/팀 · 설명/실력 · 전문/동네 순).
export const types: { code: string; name: string; quote: string; who: string; strengths: string[]; growth: string }[] = [
  { code: 'DCP', name: '설명하는 멘토', quote: '거기 원장님은 이해될 때까지 설명해 줘.', who: '환자가 충분하다고 느낄 때까지 듣고 설명하시는 원장님', strengths: ['설명력', '원장님을 보고 오는 환자', '오래 가는 관계'], growth: '상담실의 경험을 방문 전에 미리 느끼게 하는 법' },
  { code: 'DSP', name: '한 분야의 장인', quote: '어려운 건 거기 가야 해.', who: '말보다 정확한 진단과 결과로 신뢰를 얻는 원장님', strengths: ['깊은 실력', '정직한 진료 원칙', '어려운 케이스 해결'], growth: '실력을 환자가 알아볼 수 있는 말로 옮기는 법' },
  { code: 'TCP', name: '세심한 호스트', quote: '거기는 병원 같지 않게 편해.', who: '진료의 모든 순간을 환자 입장에서 설계하시는 원장님', strengths: ['공간과 동선', '팀의 응대 문화', '오래 머무는 환자'], growth: '직접 와야 아는 경험을 온라인에서 보여주는 법' },
  { code: 'TSP', name: '든든한 전문팀', quote: '거기는 처음부터 끝까지 알아서 해줘.', who: '의료진과 시스템으로 안정된 진료를 만드시는 원장님', strengths: ['협진 체계', '예측 가능한 과정', '안정된 결과'], growth: '체계 위에 의료진의 얼굴과 온기를 더하는 법' },
  { code: 'DCL', name: '다정한 주치의', quote: '우리 원장님은 다 기억하셔.', who: '환자의 이름과 가족 사정까지 기억하시는 원장님', strengths: ['오래 쌓인 신뢰', '가족 단위 단골', '친근함'], growth: '동네에 쌓인 관계를 새 주민에게도 보여주는 법' },
  { code: 'DSL', name: '동네 숨은 고수', quote: '동네에 이런 데가 있어서 다행이야.', who: '가까운 곳에서 큰 병원 못지않게 꼼꼼히 진료하시는 원장님', strengths: ['검증된 실력', '입소문', '과잉 없는 진료'], growth: '입소문을 검색에서도 보이게 하는 법' },
  { code: 'TCL', name: '온 가족 사랑방', quote: '우리 집은 다 여기 다녀.', who: '병원 가는 부담을 줄여주는 분위기를 만드시는 원장님', strengths: ['밝은 팀 분위기', '세대별 진료', '높은 재방문'], growth: '편안함 위에 원장님의 전문성을 얹는 법' },
  { code: 'TSL', name: '바쁜 날의 해결사', quote: '퇴근하고 가도 제대로 봐줘.', who: '환자의 시간을 아끼면서도 정확하게 진료하시는 원장님', strengths: ['편리한 이용', '일정한 진료 품질', '짧은 대기'], growth: '편리함이 가격 비교로 이어지지 않게 하는 법' },
];
