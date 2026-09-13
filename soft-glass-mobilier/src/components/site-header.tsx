import Link from "next/link";

const navItems = [
  { href: "/", label: "Acasă" },
  { href: "/categorii", label: "Categorii" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/25 bg-white/20 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Atelier Lumina
        </Link>
        <nav>
          <ul className="flex items-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/20"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
