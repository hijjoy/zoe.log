'use client';

import { Button } from '@zoelog/ui';
import MotionOpacity from '@/shared/components/motion-opacity';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <MotionOpacity transition={{ duration: 0.6, delay: 0.15 }} className="flex size-full flex-col items-center justify-center pt-10">
      <Image src="/images/404.svg" alt="not-found" width={260} height={260} className="sm:size-40" />
      <Button asChild>
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
      <Image src="/images/쪼이.svg" alt="logo" width={400} height={400} />
    </MotionOpacity>
  );
}
