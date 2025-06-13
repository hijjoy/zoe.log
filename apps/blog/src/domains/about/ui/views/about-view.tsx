import MotionOpacity from '@/shared/components/motion-opacity';
import React from 'react';
import Info from '../components/info';
import Career from '../components/career';
import Activity from '../components/activity';

export default function AboutView() {
  return (
    <MotionOpacity className="mb-40 flex min-h-screen flex-col gap-32 px-4 pt-10 sm:px-6">
      <Info />
      <hr className="relative block h-10 border-none before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-xl before:font-normal before:text-gray-300 before:content-['*_*_*']" />
      <Career />
      <Activity />
    </MotionOpacity>
  );
}
