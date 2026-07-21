import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 트러블슈팅/회고 글. Notion에서 수동 큐레이션해 MDX로 이관.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // 판단/설계 회고 · AI 협업 · 삽질/디버깅 · 감각/검수
    category: z.enum(['retro', 'ai', 'debug', 'craft']).default('debug'),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
