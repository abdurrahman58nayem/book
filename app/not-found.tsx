import Link from 'next/link';
import { Icon } from './components/icons';

export default function NotFound() {
  return <div className="not-found container"><span className="not-found-mark">৪০৪</span><span className="eyebrow">পাতাটি খুঁজে পাওয়া যায়নি</span><h1>এই পাতাটি হয়তো<br /><em>অন্য কোথাও চলে গেছে</em></h1><p>লিংকটি ঠিক আছে কি না দেখে আবার চেষ্টা করুন।</p><Link href="/" className="btn btn-primary">হোমে ফিরে যান <Icon name="arrow" size={16} /></Link></div>;
}
