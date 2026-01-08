'use client';

import { Button } from '@zoelog/ui';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

export default function NotFound() {
  return (
    <div className="flex size-full flex-col items-center justify-center pt-10">
      <Image
        src="/images/404.svg"
        alt="not-found"
        width={260}
        height={260}
        className="size-40 md:size-[260px]"
      />
      <Button asChild>
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
      <Image src="/images/쪼이.svg" alt="logo" width={400} height={400} />
    </div>
  );
}
