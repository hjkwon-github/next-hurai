# next-hurai

Next.js App Router, Tailwind CSS 4, DaisyUI 5 기반의 정적 사이트 시작 프로젝트입니다. 홈과 `/design-system/`에서 디자인 토큰 및 컴포넌트 예시를 확인할 수 있습니다.

## 시작하기

Node.js 22 이상이 필요합니다.

```bash
npm ci
npm run dev
```

브라우저에서 <http://localhost:3000>을 엽니다. `npm run lint`, `npm run typecheck`, `npm run build`로 검사와 정적 빌드를 실행합니다. 빌드 결과는 `out/`에 생성됩니다.

## API

GitHub Pages는 서버 코드를 실행하지 않습니다. 외부 API 호출은 `lib/api`를 사용하고, `.env.example`을 참고해 `.env.local`에 공개 API 주소를 설정하세요. 사용법과 CORS 안내는 [API 문서](docs/API.md)를 참고하세요.

## GitHub Pages 배포

`main`에 푸시하면 GitHub Actions가 정적 사이트를 빌드하고 배포합니다. 저장소의 **Settings → Pages → Build and deployment**에서 Source를 **Deploy from a branch**, Branch를 **main**으로 설정하세요. GitHub의 브랜치 게시 작업이 끝난 뒤 Next.js 빌드 결과를 배포합니다. 사이트 주소는 <https://hjkwon-github.github.io/next-hurai/>입니다.

배포 빌드는 저장소 경로 `/next-hurai`를 base path로 사용합니다. 외부 API를 연결하려면 저장소의 **Settings → Secrets and variables → Actions → Variables**에 `NEXT_PUBLIC_API_BASE_URL`을 추가하세요. 이 값은 공개 빌드에 포함되므로 비밀을 넣지 마세요. API 서버는 Pages 사이트 origin에 대한 CORS를 허용해야 합니다.

정적 export에서는 서버에서 실행되는 API Route, 서버 액션 등은 사용할 수 없습니다.
