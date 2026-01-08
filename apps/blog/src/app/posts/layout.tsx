import type React from 'react';
import PostsMenu from './_components/menu';

interface Props {
  children: React.ReactNode;
}

export default function PostsLayout({ children }: Props) {
  return (
    <div className="mx-auto min-h-screen px-4">
      <PostsMenu />
      {children}
    </div>
  );
}
