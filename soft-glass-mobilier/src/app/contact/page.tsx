import type { Metadata } from "next";
import { contactInfo } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează Atelier Lumina pentru comenzi și consultanță.",
};

export default function ContactPage() {
  return (
    <section className="glass-section max-w-3xl space-y-5 p-7 md:p-10">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="text-white/85">
        Pentru oferte și comenzi, folosește una dintre metodele rapide de mai
        jos.
      </p>
      <div className="space-y-3 text-sm text-white/90">
        <p>
          <span className="font-semibold text-white">Telefon:</span>{" "}
          <a className="underline" href={`tel:${contactInfo.phoneRaw}`}>
            {contactInfo.phoneDisplay}
          </a>
        </p>
        <p>
          <span className="font-semibold text-white">WhatsApp:</span>{" "}
          <a
            className="underline"
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {contactInfo.phoneDisplay}
          </a>
        </p>
        <p>
          <span className="font-semibold text-white">Email:</span>{" "}
          <a className="underline" href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </a>
        </p>
        <p>
          <span className="font-semibold text-white">Showroom:</span>{" "}
          {contactInfo.address}
        </p>
      </div>
    </section>
  );
}
