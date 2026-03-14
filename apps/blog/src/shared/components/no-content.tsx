import { Typography } from '@zoelog/ui';
import Image from 'next/image';

export default function NoContent() {
  return (
    <div className="flex flex-col items-center gap-4 py-1">
      <Image
        src="/images/쪼이.svg"
        alt="logo"
        width={400}
        height={400}
        className="size-64 md:size-[400px]"
      />
      <div>
        <Typography variant="label" color="secondary" className="text-center">
          아직 글이 없어요
        </Typography>
        <Typography variant="label" color="secondary" className="text-center">
          잠시만 기다려주세요 !
        </Typography>
      </div>
    </div>
  );
}
