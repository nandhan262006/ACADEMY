import type { Metadata } from "next";
import ContactContent from "./contact-view";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions about our photography courses? Contact Photriya Academy via phone, email, or our contact form and we'll respond within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Photriya Academy",
    description:
      "Have questions about our photography courses? Get in touch with us.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
