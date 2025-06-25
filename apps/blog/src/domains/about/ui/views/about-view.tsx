import MotionOpacity from '@/shared/components/motion-opacity';
import Activity from '../components/activity';
import Career from '../components/career';
import Info from '../components/info';

export default function AboutView() {
  return (
    <MotionOpacity className="mb-40 flex min-h-screen flex-col gap-32 px-4 pt-10 sm:px-6">
      <Info />
      <hr className="before:-translate-x-1/2 before:-translate-y-1/2 relative block h-10 border-none before:absolute before:top-1/2 before:left-1/2 before:font-normal before:text-gray-300 before:text-xl before:content-['*_*_*']" />
      <Career />
      <Activity />
    </MotionOpacity>
  );
}
