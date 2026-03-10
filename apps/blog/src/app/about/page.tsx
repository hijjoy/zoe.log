import { Divider } from '@zoelog/ui';
import Activity from './_components/activity';
import Career from './_components/career';
import Info from './_components/info';

export default function About() {
  return (
    <div className="mb-40 flex min-h-screen flex-col gap-32 px-5 pt-10">
      <Info />
      <Divider />
      <Career />
      <Activity />
    </div>
  );
}
