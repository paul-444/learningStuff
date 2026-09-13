import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="glass-card overflow-hidden">
      <Image
        src={product.image}
        alt={`Imagine placeholder pentru ${product.name}`}
        width={1200}
        height={800}
        className="h-52 w-full object-cover"
      />
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-white">{product.name}</h3>
        <p className="text-sm text-white/85">{product.shortDescription}</p>
        <p className="text-sm font-medium text-cyan-100">
          De la {product.priceFrom.toLocaleString("ro-RO")} lei
        </p>
        <Link
          href={`/produse/${product.slug}`}
          className="inline-flex rounded-full border border-white/35 bg-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/25"
        >
          Vezi detalii
        </Link>
      </div>
    </article>
  );
}
