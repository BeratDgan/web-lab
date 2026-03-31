// ─── Tip Tanımları ───────────────────────────────────────────────

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

// ─── Sabitler ────────────────────────────────────────────────────

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Navigasyon",
    links: [
      { label: "Ana Sayfa", href: "#home" },
      { label: "Hakkımda", href: "#about" },
      { label: "Projeler", href: "#projects" },
      { label: "İletişim", href: "#contact" },
    ],
  },
  {
    title: "Sosyal Medya",
    links: [
      { label: "GitHub", href: "https://github.com", external: true },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
      { label: "Twitter", href: "https://twitter.com", external: true },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700/50 bg-slate-900/90">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Marka Alanı */}
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-white"
            >
              <span className="text-indigo-500">&lt;</span>
              Portfolio
              <span className="text-indigo-500"> /&gt;</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Modern web teknolojileri ile etkileyici kullanıcı deneyimleri
              oluşturmaya tutkulu bir geliştirici.
            </p>
          </div>

          {/* Link Bölümleri */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-slate-400 transition-colors hover:text-indigo-400"
                    >
                      {link.label}
                      {link.external && (
                        <span className="ml-1 inline-block text-[10px] opacity-50">
                          ↗
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alt Çizgi */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Portfolio. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
