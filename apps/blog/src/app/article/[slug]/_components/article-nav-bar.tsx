'use client';

import { Typography } from '@zoelog/ui';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import {
  FaBackwardStep,
  FaEllipsis,
  FaForwardStep,
  FaHouse,
  FaPause,
  FaPlay,
  FaRegMessage,
  FaRepeat,
} from 'react-icons/fa6';
import { useScrollProgress } from '@/shared/hooks/use-scroll-progress';
import type { AdjacentPost, Post } from '@/types/post';

interface Props {
  post: Pick<Post, 'thumbnail' | 'title' | 'description'>;
  adjacent: {
    prev: AdjacentPost | null;
    next: AdjacentPost | null;
  };
}

export default function ArticleNavBar({ post, adjacent }: Props) {
  const { progress, isActive } = useScrollProgress();

  return (
    <div className="sticky top-4 z-30 mb-6 w-full">
      <div
        className="relative overflow-hidden rounded-full"
        style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        }}
      >
        <GlassLayers />

        <div className="relative flex items-center gap-3 py-2 pr-4 pl-2">
          <TransportControls
            prev={adjacent.prev}
            next={adjacent.next}
            isActive={isActive}
          />
          <TrackInfo
            thumbnail={post.thumbnail}
            title={post.title}
            description={post.description}
            progress={progress}
          />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

function GlassLayers() {
  return (
    <>
      {/* glass backdrop layer (굴절 + 블러) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'url(#liquid-glass) blur(24px) saturate(180%)',
          WebkitBackdropFilter:
            'url(#liquid-glass) blur(24px) saturate(180%)',
        }}
      />
      {/* glass ring layer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)',
        }}
      />
      {/* dark mode overlay */}
      <div
        className="pointer-events-none absolute inset-0 hidden rounded-full dark:block"
        style={{
          background: 'rgba(30,30,30,0.5)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)',
        }}
      />
    </>
  );
}

interface TransportControlsProps {
  prev: AdjacentPost | null;
  next: AdjacentPost | null;
  isActive: boolean;
}

function TransportControls({ prev, next, isActive }: TransportControlsProps) {
  return (
    <div className="flex items-center gap-0.5">
      <NavLink
        href={prev ? `/article/${prev.slug}` : null}
        aria-label="이전 글"
      >
        <FaBackwardStep size={14} />
      </NavLink>
      <PlayPauseIndicator isActive={isActive} />
      <NavLink
        href={next ? `/article/${next.slug}` : null}
        aria-label="다음 글"
      >
        <FaForwardStep size={14} />
      </NavLink>
      <button
        type="button"
        aria-label="처음으로"
        onClick={scrollToTop}
        className="hidden size-7 items-center justify-center rounded-full text-ds-secondary/70 transition-colors hover:bg-white/50 hover:text-ds-primary md:flex dark:hover:bg-white/10"
      >
        <FaRepeat size={11} />
      </button>
    </div>
  );
}

interface TrackInfoProps {
  thumbnail: Post['thumbnail'];
  title: Post['title'];
  description: Post['description'];
  progress: number;
}

function TrackInfo({ thumbnail, title, description, progress }: TrackInfoProps) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-2.5">
      <div className="relative size-10 shrink-0 overflow-hidden rounded-md bg-ds-surface">
        <Image
          src={thumbnail}
          alt=""
          aria-hidden
          fill
          sizes="40px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <Typography
              variant="caption"
              weight="semibold"
              color="heading"
              as="span"
              className="line-clamp-1"
            >
              {title}
            </Typography>
            {description && (
              <Typography
                variant="caption"
                color="secondary"
                as="span"
                className="line-clamp-1 hidden text-[11px] md:inline"
              >
                {description}
              </Typography>
            )}
          </div>
          <FaEllipsis
            size={14}
            aria-hidden
            className="hidden shrink-0 text-ds-heading md:inline-block"
          />
        </div>
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-pg-300 dark:bg-pg-700">
          <div
            aria-hidden
            className="h-full bg-ds-primary transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex shrink-0 items-center gap-0.5">
      <button
        type="button"
        aria-label="댓글로 이동"
        onClick={scrollToComments}
        className="hidden size-8 items-center justify-center rounded-full text-ds-heading transition-colors hover:bg-white/50 hover:text-ds-primary sm:flex dark:hover:bg-white/10"
      >
        <FaRegMessage size={14} />
      </button>
      <Link
        href="/"
        aria-label="홈으로"
        className="flex size-8 items-center justify-center rounded-full text-ds-heading transition-colors hover:bg-white/50 hover:text-ds-primary dark:hover:bg-white/10"
      >
        <FaHouse size={14} />
      </Link>
    </div>
  );
}

interface NavLinkProps {
  href: string | null;
  children: React.ReactNode;
  'aria-label': string;
}

function NavLink({ href, children, ...rest }: NavLinkProps) {
  if (!href) {
    return (
      <button
        type="button"
        disabled
        {...rest}
        className="flex size-8 items-center justify-center rounded-full text-ds-secondary opacity-30"
      >
        {children}
      </button>
    );
  }
  return (
    <Link
      href={href}
      {...rest}
      className="flex size-8 items-center justify-center rounded-full text-ds-heading transition-colors hover:bg-white/50 hover:text-ds-primary dark:hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

function PlayPauseIndicator({ isActive }: { isActive: boolean }) {
  return (
    <span
      aria-hidden
      className="flex size-8 items-center justify-center rounded-full text-ds-heading"
    >
      {isActive ? <FaPause size={18} /> : <FaPlay size={18} />}
    </span>
  );
}

function scrollToComments() {
  document
    .getElementById('comments')
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
