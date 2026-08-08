import type { Metadata } from "next";
import BatchesContent from "./batches-view";
import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Available Batches",
  description:
    "Choose an online or offline photography batch that fits your schedule. Limited seats to ensure personalized attention at Photriya Academy.",
  path: "/batches",
  keywords: [
    "photography batch",
    "online photography batch",
    "photography classes Hyderabad",
    "next batch start date",
    "Photriya Academy",
  ],
});

export default function BatchesPage() {
  return <BatchesContent />;
}
