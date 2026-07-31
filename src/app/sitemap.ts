import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      path: "/courses",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/courses/online-photography-course",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/batches",
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      path: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/faq",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      path: "/gallery",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      path: "/contact",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
