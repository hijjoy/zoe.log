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
    <p {...props} className="leading-loose mb-4 text-gray-700" />
  ),

  hr: (props: any) => <hr {...props} className="my-10" />,

  img: (props: any) => (
    <Image
      src={props.src}
      alt={"image"}
      width={800}
      height={500}
      className="rounded-xl mx-auto my-4"
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
      className="bg-gray-100 dark:bg-gray-200 px-1 py-0.5 rounded text-sm text-main"
    />
  ),

  // 프리포맷된 블럭코드 (예: ```js ~~~)
  pre: ({ children, ...props }: any) => {
    const code = children?.props?.children || "";
    return <CodeBlockBox code={code} className="my-4" />;
  },

  ul: (props: any) => <ul {...props} className="list-disc pl-6 my-4" />,
  ol: (props: any) => <ol {...props} className="list-decimal pl-6 my-4" />,
  li: (props: any) => <li {...props} className="mb-1" />,
};
