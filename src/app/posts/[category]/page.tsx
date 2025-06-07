import NoContent from "@/components/common/no-content";
import PostCard from "@/components/posts/card";
import { prisma } from "@/libs/prisma";

const CATEGORY_MAPPING = {
  development: "개발",
  review: "회고",
} as const;

interface Props {
  params: Promise<{
    category: keyof typeof CATEGORY_MAPPING;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const mappedCategory = CATEGORY_MAPPING[category];

  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      categories: {
        has: mappedCategory,
      },
    },
  });

  if (posts.length === 0) {
    return <NoContent />;
  }

  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
