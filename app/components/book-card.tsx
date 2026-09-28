'use client';

import Link from 'next/link';
import type { Book } from '../lib/data';
import { formatPrice } from '../lib/data';
import { useStore } from './store-provider';
import { BookCover } from './book-cover';
import { Icon } from './icons';

export function BookCard({ book, compact = false }: { book: Book; compact?: boolean }) {
  const { addToCart } = useStore();
  const save = book.oldPrice ? book.oldPrice - book.price : 0;
  return (
    <article className={`book-card ${compact ? 'book-card-compact' : ''}`}>
      <div className="book-card-media">
        {book.badge && <span className="discount-badge">{book.badge}</span>}
        <Link href={`/books/${book.slug}`} aria-label={`${book.title} বিস্তারিত দেখুন`} className="cover-link">
          <BookCover book={book} size={compact ? 'mini' : 'card'} />
        </Link>
        <button className="wishlist-btn" aria-label="উইশলিস্টে যোগ করুন"><Icon name="heart" size={17} /></button>
      </div>
      <div className="book-card-body">
        <p className="eyebrow book-category-label">{book.category}</p>
        <Link href={`/books/${book.slug}`} className="book-title">{book.title}</Link>
        <Link href={`/author/${book.authorSlug}`} className="book-author">{book.author}</Link>
        <div className="rating-row"><span className="stars">★★★★★</span><span>{book.rating}</span><span className="review-count">({book.reviews})</span></div>
        <div className="price-row"><strong>{formatPrice(book.price)}</strong>{book.oldPrice && <del>{formatPrice(book.oldPrice)}</del>}</div>
        {save > 0 && <p className="save-line">সাশ্রয় {formatPrice(save)}</p>}
        {!compact && <div className="card-actions"><button className="btn btn-primary btn-small" onClick={() => addToCart(book)}>অর্ডার করুন <Icon name="arrow" size={15} /></button><button className="btn btn-secondary btn-square" onClick={() => addToCart(book)} aria-label="কার্টে যোগ করুন"><Icon name="cart" size={17} /></button></div>}
      </div>
    </article>
  );
}
