import type { Metadata } from "next";
import ContactContent from "./contact-view";
import { buildSeo } from "@/lib/seo";
import {
  SITE_URL,
  SITE_NAME,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  BUSINESS_STREET,
  BUSINESS_CITY,
  BUSINESS_REGION,
  BUSINESS_POSTAL_CODE,
  BUSINESS_COUNTRY,
  GEO_LATITUDE,
  GEO_LONGITUDE,
} from "@/lib/site";

export const metadata: Metadata = buildSeo({
  title: "Contact Us | Photography Academy in Hyderabad & Telangana",
  description:
    "Contact Photriya Academy — one of the best photography academies in Hyderabad and Telangana — via phone, email, or our contact form and we'll respond within 24 hours.",
  path: "/contact",
  keywords: [
    "contact Photriya Academy",
    "photography academy in Hyderabad contact",
    "photography classes Hyderabad",
    "photography course inquiry",
    "photography academy Telangana",
  ],
});

export default function ContactPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_STREET,
      addressLocality: BUSINESS_CITY,
      addressRegion: BUSINESS_REGION,
      postalCode: BUSINESS_POSTAL_CODE,
      addressCountry: BUSINESS_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO_LATITUDE,
      longitude: GEO_LONGITUDE,
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "AdministrativeArea", name: "Telangana" },
      { "@type": "Country", name: "India" },
    ],
    openingHours: "Mo-Fr 08:00-18:30",
    priceRange: "₹₹",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <ContactContent />
    </>
  );
}
