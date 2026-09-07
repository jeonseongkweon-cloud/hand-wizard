# WEB LETTER ARCHIVE — 웹 편지 복원 보관함

복원일: 2026-09-07

이 폴더는 과거에 제작된 웹 편지를 현재 운영본과 분리해 안전하게 보존하기 위한 아카이브입니다. 운영 파일을 덮어쓰지 않으며, 각 복원본은 원본 Git 커밋의 blob을 그대로 재사용해 보존합니다.

## 복원 항목

### KMT-W01-PERSONAL — 계명태권도 학부모 개인 웹 편지
- 기준 커밋: 07de164c3624a711b019989d4974fb994a9536d5
- 특징: 원생 이름/사진/호칭/관장 메시지, 10자리 공유 ID 체계
- 보존 파일: index.html, app.js, styles.css, center.html, center.js, center.css

### KMT-W01-COMMON — 계명태권도 학부모 공통 웹 편지
- 기준 커밋: 4b87adc70107c57a3ce56b969e8e4be37de37c29
- 특징: mode=story01, /story/ 단축 진입
- 보존 파일: app.js, story/index.html
- 공통 레이아웃/스타일은 KMT-W01-PERSONAL 복원본과 같은 A01 계열을 사용

### KMT-W02-SPARK-P01 — 계명태권도 × GLOBAL SPARK 학부모 웹 편지
- 기준 커밋: 8baa8f73287df65e9b17dcfa0cbc5b3b1445a438
- 특징: 부모·일반인용 P01, 작은 불꽃이 큰 변화를 만듭니다, 김민규 성장기록 예시, 스크롤 리빌 및 선택형 효과음
- 보존 파일: index.html, app.js, styles.css
- 이미지 자산은 현재 저장소의 assets/spark 계열을 공유

### ACTS-W01 — ACTS NEWSLETTER 01
- 기준 커밋: fc88cee9a6f881dfabcd6890af9499890249e7ef
- 버전: v1.3.0
- 특징: ACTS 소개, 선교사 지원, 기도센터, 재능 나눔, 무도·교육 선교, 공유 기능
- 보존 파일: index.html, app.js, styles.css

## 운영 원칙
1. archive/web-letters 아래 파일은 복원 원본으로 취급한다.
2. 새로운 웹 편지는 기존 번호를 덮어쓰지 않고 새 번호를 부여한다.
3. 복원본 수정이 필요하면 원본을 직접 수정하지 말고 새 버전 폴더를 만든다.
4. 현재 서비스용 src/, acts/ 등 운영 경로와 아카이브를 분리한다.
5. 이후 IDP(국제드론순찰대), SPARK 공용, 태권검도, IPMA, GN24 웹 편지도 같은 규칙으로 추가한다.
