import type { Metadata } from "next";
import BatchesContent from "./batches-view";
import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Photography Batches in Hyderabad & Telangana",
  description:
    "Join upcoming photography course batches in Hyderabad and across Telangana. Choose an online or offline photography batch that fits your schedule at Photriya Academy.",
  path: "/batches",
  keywords: [
    "photography batch in Hyderabad",
    "photography classes Hyderabad",
    "online photography batch",
    "photography academy Telangana",
    "next batch start date",
    "Photriya Academy",
  ],
});

export default function BatchesPage() {
  return <BatchesContent />;
}
