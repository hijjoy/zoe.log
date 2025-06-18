import CodeBlockBox from '@/shared/components/code-box';
import { cn } from '@zoelog/ui';
import type { HTMLAttributes, ImgHTMLAttributes } from 'react';
import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';

type MDXImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const customComponents: MDXComponents = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} className={cn('my-6 text-4xl font-bold text-gray-700', className)} />,
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className={cn('mb-3 mt-6 text-3xl font-semibold text-gray-700', className)} />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className={cn('mb-2 mt-6 text-2xl font-semibold text-gray-700', className)} />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4 {...props} className={cn('mb-1 mt-3 text-xl font-medium text-gray-700', className)} />
  ),

  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => <p {...props} className={cn('mb-4 leading-relaxed text-gray-600', className)} />,

  hr: ({ className, ...props }: HTMLAttributes<HTMLHRElement>) => (
    <hr
      {...props}
      className={cn(
        'relative my-14 block h-10 border-none before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-xl before:font-normal before:text-gray-300 before:content-["*_*_*"]',
        className,
      )}
    />
  ),

  blockquote: ({ className, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} className={cn('my-6 border-l-4 border-gray-300 pl-4 text-gray-600', className)} />
  ),

  img: ({ alt = 'image', src, ...props }: MDXImageProps) => {
    if (typeof src !== 'string') return null;
    return <Image src={src} alt={alt} width={800} height={500} className={cn('mx-auto my-4 rounded-xl', props.className)} />;
  },

  strong: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong {...props} className="px-1 font-semibold text-gray-700 shadow-[inset_0_-10px_0_rgb(241,222,241)] dark:shadow-[inset_0_-10px_0_rgb(100,70,120)]" />
  ),

  a: ({ className, ...props }: HTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} className={cn('text-main underline hover:opacity-80', className)} target="_blank" rel="noopener noreferrer" />
  ),

  code: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <code {...props} className={cn('rounded-md bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-700', className)} />
  ),

  pre: (props) => {
    const code = (props?.children as any)?.props?.children;
    if (typeof code !== 'string') return null;
    return <CodeBlockBox code={code} className={props.className} />;
  },

  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className={cn('mb-4 list-inside list-disc space-y-1 text-gray-600', className)} />
  ),

  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className={cn('mb-4 list-inside list-decimal space-y-1 text-gray-600', className)} />
  ),

  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => <li {...props} className={cn('text-gray-600', className)} />,
};
