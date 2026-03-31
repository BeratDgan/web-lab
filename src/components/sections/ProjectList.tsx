import { useEffect, useMemo, useState } from "react";
import type { Category, Project, SortField, SortOrder } from "../../types/project";
import { fetchProjects } from "../../services/projectService";
import ProjectFilter from "../forms/ProjectFilter";

// ─── Tip Tanımları ───────────────────────────────────────────────

interface LoadingState {
  status: "loading";
}

interface ErrorState {
  status: "error";
  message: string;
}

interface SuccessState {
  status: "success";
  data: Project[];
}

type FetchState = LoadingState | ErrorState | SuccessState;

// ─── Yardımcı Fonksiyonlar ──────────────────────────────────────

function filterProjects(
  projects: Project[],
  search: string,
  category: Category
): Project[] {
  return projects.filter((project) => {
    const matchesSearch =
      search === "" ||
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      category === "Tümü" || project.category === category;

    return matchesSearch && matchesCategory;
  });
}

function sortProjects(
  projects: Project[],
  field: SortField,
  order: SortOrder
): Project[] {
  const sorted = [...projects].sort((a, b) => {
    if (field === "year") {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title, "tr");
  });

  return order === "desc" ? sorted.reverse() : sorted;
}

// ─── Component ───────────────────────────────────────────────────

export default function ProjectList() {
  const [fetchState, setFetchState] = useState<FetchState>({ status: "loading" });
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<Category>("Tümü");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  // Veri çekme
  useEffect(() => {
    let cancelled = false;

    async function loadProjects() {
      setFetchState({ status: "loading" });

      try {
        const data = await fetchProjects();
        if (!cancelled) {
          setFetchState({ status: "success", data });
        }
      } catch (err) {
        if (!cancelled) {
          const message =
            err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu.";
          setFetchState({ status: "error", message });
        }
      }
    }

    loadProjects();

    return () => {
      cancelled = true;
    };
  }, []);

  // Filtreleme ve sıralama (useMemo ile optimize)
  const allProjects = fetchState.status === "success" ? fetchState.data : [];

  const filteredAndSorted = useMemo(() => {
    const filtered = filterProjects(allProjects, search, category);
    return sortProjects(filtered, sortField, sortOrder);
  }, [allProjects, search, category, sortField, sortOrder]);

  // ─── Render: Loading ─────────────────────────────────────────

  if (fetchState.status === "loading") {
    return (
      <section id="projects" className="bg-slate-950 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projeler
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          </div>

          {/* Skeleton Loader */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="animate-pulse rounded-xl border border-slate-700/50 bg-slate-800/30 p-6"
              >
                <div className="mb-3 h-5 w-3/4 rounded bg-slate-700" />
                <div className="mb-2 h-3 w-full rounded bg-slate-700/60" />
                <div className="mb-2 h-3 w-5/6 rounded bg-slate-700/60" />
                <div className="mb-4 h-3 w-2/3 rounded bg-slate-700/60" />
                <div className="flex gap-2">
                  <div className="h-6 w-16 rounded-full bg-slate-700/40" />
                  <div className="h-6 w-14 rounded-full bg-slate-700/40" />
                  <div className="h-6 w-20 rounded-full bg-slate-700/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ─── Render: Error ───────────────────────────────────────────

  if (fetchState.status === "error") {
    return (
      <section id="projects" className="bg-slate-950 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projeler
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

          <div className="mx-auto mt-14 max-w-md rounded-xl border border-red-500/30 bg-red-500/10 p-8">
            <svg
              className="mx-auto h-12 w-12 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <p className="mt-4 text-sm text-red-300">{fetchState.message}</p>
          </div>
        </div>
      </section>
    );
  }

  // ─── Render: Success ─────────────────────────────────────────

  return (
    <section id="projects" className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Bölüm Başlığı */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projeler
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Üzerinde çalıştığım bazı projeler
          </p>
        </div>

        {/* Filtreler */}
        <div className="mt-10">
          <ProjectFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            sortField={sortField}
            onSortFieldChange={setSortField}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            resultCount={filteredAndSorted.length}
            totalCount={allProjects.length}
          />
        </div>

        {/* Proje Kartları */}
        {filteredAndSorted.length === 0 ? (
          <div className="mt-14 text-center">
            <svg
              className="mx-auto h-16 w-16 text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="mt-4 text-slate-500">
              Arama kriterlerine uygun proje bulunamadı.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAndSorted.map((project) => (
              <article
                key={project.id}
                className="group relative flex flex-col rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-800/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute -top-2.5 right-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    Öne Çıkan
                  </span>
                )}

                {/* Üst bilgiler */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-indigo-500/15 px-2.5 py-1 text-xs font-medium text-indigo-300">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500">{project.year}</span>
                </div>

                {/* Başlık */}
                <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-indigo-300">
                  {project.title}
                </h3>

                {/* Açıklama */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Teknolojiler */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-600/40 bg-slate-700/30 px-2.5 py-0.5 text-[11px] font-medium text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
