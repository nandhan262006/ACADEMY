import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  BUSINESS_CITY,
  BUSINESS_REGION,
  BUSINESS_STREET,
  BUSINESS_POSTAL_CODE,
  BUSINESS_COUNTRY,
  BUSINESS_COUNTRY_CODE,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  FOUNDER_NAME,
  FOUNDER_ROLE,
  SOCIAL_LINKS,
} from "./site";

const baseImage = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: SITE_NAME,
};

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  nofollow?: boolean;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
}

/** Build complete, consistent Next.js metadata for a page. */
export function buildSeo({
  title,
  description,
  path,
  noindex = false,
  nofollow = false,
  keywords,
  publishedTime,
  modifiedTime,
}: SeoOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: {
      index: !noindex,
      follow: !nofollow,
      ...(!noindex && {
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }),
    },
    ...(keywords && keywords.length ? { keywords } : {}),
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      title: fullTitle,
      description,
      images: [baseImage],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [baseImage],
    },
  };
}

/* ---------------------------------- */
/* JSON-LD structured data helpers     */
/* ---------------------------------- */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: SITE_NAME,
    alternateName: "Photriya Photography Academy",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/logo.png`,
    description: SITE_DESCRIPTION,
    slogan: "Learn photography from industry experts.",
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_STREET,
      addressLocality: BUSINESS_CITY,
      addressRegion: BUSINESS_REGION,
      postalCode: BUSINESS_POSTAL_CODE,
      addressCountry: BUSINESS_COUNTRY_CODE,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO_LATITUDE,
      longitude: GEO_LONGITUDE,
    },
    areaServed: [
      { "@type": "City", name: BUSINESS_CITY },
      { "@type": "AdministrativeArea", name: BUSINESS_REGION },
      { "@type": "Country", name: BUSINESS_COUNTRY },
    ],
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
      jobTitle: FOUNDER_ROLE,
      url: `${SITE_URL}/about`,
    },
    sameAs: SOCIAL_LINKS,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FOUNDER_NAME,
    jobTitle: FOUNDER_ROLE,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/about`,
    sameAs: SOCIAL_LINKS,
    knowsAbout: [
      "Photography",
      "Videography",
      "Photo Editing",
      "Lightroom",
      "Photoshop",
      "Premiere Pro",
      "Wedding Photography",
    ],
  };
}

interface CourseSchemaOptions {
  name: string;
  slug: string;
  description: string;
  price: number;
  mode: "online" | "offline";
  duration?: string;
  schedule?: string;
  image?: string;
  startDate?: string;
  endDate?: string;
  numberOfStudents?: number;
}

export function courseSchema({
  name,
  slug,
  description,
  price,
  mode,
  duration = "P2M",
  schedule = "Mon-Fri, 8:00 AM – 10:30 AM IST",
  image = `${SITE_URL}/images/online-course.jpg`,
  startDate = "2026-01-15",
  endDate = "2026-03-15",
}: CourseSchemaOptions) {
  const url = `${SITE_URL}/courses/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    image,
    isAccessibleForFree: false,
    inLanguage: "en-IN",
    coursePrerequisites:
      "No prior photography experience required. A DSLR or mirrorless camera is recommended.",
    educationalLevel: "Beginner to Professional",
    provider: {
      "@type": ["Organization", "EducationalOrganization"],
      name: SITE_NAME,
      url: SITE_URL,
      telephone: CONTACT_PHONE,
    },
    instructor: {
      "@type": "Person",
      name: FOUNDER_NAME,
      jobTitle: FOUNDER_ROLE,
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "INR",
      category: "Paid",
      availability: "https://schema.org/InStock",
      url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: mode === "online" ? "Online" : "Onsite",
      courseWorkload: duration,
      startDate,
      endDate,
      schedule,
      location:
        mode === "online"
          ? { "@type": "VirtualLocation", url: `${SITE_URL}/courses/${slug}` }
          : {
              "@type": "Place",
              name: SITE_NAME,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS_STREET,
                addressLocality: BUSINESS_CITY,
                addressRegion: BUSINESS_REGION,
                postalCode: BUSINESS_POSTAL_CODE,
                addressCountry: BUSINESS_COUNTRY_CODE,
              },
            },
      offers: {
        "@type": "Offer",
        price,
        priceCurrency: "INR",
        category: "Paid",
        availability: "https://schema.org/InStock",
        url,
      },
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function itemListSchema<T extends { name: string; url: string }>(items: T[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
