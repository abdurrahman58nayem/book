import type { Book } from '../lib/data';

export function BookCover({ book, size = 'card', priority = false }: { book: Book; size?: 'hero' | 'card' | 'detail' | 'mini'; priority?: boolean }) {
  return (
    <div className={`book-cover book-cover-${book.cover} cover-${size} ${priority ? 'cover-priority' : ''}`} role="img" aria-label={`${book.title} — ${book.author}`}>
      <div className="cover-topline">{book.category}</div>
      <div className="cover-rule" />
      <div className="cover-motif" aria-hidden="true">{book.motif}</div>
      <div className="cover-title">{book.title}</div>
      <div className="cover-author">{book.author}</div>
      <div className="cover-bottomline"><span>বইপোকা</span><i>✦</i></div>
    </div>
  );
}
