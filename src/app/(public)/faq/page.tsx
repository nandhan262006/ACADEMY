import type { Metadata } from "next";
import FaqContent from "./faq-view";
import { faqs } from "./faq-data";
import { buildSeo, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Photography Course FAQs | Hyderabad & Telangana",
  description:
    "Answers to common questions about photography courses at Photriya Academy — one of the best photography academies in Hyderabad and Telangana. Prerequisites, cameras, online classes, certificates and more.",
  path: "/faq",
  keywords: [
    "photography course FAQ",
    "best photography academy in Hyderabad FAQ",
    "online photography classes questions",
    "photography course certificate",
    "Photriya Academy",
  ],
});

export default function FAQPage() {
  const faqItems = faqs.map((f) => ({ q: f.question, a: f.answer }));  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />
      <FaqContent />
    </>
  );
}
