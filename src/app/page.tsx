import RotatingTitle from "@/components/common/rotating-title";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <RotatingTitle
          items={["Zoe.log", "개발자 조이", "디자이너 조이"]}
          className="lg:text-[3rem] text-[4rem]  tracking-tighter whitespace-pre-wrap"
        />
      </div>
    </div>
  );
}
