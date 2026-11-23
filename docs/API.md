# API 계층

GitHub Pages는 정적 호스팅이므로 Next.js API Route를 실행하지 않습니다. `lib/api`는 별도로 운영하는 HTTP API를 브라우저에서 호출하기 위한 계층입니다. API 서버의 CORS 설정에서 배포된 사이트의 origin을 허용해야 합니다.

프로젝트 루트의 `.env.local` 또는 빌드 환경에 공개 API 주소를 설정하세요.

```env
NEXT_PUBLIC_API_BASE_URL=https://api.example.com/v1/
```

`NEXT_PUBLIC_` 값은 빌드 시 브라우저 코드에 포함되므로 비밀 키를 넣으면 안 됩니다. GitHub Pages 배포에도 사용하려면 저장소의 Actions 변수에 같은 이름으로 설정하고 빌드 단계에 전달해야 합니다.

```ts
import { api, ApiError } from "@/lib/api";

type User = { id: string; name: string };

try {
  const users = await api.get<User[]>("users", { query: { active: true } });
  const created = await api.post<User>("users", { name: "Hurai" });
} catch (error) {
  if (error instanceof ApiError) {
    console.error(error.status, error.data);
  }
}
```

클라이언트는 JSON 요청과 응답, 쿼리 매개변수, `AbortSignal`, HTTP 오류를 지원합니다. 응답 타입은 호출자가 지정하며 런타임 검증은 하지 않습니다. 주소가 설정되지 않은 경우 실제 호출 시 오류가 발생하므로 API 없이도 정적 사이트를 빌드할 수 있습니다.
