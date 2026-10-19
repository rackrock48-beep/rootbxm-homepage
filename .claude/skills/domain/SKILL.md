---
name: domain
description: 사용자가 산 도메인(예: mycompany.com)을 GitHub Pages 사이트에 연결한다. GitHub 설정, 도메인 업체(가비아·카페24·후이즈 등)의 DNS 설정, HTTPS 켜기, 주소 바뀐 뒤 재배포까지 한다. 사용자가 "도메인 연결", "내 주소로", "도메인 샀어", "www 붙여서"라고 할 때 쓴다.
---

# 커스텀 도메인 연결

먼저 `/deploy`로 한 번 이상 배포되어 있어야 한다. 아래 `{owner}/{repo}`는 `gh repo view --json nameWithOwner --jq .nameWithOwner` 값이다.

## 1. 무엇을 연결할지 정하기
사용자가 준 도메인이 `mycompany.com`이면 대표 주소를 `www.mycompany.com`으로 하고 `mycompany.com`도 함께 연결한다(GitHub이 둘 사이를 자동으로 넘겨준다). 사용자가 www 없이 쓰고 싶다고 하면 그대로 따른다.

## 2. GitHub에 도메인 등록
`gh api -X PUT repos/{owner}/{repo}/pages -f cname=<대표 주소>`
- 이 저장소는 Actions로 배포하므로 `CNAME` 파일은 만들지 않는다(무시된다).

## 3. 도메인 업체에서 DNS 설정
Claude in Chrome으로 도메인 업체 사이트의 DNS 관리 화면을 연다. 로그인은 사용자가 직접 한다(비밀번호를 묻지 않는다). 아래 레코드를 넣고, 같은 이름의 기존 A/CNAME 레코드(업체 기본 주차 페이지 등)는 지운다.

| 종류 | 호스트(이름) | 값 |
|---|---|---|
| A | `@` (비워 두기) | 185.199.108.153 |
| A | `@` | 185.199.109.153 |
| A | `@` | 185.199.110.153 |
| A | `@` | 185.199.111.153 |
| CNAME | `www` | `<GitHub 아이디>.github.io` |

- 업체마다 화면 이름이 다르다: 가비아 "DNS 관리", 카페24 "DNS 관리/레코드 설정" 등. 모르면 화면을 보고 찾는다.
- 대표 주소가 `blog.mycompany.com` 같은 하위 도메인이면 A 레코드 없이 그 이름의 CNAME 하나만 넣는다.

## 4. 연결 확인 → HTTPS 켜기
- `nslookup <대표 주소>`로 위 IP나 github.io가 나오는지 본다. 보통 몇 분~몇 시간 걸린다. 아직이면 "도메인이 퍼지는 중이에요. 조금 뒤에 '도메인 확인해줘'라고 말해 주세요."라고 하고 멈춘다.
- 연결되면 `gh api repos/{owner}/{repo}/pages --jq .https_certificate.state`가 `approved`가 될 때까지 기다린 뒤 `gh api -X PUT repos/{owner}/{repo}/pages -F https_enforced=true`. 인증서가 나오기 전에 켜면 실패하니 순서를 지킨다.

## 5. 재배포
`gh workflow run deploy.yml` 후 `gh run watch`로 끝까지 본다. 빌드가 새 도메인을 자동으로 읽어서 canonical, sitemap, robots.txt 주소가 모두 새 도메인으로 바뀐다. `https://<대표 주소>/sitemap-index.xml`이 열리는지 확인한다.

## 6. 마무리 안내
- "이제 https://<대표 주소> 로 접속돼요. 예전 github.io 주소도 새 주소로 자동 연결돼요."
- 검색엔진에 이미 예전 주소로 등록했다면 새 주소는 **새 사이트로 다시 등록**해야 하니 `/search-register`를 다시 하자고 제안한다.
- 권장(선택): 다른 사람이 이 도메인을 가로채지 못하게 GitHub 계정 Settings → Pages → "Add a domain"으로 도메인 소유 확인(TXT 레코드)을 해 두면 좋다고 한 줄로 알려준다.
