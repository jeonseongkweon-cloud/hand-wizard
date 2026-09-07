# WEB LETTER RECOVERY REPORT — 2026-09-07

## 목적
기존에 제작했던 계명태권도·GLOBAL SPARK·ACTS·국제드론순찰대 관련 웹 편지를 덮어쓰기 없이 다시 찾고, 이후 언제든 호출할 수 있도록 복원 기준점을 기록한다.

## 1. KMT-W01 — 계명태권도 학부모 종합 웹 편지

### 개인 맞춤편 원형
- 기준 커밋: `7558aa1ada4e03dcfe1cabb39dfd6c1a991141c8`
- 커밋 메시지: `Upload 손안의 마법사 A01 v1.3.0 source`
- 특징:
  - 수련생 이름 입력
  - 수련생 사진 입력
  - 받는 분 호칭 선택
  - 관장 개인 메시지 입력
  - 모바일 미리보기
  - 개인 링크 생성
  - 초기에는 `card=` 방식 개인 데이터 인코딩
- 제작센터 예시 이름에 `김민규`가 명시됨.

### 10자리 개인 링크 체계
- 기준 커밋: `07de164c3624a711b019989d4974fb994a9536d5`
- 커밋 메시지: `Shorten Hand Wizard share IDs to 10 characters`
- 특징:
  - 개인 링크 저장 ID를 10자리로 변경
  - 이후 `?m=10자리ID` 구조의 기반

### 공통편 Story 01
- 기준 커밋: `f5c1c430c4da4e749381e1d14a614c0aacfc8ee1`
- 커밋 메시지: `Add Hand Wizard common story 01 mode`
- 호출 모드: `?mode=story01`
- 제목: `계명태권도에는 계명이와 별이가 있어요 ⭐`
- 주요 내용:
  - 부모님께 전하는 작은 손편지
  - 계명이·별이 소개
  - 칭찬별과 아이의 작은 노력
  - 태권도 기술만이 아니라 도전·함께 성장·자기존중을 강조
  - 전성권 관장 명의 편지

### 공통편 단축 경로
- 기준 커밋: `4b87adc70107c57a3ce56b969e8e4be37de37c29`
- 커밋 메시지: `Add short /story route for common story 01`
- 경로: `src/story/index.html`
- 동작: `/story/` 진입 시 `../?mode=story01`로 이동

## 2. KMT-W02 — 계명태권도 × GLOBAL SPARK 학부모 웹 편지

### GLOBAL SPARK 부모·일반인용 P01 원형
- 기준 커밋: `cdf39567ea51ac529db5747c64943597fc5a007a`
- 커밋 메시지: `feat: add GLOBAL SPARK parent story P01`
- 경로: `src/spark/p01/index.html`
- 당시 공식 경로 메타데이터: `/spark/p01/`
- 제목: `GLOBAL SPARK | 부모·일반인용 P01`
- 핵심 메시지: `작은 불꽃이 큰 변화를 만듭니다`
- 구성:
  - 친절의 불꽃
  - 책임의 불꽃
  - 도전의 불꽃
  - 행동 → 기록 → 성장
  - 부모님께
  - 우리 동네에서 세계로
  - 참여 안내
- 특징:
  - SPARK 전용 배너 이미지 다수 사용
  - 모바일 스토리텔링 구조
  - 김민규를 예시로 한 SPARK 기록 카드 포함
  - `SPARK_BANNER_25.webp`를 대표 OG 이미지로 사용

### 후속 연출 커밋
- `91058225c5d7f1a1840b8e57061c2fc71641929a` — 모바일 SPARK P01 스토리텔링 레이아웃
- `8baa8f73287df65e9b17dcfa0cbc5b3b1445a438` — reveal 효과 및 선택형 효과음 추가

## 3. ACTS-W01 — ACTS 선교연합 웹 편지

### ACTS NEWSLETTER 01
- 확인된 완성 계열 버전: v1.2.0 → v1.3.0
- v1.3.0 기준 커밋: `fc88cee9a6f881dfabcd6890af9499890249e7ef`
- 커밋 메시지: `ACTS newsletter 01: connect official ACTS pages v1.3.0`
- 경로: `acts/index.html`
- 제목: `ACTS NEWSLETTER 01 | 함께 기도해 주세요`
- 핵심 구성:
  - ACTS 소개
  - 선교 현장
  - 기도센터
  - 재능 나눔
  - 교육·무도선교
  - 함께하기
  - 카카오톡·공유
  - 링크 복사
- 공식 ACTS 홈페이지 각 페이지와 연결되는 구조까지 확인됨.

### 독립 빌드 구조
- 기준 커밋: `4a24455bce0a87088ba962203204aecf11c88cba`
- 커밋 메시지: `feat: add standalone ACTS newsletter builder`
- 경로: `acts/build.mjs`
- 의미: ACTS 웹 편지는 A01에 종속된 일회성 화면이 아니라 독립 배포 가능한 NEWSLETTER 구조로 만들어졌음.

## 4. IDP-W01 — 국제드론순찰대 웹 편지

### 현재 확인된 공유 자산
- 저장소: `ipma1822-png/IDP`
- 확인 경로:
  - `assets/images/share/idp-main-kakao-1200x630.jpg`
  - `assets/images/share/idp-simple-join-kakao-1200x630.jpg`
- 현재 main에서는 별도 `newsletter` 명칭의 커밋은 바로 확인되지 않음.
- 따라서 다음 조사에서는 IDP 전체 커밋 이력을 날짜순으로 추적하여 소개·공유·가입용 웹 편지 후보를 찾는다.

## 5. 복원 원칙
- 과거 커밋을 현재 운영 파일 위에 덮어쓰지 않는다.
- 복원본은 별도 보관 경로를 만든 뒤 복사한다.
- 권장 경로:
  - `archive/web-letters/kmt/w01/`
  - `archive/web-letters/kmt/w02-spark/`
  - `archive/web-letters/acts/w01/`
  - `archive/web-letters/idp/w01/`
- 원본 커밋 SHA를 각 폴더 README에 함께 기록한다.
- 현재 운영 페이지와 복원본은 분리한다.

## 6. 다음 복원 순서
1. KMT-W01 A01 v1.3.0 개인편 원본 파일을 아카이브로 복원
2. KMT-W01 공통 Story 01 원본을 아카이브로 복원
3. KMT-W02 GLOBAL SPARK P01 원본과 후속 연출 파일을 아카이브로 복원
4. ACTS NEWSLETTER 01 v1.3.0을 아카이브로 복원
5. IDP 웹 편지 후보를 커밋 이력에서 추가 발굴
6. 이후 태권검도·IPMA·Global News24·IPMA Publishing까지 확대

## 7. 호출용 이름
- `계명태권도 개인 웹 편지`
- `계명태권도 공통 웹 편지`
- `계명태권도 SPARK 학부모 웹 편지`
- `GLOBAL SPARK 부모용 P01`
- `ACTS 웹 편지 01`
- `드론순찰대 웹 편지 01`

이 문서는 `WEB-LETTER-MASTER-INDEX.md`의 복원 근거 문서로 사용한다.
