export type Category = {
  slug: string;
  name: string;
  short: string;
  tone: 'literary' | 'islamic' | 'kids' | 'academic' | 'business' | 'tech' | 'poetry' | 'self';
  mark: string;
};

export type Book = {
  slug: string;
  title: string;
  author: string;
  authorSlug: string;
  publisher: string;
  publisherSlug: string;
  category: string;
  categorySlug: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  pages: string;
  language: string;
  edition: string;
  binding: string;
  year: string;
  isbn: string;
  cover: 'burgundy' | 'navy' | 'emerald' | 'sky' | 'plum' | 'teal' | 'brown' | 'mustard' | 'slate';
  motif: string;
  isNew?: boolean;
  isFeatured?: boolean;
};

export const categories: Category[] = [
  { slug: 'novel', name: 'উপন্যাস', short: 'গল্পের ভেতর হারিয়ে যান', tone: 'literary', mark: 'ন' },
  { slug: 'story', name: 'গল্প', short: 'ছোট গল্প, বড় অনুভব', tone: 'literary', mark: 'গ' },
  { slug: 'poetry', name: 'কবিতা', short: 'শব্দে শব্দে অনুভূতি', tone: 'poetry', mark: 'ক' },
  { slug: 'islamic', name: 'ইসলামিক', short: 'জীবন ও আত্মার পাঠ', tone: 'islamic', mark: 'আ' },
  { slug: 'kids', name: 'শিশু-কিশোর', short: 'কৌতূহলী মনের সঙ্গী', tone: 'kids', mark: 'শি' },
  { slug: 'academic', name: 'শিক্ষা', short: 'শেখার সেরা সঙ্গী', tone: 'academic', mark: 'শি' },
  { slug: 'career', name: 'ক্যারিয়ার', short: 'আগামীর জন্য প্রস্তুতি', tone: 'business', mark: 'ক্যা' },
  { slug: 'business', name: 'ব্যবসা', short: 'ভাবনা থেকে বাস্তবতা', tone: 'business', mark: 'ব্য' },
  { slug: 'self-development', name: 'আত্মউন্নয়ন', short: 'নিজেকে প্রতিদিন ছাড়িয়ে যান', tone: 'self', mark: 'আ' },
  { slug: 'science-tech', name: 'বিজ্ঞান ও প্রযুক্তি', short: 'জানুন, ভাবুন, তৈরি করুন', tone: 'tech', mark: 'বি' },
  { slug: 'history', name: 'ইতিহাস', short: 'অতীত থেকে আগামী', tone: 'academic', mark: 'ই' },
  { slug: 'other', name: 'অন্যান্য', short: 'আরও কিছু বাছাই', tone: 'literary', mark: 'অ' },
];

