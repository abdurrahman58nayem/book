import { books } from '../lib/data';
import { BookCard } from '../components/book-card';
import { Breadcrumbs } from '../components/breadcrumbs';

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';
  const normalized = query.toLowerCase();
  const results = books.filter((book) => `${book.title} ${book.author} ${book.publisher} ${book.category} ${book.isbn}`.toLowerCase().includes(normalized));
  return <div className="search-page"><div className="container"><Breadcrumbs items={[{ label: 'সার্চ ফলাফল' }]} /><div className="search-page-heading"><span className="eyebrow">খুঁজে দেখা</span><h1>{query ? <><em>“{query}”</em> এর জন্য ফলাফল</> : 'আপনার বই খুঁজুন'}</h1><p>{results.length ? `${results.length}টি বই আপনার জন্য পাওয়া গেছে।` : 'অন্য নামে বা লেখকের নামে খুঁজে দেখুন।'}</p></div>{results.length ? <div className="book-grid search-grid">{results.map((book) => <BookCard key={book.slug} book={book} />)}</div> : <div className="empty-state large-empty"><span>⌕</span><h2>কোনো বই পাওয়া যায়নি</h2><p>অন্য নামে খুঁজে দেখুন—যেমন বইয়ের নাম, লেখক বা ক্যাটাগরি।</p></div>}</div></div>;
}
