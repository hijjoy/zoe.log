import AnimatedText from '@/shared/components/animated-text';
import RotatingTitle from '@/shared/components/rotating-title';
import React from 'react';

export default function BlogTitle() {
  return (
    <div className="z-10 flex flex-col gap-8 sm:gap-6">
      <RotatingTitle
        items={['Zoe.log', '개발자 조이', '디자이너 조이']}
        className="mt-10 whitespace-pre-wrap text-[4rem] tracking-tighter text-gray-900 sm:text-[3rem]"
      />
      <AnimatedText text="안녕하세요! 조이, 정혜원입니다" className="pl-1 text-gray-600 sm:text-sm" as="h1" />
    </div>
  );
}
