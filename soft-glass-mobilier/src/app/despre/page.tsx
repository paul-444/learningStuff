import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre",
  description: "Află povestea Atelier Lumina și modul nostru de lucru.",
};

export default function AboutPage() {
  return (
    <section className="glass-section max-w-4xl space-y-5 p-7 md:p-10">
      <h1 className="text-3xl font-semibold tracking-tight">Despre Atelier Lumina</h1>
      <p className="text-white/85">
        Atelier Lumina este un concept de mobilier premium care îmbină designul
        contemporan cu atenția pentru detaliu. Lucrăm cu materiale selectate și
        finisaje durabile pentru interioare elegante.
      </p>
      <p className="text-white/85">
        Fiecare colecție este gândită pentru flexibilitate: dimensiuni,
        tapițerii și finisaje adaptate proiectelor rezidențiale. Oferim consultanță
        pentru configurarea produselor și suport pe tot parcursul comenzii.
      </p>
      <p className="text-sm text-white/75">
        Notă: acest website are conținut demonstrativ original și imagini
        placeholder.
      </p>
    </section>
  );
}
