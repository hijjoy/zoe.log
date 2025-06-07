import MotionOpacity from "./motion-opacity";
import Text from "./text";
import Image from "next/image";

export default function NoContent() {
  return (
    <MotionOpacity className="flex flex-col items-center py-1 gap-4">
      <Image src="/images/쪼이.svg" alt="logo" width={400} height={400} />
      <div>
        <Text className="text-sm text-gray-400 text-center">
          아직 글이 없어요
        </Text>
        <Text className="text-sm text-gray-400 text-center">
          잠시만 기다려주세요 !
        </Text>
      </div>
    </MotionOpacity>
  );
}
