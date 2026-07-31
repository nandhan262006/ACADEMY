import type { Metadata } from "next";
import FaqContent from "./faq-view";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Photriya Academy's photography courses — prerequisites, cameras, online classes, certificates, refunds and more.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Photriya Academy",
    description:
      "Answers to common questions about our photography courses.",
    url: `${SITE_URL}/faq`,
    type: "website",
  },
};

export default function FAQPage() {
  return <FaqContent />;
}
