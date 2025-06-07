import RotatingTitle from "@/components/common/rotating-title";
import RecentPostList from "@/components/posts/recent-list";
import { AnimatedText } from "@/components/common/animated-text";
import Blob from "./_components/blob";

export default function Home() {
  return (
    <div className="flex relative flex-col gap-10 min-h-screen">
      <div className="flex relative min-h-[450px] overflow-hidden px-4">
        <div className="flex z-10 flex-col gap-8 sm:gap-6">
          <RotatingTitle
            items={["Zoe.log", "개발자 조이", "디자이너 조이"]}
            className="sm:text-[3rem] text-[4rem] tracking-tighter  whitespace-pre-wrap text-gray-900 mt-10"
          />
          <AnimatedText
            text="안녕하세요! 조이, 정혜원입니다"
            className="text-gray-600 pl-1 sm:text-sm"
          />
        </div>

        <Blob />
      </div>

      {/* 최근 posts */}
      <RecentPostList />
    </div>
  );
}
