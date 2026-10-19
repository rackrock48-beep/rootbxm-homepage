---
name: deploy
description: 홈페이지를 GitHub Pages에 배포(공개)한다. 처음이면 GitHub 로그인, 저장소 생성, Pages 설정까지 하고, 이후에는 변경 사항을 올리고 배포 완료까지 지켜본 뒤 주소를 알려준다. 사용자가 "배포", "올려줘", "공개해줘", "사이트에 반영"이라고 할 때 쓴다.
---

# GitHub Pages 배포

배포는 `.github/workflows/deploy.yml`이 한다. main 브랜치에 올리면 GitHub Actions가 빌드하고 Pages에 게시한다. 이 스킬은 거기까지 가는 길만 처리한다.

## 0. 먼저 확인
- `npm run build`가 성공해야 한다. 실패하면 원인을 고치고 다시 확인한 뒤에 올린다.
- `gh auth status`가 실패하면 `gh auth login --web --git-protocol https`를 실행하고, 화면에 나온 8자리 코드를 브라우저에 입력해 로그인하라고 안내한다. GitHub 계정이 없으면 https://github.com/signup 에서 먼저 만들게 한다.

## 1. 처음 배포할 때만 (`git remote get-url origin`이 실패하면)
1. `.git`이 없으면 `git init -b main`을 실행한다.
2. git 사용자 정보가 없으면(`git config user.email`이 비었으면) `gh api user`로 login과 id를 얻어 `git config user.name "<login>"`, `git config user.email "<id>+<login>@users.noreply.github.com"`을 설정한다.
3. 저장소 이름을 사용자에게 묻는다(영문 소문자와 하이픈, 예: `my-company`). 주소가 `https://아이디.github.io/저장소이름/`이 된다고 알려준다. 저장소 이름을 `아이디.github.io`로 하면 주소가 `https://아이디.github.io/`가 된다는 것도 알려준다. 검색 노출이 목적이면 `아이디.github.io`를 **추천**한다(robots.txt가 제대로 적용되고 주소도 짧다). 계정당 하나만 만들 수 있다.
4. `git add -A && git commit -m "첫 홈페이지"` 후 `gh repo create <이름> --public --source . --push`.
   - 무료 계정은 GitHub Pages에 **public 저장소**가 필요하다고 한 줄로 알려준다.
5. Pages를 Actions 방식으로 켠다: `gh api -X POST repos/{owner}/{repo}/pages -f build_type=workflow`(이미 켜져 있다는 오류는 무시).
6. 첫 push 때 Pages가 꺼져 있어서 실패한 실행이 있을 수 있으니 `gh workflow run deploy.yml`로 다시 돌린다.

## 2. 이후 배포
1. `git status`로 바뀐 것이 있는지 본다. 없으면 "이미 최신 상태예요"라고 말하고 끝낸다.
2. 바뀐 내용을 한국어 한 줄로 요약해 커밋 메시지로 쓴다: `git add -A && git commit -m "<요약>"`.
3. `git push`.

## 3. 완료 확인
- `gh run list --workflow deploy.yml --limit 1 --json databaseId`로 실행 ID를 얻고 `gh run watch <id> --exit-status`로 끝날 때까지 기다린다.
- 실패하면 `gh run view <id> --log-failed`로 원인을 보고 고친 뒤 다시 올린다. 사용자에게는 "배포 중 문제가 있어 고쳤어요" 정도로만 말한다.
- 성공하면 `gh api repos/{owner}/{repo}/pages --jq .html_url`로 주소를 얻어 알려준다. 반영까지 1~2분 걸릴 수 있다고 덧붙인다.
