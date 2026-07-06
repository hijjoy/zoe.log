import { cn, Divider } from '@zoelog/ui';
import type { MDXComponents } from 'mdx/types';
import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import CodeBlockBox from '@/shared/components/code-box';
import MDXImage from './mdx-image';

export const customComponents: MDXComponents = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      {...props}
      className={cn(
        'mt-7 mb-4 break-keep font-semibold text-[22px] text-ds-heading leading-[1.25] md:text-[24px] [&_code]:text-base [&_code]:md:text-lg',
        className,
      )}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className={cn(
        'mt-14 mb-1 break-keep font-semibold text-[18px] text-ds-heading leading-[1.6] md:text-[22px] [&_code]:text-base [&_code]:md:text-lg',
        className,
      )}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className={cn(
        'mt-14 mb-1 break-keep font-semibold text-[18px] text-ds-heading leading-[1.6] md:text-[22px] [&_code]:text-base [&_code]:md:text-lg',
        className,
      )}
    />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      {...props}
      className={cn(
        'mt-12 mb-1 break-keep font-semibold text-[16px] text-ds-heading leading-[1.6] md:text-[18px] [&_code]:text-sm [&_code]:md:text-base',
        className,
      )}
    />
  ),

  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      className={cn(
        'mb-8 break-keep text-[15px] leading-[1.6] tracking-normal [overflow-wrap:anywhere]',
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
        'my-6 break-keep border-pg-300 border-l-4 pl-4 text-[15px] [overflow-wrap:anywhere] dark:border-pg-600',
        className,
      )}
    />
  ),

  Image: MDXImage,

  strong: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong
      {...props}
      className="break-keep px-1 font-medium text-ds-heading shadow-[inset_0_-10px_0_rgb(241,222,241)] dark:shadow-[inset_0_-10px_0_rgb(130,50,150)]"
    />
  ),

  del: ({ className, ...props }: HTMLAttributes<HTMLModElement>) => (
    <del
      {...props}
      className={cn('break-keep text-ds-secondary line-through', className)}
    />
  ),

  a: ({
    className,
    children,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className={cn(
        'break-keep text-ds-primary underline [overflow-wrap:anywhere] hover:opacity-80',
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only"> (새 탭에서 열림)</span>
    </a>
  ),

  code: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <code
      {...props}
      className={cn(
        'break-keep rounded-md border-[0.5px] border-pg-200 bg-pg-100 px-1.5 py-0.5 font-mono text-[13px] [overflow-wrap:anywhere] dark:border-pg-700 dark:bg-pg-800',
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
        'mb-6 list-inside list-disc space-y-2 break-keep pl-4 text-[15px]',
        className,
      )}
    />
  ),

  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol
      {...props}
      className={cn(
        'mb-6 list-inside list-decimal space-y-2 break-keep pl-4 text-[15px]',
        className,
      )}
    />
  ),

  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li
      {...props}
      className={cn(
        'break-keep text-[15px] leading-[1.6] [overflow-wrap:anywhere]',
        className,
      )}
    />
  ),

  table: ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
    // biome-ignore-start lint/a11y/noNoninteractiveTabindex: 가로 스크롤 영역 키보드 접근용 (axe: scrollable-region-focusable)
    <section className="my-6 overflow-x-auto" tabIndex={0} aria-label="표">
      <table
        {...props}
        className={cn(
          'w-full border-collapse text-[14px] leading-[1.6]',
          className,
        )}
      />
    </section>
    // biome-ignore-end lint/a11y/noNoninteractiveTabindex: 가로 스크롤 영역 키보드 접근용
  ),

  thead: ({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
    <thead
      {...props}
      className={cn(
        'border-pg-200 border-b-2 bg-pg-100 dark:border-pg-700 dark:bg-pg-800',
        className,
      )}
    />
  ),

  tbody: ({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody
      {...props}
      className={cn('divide-y divide-pg-200 dark:divide-pg-700', className)}
    />
  ),

  tr: ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      {...props}
      className={cn('hover:bg-pg-100 dark:hover:bg-pg-800', className)}
    />
  ),

  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      {...props}
      className={cn(
        'whitespace-nowrap px-4 py-3 text-left font-semibold text-ds-heading',
        className,
      )}
    />
  ),

  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      {...props}
      className={cn('whitespace-nowrap px-4 py-3 text-[14px]', className)}
    />
  ),
};
