export interface Post {
  id: number;
  slug: string;
  title: string;
  description: string | null;
  content: string;
  categories: string[];
  createdAt: Date;
  thumbnail: string;
}
