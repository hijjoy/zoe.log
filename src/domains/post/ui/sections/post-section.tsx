import NoContent from '@/shared/components/no-content';
import React from 'react';
import { getPosts } from '../../queries/get-posts';
import PostCard from '../components/card';

export default async function PostSection() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return <NoContent />;
  }

  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
