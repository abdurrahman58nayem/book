import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBook } from '../../lib/data';
import { BookDetail } from '../../components/book-detail';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const book = getBook(params.slug);
  if (!book) return { title: 'বই পাওয়া যায়নি' };
  return { title: book.title, description: book.description, openGraph: { title: `${book.title} — ${book.author}`, description: book.description, type: 'book' } };
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = getBook(params.slug);
  if (!book) notFound();
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: { '@type': 'Person', name: book.author },
    publisher: { '@type': 'Organization', name: book.publisher },
    isbn: book.isbn,
    inLanguage: book.language,
    numberOfPages: book.pages,
    datePublished: book.year,
    offers: { '@type': 'Offer', priceCurrency: 'BDT', price: book.price, availability: 'https://schema.org/InStock', url: `https://boipoka.store/books/${book.slug}` },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: book.rating, reviewCount: book.reviews },
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} /><BookDetail book={book} /></>;
}
