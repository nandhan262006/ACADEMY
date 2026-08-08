import type { MetadataRoute } from "next";
import { SITE_URL, NEXT_BATCH_START } from "@/lib/site";

const LAST_MODIFIED = "2026-08-08";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${SITE_URL}/courses`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${SITE_URL}/courses/online-photography-course`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: NEXT_BATCH_START,
    },
    {
      url: `${SITE_URL}/courses/offline-photography-course`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: NEXT_BATCH_START,
    },
    {
      url: `${SITE_URL}/batches`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${SITE_URL}/faq`,
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: LAST_MODIFIED,
    },
  ];

  return routes;
}
