export interface Post {
  id: number;
  slug: string;
  title: string;
  description: string | null;
  content: string;
  createdAt: Date;
  thumbnail: string;
}

export interface PostCategory {
  categories: Category;
}

export interface Category {
  name: string;
}
