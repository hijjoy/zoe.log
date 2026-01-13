import { z } from 'zod';

export const CategorySchema = z.object({
  name: z.string(),
});

export const PostCategorySchema = z.object({
  categories: CategorySchema,
});

export const PostSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  content: z.string(),
  createdAt: z.coerce.date(),
  thumbnail: z.string(),
});

export const PostListItemSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  thumbnail: z.string(),
  createdAt: z.coerce.date(),
  postCategories: z.array(PostCategorySchema),
});

export type CategoryData = z.infer<typeof CategorySchema>;
export type PostCategory = z.infer<typeof PostCategorySchema>;
export type Post = z.infer<typeof PostSchema>;
export type PostListItem = z.infer<typeof PostListItemSchema>;
