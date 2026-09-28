import type { MetadataRoute } from 'next';
import { books, categories, authors } from './lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://boipoka.store';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...categories.map((item) => ({ url: `${base}/category/${item.slug}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: .8 })),
    ...books.map((book) => ({ url: `${base}/books/${book.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .7 })),
    ...authors.map((author) => ({ url: `${base}/author/${author.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .5 })),
  ];
}
