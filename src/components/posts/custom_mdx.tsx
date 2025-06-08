import Image from "next/image";
import CodeBlockBox from "../common/code-box";

export const customComponents = {
  h1: (props: any) => (
    <h1 {...props} className="text-4xl font-bold mt-8 mb-4 text-gray-700" />
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-3xl font-semibold mt-6 mb-3 text-gray-700" />
  ),
  h3: (props: any) => (
    <h3 {...props} className="text-2xl font-semibold mt-4 mb-2 text-gray-700" />
  ),
  h4: (props: any) => (
    <h4 {...props} className="text-xl font-medium mt-3 mb-1 text-gray-700" />
  ),

  p: (props: any) => (
    <p {...props} className="leading-loose mb-4 text-gray-600" />
  ),

  hr: (props: any) => (
    <hr
      {...props}
      className="relative block border-none h-10 my-14 before:content-['*_*_*'] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-gray-300 before:text-xl before:font-normal"
    />
  ),

  img: (props: any) => (
    <Image
      src={props.src}
      alt={"image"}
      width={800}
      height={500}
      className="rounded-xl mx-auto my-4"
    />
  ),

  strong: (props: any) => (
    <strong
      {...props}
      className="text-gray-700 px-1 shadow-[inset_0_-10px_0_rgb(241,222,241)] dark:shadow-[inset_0_-10px_0_rgb(100,70,120)] font-semibold"
    />
  ),

  a: (props: any) => (
    <a
      {...props}
      className="text-main underline hover:opacity-80"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),

  // 코드 인라인
  code: (props: any) => (
    <code
      {...props}
      className="bg-gray-50 dark:bg-gray-200 px-1 py-0.5 rounded text-sm text-main border border-gray-100"
    />
  ),

  // 프리포맷된 블럭코드 (예: ```js ~~~)
  pre: ({ children, ...props }: any) => {
    const code = children?.props?.children || "";
    return <CodeBlockBox code={code} className="my-4" />;
  },

  ul: (props: any) => (
    <ul {...props} className="list-disc pl-8 my-4 text-gray-600" />
  ),
  ol: (props: any) => (
    <ol {...props} className="list-decimal pl-8 my-4 text-gray-600" />
  ),
  li: (props: any) => <li {...props} className="mb-1 text-gray-600" />,
};
