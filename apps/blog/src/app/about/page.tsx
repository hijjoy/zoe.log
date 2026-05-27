import { Divider, Typography } from '@zoelog/ui';
import Image from 'next/image';
import Link from 'next/link';
import { GoLink } from 'react-icons/go';
import AnimatedText from '@/shared/components/animated-text';

export default function About() {
  return (
    <div className="mx-auto mb-40 flex min-h-screen max-w-[768px] flex-col gap-32 px-5 pt-10">
      <Info />
      <Divider />
      <Career />
      <Activity />
    </div>
  );
}

function Info() {
  return (
    <section aria-label="info">
      <div className="relative">
        <Image
          src="/images/zoe.png"
          alt="logo"
          width={50}
          height={50}
          priority
          aria-hidden
          className="-top-4 absolute left-[105px] rotate-12"
        />
        <div className="mb-10 flex flex-col">
          <AnimatedText className="font-bold text-ds-heading text-lg">
            Hyewon, Jung
          </AnimatedText>
          <AnimatedText
            unit="word"
            preset="fade"
            className="text-ds-secondary text-sm"
          >
            Frontend Developer based in Seoul, South Korea
          </AnimatedText>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Typography variant="label" as="p">
          기능을 구현하는 것만큼, 보여지는 화면의 형태와 감각에도 많은 관심을
          가지고 있습니다. <br />
        </Typography>
        <Typography variant="label" as="p" className="leading-relaxed">
          때로는 디자이너처럼 피그마 작업을 하고, <br />
          때로는 개발자처럼 코드를 작성하며{' '}
          <strong className="font-medium shadow-[inset_0_-10px_0_rgb(241,222,241)] dark:shadow-[inset_0_-10px_0_rgb(130,50,150)]">
            코드와 디자인과 개발 사이를 자유롭게{' '}
          </strong>
          오가는 일을 즐깁니다.
        </Typography>
        <Typography variant="label" as="p" className="leading-relaxed">
          직접 디자인한 화면을 개발해 앱을 출시해보면서, 사용자의 입장에서
          UI/UX를 더 입체적으로 바라보고 구현하는 시각을 얻게 되었고, 사용자
          흐름과 반응을 세심하게 고려하며 UI를 구현하는 일에 더욱 매력을 느끼게
          되었습니다.
          <br />
          다양한 시도와 반복을 통해 더 나은 인터페이스와 인터랙션을 찾아내는
          개발을 계속해나가고 싶습니다.
        </Typography>
      </div>
    </section>
  );
}

function Career() {
  return (
    <section aria-label="career" className="flex flex-col">
      <Typography
        variant="title"
        weight="bold"
        as="h1"
        color="heading"
        className="mb-16 text-center"
      >
        Career
      </Typography>

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

function Activity() {
  return (
    <section aria-label="activity">
      <Typography
        variant="title"
        weight="bold"
        as="h1"
        color="heading"
        className="mb-16 text-center"
      >
        Activity
      </Typography>

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

interface TimeLineItemProps {
  date: string;
  title: string;
  subTitle?: string;
  description: string;
  link?: string;
}

function TimeLineItem({
  date,
  title,
  description,
  subTitle,
  link,
}: TimeLineItemProps) {
  return (
    <li className="flex flex-col">
      <div className="relative flex items-center gap-6 border-ds-border-semantic border-l pb-4 pl-4 before:absolute before:top-[20px] before:left-[-5px] before:h-2 before:w-2 before:rounded-full before:border before:border-ds-border-semantic before:bg-ds-background">
        <Typography
          variant="label"
          as="p"
          color="secondary"
          className="w-[80px] md:w-[120px]"
        >
          {date}
        </Typography>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:gap-2">
            <Typography
              variant="heading"
              weight="semibold"
              as="h2"
              color="heading"
            >
              {title}
            </Typography>
            <div className="flex items-center gap-2">
              {subTitle && (
                <Typography variant="caption" color="secondary">
                  {subTitle}
                </Typography>
              )}
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ds-secondary transition-colors hover:text-ds-primary"
                >
                  <GoLink size={12} aria-label="site link" />
                </Link>
              )}
            </div>
          </div>
          <Typography variant="caption" as="p" color="secondary">
            {description}
          </Typography>
        </div>
      </div>
    </li>
  );
}
