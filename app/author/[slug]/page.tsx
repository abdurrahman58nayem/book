import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { authors, books } from '../../lib/data';
import { BookCard } from '../../components/book-card';
import { Breadcrumbs } from '../../components/breadcrumbs';
import { Icon } from '../../components/icons';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const author = authors.find((item) => item.slug === params.slug);
  return { title: author ? `${author.name} — লেখক` : 'লেখক' };
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const author = authors.find((item) => item.slug === params.slug);
  const authorBooks = books.filter((book) => book.authorSlug === params.slug);
  if (!author) notFound();
  return <div className="directory-page author-page"><div className="container"><Breadcrumbs items={[{ label: 'লেখক', href: '/author/humayun-ahmed' }, { label: author.name }]} /><section className="directory-hero"><div className="directory-avatar">{author.name.slice(0, 1)}</div><div><span className="eyebrow">লেখক পরিচিতি</span><h1>{author.name}</h1><p>{author.note} · {author.books}</p></div></section><section className="directory-books"><div className="directory-heading"><div><span className="eyebrow">এই লেখকের বই</span><h2>বুকশেলফে যা আছে</h2></div><span>{authorBooks.length}টি বই</span></div>{authorBooks.length ? <div className="book-grid">{authorBooks.map((book) => <BookCard key={book.slug} book={book} />)}</div> : <div className="empty-state"><span>▧</span><h2>বই আসছে শিগগিরই</h2><p>এই লেখকের আরও বই আমরা যোগ করছি।</p></div>}</section></div></div>;
}
