"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="hijjoy/zoe.log"
      repoId="R_kgDOO0coPQ"
      category="Announcements"
      categoryId="DIC_kwDOO0coPc4CrLtQ"
      mapping="pathname"
      term="Welcome"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="ko"
      loading="lazy"
    />
  );
}
