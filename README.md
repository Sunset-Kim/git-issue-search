# 프로젝트 설치 & 실행

- vite & SWC를 이용한 프로젝트 셋업
- eslint & prettier (standard) 적용
- husky: pre-commit (npm run lint--fix) 적용

## 설치

`npm install`
`npm run prepare`

## 실행

`npm run dev`

# API

[search repository](https://docs.github.com/en/rest/search?apiVersion=2022-11-28)

- unauth 상태에서 최대결과값 1000개
- 분당 호출수 10개 제한

[list repository issues](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues)

- owner, repo 필수