export const books: Book[] = [
  {
    slug: 'deyal', title: 'দেয়াল', author: 'হুমায়ূন আহমেদ', authorSlug: 'humayun-ahmed', publisher: 'অন্যপ্রকাশ', publisherSlug: 'anyaprokash', category: 'উপন্যাস', categorySlug: 'novel', price: 335, oldPrice: 400, rating: 4.9, reviews: 128, badge: 'জনপ্রিয়',
    description: 'ইতিহাসের এক অস্থির সময়, মানুষের চিরচেনা অনুভূতি আর হুমায়ূন আহমেদের অনন্য গল্প বলার ভঙ্গি—দেয়াল একবার পড়তে শুরু করলে শেষ না করে ওঠা কঠিন।', pages: '২৮৮', language: 'বাংলা', edition: '১ম প্রকাশ, ২০২৪', binding: 'হার্ডকভার', year: '২০২৪', isbn: '9789845025346', cover: 'burgundy', motif: 'দেয়াল', isFeatured: true,
  },
  {
    slug: 'pather-panchali', title: 'পথের পাঁচালী', author: 'বিভূতিভূষণ বন্দ্যোপাধ্যায়', authorSlug: 'bibhutibhushan-bandyopadhyay', publisher: 'পত্রভারতী', publisherSlug: 'patrabharti', category: 'উপন্যাস', categorySlug: 'novel', price: 280, oldPrice: 350, rating: 4.8, reviews: 94, badge: 'চিরন্তন',
    description: 'অপু-দুর্গার ছোট্ট পৃথিবী, গ্রামবাংলার প্রকৃতি আর জীবনের অনন্ত সুর—বাংলা সাহিত্যের এই কালজয়ী উপন্যাসটি প্রতিটি প্রজন্মের পাঠকের জন্য।', pages: '৩১২', language: 'বাংলা', edition: 'নতুন সংস্করণ', binding: 'পেপারব্যাক', year: '২০২৩', isbn: '9788129123456', cover: 'brown', motif: 'পথ', isFeatured: true,
  },
  {
    slug: 'sapiens', title: 'সেপিয়েন্স', author: 'ইউভাল নোয়া হারারি', authorSlug: 'yuval-noah-harari', publisher: 'আদর্শ', publisherSlug: 'adarsha', category: 'ইতিহাস', categorySlug: 'history', price: 590, oldPrice: 700, rating: 4.7, reviews: 71, badge: 'পাঠকের পছন্দ',
    description: 'মানবজাতির ইতিহাসকে নতুন চোখে দেখার এক অসাধারণ ভ্রমণ। আমরা কোথা থেকে এলাম, কীভাবে পৃথিবী বদলালাম—সেপিয়েন্স সেই বড় প্রশ্নগুলোর সহজ পাঠ।', pages: '৫১২', language: 'বাংলা অনুবাদ', edition: '২য় সংস্করণ', binding: 'হার্ডকভার', year: '২০২৪', isbn: '9789847761235', cover: 'navy', motif: 'SAPIENS', isFeatured: true,
  },
  {
    slug: 'learning-how-to-learn', title: 'শেখার কৌশল', author: 'বারবারা ওকলি', authorSlug: 'barbara-oakley', publisher: 'অন্যধারা', publisherSlug: 'anyadhara', category: 'শিক্ষা', categorySlug: 'academic', price: 315, oldPrice: 380, rating: 4.6, reviews: 38, badge: 'শিক্ষার্থীদের পছন্দ',
    description: 'কীভাবে আরও ভালোভাবে শেখা যায়, মনোযোগ তৈরি করা যায় এবং কঠিন বিষয়কে সহজ করে নেওয়া যায়—শিক্ষার্থীদের জন্য একটি ব্যবহারিক গাইড।', pages: '২৪০', language: 'বাংলা অনুবাদ', edition: '১ম প্রকাশ', binding: 'পেপারব্যাক', year: '২০২৪', isbn: '9789842201486', cover: 'slate', motif: 'LEARN', isNew: true,
  },
  {
    slug: 'atomic-habits', title: 'অ্যাটমিক হ্যাবিটস', author: 'জেমস ক্লিয়ার', authorSlug: 'james-clear', publisher: 'রকমারি প্রকাশনী', publisherSlug: 'rokomari-prokashoni', category: 'আত্মউন্নয়ন', categorySlug: 'self-development', price: 360, oldPrice: 450, rating: 4.9, reviews: 212, badge: 'বেস্ট চয়েস',
    description: 'ছোট ছোট অভ্যাস কীভাবে অসাধারণ ফল তৈরি করে—তার প্রমাণিত, ব্যবহারিক ও সহজবোধ্য গাইড। পরিবর্তন শুরু হোক আজকের এক শতাংশ দিয়ে।', pages: '৩২০', language: 'বাংলা অনুবাদ', edition: '১ম সংস্করণ', binding: 'পেপারব্যাক', year: '২০২৪', isbn: '9789849812340', cover: 'teal', motif: '১%', isFeatured: true,
  },
  {
    slug: 'the-alchemist', title: 'দ্য আলকেমিস্ট', author: 'পাওলো কোয়েলহো', authorSlug: 'paulo-coelho', publisher: 'অনন্যা', publisherSlug: 'onnonya', category: 'উপন্যাস', categorySlug: 'novel', price: 245, oldPrice: 300, rating: 4.8, reviews: 186, badge: 'পাঠকের পছন্দ',
    description: 'স্বপ্নের পেছনে ছুটে চলা রাখাল বালক সান্তিয়াগোর গল্প। নিজের হৃদয়ের কথা শুনতে শেখায় যে বই, এটি তেমনই এক অনন্ত যাত্রার সঙ্গী।', pages: '১৯২', language: 'বাংলা অনুবাদ', edition: 'নতুন মুদ্রণ', binding: 'পেপারব্যাক', year: '২০২৪', isbn: '9789844589217', cover: 'mustard', motif: 'যাত্রা', isNew: true,
  },
  {
    slug: 'quran-understanding', title: 'কুরআন বুঝে পড়ি', author: 'ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর', authorSlug: 'abdullah-jahangir', publisher: 'আস-সুন্নাহ', publisherSlug: 'as-sunnah', category: 'ইসলামিক', categorySlug: 'islamic', price: 420, oldPrice: 500, rating: 4.9, reviews: 88, badge: 'নতুন',
    description: 'কুরআনের আয়াতকে জীবনের সঙ্গে মিলিয়ে বোঝার সহজ ও প্রাঞ্জল আয়োজন। জ্ঞান, আমল এবং আত্মশুদ্ধির পথে একটি নির্ভরযোগ্য পাঠ।', pages: '৩৮৪', language: 'বাংলা', edition: '১ম প্রকাশ', binding: 'হার্ডকভার', year: '২০২৪', isbn: '9789848776654', cover: 'emerald', motif: 'اقرأ', isNew: true,
  },
  {
    slug: 'coding-for-kids', title: 'খুদে প্রোগ্রামার', author: 'মুনির হাসান', authorSlug: 'munir-hasan', publisher: 'মুক্তদেশ', publisherSlug: 'muktodesh', category: 'শিশু-কিশোর', categorySlug: 'kids', price: 295, oldPrice: 350, rating: 4.7, reviews: 54, badge: 'বাচ্চাদের প্রিয়',
    description: 'কোডিংয়ের মজার দুনিয়ায় খুদে পাঠকদের প্রথম পদক্ষেপ। গল্প, ধাঁধা আর হাতে-কলমে কাজের মাধ্যমে প্রযুক্তিকে করে তোলে আনন্দময়।', pages: '১৪৪', language: 'বাংলা', edition: '১ম প্রকাশ', binding: 'পেপারব্যাক', year: '২০২৪', isbn: '9789843345782', cover: 'sky', motif: '</>', isNew: true,
  },
  {
    slug: 'deep-work', title: 'ডিপ ওয়ার্ক', author: 'ক্যাল নিউপোর্ট', authorSlug: 'cal-newport', publisher: 'প্রথমা', publisherSlug: 'prothoma', category: 'ক্যারিয়ার', categorySlug: 'career', price: 385, oldPrice: 480, rating: 4.6, reviews: 63, badge: 'নতুন',
    description: 'বিক্ষিপ্ততার সময়ে গভীর মনোযোগ দিয়ে কাজ করার দক্ষতা আজকের সবচেয়ে মূল্যবান স্কিল। নিজের কাজের জন্য একটি মনোযোগী সিস্টেম তৈরি করুন।', pages: '২৭২', language: 'বাংলা অনুবাদ', edition: '১ম সংস্করণ', binding: 'পেপারব্যাক', year: '২০২৪', isbn: '9789849941001', cover: 'slate', motif: 'FOCUS', isNew: true,
  },
  {
    slug: 'future-is-here', title: 'ভবিষ্যৎ এখন', author: 'সাদিয়া ইসলাম', authorSlug: 'sadia-islam', publisher: 'প্রযুক্তি প্রকাশ', publisherSlug: 'projukti-prokash', category: 'বিজ্ঞান ও প্রযুক্তি', categorySlug: 'science-tech', price: 340, oldPrice: 420, rating: 4.5, reviews: 22, badge: 'নতুন',
    description: 'কৃত্রিম বুদ্ধিমত্তা, মহাকাশ আর বদলে যাওয়া প্রযুক্তির দুনিয়াকে সহজ ভাষায় চিনে নেওয়ার বই। কৌতূহলী পাঠকের জন্য ভবিষ্যতের দরজা খুলে দেয়।', pages: '২১৬', language: 'বাংলা', edition: '১ম সংস্করণ', binding: 'পেপারব্যাক', year: '২০২৪', isbn: '9789842214394', cover: 'navy', motif: '∞', isNew: true,
  },
  {
    slug: 'shesher-kobita', title: 'শেষের কবিতা', author: 'রবীন্দ্রনাথ ঠাকুর', authorSlug: 'rabindranath-tagore', publisher: 'বিশ্বভারতী', publisherSlug: 'visva-bharati', category: 'কবিতা', categorySlug: 'poetry', price: 210, oldPrice: 260, rating: 4.9, reviews: 105, badge: 'চিরন্তন',
    description: 'অমিত ও লাবণ্যের কথোপকথনে প্রেম, বুদ্ধি, কবিতা ও বিচ্ছেদের যে অনন্য সুর তৈরি হয়েছে—শেষের কবিতা বাংলা সাহিত্যের এক অমর অভিজ্ঞতা।', pages: '১৮৪', language: 'বাংলা', edition: 'বিশেষ সংস্করণ', binding: 'হার্ডকভার', year: '২০২৩', isbn: '9788175223457', cover: 'plum', motif: 'শেষের কবিতা', isFeatured: true,
  },
  {
    slug: 'start-with-why', title: 'স্টার্ট উইথ হোয়াই', author: 'সাইমন সিনেক', authorSlug: 'simon-sinek', publisher: 'নভেল পাবলিকেশন', publisherSlug: 'novel-publication', category: 'ব্যবসা', categorySlug: 'business', price: 330, oldPrice: 420, rating: 4.6, reviews: 49, badge: 'নতুন',
    description: 'সফল নেতৃত্ব ও অর্থবহ ব্যবসার শুরু হয় একটি পরিষ্কার “কেন” থেকে। নিজের কাজ ও ব্র্যান্ডের উদ্দেশ্যকে নতুন করে আবিষ্কার করুন।', pages: '২৫৬', language: 'বাংলা অনুবাদ', edition: '১ম সংস্করণ', binding: 'পেপারব্যাক', year: '২০২৪', isbn: '9789846617890', cover: 'navy', motif: 'WHY?', isNew: true,
  },
];

