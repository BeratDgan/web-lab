// ─── Tip Tanımları ───────────────────────────────────────────────

interface Stat {
  label: string;
  value: string;
}

// ─── Sabitler ────────────────────────────────────────────────────

const STATS: Stat[] = [
  { label: "Yıl Deneyim", value: "3+" },
  { label: "Tamamlanan Proje", value: "20+" },
  { label: "Mutlu Müşteri", value: "15+" },
  { label: "Teknoloji", value: "10+" },
];

// ─── Component ───────────────────────────────────────────────────

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Bölüm Başlığı */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hakkımda
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        {/* İçerik */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Sol: Metin */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Merhaba! Ben Berat, tutkulu bir{" "}
              <span className="font-semibold text-indigo-400">
                Full Stack Web Geliştirici
              </span>
              iyim. Modern web teknolojileriyle kullanıcı odaklı, performanslı ve
              ölçeklenebilir uygulamalar geliştirmeyi seviyorum.
            </p>
            <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
              React, TypeScript ve Node.js ekosisteminde uzmanlaşarak, hem ön yüz
              hem de arka yüz geliştirme süreçlerinde aktif rol alıyorum.
              Projelerimde temiz kod yazımına, test edilebilirliğe ve kullanıcı
              deneyimine büyük önem veriyorum.
            </p>
            <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
              Sürekli öğrenmeyi ve kendimi geliştirmeyi ilke edinmiş biriyim.
              Açık kaynak projelere katkıda bulunmaktan ve toplulukla bilgi
              paylaşmaktan keyif alıyorum.
            </p>
          </div>

          {/* Sağ: İstatistikler */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/40 p-6 text-center transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-800/70"
              >
                <span className="text-3xl font-extrabold text-indigo-400 transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-medium text-slate-400 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
