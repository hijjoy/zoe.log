import NoContent from "@/components/common/no-content";
import { prisma } from "@/libs/prisma";

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  if(posts.length === 0) {
    return <NoContent />;
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="p-6 rounded-lg border">
            <h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
            {post.description && (
              <p className="mb-4 text-gray-600">{post.description}</p>
            )}
            <div className="flex gap-2 mb-4">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 text-sm text-gray-800 bg-gray-100 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            <time className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
}
