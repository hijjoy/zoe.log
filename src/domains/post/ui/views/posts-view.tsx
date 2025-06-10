import React, { Suspense } from "react";
import PostSection from "../sections/post-section";
import LoadingSpinner from "@/shared/components/loading-spinner";

export default function PostsView() {
  return (
    <Suspense fallback={<LoadingSpinner delay={300} />}>
      <PostSection />
    </Suspense>
  );
}
