import TimeLineItem from "@/domains/home/components/time-line-item";
import AnimatedText from "@/shared/components/animated-text";
import MotionOpacity from "@/shared/components/motion-opacity";
import Text from "@/shared/components/text";
import Image from "next/image";

export default function About() {
  return (
    <MotionOpacity className="flex flex-col min-h-screen pt-10 px-4 sm:px-6 gap-32 mb-40">
      <Info />
      <hr className="relative block border-none h-10 before:content-['*_*_*'] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-gray-300 before:text-xl before:font-normal" />
      <Career />
      <Activity />
    </MotionOpacity>
  );
}

const Info = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/zoe.png"
          alt="logo"
          width={50}
          height={50}
          className="absolute -top-4 left-[105px] rotate-12"
        />
        <div className="flex flex-col mb-10">
          <AnimatedText
            text="Hyewon, Jung"
            className="text-lg font-bold text-gray-800"
          />
          <AnimatedText
            unit="word"
            preset="fade"
            text="Frontend Developer based in Seoul, South Korea"
            className="text-sm text-gray-400 dark:text-gray-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Text className="flex items-center gap-2 text-sm">
          기능을 구현하는 것만큼, 보여지는 화면의 형태와 감각에도 많은 관심을
          가지고 있습니다. <br />
        </Text>
        <Text className="text-sm leading-relaxed">
          때로는 디자이너처럼 피그마 작업을 하고, <br />
          때로는 개발자처럼 코드를 작성하며{" "}
          <strong className="font-semibold shadow-[inset_0_-10px_0_rgb(241,222,241)] dark:shadow-[inset_0_-10px_0_rgb(100,70,120)]">
            코드와 디자인과 개발 사이를 자유롭게{" "}
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
    </div>
  );
};

const Career = () => {
  return (
    <div className="flex flex-col">
      <Text className="text-center mb-16">
        <h1 className="text-2xl font-bold">Career</h1>
      </Text>

      <TimeLineItem
        date="2024.11 - now"
        title="Crabit"
        subTitle="크래빗"
        description="Frontend Developer"
        link="https://www.crabit.co.kr/"
      />
    </div>
  );
};

const Activity = () => {
  return (
    <div>
      <Text className="text-center mb-16">
        <h1 className="text-2xl font-bold">Activity</h1>
      </Text>

      <div className="flex flex-col">
        <TimeLineItem
          date="2024.03 - 2024.11"
          title="UMC"
          subTitle="유엠씨"
          description="Web • FE"
          link="https://www.umc.ac.kr/"
        />
        <TimeLineItem
          date="2022.03 - 2022.08"
          title="Like Lion"
          subTitle="멋쟁이사자처럼"
          description="Django • BE"
          link="https://likelion.net/"
        />
      </div>
    </div>
  );
};
