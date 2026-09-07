# WEB LETTER MASTER INDEX — 웹 편지 통합 보관함

업데이트: 2026-09-07

## 운영 원칙
- 기존 웹 편지는 다른 용도로 덮어쓰지 않는다.
- 새 작품은 새 번호를 부여한다: W01, W02, W03...
- 큰 개편은 v2.0, 소규모 수정은 v1.1 방식으로 기록한다.
- 공통편과 개인 맞춤편은 별도 항목으로 보존한다.
- 삭제/교체 전 Git 커밋 이력에서 이전 버전을 확인한다.
- 옛 명칭 '손안의 마법사' 자료도 모두 '웹 편지' 범주로 보존한다.

## 확인된 웹 편지/관련 자산

### KMT-W01 — 계명태권도 학부모 종합 웹 편지
- 저장소: jeonseongkweon-cloud/hand-wizard
- 상태: 운영 구조 확인
- 공통편: mode=story01 방식
- 개인편: m=10자리ID 방식
- 개인화 요소: 원생 이름/사진 등
- 관련 경로: src/, src/story/, center/, Supabase 연동 파일
- 비고: 과거 버전과 현재 버전의 차이는 커밋 이력 추가 조사 필요

### KMT-W02 — 계명태권도 × GLOBAL SPARK 학부모 웹 편지
- 저장소: jeonseongkweon-cloud/hand-wizard
- 상태: 원본 자산/전용 페이지 확인
- 관련 경로: src/spark/p01/index.html, src/spark/p01/app.js, src/spark/p01/styles.css
- 관련 이미지: assets/spark/SPARK_BANNER_01.webp ~ SPARK_BANNER_40.webp 계열
- 목적: 계명태권도 학부모에게 GLOBAL SPARK 설명
- 복원: 과거 개인화/공통편 연결 구조를 커밋 이력에서 추가 조사

### SPARK-W01 — GLOBAL SPARK 공용 소개 웹 편지
- 저장소: ipma1822-png/global-spark
- 알려진 페이지: spark-magic.html
- 상태: 현행 페이지와 과거 버전 비교 조사 필요
- 목적: 불특정 다수에게 GLOBAL SPARK 소개 및 첫 참여 유도

### ACTS-W01 — ACTS 선교연합 소개 웹 편지
- 관련 저장소: jeonseongkweon-cloud/hand-wizard, jeonseongkweon-cloud/acts-mission
- hand-wizard 내 acts/ 독립 구조 및 전용 이미지 자산 확인
- 상태: 실제 배포 주소 및 과거 작품 버전 추가 조사 필요

### IDP-W01 — 국제드론순찰대 웹 편지
- 관련 저장소: ipma1822-png/IDP
- 상태: 본 사이트 내 카카오 공유용 이미지 자산 확인
- 확인 자산: assets/images/share/idp-main-kakao-1200x630.jpg, idp-simple-join-kakao-1200x630.jpg
- 복원: 웹 편지 자체 페이지/과거 커밋 추가 조사 필요

## 다음 조사 대상
1. hand-wizard 커밋 이력에서 KMT-W01 개인편/공통편의 완성 시점 찾기
2. KMT-W02 SPARK 학부모 웹 편지의 원래 화면과 개인화 구조 복원 후보 찾기
3. global-spark의 spark-magic.html 변경 이력 비교
4. acts-mission 및 hand-wizard/acts의 배포본/이전 버전 조사
5. IDP 커밋 이력에서 웹 편지·카카오 공유·소개 페이지 후보 조사
6. 이후 태권검도/IPMA/Global News24/IPMA Publishing 웹 편지 후보까지 확대

## 호출 규칙
앞으로 아래처럼 요청하면 이 인덱스를 기준으로 찾는다.
- '계명태권도 웹 편지 보여줘'
- '김민규 개인 웹 편지 찾아줘'
- '스파크 학부모 웹 편지 불러줘'
- 'ACTS 웹 편지 주소 줘'
- '드론 웹 편지 불러줘'
