import PostsMenu from "@/components/posts/menu";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto min-h-screen">
      <PostsMenu />
      {children}
    </div>
  );
}
