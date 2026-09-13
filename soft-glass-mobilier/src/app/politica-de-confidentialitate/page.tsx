import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Politica de confidențialitate Atelier Lumina.",
};

export default function PrivacyPage() {
  return (
    <section className="glass-section max-w-4xl space-y-4 p-7 md:p-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Politica de confidențialitate
      </h1>
      <p className="text-white/85">
        Datele transmise prin telefon, WhatsApp sau email sunt utilizate doar
        pentru procesarea solicitărilor comerciale și comunicarea legată de
        comandă.
      </p>
      <p className="text-white/85">
        Nu vindem date personale către terți și nu folosim datele în alte
        scopuri decât cele necesare relației comerciale.
      </p>
      <p className="text-white/85">
        Pentru întrebări privind datele personale, ne poți contacta la adresa de
        email publicată în pagina de contact.
      </p>
    </section>
  );
}
