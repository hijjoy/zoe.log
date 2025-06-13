import CodeBlockBox from '@/shared/components/code-box';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type HRProps = ComponentPropsWithoutRef<'hr'>;
type ImageProps = {
  src: string;
  alt?: string;
};
type StrongProps = ComponentPropsWithoutRef<'strong'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type CodeProps = ComponentPropsWithoutRef<'code'>;
type PreProps = ComponentPropsWithoutRef<'pre'> & {
  children?: {
    props: {
      children: string;
    };
  };
};
type ListProps = ComponentPropsWithoutRef<'ul'>;
type OrderedListProps = ComponentPropsWithoutRef<'ol'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;

export const customComponents = {
  h1: (props: HeadingProps) => <h1 {...props} className="mb-4 mt-8 text-4xl font-bold text-gray-700" />,
  h2: (props: HeadingProps) => <h2 {...props} className="mb-3 mt-6 text-3xl font-semibold text-gray-700" />,
  h3: (props: HeadingProps) => <h3 {...props} className="mb-2 mt-4 text-2xl font-semibold text-gray-700" />,
  h4: (props: HeadingProps) => <h4 {...props} className="mb-1 mt-3 text-xl font-medium text-gray-700" />,

  p: (props: ParagraphProps) => <p {...props} className="mb-4 leading-loose text-gray-600" />,

  hr: (props: HRProps) => (
    <hr
      {...props}
      className="relative my-14 block h-10 border-none before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-xl before:font-normal before:text-gray-300 before:content-['*_*_*']"
    />
  ),

  img: ({ src, alt = 'image' }: ImageProps) => <Image src={src} alt={alt} width={800} height={500} className="mx-auto my-4 rounded-xl" />,

  strong: (props: StrongProps) => (
    <strong {...props} className="px-1 font-semibold text-gray-700 shadow-[inset_0_-10px_0_rgb(241,222,241)] dark:shadow-[inset_0_-10px_0_rgb(100,70,120)]" />
  ),

  a: (props: AnchorProps) => <a {...props} className="text-main underline hover:opacity-80" target="_blank" rel="noopener noreferrer" />,

  code: (props: CodeProps) => <code {...props} className="text-main rounded border border-gray-100 bg-gray-50 px-1 py-0.5 text-sm dark:bg-gray-200" />,

  pre: ({ children }: PreProps) => {
    const code = children?.props?.children || '';
    return <CodeBlockBox code={code} className="my-4" />;
  },

  ul: (props: ListProps) => <ul {...props} className="my-4 list-disc pl-8 text-gray-600" />,

  ol: (props: OrderedListProps) => <ol {...props} className="my-4 list-decimal pl-8 text-gray-600" />,

  li: (props: ListItemProps) => <li {...props} className="mb-1 text-gray-600" />,
};