export const authors = [
  { slug: 'humayun-ahmed', name: 'হুমায়ূন আহমেদ', books: '৪৮টি বই', note: 'গল্পের জাদুকর' },
  { slug: 'rabindranath-tagore', name: 'রবীন্দ্রনাথ ঠাকুর', books: '৩৬টি বই', note: 'বিশ্বকবি' },
  { slug: 'james-clear', name: 'জেমস ক্লিয়ার', books: '৮টি বই', note: 'অভ্যাসের কারিগর' },
  { slug: 'yuval-noah-harari', name: 'ইউভাল নোয়া হারারি', books: '৬টি বই', note: 'ইতিহাসের কথক' },
  { slug: 'bibhutibhushan-bandyopadhyay', name: 'বিভূতিভূষণ বন্দ্যোপাধ্যায়', books: '২৭টি বই', note: 'প্রকৃতি ও জীবনের কথক' },
  { slug: 'paulo-coelho', name: 'পাওলো কোয়েলহো', books: '১৮টি বই', note: 'স্বপ্নের গল্পকার' },
  { slug: 'abdullah-jahangir', name: 'ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর', books: '১২টি বই', note: 'জ্ঞান ও আমলের শিক্ষক' },
  { slug: 'munir-hasan', name: 'মুনির হাসান', books: '২১টি বই', note: 'বিজ্ঞানের বন্ধু' },
  { slug: 'cal-newport', name: 'ক্যাল নিউপোর্ট', books: '৯টি বই', note: 'মনোযোগের গবেষক' },
  { slug: 'simon-sinek', name: 'সাইমন সিনেক', books: '৭টি বই', note: 'নেতৃত্বের কথক' },
  { slug: 'barbara-oakley', name: 'বারবারা ওকলি', books: '৫টি বই', note: 'শেখার বিজ্ঞানী' },
  { slug: 'sadia-islam', name: 'সাদিয়া ইসলাম', books: '৩টি বই', note: 'প্রযুক্তির গল্পকার' },
];

export const formatPrice = (value: number) => `৳${value.toLocaleString('bn-BD')}`;
export const getBook = (slug: string) => books.find((book) => book.slug === slug);
export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
