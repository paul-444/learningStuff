import type { MetadataRoute } from "next";
import { categories, products } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://paul-444.github.io/learningStuff";

  const staticRoutes = [
    "",
    "/categorii",
    "/despre",
    "/contact",
    "/termeni-si-conditii",
    "/politica-de-confidentialitate",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...categories.map((category) => ({
      url: `${baseUrl}/categorii/${category.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/produse/${product.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
