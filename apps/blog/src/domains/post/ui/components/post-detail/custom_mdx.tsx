import { cn } from '@zoelog/ui';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import type { HTMLAttributes, ImgHTMLAttributes } from 'react';
import CodeBlockBox from '@/shared/components/code-box';

type MDXImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const customComponents: MDXComponents = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      {...props}
      className={cn(
        'my-6 break-keep font-bold text-3xl text-gray-700 sm:text-2xl [&_code]:text-2xl [&_code]:sm:text-xl',
        className,
      )}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className={cn(
        'mt-6 mb-3 break-keep font-semibold text-3xl text-gray-700 sm:text-2xl [&_code]:text-2xl [&_code]:sm:text-xl',
        className,
      )}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className={cn(
        'mt-6 mb-2 break-keep font-semibold text-2xl text-gray-700 sm:text-xl [&_code]:text-xl [&_code]:sm:text-lg',
        className,
      )}
    />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      {...props}
      className={cn(
        'mt-3 mb-1 break-keep font-medium text-gray-700 text-xl sm:text-lg [&_code]:text-lg [&_code]:sm:text-base',
        className,
      )}
    />
  ),

  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      className={cn('mb-4 break-keep text-gray-600 leading-relaxed', className)}
    />
  ),

  hr: ({ className, ...props }: HTMLAttributes<HTMLHRElement>) => (
    <hr
      {...props}
      className={cn(
        'before:-translate-x-1/2 before:-translate-y-1/2 relative my-14 block h-10 border-none before:absolute before:top-1/2 before:left-1/2 before:font-normal before:text-gray-300 before:text-xl before:content-["*_*_*"]',
        className,
      )}
    />
  ),

  blockquote: ({ className, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className={cn(
        'my-6 break-keep border-gray-300 border-l-4 pl-4 text-gray-600',
        className,
      )}
    />
  ),

  img: ({ alt = 'image', src, ...props }: MDXImageProps) => {
    if (typeof src !== 'string') return null;
    return (
      <span className="my-10 block">
        <Image
          src={src}
          alt={alt}
          width={450}
          height={300}
          className={cn(
            'mx-auto rounded-lg border border-zinc-100 dark:border-zinc-700 ',
            props.className,
          )}
          loading="lazy"
        />
        {alt && alt !== 'image' && (
          <span
            className="mt-2 block break-keep text-center text-gray-400 text-xs"
            aria-hidden
          >
            {alt}
          </span>
        )}
      </span>
    );
  },

  strong: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong
      {...props}
      className="break-keep px-1 font-semibold text-gray-700 shadow-[inset_0_-10px_0_rgb(241,222,241)] dark:shadow-[inset_0_-10px_0_rgb(100,70,120)]"
    />
  ),

  del: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <del
      {...props}
      className={cn('break-keep text-gray-500 line-through', className)}
    />
  ),

  a: ({ className, ...props }: HTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className={cn(
        'break-keep text-main underline hover:opacity-80',
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
    />
  ),

  code: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <code
      {...props}
      className={cn(
        'break-keep rounded-md border-[0.5px] border-zinc-200 bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-700 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-300',
        className,
      )}
    />
  ),

  pre: (props) => {
    const code = (props?.children as any)?.props?.children;
    if (typeof code !== 'string') return null;
    return <CodeBlockBox code={code} className={props.className} />;
  },

  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul
      {...props}
      className={cn(
        'mb-4 list-inside list-disc space-y-1 break-keep text-gray-600',
        className,
      )}
    />
  ),

  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol
      {...props}
      className={cn(
        'mb-4 list-inside list-decimal space-y-1 break-keep text-gray-600',
        className,
      )}
    />
  ),

  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className={cn('break-keep text-gray-600', className)} />
  ),
};
