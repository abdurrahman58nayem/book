import Link from 'next/link';
import { Icon } from './icons';

export function SectionHeading({ eyebrow, title, description, href, hrefLabel = 'সব দেখুন', light = false }: { eyebrow?: string; title: string; description?: string; href?: string; hrefLabel?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
    {href && <Link className="text-link" href={href}>{hrefLabel}<Icon name="arrow" size={16} /></Link>}
  </div>;
}
