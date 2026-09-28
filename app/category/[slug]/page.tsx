import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCategory } from '../../lib/data';
import { CategoryContent } from '../../components/category-content';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = getCategory(params.slug);
  return { title: category ? `${category.name} বই` : 'ক্যাটাগরি' };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();
  return <CategoryContent category={category} />;
}
