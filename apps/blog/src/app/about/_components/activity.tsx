import { Typography } from '@zoelog/ui';
import TimeLineItem from './time-line-item';

export default function Activity() {
  return (
    <section aria-label="activity">
      <Typography variant="title" weight="bold" as="h1" className="mb-16 text-center text-2xl">Activity</Typography>

      <ul className="flex flex-col">
        <TimeLineItem
          date="2024.03 - 2024.11"
          title="UMC"
          subTitle="유엠씨"
          description="Web • FE"
          link="https://umc.it.kr/"
        />
        <TimeLineItem
          date="2022.03 - 2022.08"
          title="Like Lion"
          subTitle="멋쟁이사자처럼"
          description="Django • BE"
          link="https://likelion.net/"
        />
      </ul>
    </section>
  );
}
