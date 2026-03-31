import { useState } from "react";

// ─── Tip Tanımları ───────────────────────────────────────────────

interface NavLink {
  label: string;
  href: string;
}

// ─── Sabitler ────────────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
  { label: "Ana Sayfa", href: "#home" },
  { label: "Hakkımda", href: "#about" },
  { label: "Projeler", href: "#projects" },
  { label: "İletişim", href: "#contact" },
];

// ─── Component ───────────────────────────────────────────────────

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  function toggleMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white transition-colors hover:text-indigo-400"
        >
          <span className="text-indigo-500">&lt;</span>
          Portfolio
          <span className="text-indigo-500"> /&gt;</span>
        </a>

        {/* Masaüstü Navigasyon */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-slate-800/60 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Butonu (Mobil) */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMobileMenuOpen}
          className="flex md:hidden items-center justify-center rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white cursor-pointer"
        >
          {isMobileMenuOpen ? (
            /* X (Kapat) İkonu */
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger İkonu */
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobil Menü */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-slate-700/50 bg-slate-900/95 px-4 pb-4 pt-2 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/60 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
