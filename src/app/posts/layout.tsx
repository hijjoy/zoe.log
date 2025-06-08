import PostsMenu from "@/domains/post/components/menu";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto min-h-screen px-4">
      <PostsMenu />
      {children}
    </div>
  );
}
