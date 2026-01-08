import { Text } from '@zoelog/ui';
import Image from 'next/image';
import AnimatedText from '@/shared/components/animated-text';

export default function Info() {
  return (
    <section aria-label="info">
      <div className="relative">
        <Image
          src="/images/zoe.png"
          alt="logo"
          width={50}
          height={50}
          priority
          aria-hidden
          className="-top-4 absolute left-[105px] rotate-12"
        />
        <div className="mb-10 flex flex-col">
          <AnimatedText className="font-bold text-gray-800 text-lg">
            Hyewon, Jung
          </AnimatedText>
          <AnimatedText
            unit="word"
            preset="fade"
            className="text-gray-400 text-sm dark:text-gray-500"
          >
            Frontend Developer based in Seoul, South Korea
          </AnimatedText>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Text className="flex items-center gap-2 text-sm">
          기능을 구현하는 것만큼, 보여지는 화면의 형태와 감각에도 많은 관심을
          가지고 있습니다. <br />
        </Text>
        <Text className="text-sm leading-relaxed">
          때로는 디자이너처럼 피그마 작업을 하고, <br />
          때로는 개발자처럼 코드를 작성하며{' '}
          <strong className="font-semibold shadow-[inset_0_-10px_0_rgb(241,222,241)] dark:shadow-[inset_0_-10px_0_rgb(100,70,120)]">
            코드와 디자인과 개발 사이를 자유롭게{' '}
          </strong>
          오가는 일을 즐깁니다.
        </Text>
        <Text className="text-sm leading-relaxed">
          직접 디자인한 화면을 개발해 앱을 출시해보면서, 사용자의 입장에서
          UI/UX를 더 입체적으로 바라보고 구현하는 시각을 얻게 되었고, 사용자
          흐름과 반응을 세심하게 고려하며 UI를 구현하는 일에 더욱 매력을 느끼게
          되었습니다.
          <br />
          다양한 시도와 반복을 통해 더 나은 인터페이스와 인터랙션을 찾아내는
          개발을 계속해나가고 싶습니다.
        </Text>
      </div>
    </section>
  );
}
