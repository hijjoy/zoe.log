import AnimatedText from '@/shared/components/animated-text';
import RotatingTitle from '@/shared/components/rotating-title';

export default function BlogTitle() {
  return (
    <div className="z-10 flex flex-col gap-4 sm:gap-2">
      <RotatingTitle
        items={['Zoe.log', '개발자 조이', '디자이너 조이']}
        className="mt-10 whitespace-pre-wrap text-[4rem] leading-none tracking-tighter sm:text-[3rem]"
      />
      <h1 className="pl-1 sm:text-sm">
        <AnimatedText className="pl-1 text-gray-600 sm:text-sm" asChild>
          <h1>안녕하세요! 조이, 정혜원입니다</h1>
        </AnimatedText>
      </h1>
    </div>
  );
}
