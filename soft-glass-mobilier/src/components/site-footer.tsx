import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/25 bg-white/10 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 text-sm text-white/90 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-semibold text-white">Atelier Lumina</p>
          <p>Mobilier premium pentru locuințe contemporane.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Informații</p>
          <ul className="space-y-1">
            <li>
              <Link href="/termeni-si-conditii" className="hover:underline">
                Termeni și condiții
              </Link>
            </li>
            <li>
              <Link
                href="/politica-de-confidentialitate"
                className="hover:underline"
              >
                Politica de confidențialitate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Notă</p>
          <p>
            Conținutul textual și vizual este original sau placeholder demonstrativ.
          </p>
        </div>
      </div>
    </footer>
  );
}
