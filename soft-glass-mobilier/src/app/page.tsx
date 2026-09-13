import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { categories, featuredProducts } from "@/data/catalog";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="glass-section grid gap-8 p-7 md:grid-cols-[1.15fr_1fr] md:p-10">
        <div className="space-y-5">
          <p className="inline-flex rounded-full border border-white/35 bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-cyan-100">
            Colecție premium · Soft Glass UI
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Mobilier contemporan pentru locuințe cu personalitate
          </h1>
          <p className="max-w-2xl text-base text-white/85 md:text-lg">
            Descoperă piese statement pentru living, dining, dormitor și birou.
            Toate textele și vizualurile sunt create original pentru acest
            proiect demonstrativ.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/categorii"
              className="rounded-full border border-white/35 bg-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/30"
            >
              Explorează categoriile
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-cyan-200/70 bg-cyan-300/20 px-5 py-2.5 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/35"
            >
              Contact rapid
            </Link>
          </div>
        </div>
        <div className="glass-card overflow-hidden">
          <Image
            src="/images/placeholder-furniture.svg"
            alt="Vizual placeholder pentru colecția premium"
            width={1000}
            height={700}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Categorii populare</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categorii/${category.slug}`}
              className="glass-card p-5 transition hover:-translate-y-0.5"
            >
              <p className="text-lg font-semibold text-white">{category.name}</p>
              <p className="mt-1 text-sm text-white/80">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Selecții recomandate</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
