import { Article, Category, Author } from '../types';

export const WEBSITE_NAME = "Holistic News";

export const categories: Category[] = [
  { id: '1', name: 'Politics', slug: 'politics' },
  { id: '2', name: 'Technology', slug: 'technology' },
  { id: '3', name: 'Business', slug: 'business' },
  { id: '4', name: 'Sports', slug: 'sports' },
  { id: '5', name: 'Entertainment', slug: 'entertainment' },
];

export const authors: Author[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Editor-in-Chief',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7ece067e-b1eb-4b47-a41a-d384ce956397/journalist-female-1-f6bd1603-1780255660978.webp',
    bio: 'Sarah has over 15 years of experience in investigative journalism.'
  },
  {
    id: '2',
    name: 'Mark Thompson',
    role: 'Tech Reporter',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7ece067e-b1eb-4b47-a41a-d384ce956397/journalist-male-1-6f294384-1780255660260.webp',
    bio: 'Mark covers the latest in Silicon Valley and emerging tech trends.'
  }
];

const API_BASE_URL = 'https://api.spaceflightnewsapi.net/v4';

const mapApiToArticle = (apiArticle: any): Article => ({
  id: apiArticle.id.toString(),
  title: apiArticle.title,
  excerpt: apiArticle.summary,
  content: apiArticle.summary, // The API summary is usually short, but better than nothing
  image: apiArticle.image_url,
  authorId: (Math.floor(Math.random() * 2) + 1).toString(), // Randomly assign one of our mock authors
  categoryId: (Math.floor(Math.random() * 5) + 1).toString(), // Randomly assign one of our categories
  publishedAt: new Date(apiArticle.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  isFeatured: false,
  isTrending: Math.random() > 0.7,
  readTime: `${Math.floor(Math.random() * 10) + 3} min`
});

export const fetchLatestArticles = async (limit = 10): Promise<Article[]> => {
  const response = await fetch(`${API_BASE_URL}/articles?limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch articles');
  const data = await response.json();
  return data.results.map(mapApiToArticle);
};

export const fetchArticlesByCategory = async (categorySlug: string): Promise<Article[]> => {
  // Since the Spaceflight API doesn't match our categories, we fetch and simulate filtering
  // In a real app, you'd have a backend that handles this
  const articles = await fetchLatestArticles(30);
  // We'll just return a subset to simulate category-specific content
  return articles.slice(0, 10);
};

export const fetchArticleById = async (id: string): Promise<Article | null> => {
  const response = await fetch(`${API_BASE_URL}/articles/${id}`);
  if (!response.ok) return null;
  const data = await response.json();
  return mapApiToArticle(data);
};

export const newsroomInfo = {
  address: "News Plaza, Nairobi, Kenya",
  phone: "+254 20 123 4567",
  email: "press@holisticnews.co.ke",
  emergencyPhone: "911"
};