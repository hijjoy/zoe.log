import RotatingTitle from "@/components/common/rotating-title";
import Text from "@/components/common/text";
import Playground from "./_components/playground";
import RecentPostList from "@/components/posts/recent-list";

export default function Home() {
  return (
    <div className="flex relative flex-col gap-10 min-h-screen">
      <div className="flex z-10 flex-col gap-6">
        <Text className="pl-1 text-lg sm:text-base">
          안녕하세요! 조이, 정혜원입니다
        </Text>
        <RotatingTitle
          items={["Zoe.log", "개발자 조이", "디자이너 조이"]}
          className="sm:text-[3rem] text-[4rem] tracking-tighter  whitespace-pre-wrap text-gray-900"
        />
      </div>

      <Playground />

      {/* 최근 posts */}
      <RecentPostList />
    </div>
  );
}
