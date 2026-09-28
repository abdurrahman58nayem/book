'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { books, categories } from '../lib/data';
import { useStore } from './store-provider';
import { Icon } from './icons';

export function SiteHeader() {
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { cartCount } = useStore();
  const suggestions = query.trim() ? books.filter((book) => `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(query.toLowerCase())).slice(0, 4) : [];

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return <>
    <div className="announcement"><div className="container announcement-inner"><span><i>✦</i> নতুন পাঠকদের জন্য নির্বাচিত বইয়ে আনন্দ</span><Link href="/category/novel">বইপোকা সম্পর্কে জানুন <Icon name="arrow" size={13} /></Link></div></div>
    <header className="site-header">
      <div className="container header-top">
        <button className="mobile-menu-btn" onClick={() => setMobileOpen((value) => !value)} aria-label="মেনু খুলুন"><Icon name={mobileOpen ? 'close' : 'menu'} size={23} /></button>
        <Link href="/" className="brand" aria-label="বইপোকা হোমপেজ"><span className="brand-symbol">ব</span><span className="brand-copy"><b>বইপোকা</b><em>পড়ার আনন্দে, জীবনের গল্পে</em></span></Link>
        <form className="header-search" onSubmit={submitSearch} role="search">
          <Icon name="search" size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} onFocus={() => setFocus(true)} onBlur={() => window.setTimeout(() => setFocus(false), 150)} placeholder="বই, লেখক বা ISBN দিয়ে খুঁজুন" aria-label="বই খুঁজুন" /> <kbd>⌘ K</kbd>
          {focus && suggestions.length > 0 && <div className="search-suggestions"><p className="suggestions-label">আপনি কি খুঁজছেন?</p>{suggestions.map((book) => <button type="button" key={book.slug} onMouseDown={() => router.push(`/books/${book.slug}`)}><span className={`suggestion-dot dot-${book.cover}`} /><span><b>{book.title}</b><small>{book.author}</small></span><Icon name="arrow" size={14} /></button>)}<button type="submit" className="see-all-search">সব ফলাফল দেখুন <Icon name="arrow" size={14} /></button></div>}
        </form>
        <div className="header-actions"><Link href="/account" className="header-action account-action"><Icon name="user" size={20} /><span>অ্যাকাউন্ট<small>সাইন ইন করুন</small></span></Link><Link href="/cart" className="header-action cart-action"><span className="cart-icon-wrap"><Icon name="cart" size={20} />{cartCount > 0 && <b>{cartCount}</b>}</span><span>কার্ট<small>{cartCount ? `${cartCount}টি বই` : 'খালি আছে'}</small></span></Link></div>
      </div>
      <div className={`header-nav-wrap ${mobileOpen ? 'nav-open' : ''}`}>
        <nav className="container header-nav" aria-label="প্রধান নেভিগেশন"><Link href="/category/novel" className={pathname?.includes('/category') ? 'active' : ''}>ক্যাটাগরি <Icon name="chevron" size={13} /></Link><Link href="/#offers">আজকের অফার</Link><Link href="/#new">নতুন বই</Link><Link href="/#popular">জনপ্রিয় বই</Link><Link href="/category/islamic">ইসলামিক বই</Link><Link href="/category/kids">শিশু-কিশোর</Link><span className="nav-spacer" /><Link href="/contact">যোগাযোগ</Link></nav>
      </div>
      <div className="mobile-search container"><form className="header-search" onSubmit={submitSearch}><Icon name="search" size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="আপনার পছন্দের বই খুঁজুন" aria-label="বই খুঁজুন" /></form></div>
    </header>
  </>;
}
