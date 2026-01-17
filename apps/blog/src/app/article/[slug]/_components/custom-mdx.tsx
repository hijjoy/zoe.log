import { cn, Divider } from '@zoelog/ui';
import type { MDXComponents } from 'mdx/types';
import type { HTMLAttributes } from 'react';
import CodeBlockBox from '@/shared/components/code-box';
import MDXImage from './mdx-image';

export const customComponents: MDXComponents = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      {...props}
      className={cn(
        'mt-7 mb-4 break-keep font-bold text-[26px] text-heading leading-[1.25] md:text-[32px] [&_code]:text-lg [&_code]:md:text-xl',
        className,
      )}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className={cn(
        'mt-14 mb-1 break-keep font-bold text-[20px] text-heading leading-[1.6] md:text-[24px] [&_code]:text-lg [&_code]:md:text-xl',
        className,
      )}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className={cn(
        'mt-10 mb-1 break-keep font-bold text-[20px] text-heading leading-[1.6] md:text-[24px] [&_code]:text-lg [&_code]:md:text-xl',
        className,
      )}
    />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      {...props}
      className={cn(
        'mt-8 mb-1 break-keep font-bold text-[18px] text-heading leading-[1.6] md:text-[20px] [&_code]:text-base [&_code]:md:text-lg',
        className,
      )}
    />
  ),

  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      className={cn(
        'mb-8 break-keep text-base leading-[1.6] tracking-normal',
        className,
      )}
    />
  ),

  hr: ({ className, ...props }: HTMLAttributes<HTMLHRElement>) => (
    <Divider spacing="md" className={className} {...props} />
  ),

  blockquote: ({ className, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className={cn(
        'my-6 break-keep border-gray-300 border-l-4 pl-4 text-base',
        className,
      )}
    />
  ),

  Image: MDXImage,

  strong: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong
      {...props}
      className="break-keep px-1 font-semibold text-heading shadow-[inset_0_-10px_0_rgb(241,222,241)] dark:shadow-[inset_0_-10px_0_rgb(100,70,120)]"
    />
  ),

  del: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <del
      {...props}
      className={cn('break-keep text-second line-through', className)}
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
        'break-keep rounded-md border-[0.5px] border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-base text-sm',
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
        'mb-6 list-inside list-disc space-y-2 break-keep pl-4 text-base',
        className,
      )}
    />
  ),

  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol
      {...props}
      className={cn(
        'mb-6 list-inside list-decimal space-y-2 break-keep pl-4 text-base',
        className,
      )}
    />
  ),

  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li
      {...props}
      className={cn(
        'break-keep text-[17px] text-base leading-[1.6]',
        className,
      )}
    />
  ),

  table: ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto">
      <table
        {...props}
        className={cn(
          'w-full border-collapse text-[15px] text-base leading-[1.6]',
          className,
        )}
      />
    </div>
  ),

  thead: ({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
    <thead
      {...props}
      className={cn('border-gray-200 border-b-2 bg-gray-100', className)}
    />
  ),

  tbody: ({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} className={cn('divide-y divide-gray-200', className)} />
  ),

  tr: ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
    <tr {...props} className={cn('hover:bg-gray-100', className)} />
  ),

  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      {...props}
      className={cn(
        'whitespace-nowrap px-4 py-3 text-left font-semibold text-heading',
        className,
      )}
    />
  ),

  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      {...props}
      className={cn('whitespace-nowrap px-4 py-3 text-base', className)}
    />
  ),
};
