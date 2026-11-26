# front-project

개인 작업과 포트폴리오용 프론트엔드 프로젝트 모음입니다.
강의 실습은 [STUDY](https://github.com/kmmkyung/STUDY) 레포에 따로 정리합니다.

## 프로젝트 목록

| 프로젝트 | 스택 | 설명 | 배포 |
|---|---|---|---|
| [Portfolio](./projects/Portfolio) | Vite, React 19, TypeScript, GSAP | | |
| [Projektprodukt-collection](./projects/Projektprodukt-collection) | Vite, React 19, TypeScript, Tailwind CSS 3, GSAP, Lenis, Swiper | | |
| [DisneyPlus](./projects/DisneyPlus) | CRA, React 18, TypeScript, styled-components, Recoil, React Query, Firebase | | |

## 구조

```
front-project/
├── projects/      각 프로젝트 (서로 독립)
├── .prettierrc    공통 코드 포맷 규칙
└── package.json   공통 도구 (prettier)
```

## 규칙

- 각 프로젝트는 **완전히 독립**입니다. 라이브러리는 루트가 아니라 **그 프로젝트의 `package.json`**에 넣습니다.
- 설치와 실행은 프로젝트 폴더 안에서 합니다.

  ```bash
  cd projects/Portfolio
  npm install
  npm run dev
  ```

- 루트에는 모든 프로젝트에 공통인 작업 규칙(포맷, 에디터 설정)만 둡니다.
- 프로젝트를 따로 레포로 분리할 때는 그 폴더와 `.prettierrc`만 가져가면 됩니다.
- 새 프로젝트를 추가하면 위 목록 표에 한 줄 추가합니다.
