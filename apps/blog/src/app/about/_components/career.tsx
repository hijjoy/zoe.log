import { Typography } from '@zoelog/ui';
import TimeLineItem from './time-line-item';

export default function Career() {
  return (
    <section aria-label="career" className="flex flex-col">
      <Typography variant="title" weight="bold" as="h1" className="mb-16 text-center text-2xl">Career</Typography>

      <ul>
        <TimeLineItem
          date="2024.11 - now"
          title="Crabit"
          subTitle="크래빗"
          description="Frontend Developer"
          link="https://www.crabit.co.kr/"
        />
      </ul>
    </section>
  );
}
