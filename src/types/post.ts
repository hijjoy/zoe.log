export interface Post {
  id: number;
  title: string;
  description: string | null;
  content: string;
  categories: string[];
  createdAt: Date;
  thumbnail: string | null;
}
