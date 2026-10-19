# 홈페이지 템플릿

이 프로젝트의 사용자는 **병원 전문 마케팅 회사를 운영하는, 개발을 모르는 마케터**(Windows 사용)다. 자기 회사 홈페이지를 만든다. 프로그램 설치는 winget, 브라우저 열기는 `start <주소>`로 한다. 사용자는 "카드 하나 더 추가해줘", "갤러리 섹션 빼줘", "소개에 사진 넣어줘" 같은 말로 요청한다.

## 대화 규칙
- 쉬운 한국어로 말한다. 터미널·커밋·빌드 같은 용어는 쓰지 말고 "저장", "올리기", "미리보기"로 표현한다.
- 명령어를 사용자에게 치라고 하지 않는다. 직접 실행한다. 사용자 손이 꼭 필요한 일(설치 프로그램 실행, 브라우저 로그인)만 한 단계씩 안내한다.
- 수정 뒤에는 "미리보기 창에서 바로 확인할 수 있어요"처럼 어디서 보면 되는지 알려준다.
- 요청이 모호하면 추측해서 고친 뒤 무엇을 바꿨는지 한 줄로 말한다. 질문은 정말 갈리는 경우에만 한다.

## 처음 쓰는 사용자 안내
사용자가 "뭐부터 해야 해?", "어떻게 시작해?", "다음은 뭐야?"처럼 물으면 아래 단계를 보여주고, 상태를 직접 확인해서 끝난 단계엔 ✅, 지금 할 단계엔 👉를 붙인다. 그리고 "👉 단계를 지금 같이 할까요?"라고 묻고, 좋다고 하면 그 단계의 스킬을 실행한다. 한 단계가 끝나면 다음 단계를 한 줄로 알려준다.

| 단계 | 하는 일 | 끝났는지 확인하는 법 | 실행 |
|---|---|---|---|
| 1. 준비 | 프로그램 설치, 미리보기 켜기 | `node_modules`가 있고 `npx astro dev status`가 켜져 있음 | `/start` |
| 2. 내용 채우기 | 상호·연락처·메뉴 이름·각 섹션 글·사진 바꾸기 | `src/site.ts`의 `name`이 '회사명'이 아니고 `nav`에 '메뉴 1'이 없음 | 말로 요청 |
| 3. 공개하기 | GitHub에 올려 인터넷 주소 받기 | `git remote get-url origin` 성공, `gh api repos/{owner}/{repo}/pages` 성공 | `/deploy` |
| 4. 내 도메인 연결 (선택) | 산 도메인을 사이트에 연결 | `gh api repos/{owner}/{repo}/pages --jq .cname` 값이 있음 | `/domain` |
| 5. 검색 등록 | 구글·네이버에 사이트 알리기 | `src/site.ts`의 `verification` 값이 채워져 있음 | `/search-register` |

- 도메인을 연결할 계획이면 4단계를 5단계보다 먼저 한다(주소가 바뀌면 검색 등록을 다시 해야 하므로).
- 2단계는 끝이 없다. 내용은 언제든 고칠 수 있고, 고친 뒤엔 `/deploy`로 다시 올리면 된다고 알려준다.

## 작업 흐름
- 처음 열었거나 미리보기가 꺼져 있으면 `/start` 스킬을 실행한다.
- 사용자가 "배포", "올려줘", "사이트에 반영", "공개" 같은 말을 하면 `/deploy` 스킬을 실행한다.
- 사용자가 "검색 등록", "구글/네이버에 나오게" 같은 말을 하면 `/search-register` 스킬을 실행한다. 브라우저 작업은 Claude in Chrome(`/chrome`)으로 한다.
- 사용자가 "도메인 연결", "내 주소로" 같은 말을 하면 `/domain` 스킬을 실행한다.

## 구조
원페이지 사이트다. 첫 페이지 하나에 섹션이 세로로 이어지고, 상단 메뉴는 섹션으로 이동하는 앵커다. 처음 상태의 글은 전부 "카드 제목 1", "섹션 설명이 들어갑니다" 같은 자리 표시 문구다.

- `src/site.ts`: 회사 정보. 상호, 기본 설명, 상단 메뉴(`nav`), 연락처(`contact`: 전화·카카오톡 채널·이메일·주소·운영시간), 바닥글 표기(`legal`: 대표자·사업자번호). 상단 메뉴·문의 섹션·플로팅 메뉴·바닥글이 전부 이 값을 쓴다.
- `src/content.ts`: 섹션에 들어가는 글. `hero`(첫 화면), `about`(소개), `features`(카드 목록), `steps`(단계 목록), `gallery`(이미지 목록), `posts`(링크 목록). "카드 하나 추가", "단계 하나 빼줘", "소개 글 고쳐줘" 요청은 이 파일만 고친다. 항목 수는 자유다.
- `src/styles/global.css`: 디자인 토큰. 색·글꼴·크기·간격은 여기서만 정한다. 다른 CSS 파일은 만들지 않는다.
- `src/layouts/Layout.astro`: 공통 머리말(SEO 메타태그) + `Header`/`Footer`/`QuickMenu`. SEO 부분은 건드리지 않는다.
- `src/pages/index.astro`: 첫 페이지. 섹션 순서가 여기 있다.
- `src/pages/404.astro`: 없는 주소로 들어왔을 때 페이지.
- `src/components/`: 부품.
  - 뼈대: `Section`(한 단락. `id`·`eyebrow`·`title`·`lead`·`tone="surface"`·`narrow`), `Container`, `Header`, `Footer`, `QuickMenu`(하단 고정 전화·카카오톡·맨 위로)
  - 섹션 부품(모두 `Section` 안에 넣고 `content.ts`의 데이터를 넘긴다): `Hero`(h1, 첫 화면에만. `{...hero}`), `About`(글+이미지 좌우 배치. `{...about}`, `reverse`로 이미지 위치 바꿈), `CardGrid`(`items`, `columns=2|3|4`), `Steps`(`items`, 번호 자동), `Gallery`(`items`, 가로로 넘기는 이미지), `LinkCards`(`items`, 외부 링크), `ContactChannels`(전화·카카오톡·이메일, site.ts에서 자동)
  - 기본: `Button`(`href`·`variant="primary|secondary|ghost|kakao"`·`size="md|lg"`·`full`)
