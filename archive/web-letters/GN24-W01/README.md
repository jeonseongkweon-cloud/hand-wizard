# GN24-W01 — Global News24 웹 편지/공유 시스템 후보

상태: PARTIAL / 공유 시스템 확정, 독립 웹 편지 원본 미확정
조사일: 2026-09-07

## 확인된 원본 저장소
- ipma1822-png/gn24

## 확정된 공유 시스템
- .github/workflows/build-og-share-pages.yml
  - blob: 08059aa6a463b514e19360d87cef7900b438860c
- scripts/generate_share_pages.py
  - blob: 51223305cce4ef92ed0408a6936535d2494f1ad7
- share/ 아래 다수 기사별 index.html
- assets/images/share/ 카카오톡용 기사 이미지

## 조직 갱신 관련 공유 페이지
- share/gn24-20260819-dronepatrol-renewal/index.html — blob 86738617d1d4a1376971dfe7ed73b6f02c0779dd
- share/gn24-20260819-ipma-renewal/index.html — blob 903d5e878d1be557d395169d8e1c56ce659cf4e9
- share/gn24-20260819-taekwonkumdo-renewal/index.html — blob 07fc07721399972dbf0399e254fe3a0ecdae4577
- share/gn24-20260819-acts-renewal/index.html — blob 6b7d003388604a95f1782309cf1ca59cb35745b2

## 판정
GN24의 share 페이지들은 기사 제목·요약·OG 메타데이터를 제공한 뒤 실제 기사로 이동시키는 SNS 공유용 중계 페이지다. 웹 편지와 성격이 다르므로 GN24-W01을 과거 독립 웹 편지로 확정하지 않는다. 다만 향후 '뉴스나 개인 초대/소개' 계열이 웹 편지 역할을 할 수 있으므로 별도 커밋 추적 대상이다.
