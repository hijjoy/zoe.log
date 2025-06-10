import CategoryLayout from "@/domains/post/ui/layouts/categroy-layout";

interface Props {
  children: React.ReactNode;
}

export default function PostsLayout({ children }: Props) {
  return <CategoryLayout>{children}</CategoryLayout>;
}
