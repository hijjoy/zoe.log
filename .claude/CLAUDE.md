# zoe.log

모노레포 (pnpm + turborepo)

- `apps/blog` — Next.js 16 블로그 (패키지명: `zoelog`)
- `packages/ui` — `@zoelog/ui` 공용 디자인 시스템
- `packages/db` — `@zoelog/db` Prisma DB

## 공통

- 빌드: `npx turbo build --filter=zoelog`
- Tailwind v4, 다크모드: 클래스 기반 (`@custom-variant dark`)
- DS 가이드: `packages/ui/.claude/CLAUDE.md` 참고
