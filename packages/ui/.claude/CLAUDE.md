# @zoelog/ui 디자인 시스템

## Typography

```tsx
<Typography variant="body" weight="semibold" color="heading" as="h1">제목</Typography>
```

| variant | size | 기본 태그 | 기본 weight |
|---|---|---|---|
| `display` | 2.5rem | h1 | bold |
| `title` | 1.75rem | h2 | semibold |
| `heading` | 1.25rem | h3 | semibold |
| `body` | 1rem | p | regular |
| `body-reading` | 1rem (lh 1.8) | p | regular |
| `label` | 0.875rem | **span** | medium |
| `caption` | 0.75rem | **span** | regular |

- **weight:** `regular` | `medium` | `semibold` | `bold`
- **color:** `heading` | `body` | `secondary` | `primary` | `inherit`
- **as:** 렌더링 태그. `label`/`caption`은 기본 `span`이므로 블록 필요 시 `as="p"` 명시
- **asChild:** Radix Slot 패턴

## Button

```tsx
<Button variant="solid" color="primary" size="medium">클릭</Button>
<Button iconOnly aria-label="닫기"><XIcon /></Button>
```

- **variant:** `solid` | `outlined` | `ghost` | `text`
- **color:** `primary` | `neutral`
- **size:** `small` | `medium` | `large`
- **slots:** `leadingContent`, `trailingContent`
- **iconOnly:** `true`일 때 `aria-label` 필수

## 색상 토큰

시맨틱 토큰 (다크모드 자동):

| 클래스 | Light | Dark | 용도 |
|---|---|---|---|
| `text-ds-heading` | pg-700 | pg-100 | 제목 |
| `text-ds-body` | pg-600 | pg-300 | 본문 |
| `text-ds-secondary` | pg-500 | pg-400 | 보조 |
| `text-ds-primary` | #ab91dd | #ab91dd | 액센트 |
| `bg-ds-background` | #fff | pg-900 | 배경 |
| `bg-ds-surface` | pg-50 | pg-800 | 카드/스켈레톤 |

아토믹 PG 토큰 사용 시 `dark:` 변형 필수: `bg-pg-100 dark:bg-pg-800`

## Storybook

`@storybook/react-vite` (9.x). `@storybook/nextjs` 사용 금지 (Next.js 16 비호환)
