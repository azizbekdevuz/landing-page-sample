import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com";
  const routes = ["/", "/privacy", "/terms"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.5,
  }));
  return routes;
}


