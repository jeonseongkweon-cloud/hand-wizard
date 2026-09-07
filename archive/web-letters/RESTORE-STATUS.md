# RESTORE STATUS

2026-09-07

## 복원 완료
- KMT-W01-PERSONAL: commit 07de164c3624a711b019989d4974fb994a9536d5
- KMT-W01-COMMON: commit 4b87adc70107c57a3ce56b969e8e4be37de37c29
- KMT-W02-SPARK-P01: commit 8baa8f73287df65e9b17dcfa0cbc5b3b1445a438
- ACTS-W01: commit fc88cee9a6f881dfabcd6890af9499890249e7ef

## 실제 복원 방식
과거 커밋의 Git blob SHA를 그대로 재사용해 archive/web-letters/ 아래에 원본 소스 파일을 복원했다. 따라서 아카이브 파일은 단순 포인터가 아니라 해당 시점의 실제 원본 소스와 동일한 blob이다.

### 검증 완료 예시
- KMT-W01-PERSONAL/index.html → blob e83bfa0957d767b4ad4fbdb8fa613730e5d7efcf
- KMT-W02-SPARK-P01/index.html → blob 41de6a62ae77f07854ce66ac329af9bd1c67aa0f
- ACTS-W01/index.html → blob 81eb0f7a003f50f9ec8bb948b127cc0826076c52

## 안전성
- 현재 운영 중인 src/, acts/ 파일은 이번 복원 작업에서 덮어쓰지 않았다.
- 모든 복원본은 archive/web-letters/ 아래에 독립 보존한다.
- 이후 수정이 필요하면 원본 아카이브를 직접 바꾸지 않고 새 버전 폴더를 만든다.

## 다음 복원 대상
- IDP 국제드론순찰대 웹 편지
- GLOBAL SPARK 공용 웹 편지 과거 버전
- 태권검도 웹 편지
- IPMA 웹 편지
- Global News24 웹 편지
- IPMA Publishing 웹 편지
