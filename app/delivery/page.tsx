import Link from 'next/link';
import { Icon } from '../components/icons';

export default function DeliveryPage() {
  return <div className="simple-page container"><div className="policy-page"><span className="eyebrow">সহজ ও স্বচ্ছ</span><h1>ডেলিভারি<br /><em>তথ্য</em></h1><div className="policy-grid"><div><Icon name="truck" size={22} /><h2>Inside Dhaka</h2><p>ডেলিভারি চার্জ ৳৬০<br />সময়: ১–২ কর্মদিবস</p></div><div><Icon name="location" size={22} /><h2>Outside Dhaka</h2><p>ডেলিভারি চার্জ ৳১২০<br />সময়: ২–৪ কর্মদিবস</p></div><div><Icon name="box" size={22} /><h2>প্যাকিং</h2><p>প্রতিটি বই যত্নে প্যাক করা হয়, যাতে ভালো অবস্থায় পৌঁছায়।</p></div></div><Link href="/" className="btn btn-primary">বই দেখতে যান <Icon name="arrow" size={16} /></Link></div></div>;
}
