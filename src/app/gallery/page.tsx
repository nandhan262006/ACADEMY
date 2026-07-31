import type { Metadata } from "next";
import GalleryContent from "./gallery-view";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Glimpses from Photriya Academy's photography batches and events — classrooms, live shoots, and student moments.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Photriya Academy",
    description:
      "Glimpses from our academy batches and events.",
    url: `${SITE_URL}/gallery`,
    type: "website",
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
