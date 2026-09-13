import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories, getProductsByCategory } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Categorii",
  description: "Explorează categoriile de mobilier premium Atelier Lumina.",
};

export default function CategoriesPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Categorii de produse</h1>
        <p className="mt-2 text-white/85">
          Alege categoria potrivită și continuă către produsele disponibile.
        </p>
      </header>
      <div className="grid gap-5 md:grid-cols-2">
        {categories.map((category) => {
          const count = getProductsByCategory(category.slug).length;
          return (
            <article key={category.slug} className="glass-card overflow-hidden">
              <Image
                src={category.coverImage}
                alt={`Imagine placeholder ${category.name}`}
                width={1200}
                height={720}
                className="h-52 w-full object-cover"
              />
              <div className="space-y-3 p-5">
                <h2 className="text-2xl font-semibold">{category.name}</h2>
                <p className="text-sm text-white/85">{category.description}</p>
                <p className="text-sm text-cyan-100">{count} produse disponibile</p>
                <Link
                  href={`/categorii/${category.slug}`}
                  className="inline-flex rounded-full border border-white/35 bg-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/25"
                >
                  Vezi categoria
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
