import MotionOpacity from './motion-opacity';
import { Text } from '@zoelog/ui';
import Image from 'next/image';

export default function NoContent() {
  return (
    <MotionOpacity className="flex flex-col items-center gap-4 py-1">
      <Image src="/images/쪼이.svg" alt="logo" width={400} height={400} className="sm:size-64" />
      <div>
        <Text className="text-center text-sm text-gray-500">아직 글이 없어요</Text>
        <Text className="text-center text-sm text-gray-500">잠시만 기다려주세요 !</Text>
      </div>
    </MotionOpacity>
  );
}
