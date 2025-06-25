import type { MetadataRoute } from 'next';
import { getPosts } from '@/domains/post/queries/get-posts';

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const postEntries = posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/article/${post.slug}`,
    lastModified: post.createdAt,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}
