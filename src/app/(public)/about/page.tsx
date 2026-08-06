import Image from "next/image";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Camera, Heart, Target, Award, MapPin, Phone, Mail } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We don't just teach photography. We build photographers. Learn about Photriya Academy's mission to transform aspiring photographers into confident professionals.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Photriya Academy",
    description:
      "Learn about our mission to make photography education accessible to everyone.",
    url: `${SITE_URL}/about`,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Photriya Academy",
      },
    ],
  },
};

const values = [
  {
    icon: Camera,
    title: "Excellence",
    desc: "We strive for excellence in every aspect of our teaching, from curriculum design to student support.",
  },
  {
    icon: Heart,
    title: "Passion",
    desc: "Our passion for photography drives us to inspire and motivate our students to achieve their best.",
  },
  {
    icon: Target,
    title: "Accessibility",
    desc: "Making quality photography education accessible to everyone, regardless of their location.",
  },
  {
    icon: Award,
    title: "Community",
    desc: "Building a supportive community of photographers who learn and grow together.",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/photriyaacademy/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/PhotriyaVenky",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/PhotriyaPhotography/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://in.pinterest.com/photriya/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a8 8 0 0 0-2.5 15.5c-.2-1.2.0-2.5.5-3.6l2-8c-.4-.8-.4-1.8 0-2.6a1.8 1.8 0 0 1 3.2 1c0 1.2-.8 2.8-1.2 4.2-.3 1.4.7 2.5 2 2.5 2.5 0 4.2-3 4.2-6.5 0-3.5-2.5-5.8-5.8-5.8-4 0-6.4 2.8-6.4 6 0 1 .4 2 1 2.8" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@PhotriyaVenky",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 py-14 sm:py-20 md:py-24 lg:py-28 relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
            We Don&apos;t Just Teach Photography.
            <br />
            We Build Photographers.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Our mission is to transform aspiring photographers into confident professionals through practical learning, real-world experience, and expert mentorship.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-5xl mx-auto">
            <div className="relative order-2 md:order-1">
              <Image
                src="/images/about.avif"
                alt="Photriya Academy Classroom"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-5 tracking-tight">
                About Photriya Academy
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Photriya Academy, we believe that every great photographer starts with curiosity, passion, and the right guidance. Our mission is to transform aspiring photographers into confident professionals through practical learning, real-world experience, and expert mentorship.
                </p>
                <p>
                  Photography has given Photriya Venky countless opportunities, invaluable experiences, and a fulfilling career. Over the years, he has worked with clients, built a successful photography business, and learned lessons that extend far beyond operating a camera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">
              Why Photriya Academy Exists
            </h2>
          </div>
          <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg text-center">
            <p>
              Photriya Academy was created from a simple belief: knowledge grows when it is shared.
            </p>
            <p>
              Rather than keeping years of experience to himself, Photriya Venky chose to give back by mentoring aspiring photographers and videographers. The academy was founded to help students learn not only the technical aspects of photography but also the practical skills, creative thinking, and professional mindset needed to succeed in the industry.
            </p>
          </div>
          <div className="mt-10 p-8 bg-black text-white rounded-2xl text-center">
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              &ldquo;The greatest achievement isn&apos;t building a successful career&mdash;it&apos;s helping others build theirs.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-black text-lg">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Visit us, call us, or follow us on social media for updates and photography tips.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            <a
              href="https://maps.google.com/?q=Photriya+Academy+Madhapur+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm">Visit Us</h3>
                <p className="text-xs text-gray-500">Madhapur, Hyderabad</p>
              </div>
            </a>

            <a
              href="tel:+919618855959"
              className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm">Call Us</h3>
                <p className="text-xs text-gray-500">+91 9618855959</p>
              </div>
            </a>

            <a
              href="mailto:info@photriya.com"
              className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm">Email Us</h3>
                <p className="text-xs text-gray-500">info@photriya.com</p>
              </div>
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
            <h3 className="font-semibold text-black mb-4">Follow Us</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-sm font-medium transition-colors"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
