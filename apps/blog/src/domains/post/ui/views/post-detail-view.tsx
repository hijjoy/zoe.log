import Comments from '../components/post-detail/comments';
import Toc from '../components/post-detail/toc';
import PostDetailSection from '../sections/post-detail-section';

export default async function PostDetailView({ slug }: { slug: string }) {
  return (
    <>
      <Toc />
      <div className="min-h-screen px-4 sm:px-6">
        <PostDetailSection slug={slug} />
        <Comments />
      </div>
    </>
  );
}
