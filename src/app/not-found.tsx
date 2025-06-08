"use client";

import Image from "next/image";
import Link from "next/link";
import MotionOpacity from "@/shared/components/motion-opacity";

export default function NotFound() {
  return (
    <MotionOpacity
      transition={{ duration: 0.6, delay: 0.15 }}
      className="flex flex-col justify-center items-center pt-10 size-full"
    >
      <Image
        src="/images/404.svg"
        alt="not-found"
        width={260}
        height={260}
        className="sm:size-40"
      />
      <Link
        href="/"
        className="px-4 py-2 my-10 text-sm text-gray-500 bg-gray-100 rounded-xl transition-all duration-300 sm:my-0 hover:bg-gray-200 sm:mb-4 active:scale-95"
      >
        홈으로 돌아가기
      </Link>
      <Image src="/images/쪼이.svg" alt="logo" width={400} height={400} />
    </MotionOpacity>
  );
}
