# ZERO LOG

3년 치 트러블슈팅과 판단의 기록. AI가 못 쓰는 1차 데이터.

- **스택**: Astro + MDX, Three.js(hero island), Tailwind v4 토큰
- **디자인**: Contra 디자인 시스템 (near-black `#0c0c0c` + 라벤더 `#B7ACFC`, Inter 극단적 음수 트래킹)
- **배포**: Vercel (루트 배포)

## 개발

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # 정적 빌드 → dist/
pnpm preview
```

## 환경 변수

GitHub 카드(잔디/스탯)는 **토큰 없이** 빌드타임에 공개 API로 가져온다 (PAT 불필요).

| 변수 | 설명 |
|------|------|
| `GITHUB_USERNAME` | 잔디/스탯을 가져올 계정. 기본값 `leeseooo` |

- 잔디: `github-contributions-api.jogruber.de` (공개)
- 스탯: GitHub 공식 REST `/users/{login}` (공개)

서드파티(잔디)가 응답 못 하면 잔디만 폴백되고 스탯/프로필 링크는 유지된다.

## 글 쓰기

`src/content/blog/*.mdx` 에 추가. frontmatter:

```yaml
---
title: "제목"
description: "한 줄 요약 (GEO/OG에 사용)"
category: debug   # retro | ai | debug | craft
tags: ["Tailwind", "Vite"]
date: 2026-07-10
draft: false
---
```

## 구조

```
src/
  components/   Hero.astro(Three.js), GitHubCard.astro
  content/blog/ 글(MDX)
  layouts/      BaseLayout.astro
  pages/        index, blog/, about, rss.xml
  styles/       global.css(Contra 토큰)
```

## Vercel 배포

1. Vercel에서 이 레포 Import (프레임워크 자동 감지: Astro)
2. Environment Variables에 `GITHUB_TOKEN`, `GITHUB_USERNAME` 추가
3. 배포. 이후 push마다 자동 배포 + PR 프리뷰
