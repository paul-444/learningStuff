import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/data/catalog";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Categorie" };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <section className="space-y-6">
      <header className="glass-section p-7 md:p-8">
        <h1 className="text-3xl font-semibold tracking-tight">{category.name}</h1>
        <p className="mt-2 max-w-3xl text-white/85">{category.description}</p>
      </header>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categoryProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