- `src/assets/`: 사진. `content.ts` 맨 위에서 import해서 `image` 자리에 넣는다. `placeholder.svg`는 사진이 없을 때 나오는 회색 자리.
- `public/`: 파비콘, og.png 등 그대로 올라갈 파일.

### 브랜드 컬러 바꾸기
`src/styles/global.css`의 `--primary` 한 줄만 바꾼다. 연한 배경(`primary-surface`)과 포커스 링(`ring`)은 자동으로 따라온다. 흰 글자 버튼에 쓰이므로 너무 밝은 색(파스텔·노랑·연두)은 피하고, 사용자가 밝은 색을 원하면 같은 계열의 진한 색으로 넣고 그렇게 했다고 말한다.

### 섹션 추가·삭제·순서 바꾸기
- 빼기: `src/pages/index.astro`에서 해당 `<Section …> … </Section>` 블록을 지운다. `src/site.ts`의 `nav`에 그 id가 있으면 같이 지운다.
- 순서: `index.astro`에서 블록을 옮긴다. 배경은 흰색↔연회색(`tone="surface"`)이 번갈아 오도록 `tone`을 맞춘다.
- 같은 종류 하나 더: `content.ts`에 배열을 하나 더 만들고(`features2` 등) `index.astro`에 `<Section id="새이름" …><CardGrid items={features2} /></Section>`을 추가한다.
- 새 종류: `content.ts`에 데이터, `src/components/`에 그리는 부품(`LinkCards.astro`가 가장 단순한 본보기), `index.astro`에 `<Section>` 블록. 메뉴에 넣으려면 `site.ts`의 `nav`에 `{ href: '/#새이름', label: '…' }`.

## 지켜야 할 것
- 내부 링크·앵커·`public/` 파일 경로는 반드시 `url('/경로')`로 감싼다(`import { url } from '../site'`). 앵커도 `url('/#about')`다. GitHub Pages가 `/저장소명/` 아래에서 서비스되기 때문이다. `href="/..."`나 `href="#..."`를 직접 쓰면 배포 후 링크가 깨진다.
- 색은 토큰 이름만 쓴다: `primary`, `primary-surface`, `secondary`, `background`, `surface`, `surface-accent`, `foreground`, `foreground-muted`, `foreground-subtle`(큰 글자·장식만), `border`, `border-accent`, 상태색 `success|info|warning|destructive`(+`-surface`). Tailwind 기본 색(`blue-600` 등)은 쓰지 않는다.
- 글자 크기는 `text-16`처럼 px 숫자 이름을 쓴다(10·12·13·14·15·16·18·20·22·24·28·32·36·40·46). `text-base`·`text-lg`는 없다. 본문 16, 카드 제목 20, 섹션 제목 28→36, h1 32→46.
- `html`의 글자 기준 크기가 62.5%라 **1rem = 10px**이다. 간격 클래스(`p-4` = 16px)는 평소처럼 쓰되, `rem`을 직접 적을 땐 px ÷ 10으로 적는다.
- `<h1>`은 `Hero`에 하나뿐이다. 섹션 제목은 h2, 카드 제목은 h3.
- 이미지는 `alt`를 꼭 쓴다. 사진은 `src/assets/`에 두고 `astro:assets`의 `<Image />`를 쓴다.
- 서버가 없는 정적 사이트라 폼이 없다. 상담 동선은 전화·카카오톡·이메일 링크다.
- 자바스크립트는 쓰지 않는다. 메뉴는 `<details>`, 갤러리는 CSS scroll-snap으로 동작한다. 외부 스크립트·라이브러리를 추가하지 않는다.
- 사용자가 실제 문구를 넣을 때 표시광고법을 지킨다. "상위노출 100% 보장", "업계 1위", "매출 N배", "최고·최초·유일" 같은 결과 보장이나 근거 없는 최상급 표현은 넣지 않는다. 사용자가 요청해도 사실 위주 표현으로 바꿔 제안한다. 고객사 이름·후기는 동의받은 것만 싣는다.
- `astro.config.mjs`, `.github/workflows/deploy.yml`, `package.json`은 사용자가 요청한 기능에 꼭 필요할 때만 건드린다. `seligent-landing-page/` 폴더는 참고용이니 수정하지 않는다.
- 수정이 끝나면 `npm run build`로 깨진 곳이 없는지 확인한다.
