'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Category } from '../lib/data';
import { books, categories, formatPrice } from '../lib/data';
import { BookCard } from './book-card';
import { Breadcrumbs } from './breadcrumbs';
import { Icon } from './icons';

export function CategoryContent({ category }: { category: Category }) {
  const [sort, setSort] = useState('popular');
  const [filterOpen, setFilterOpen] = useState(false);
  const [price, setPrice] = useState('all');
  const categoryBooks = books.filter((book) => book.categorySlug === category.slug);
  const filtered = useMemo(() => {
    const result = categoryBooks.filter((book) => price === 'all' || (price === 'under300' ? book.price < 300 : price === '300-500' ? book.price >= 300 && book.price <= 500 : book.price > 500));
    return [...result].sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : sort === 'new' ? Number(b.year) - Number(a.year) : b.rating - a.rating);
  }, [categoryBooks, price, sort]);
  const description = category.slug === 'novel' ? 'যে গল্পগুলো আপনাকে অন্য এক জীবনে নিয়ে যায়—বাংলা ও অনুবাদ উপন্যাসের বাছাই করা সংগ্রহ।' : category.short;
  const tabs = categories.slice(0, 6).some((item) => item.slug === category.slug) ? categories.slice(0, 6) : [...categories.slice(0, 5), category];
  return <div className={`category-page tone-page-${category.tone}`}><section className="category-hero"><div className="container"><Breadcrumbs items={[{ label: category.name }]} /><div className="category-hero-copy"><div><span className="eyebrow">বইপোকার সংগ্রহ</span><h1>{category.name}<em> বই</em></h1><p>{description}</p></div><div className="category-count"><strong>{filtered.length.toLocaleString('bn-BD')}</strong><span>টি নির্বাচিত বই</span></div></div></div></section><div className="container category-main"><div className="category-tools"><div className="category-tabs">{tabs.map((item) => <Link key={item.slug} className={item.slug === category.slug ? 'active' : ''} href={`/category/${item.slug}`}>{item.name}</Link>)}</div><div className="toolbar-row"><button className="filter-trigger" onClick={() => setFilterOpen(true)}><Icon name="filter" size={17} /> ফিল্টার <span>({price === 'all' ? 0 : 1})</span></button><label className="sort-select"><span>সাজান:</span><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="বই সাজান"><option value="popular">জনপ্রিয়</option><option value="new">নতুন আগে</option><option value="low">দাম: কম থেকে বেশি</option><option value="high">দাম: বেশি থেকে কম</option></select><Icon name="chevron" size={14} /></label></div></div><div className="category-layout"><aside className={`filters-panel ${filterOpen ? 'filters-open' : ''}`}><div className="filter-heading"><b>ফিল্টার</b><button onClick={() => setFilterOpen(false)} aria-label="ফিল্টার বন্ধ করুন"><Icon name="close" size={18} /></button></div><FilterGroup title="দামের পরিসর"><label><input type="radio" checked={price === 'all'} onChange={() => setPrice('all')} /> সব দাম</label><label><input type="radio" checked={price === 'under300'} onChange={() => setPrice('under300')} /> ৳৩০০-এর মধ্যে</label><label><input type="radio" checked={price === '300-500'} onChange={() => setPrice('300-500')} /> ৳৩০০ — ৳৫০০</label><label><input type="radio" checked={price === 'over500'} onChange={() => setPrice('over500')} /> ৳৫০০-এর বেশি</label></FilterGroup><FilterGroup title="বিন্যাস"><label><input type="checkbox" /> পেপারব্যাক <small>১২</small></label><label><input type="checkbox" /> হার্ডকভার <small>৮</small></label></FilterGroup><FilterGroup title="ভাষা"><label><input type="checkbox" /> বাংলা <small>৩২</small></label><label><input type="checkbox" /> বাংলা অনুবাদ <small>১৪</small></label></FilterGroup><button className="clear-filters" onClick={() => setPrice('all')}>সব ফিল্টার মুছুন</button></aside><div className="category-results"><div className="result-summary"><span>{filtered.length ? `${filtered.length}টি বই পাওয়া গেছে` : 'কোনো বই পাওয়া যায়নি'}</span><span className="desktop-sort">জনপ্রিয়তার ভিত্তিতে সাজানো</span></div>{filtered.length ? <div className="book-grid category-book-grid">{filtered.map((book) => <BookCard key={book.slug} book={book} />)}</div> : <div className="empty-state"><span>☹</span><h2>কোনো বই পাওয়া যায়নি</h2><p>অন্য দামের পরিসরে খুঁজে দেখুন</p><button className="btn btn-primary btn-small" onClick={() => setPrice('all')}>সব বই দেখুন</button></div>}</div></div></div><div className="mobile-filter-bar"><button onClick={() => setFilterOpen(true)}><Icon name="filter" size={17} /> ফিল্টার</button><label><Icon name="chevron" size={14} /><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="popular">সাজান: জনপ্রিয়</option><option value="new">সাজান: নতুন</option><option value="low">দাম: কম</option><option value="high">দাম: বেশি</option></select></label></div></div>;
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return <fieldset className="filter-group"><legend>{title}</legend>{children}</fieldset>;
}
