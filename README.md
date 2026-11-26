# front-project

개인 작업과 포트폴리오용 프론트엔드 프로젝트(React, Next, Vue) 모음입니다.
강의 실습은 [STUDY](https://github.com/kmmkyung/STUDY) 레포에 따로 정리합니다.

## 프로젝트 목록

<table>
  <tr><th>프로젝트</th><th>연도</th><th>프레임워크</th><th>빌드 도구</th><th>설명</th><th>배포</th></tr>
  <tr><td><a href="./projects/portfolio"><b>portfolio</b></a></td><td>2025</td><td>React 19.1</td><td>Vite 7.1</td><td>포트폴리오 사이트</td><td><a href="https://kmmkyung.github.io/kmmkyung/portfolio/">GitHub Pages</a></td></tr>
  <tr><td colspan="6"><sub>TypeScript 5.8 · React Router 7.8 · GSAP 3.13 · Sass 1.108</sub></td></tr>
  <tr><td><a href="./projects/projektprodukt-collection"><b>projektprodukt-collection</b></a></td><td>2025</td><td>React 19.3</td><td>Vite 7.3</td><td></td><td></td></tr>
  <tr><td colspan="6"><sub>TypeScript 5.8 · React Router 7.18 · Tailwind CSS 3.4 · GSAP 3.15 · Lenis 1.3 · Swiper 11.2</sub></td></tr>
  <tr><td><a href="./projects/disney-plus"><b>disney-plus</b></a></td><td>2024</td><td>React 18.3</td><td>CRA 5.0</td><td>디즈니플러스 클론</td><td><a href="https://react-disneyplus-app-6c3fc.web.app/">Firebase</a></td></tr>
  <tr><td colspan="6"><sub>TypeScript 4.9 · React Router 7.1 · styled-components 6.1 · Recoil 0.7 · React Query 5.66 · Firebase 11.3</sub></td></tr>
  <tr><td><a href="./projects/karrot-market"><b>karrot-market</b></a></td><td>2024</td><td>Next 15.1</td><td>Next 15.1</td><td>중고거래 사이트</td><td><a href="https://carrot-market-flame.vercel.app/">Vercel</a></td></tr>
  <tr><td colspan="6"><sub>React 19.0 · TypeScript 5.7 · Prisma 6 + Neon(PostgreSQL) · Supabase Realtime(채팅) · Cloudinary(이미지) · Tailwind CSS 3.4 · daisyUI 4.12</sub></td></tr>
  <tr><td><a href="./projects/lofi-wines"><b>lofi-wines</b></a></td><td>2023</td><td>Vue 3.5</td><td>Vue CLI 5.0</td><td>와인 소개 사이트</td><td><a href="https://kmmkyung.github.io/PJ-LOFI/">GitHub Pages</a></td></tr>
  <tr><td colspan="6"><sub>Vue Router 4.5 · Vuex 4.1</sub></td></tr>
</table>

버전은 각 프로젝트의 `package-lock.json`에 고정된 실제 설치 버전 기준입니다(주.부 버전까지). 라이브러리를 업데이트하면 이 목록도 같이 고칩니다.

## 구조

```
front-project/
├── projects/      각 프로젝트 (서로 독립)
├── .prettierrc    공통 코드 포맷 규칙
└── package.json   공통 도구 (prettier)
```

## 규칙

### 이름

- 프로젝트 폴더 이름은 **소문자 + 하이픈(kebab-case)** 으로 짓습니다. 예: `karrot-market`
- 연도나 스택은 이름에 넣지 않고 위 목록 표에 적습니다.
- 프로젝트의 `package.json`의 `name`도 폴더 이름과 똑같이 맞춥니다.
- 같은 프로젝트를 다른 스택으로 또 만들 때만 구분용으로 붙입니다. 예: `lofi-wines-html`, `lofi-wines-vue`

### 프로젝트 관리

- 각 프로젝트는 **완전히 독립**입니다. 라이브러리는 루트가 아니라 **그 프로젝트의 `package.json`** 에 넣습니다.
- 설치와 실행은 프로젝트 폴더 안에서 합니다.

  ```bash
  cd projects/portfolio
  npm install
  npm run dev
  ```

- 환경 변수가 필요한 프로젝트(`karrot-market`)는 그 폴더에 `.env` 파일을 직접 만들어야 합니다. `.env`는 레포에 올리지 않습니다.
- 루트에는 모든 프로젝트에 공통인 작업 규칙(포맷, 에디터 설정)만 둡니다.
- 프로젝트를 따로 레포로 분리할 때는 그 폴더와 `.prettierrc`만 가져가면 됩니다.
- 새 프로젝트를 추가하면 위 목록 표에 프로젝트 줄과 스택 줄(`colspan="6"`) 두 줄을 추가합니다.
