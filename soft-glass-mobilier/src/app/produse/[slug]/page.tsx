import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { contactInfo, getProductBySlug, products } from "@/data/catalog";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produs" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <section className="glass-section grid gap-8 p-7 md:grid-cols-2 md:p-10">
        <Image
          src={product.image}
          alt={`Imagine placeholder pentru ${product.name}`}
          width={1200}
          height={900}
          className="h-full w-full rounded-3xl object-cover"
          priority
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">{product.name}</h1>
          <p className="text-white/85">{product.longDescription}</p>
          <p className="text-xl font-semibold text-cyan-100">
            De la {product.priceFrom.toLocaleString("ro-RO")} lei
          </p>
          <ul className="space-y-2 text-sm text-white/85">
            <li>
              <span className="font-medium text-white">Dimensiuni:</span>{" "}
              {product.dimensions}
            </li>
            <li>
              <span className="font-medium text-white">Materiale:</span>{" "}
              {product.materials}
            </li>
            <li>
              <span className="font-medium text-white">Livrare:</span>{" "}
              {product.delivery}
            </li>
          </ul>
        </div>
      </section>

      <section className="glass-card space-y-4 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Comandă fără coș și checkout online</h2>
        <p className="text-sm text-white/85">
          Pentru acest produs, comanda se face direct prin telefon sau WhatsApp.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${contactInfo.phoneRaw}`}
            className="rounded-full border border-cyan-200/70 bg-cyan-300/20 px-5 py-2.5 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/35"
          >
            Sună la {contactInfo.phoneDisplay}
          </a>
          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/35 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/25"
          >
            Scrie pe WhatsApp la {contactInfo.phoneDisplay}
          </a>
        </div>
      </section>
    </article>
  );
}
