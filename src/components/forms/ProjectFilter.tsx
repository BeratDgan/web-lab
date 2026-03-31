import type { Category, SortField, SortOrder } from "../../types/project";

// ─── Tip Tanımları ───────────────────────────────────────────────

interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category;
  onCategoryChange: (value: Category) => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

// ─── Sabitler ────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  "Tümü",
  "Frontend",
  "Backend",
  "Full Stack",
  "Mobil",
  "Diğer",
];

const SORT_FIELD_LABELS: Record<SortField, string> = {
  year: "Yıl",
  title: "Başlık",
};

// ─── Component ───────────────────────────────────────────────────

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  /** Sıralama yönünü tersine çevir */
  function toggleSortOrder() {
    onSortOrderChange(sortOrder === "asc" ? "desc" : "asc");
  }

  return (
    <div className="space-y-5">
      {/* Arama Alanı */}
      <div className="relative">
        {/* Arama ikonu */}
        <svg
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          placeholder="Proje ara..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-slate-600/50 bg-slate-800/60 py-2.5 pl-10 pr-4 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50"
        />

        {/* Arama temizle butonu */}
        {search && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-slate-500 transition-colors hover:text-slate-300 cursor-pointer"
            aria-label="Aramayı temizle"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Kategori Butonları */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = category === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "border border-slate-600/50 bg-slate-800/40 text-slate-400 hover:border-slate-500 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Sıralama & Sonuç Sayısı */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Sıralama Kontrolleri */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500">Sırala:</span>

          {/* Alan seçimi */}
          {(Object.keys(SORT_FIELD_LABELS) as SortField[]).map((field) => {
            const isActive = sortField === field;
            return (
              <button
                key={field}
                type="button"
                onClick={() => onSortFieldChange(field)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-700 text-white"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {SORT_FIELD_LABELS[field]}
              </button>
            );
          })}

          {/* Yön butonu */}
          <button
            type="button"
            onClick={toggleSortOrder}
            className="rounded-md border border-slate-600/50 bg-slate-800/40 p-1.5 text-slate-400 transition-all duration-200 hover:border-slate-500 hover:text-white cursor-pointer"
            aria-label={sortOrder === "asc" ? "Azalan sırala" : "Artan sırala"}
          >
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${
                sortOrder === "desc" ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>

        {/* Sonuç Sayısı */}
        <p className="text-xs text-slate-500">
          <span className="font-semibold text-slate-300">{resultCount}</span>
          {" / "}
          <span>{totalCount}</span>
          {" proje gösteriliyor"}
        </p>
      </div>
    </div>
  );
}
