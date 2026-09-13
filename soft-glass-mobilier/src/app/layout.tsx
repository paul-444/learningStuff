import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteUrl = "https://paul-444.github.io/learningStuff";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atelier Lumina | Mobilier premium",
    template: "%s | Atelier Lumina",
  },
  description:
    "Atelier Lumina prezintă colecții premium de mobilier pentru living, dining, dormitor și birou.",
  openGraph: {
    title: "Atelier Lumina",
    description:
      "Mobilier premium în stil contemporan. Comandă telefonic sau prin WhatsApp.",
    locale: "ro_RO",
    type: "website",
    url: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro-RO" className="h-full antialiased">
      <body className="min-h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="app-bg" aria-hidden="true" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 md:px-8">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
