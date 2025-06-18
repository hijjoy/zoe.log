import { Text } from '@zoelog/ui';
import React from 'react';
import TimeLineItem from './time-line-item';

export default function Activity() {
  return (
    <div>
      <Text className="mb-16 text-center">
        <h1 className="text-2xl font-bold">Activity</h1>
      </Text>

      <div className="flex flex-col">
        <TimeLineItem date="2024.03 - 2024.11" title="UMC" subTitle="유엠씨" description="Web • FE" link="https://umc.makeus.in/" />
        <TimeLineItem date="2022.03 - 2022.08" title="Like Lion" subTitle="멋쟁이사자처럼" description="Django • BE" link="https://likelion.net/" />
      </div>
    </div>
  );
}
