import { Text } from '@zoelog/ui';
import TimeLineItem from './time-line-item';

export default function Career() {
  return (
    <section aria-label="career" className="flex flex-col">
      <Text className="mb-16 text-center" asChild>
        <h1 className="font-bold text-2xl">Career</h1>
      </Text>

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
