# RESTORE STATUS

2026-09-07

## 완전 복원 완료
- KMT-W01-PERSONAL: commit 07de164c3624a711b019989d4974fb994a9536d5
- KMT-W01-COMMON: commit 4b87adc70107c57a3ce56b969e8e4be37de37c29
- KMT-W02-SPARK-P01: commit 8baa8f73287df65e9b17dcfa0cbc5b3b1445a438
- ACTS-W01: commit fc88cee9a6f881dfabcd6890af9499890249e7ef
- SPARK-W01-v1.0: v2.0 직전 commit 11ebe367b4394676b30242955bef7b39989271b1 / spark-magic.html blob 7d94a952592dc54d054d58f57a83030ec465a8f7

## 실제 복원 방식
과거 커밋의 Git blob 또는 해당 시점의 정확한 원본 텍스트를 archive/web-letters/ 아래에 독립 보존한다. 운영 중인 원본 페이지는 변경하지 않는다.

### 검증 완료 예시
- KMT-W01-PERSONAL/index.html → blob e83bfa0957d767b4ad4fbdb8fa613730e5d7efcf
- KMT-W02-SPARK-P01/index.html → blob 41de6a62ae77f07854ce66ac329af9bd1c67aa0f
- ACTS-W01/index.html → blob 81eb0f7a003f50f9ec8bb948b127cc0826076c52
- SPARK-W01-v1.0 원본 spark-magic.html → blob 7d94a952592dc54d054d58f57a83030ec465a8f7

## 부분 확인 / 후보 정리 완료
- IDP-W01: 카카오 공유자산과 GN24 드론 갱신기사 공유 페이지 확인. 독립 웹 편지 미확정.
- WTKF-W01: 태권검도 홍보/소개 자산과 GN24 갱신기사 공유 페이지 확인. 독립 웹 편지 미확정.
- IPMA-W01: 공식 소개 구조와 GN24 갱신기사 공유 페이지 확인. 독립 웹 편지 미확정.
- GN24-W01: OG/SNS 기사 공유 페이지 자동 생성 시스템과 다수 share 페이지 확인. 기사 공유 시스템으로 분류.
- PUBLISHING-W01: 출판물 OG 공유 페이지와 가이드 확인. 출판정보 공유 시스템으로 분류.

## 안전성
- 현재 운영 중인 src/, acts/ 및 각 외부 조직 저장소의 운영 파일은 이번 복원 작업에서 덮어쓰지 않았다.
- 모든 복원본/조사문서는 jeonseongkweon-cloud/hand-wizard의 archive/web-letters/ 아래에 독립 보존한다.
- 이후 수정은 기존 아카이브를 덮지 않고 새 버전 폴더를 만든다.
- OG/SNS 공유페이지를 스토리형 웹 편지로 잘못 분류하지 않는다.

## 다음 심층 조사 대상
- IDP 커밋 이력에서 과거 소개/초대/모바일 단독 페이지
- 태권검도 커밋 이력에서 소개/초대/공유용 독립 페이지
- IPMA 커밋 이력에서 회원/지부 초대·소개 페이지
- GN24의 뉴스나 개인 초대/개인화 계열 역사
- IPMA Publishing의 이미지 기반 홍보/소개 독립 페이지 역사
