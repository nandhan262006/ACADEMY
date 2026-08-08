import type { Metadata } from "next";
import HomeView from "./home-view";
import { buildSeo, faqSchema, personSchema } from "@/lib/seo";
import { homeFaqs } from "@/lib/home-faqs";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = buildSeo({
  title: "Photriya Academy | Online Photography Courses",
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "photography course",
    "online photography class",
    "photography classes in Hyderabad",
    "DSLR training",
    "photography academy",
    "learn photography online",
    "videography course",
    "Photriya Academy",
  ],
});

export default function HomePage() {
  const jsonLd = [
    personSchema(),
    faqSchema(homeFaqs),
  ];

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HomeView />
    </>
  );
}
