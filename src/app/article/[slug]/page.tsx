import PostDetailView from "@/domains/post/ui/views/post-detail-view";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <PostDetailView slug={slug} />;
}
