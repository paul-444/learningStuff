import Link from "next/link";

export default function NotFound() {
  return (
    <section className="glass-section mx-auto max-w-xl space-y-4 p-8 text-center">
      <h1 className="text-3xl font-semibold">Pagina nu a fost găsită</h1>
      <p className="text-white/85">
        Verifică adresa sau revino la pagina principală.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-full border border-white/35 bg-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/25"
      >
        Înapoi la Acasă
      </Link>
    </section>
  );
}
