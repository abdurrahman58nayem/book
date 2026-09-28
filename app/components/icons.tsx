import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export function Icon({ name, size = 20, ...props }: IconProps & { name: string }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', ...base, ...props };
  const paths: Record<string, React.ReactNode> = {
    search: <><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></>,
    cart: <><path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L20.5 8H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></>,
    user: <><circle cx="12" cy="8" r="3.4"/><path d="M5 20c.7-3.4 3-5.2 7-5.2s6.3 1.8 7 5.2"/></>,
    heart: <path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"/>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    star: <path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.7l6.2-.9L12 3Z"/>,
    plus: <><path d="M12 5v14"/><path d="M5 12h14"/></>,
    minus: <path d="M5 12h14"/>,
    trash: <><path d="M4 7h16"/><path d="M10 11v5M14 11v5"/><path d="m6 7 .7 13h10.6L18 7M9 7V4h6v3"/></>,
    check: <path d="m5 12 4.2 4L19 7"/>,
    filter: <><path d="M4 6h16M7 12h10M10 18h4"/></>,
    truck: <><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
    shield: <path d="M12 3 20 6v5c0 5-3.3 8.3-8 10-4.7-1.7-8-5-8-10V6l8-3Z"/>,
    box: <><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="M4 7v10l8 4 8-4V7M12 11v10"/></>,
    phone: <path d="M6.6 3.5 9 3l2 4-1.8 1.6a13.5 13.5 0 0 0 6.2 6.2L17 13l4 2-.5 2.4c-.3 1.5-1.7 2.5-3.2 2.3C9.9 18.8 5.2 14.1 4.3 6.7 4.1 5.2 5.1 3.8 6.6 3.5Z"/>,
    arrowLeft: <><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></>,
    book: <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    whatsapp: <><path d="M20.2 11.5a8.2 8.2 0 0 1-12.1 7.2L4 20l1.3-3.9A8.2 8.2 0 1 1 20.2 11.5Z"/><path d="M8.5 8.2c.3-.3.6-.2.9.2l.7 1.1c.2.3.2.5 0 .8l-.5.6c.7 1.4 1.8 2.5 3.2 3.2l.6-.5c.2-.2.5-.2.8 0l1.1.7c.4.2.5.6.2.9-.4.5-1 .8-1.7.7-3.8-.7-6.7-3.6-7.4-7.4-.1-.7.2-1.3.7-1.7Z"/></>,
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r=".6" fill="currentColor" stroke="none"/></>,
  };
  return <svg {...common} aria-hidden="true">{paths[name] ?? paths.book}</svg>;
}
