import AnimatedText from '@/shared/components/animated-text';
import RotatingTitle from '@/shared/components/rotating-title';

export default function BlogTitle() {
  return (
    <div className="z-10 flex flex-col gap-2 md:gap-4">
      <RotatingTitle
        items={['Zoe.log', '개발자 조이', '디자이너 조이']}
        className="mt-10 whitespace-pre-wrap text-[3rem] leading-none tracking-tighter md:text-[4rem]"
      />
      <h1 className="pl-1 text-sm md:text-base">
        <AnimatedText className="pl-1 text-gray-600 text-sm md:text-base" asChild>
          <h1>안녕하세요! 조이, 정혜원입니다</h1>
        </AnimatedText>
      </h1>
    </div>
  );
}
