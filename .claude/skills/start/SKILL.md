---
name: start
description: 홈페이지 작업을 시작할 때 실행한다. 필요한 프로그램 설치 여부를 확인하고, 실시간 미리보기 서버를 켜서 브라우저로 연다. 사용자가 "시작", "미리보기", "화면 보여줘", "사이트 켜줘"라고 하거나, 세션을 처음 열었거나, 미리보기가 꺼져 있을 때 쓴다.
---

# 작업 시작 + 실시간 미리보기 (Windows)

## 1. 필요한 프로그램 확인
`node -v`, `git --version`, `gh --version`을 실행한다. 없는 것만 winget으로 설치한다.
- Node.js(22 미만이거나 없음): `winget install --id OpenJS.NodeJS.LTS -e --accept-source-agreements --accept-package-agreements`
- Git: `winget install --id Git.Git -e --accept-source-agreements --accept-package-agreements`
- GitHub CLI: `winget install --id GitHub.cli -e --accept-source-agreements --accept-package-agreements`
- 설치 중 "이 앱이 디바이스를 변경하도록 허용하시겠어요?" 창이 뜨면 "예"를 누르라고 미리 알려준다.
- 설치가 끝나면 **Claude를 완전히 껐다 다시 켜야** 새 프로그램이 인식된다. 다시 켠 뒤 "시작"이라고 말해 달라고 안내하고 여기서 멈춘다.
- winget이 없다고 나오면 Microsoft Store에서 "앱 설치 관리자(App Installer)"를 업데이트하라고 안내한다.

## 2. 패키지 설치
`node_modules` 폴더가 없으면 `npm install`을 실행한다.

## 3. 미리보기 켜기
- `npx astro dev status`로 이미 켜져 있는지 확인한다. 켜져 있으면 그 주소를 쓴다.
- 꺼져 있으면 `npx astro dev --background`로 켠다. Claude를 닫아도 계속 켜져 있다.
- 화면이 안 바뀌거나 이상하면 `npx astro dev logs`로 원인을 보고, 필요하면 `npx astro dev stop` 후 다시 켠다.
- PowerShell에서 "스크립트를 실행할 수 없으므로" 오류가 나면 `npx` 대신 `npx.cmd`를 쓴다.
- 출력에 나온 주소(보통 http://localhost:4321)를 `start http://localhost:4321`로 브라우저에 연다.
- Windows 방화벽 허용 창이 뜨면 "허용"을 누르라고 안내한다.

## 4. 사용자에게 안내
"미리보기를 열었어요. 이제 바꾸고 싶은 걸 말로 알려주세요. 고치면 브라우저 화면이 자동으로 바뀌어요."처럼 짧게 말한다.
