import Link from 'next/link';
import { Icon } from './icons';

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">হোম</Link>{items.map((item, index) => <span key={`${item.label}-${index}`}><Icon name="chevron" size={12} />{item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}</span>)}</nav>;
}
