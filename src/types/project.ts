/**
 * Proje kategorileri
 */
export type Category = "Tümü" | "Frontend" | "Backend" | "Full Stack" | "Mobil" | "Diğer";

/**
 * Sıralama yapılacak alan
 */
export type SortField = "year" | "title";

/**
 * Sıralama yönü
 */
export type SortOrder = "asc" | "desc";

/**
 * Proje verisi için ana interface
 */
export interface Project {
  /** Benzersiz proje kimliği */
  id: string;
  /** Proje başlığı */
  title: string;
  /** Proje açıklaması */
  description: string;
  /** Kullanılan teknolojiler listesi */
  tech: string[];
  /** Öne çıkan proje mi? */
  featured: boolean;
  /** Proje yılı */
  year: number;
  /** Proje kategorisi */
  category: Exclude<Category, "Tümü">;
}
