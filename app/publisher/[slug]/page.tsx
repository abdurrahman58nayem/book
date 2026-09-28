import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { books } from '../../lib/data';
import { BookCard } from '../../components/book-card';
import { Breadcrumbs } from '../../components/breadcrumbs';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const book = books.find((item) => item.publisherSlug === params.slug);
  return { title: book ? `${book.publisher} — প্রকাশক` : 'প্রকাশক' };
}

export default function PublisherPage({ params }: { params: { slug: string } }) {
  const publisherBooks = books.filter((book) => book.publisherSlug === params.slug);
  if (!publisherBooks.length) notFound();
  const publisher = publisherBooks[0].publisher;
  const categoryCount = new Set(publisherBooks.map((book) => book.category)).size;
  return <div className="directory-page publisher-page"><div className="container"><Breadcrumbs items={[{ label: 'প্রকাশক', href: `/publisher/${params.slug}` }, { label: publisher }]} /><section className="publisher-hero"><span className="publisher-seal">প</span><div><span className="eyebrow">প্রকাশক</span><h1>{publisher}</h1><p>বাছাই করা {publisherBooks.length}টি বই · {categoryCount}টি ক্যাটাগরি</p></div></section><section className="directory-books"><div className="directory-heading"><div><span className="eyebrow">প্রকাশকের সংগ্রহ</span><h2>এই প্রকাশকের বই</h2></div></div><div className="book-grid">{publisherBooks.map((book) => <BookCard key={book.slug} book={book} />)}</div></section></div></div>;
}
