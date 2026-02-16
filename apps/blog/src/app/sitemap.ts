import type { MetadataRoute } from 'next';
import { getPostSitemapEntries } from '@/domains/post/queries';
import { env } from '@/libs/env';

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostSitemapEntries();

  const postEntries = posts.map((post) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}/article/${post.slug}`,
    lastModified: post.createdAt,
  }));

  return [
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}
