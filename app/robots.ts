import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com"; //반드시 교체해야 함
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${base}/sitemap.xml`],
    host: base,
  };
}


