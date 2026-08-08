import type { Metadata } from "next";
import FaqContent from "./faq-view";
import { faqs } from "./faq-data";
import { buildSeo, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Photriya Academy's photography courses — prerequisites, cameras, online classes, certificates, refunds and more.",
  path: "/faq",
  keywords: [
    "photography course FAQ",
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
