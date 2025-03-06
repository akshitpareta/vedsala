export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  likes: number;
  isLiked?: boolean;
}

