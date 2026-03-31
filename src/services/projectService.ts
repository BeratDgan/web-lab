import type { Project } from "../types/project";

/**
 * Projeleri JSON dosyasından çeker.
 * Gerçek bir API çağrısını simüle etmek için yapay gecikme ekler.
 */
export async function fetchProjects(): Promise<Project[]> {
  // Gerçekçi bir ağ gecikmesi simülasyonu (500-1500ms)
  const delay = 500 + Math.random() * 1000;
  await new Promise<void>((resolve) => setTimeout(resolve, delay));

  const response = await fetch("/data/projects.json");

  if (!response.ok) {
    throw new Error(`Projeler yüklenirken hata oluştu (HTTP ${response.status})`);
  }

  const data: Project[] = await response.json();
  return data;
}
