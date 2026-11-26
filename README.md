# front-project

개인 작업과 포트폴리오용 프론트엔드 프로젝트(React, Next, Vue) 모음입니다.
강의 실습은 [STUDY](https://github.com/kmmkyung/STUDY) 레포에 따로 정리합니다.

## 프로젝트 목록

| 프로젝트 | 연도 | 프레임워크 | 빌드 도구 | 주요 스택 | 설명 | 배포 |
|---|---|---|---|---|---|---|
| [portfolio](./projects/portfolio) | 2025 | React 19.1 | Vite 7.1 | TypeScript 5.8, React Router 7.8, GSAP 3.13, Sass 1.108 | 포트폴리오 사이트 | |
| [projektprodukt-collection](./projects/projektprodukt-collection) | 2025 | React 19.3 | Vite 7.3 | TypeScript 5.8, React Router 7.18, Tailwind CSS 3.4, GSAP 3.15, Lenis 1.3, Swiper 11.2 | | |
| [disney-plus](./projects/disney-plus) | 2024 | React 18.3 | CRA (react-scripts 5.0) | TypeScript 4.9, React Router 7.1, styled-components 6.1, Recoil 0.7, React Query 5.66, Firebase 11.3 | 디즈니플러스 클론 | Firebase Hosting |
| [karrot-market](./projects/karrot-market) | 2024 | Next 15.1 (React 19.0) | Next 15.1 | TypeScript 5.7, Prisma 6 (PostgreSQL), Supabase JS 2.49, Tailwind CSS 3.4, daisyUI 4.12 | 중고거래 사이트 | |
| [lofi-wines](./projects/lofi-wines) | 2023 | Vue 3.5 | Vue CLI 5.0 | Vue Router 4.5, Vuex 4.1 | 와인 소개 사이트 | [GitHub Pages](https://kmmkyung.github.io/PJ-LOFI/) |

버전은 각 프로젝트의 `package-lock.json`에 고정된 실제 설치 버전 기준입니다(주.부 버전까지). 라이브러리를 업데이트하면 이 표도 같이 고칩니다.

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
- 새 프로젝트를 추가하면 위 목록 표에 한 줄 추가합니다.
