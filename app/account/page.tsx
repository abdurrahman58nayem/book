import Link from 'next/link';
import { Icon } from '../components/icons';

export default function AccountPage() {
  return <div className="simple-page container"><div className="simple-page-card"><span className="simple-icon"><Icon name="user" size={25} /></span><span className="eyebrow">আপনার বইপোকা</span><h1>অ্যাকাউন্টে<br /><em>স্বাগতম</em></h1><p>অর্ডারের আপডেট দেখতে বা আপনার পছন্দের বইগুলো সেভ করতে শিগগিরই সাইন ইন করুন।</p><Link href="/" className="btn btn-primary">হোমে ফিরে যান <Icon name="arrow" size={16} /></Link></div></div>;
}
