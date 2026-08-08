import type { Metadata } from "next";
import HomeView from "./home-view";
import { buildSeo, faqSchema, personSchema } from "@/lib/seo";
import { homeFaqs } from "@/lib/home-faqs";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = buildSeo({
  title: "Best Photography Academy in Hyderabad & Telangana | Photriya Academy",
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "best photography academy in Hyderabad",
    "best photography academy in Telangana",
    "best photography course in Hyderabad",
    "photography classes in Hyderabad",
    "photography academy in Telangana",
    "online photography class",
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
