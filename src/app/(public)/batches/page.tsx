import type { Metadata } from "next";
import BatchesContent from "./batches-view";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Available Batches",
  description:
    "Choose an online or offline photography batch that fits your schedule. Limited seats to ensure personalized attention at Photriya Academy.",
  alternates: {
    canonical: "/batches",
  },
  openGraph: {
    title: "Available Batches | Photriya Academy",
    description:
      "Choose an online or offline photography batch that fits your schedule.",
    url: `${SITE_URL}/batches`,
    type: "website",
  },
};

export default function BatchesPage() {
  return <BatchesContent />;
}
