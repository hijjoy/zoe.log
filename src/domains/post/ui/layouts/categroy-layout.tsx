import React from "react";
import PostsMenu from "../components/menu";

interface Props {
  children: React.ReactNode;
}

export default function CategoryLayout({ children }: Props) {
  return (
    <div className="mx-auto min-h-screen px-4">
      <PostsMenu />
      {children}
    </div>
  );
}
