# Blog App

## 컴포넌트 사용 규칙

`@zoelog/ui` 패키지에 존재하는 컴포넌트는 무조건 그것을 사용한다. 네이티브 HTML로 직접 만들지 않는다.

현재 제공되는 컴포넌트:

- `Typography` — 모든 텍스트 (`<p>`, `<span>`, `<h1>` 등 직접 사용 금지)
- `Button` — 모든 버튼
- `Divider` — 구분선

```tsx
// ✅
import { Typography, Button } from '@zoelog/ui';
<Typography variant="body" as="p">텍스트</Typography>

// ❌
<p className="text-sm">텍스트</p>
```

## 색상 규칙

`text-ds-*`, `bg-ds-*` 시맨틱 토큰을 우선 사용한다. `text-gray-*`, `text-heading`, `text-main` 등 레거시 토큰은 사용 금지.

아토믹 `pg-*` 토큰 사용 시 반드시 `dark:` 변형을 함께 작성한다. (PG 토큰은 다크모드 자동 전환 안 됨)

## 참고

- 컴포넌트 상세 API: `packages/ui/.claude/CLAUDE.md`
- 토큰 정의: `packages/ui/tokens/colors.css`
