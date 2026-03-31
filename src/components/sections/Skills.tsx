// ─── Tip Tanımları ───────────────────────────────────────────────

interface Skill {
  name: string;
  level: number; // 0-100 arası yüzde
  color: string; // Tailwind gradient renk sınıfı
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

// ─── Sabitler ────────────────────────────────────────────────────

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, color: "from-cyan-500 to-blue-500" },
      { name: "TypeScript", level: 85, color: "from-blue-500 to-indigo-500" },
      { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-cyan-500" },
      { name: "Next.js", level: 75, color: "from-slate-400 to-slate-600" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 82, color: "from-green-500 to-emerald-500" },
      { name: "Express", level: 78, color: "from-yellow-500 to-orange-500" },
      { name: "PostgreSQL", level: 70, color: "from-blue-600 to-indigo-600" },
      { name: "MongoDB", level: 72, color: "from-green-600 to-lime-500" },
    ],
  },
  {
    title: "Araçlar & Diğer",
    skills: [
      { name: "Git & GitHub", level: 88, color: "from-orange-500 to-red-500" },
      { name: "Docker", level: 65, color: "from-sky-500 to-blue-600" },
      { name: "Figma", level: 60, color: "from-purple-500 to-pink-500" },
      { name: "REST API", level: 85, color: "from-indigo-500 to-purple-500" },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────

export default function Skills() {
  return (
    <section className="bg-slate-900/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Bölüm Başlığı */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Yetenekler
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Çalıştığım teknolojiler ve uzmanlık alanlarım
          </p>
        </div>

        {/* Yetenek Grupları */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-800/50"
            >
              <h3 className="mb-5 text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700/50">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
