export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  authorId: string;
  categoryId: string;
  publishedAt: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  readTime: string;
}

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  content: string;
  date: string;
}