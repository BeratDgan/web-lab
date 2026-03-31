export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* Arka plan gradient efektleri */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Üst etiket */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
          </span>
          Yeni projelere açığım
        </div>

        {/* Başlık */}
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Merhaba, ben{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Berat
          </span>
        </h1>

        {/* Unvan */}
        <p className="mt-4 text-lg font-medium text-slate-300 sm:text-xl md:text-2xl">
          Full Stack Web Geliştirici
        </p>

        {/* Açıklama */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Modern web teknolojileri ile performanslı, erişilebilir ve kullanıcı
          dostu uygulamalar geliştiriyorum. React, TypeScript ve Node.js
          ekosisteminde uzmanlaşmış bir geliştiriciyim.
        </p>

        {/* Butonlar */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/40"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11H5m14 0l-4-4m4 4l-4 4"
              />
            </svg>
            Projelerimi Gör
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/50 px-8 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-slate-500 hover:bg-slate-700/50 hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            İletişime Geç
          </a>
        </div>

        {/* Scroll indikatörü */}
        <div className="mt-16 flex justify-center">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-600 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-slate-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
