import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSourceDistribution(touchpoints: any[]) {
  const total = touchpoints.length;
  const counts: Record<string, number> = {};

  touchpoints.forEach(tp => {
    const source = tp.utm_source || 'indefinido';
    counts[source] = (counts[source] || 0) + 1;
  });

  return Object.entries(counts).map(([source, count]) => ({
    source,
    count,
    percent: Math.round((count / total) * 100),
  }));
}

export function formatDate(dateStr: string | undefined) {
  if (!dateStr) return "-";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}