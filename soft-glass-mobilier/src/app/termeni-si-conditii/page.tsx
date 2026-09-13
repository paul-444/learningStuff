import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: "Termeni și condiții pentru utilizarea website-ului Atelier Lumina.",
};

export default function TermsPage() {
  return (
    <section className="glass-section max-w-4xl space-y-4 p-7 md:p-10">
      <h1 className="text-3xl font-semibold tracking-tight">Termeni și condiții</h1>
      <p className="text-white/85">
        Informațiile de pe site au caracter informativ. Produsele pot fi
        personalizate, iar specificațiile finale se confirmă în conversația de
        comandă.
      </p>
      <p className="text-white/85">
        Nu există coș de cumpărături sau plată online. Comanda se plasează prin
        telefon sau WhatsApp, iar condițiile comerciale sunt confirmate direct
        cu clientul.
      </p>
      <p className="text-white/85">
        Imaginile prezentate pe acest website pot avea rol de placeholder
        demonstrativ.
      </p>
    </section>
  );
}
