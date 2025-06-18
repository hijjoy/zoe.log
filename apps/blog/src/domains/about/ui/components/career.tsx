import { Text } from '@zoelog/ui';
import TimeLineItem from './time-line-item';

export default function Career() {
  return (
    <div className="flex flex-col">
      <Text className="mb-16 text-center">
        <h1 className="text-2xl font-bold">Career</h1>
      </Text>

      <TimeLineItem date="2024.11 - now" title="Crabit" subTitle="크래빗" description="Frontend Developer" link="https://www.crabit.co.kr/" />
    </div>
  );
}
