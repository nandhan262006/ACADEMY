import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Camera, Heart, Target, Award, Sparkles, MapPin, Phone, Mail, Star } from "lucide-react";
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

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-gold-light mb-5">
            <Sparkles className="h-4 w-4" />
            <span>Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
            We Don&apos;t Just Teach Photography.
            <br />
            We Build Photographers.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Our mission is to transform aspiring photographers into confident professionals through practical learning, real-world experience, and expert mentorship.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/20 to-navy/20 rounded-2xl blur-xl" />
              <Image
                src="/images/about.avif"
                alt="Photriya Academy Classroom"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-medium px-3 py-1 rounded-full mb-5">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-tight">
                About Photriya Academy
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
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

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-medium px-3 py-1 rounded-full mb-4">
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
              Why Photriya Academy Exists
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg text-center">
              <p>
                Photriya Academy was created from a simple belief: knowledge grows when it is shared.
              </p>
              <p>
                Rather than keeping years of experience to himself, Photriya Venky chose to give back by mentoring aspiring photographers and videographers. The academy was founded to help students learn not only the technical aspects of photography but also the practical skills, creative thinking, and professional mindset needed to succeed in the industry.
              </p>
            </div>
            <div className="mt-12 p-8 bg-navy text-white rounded-2xl text-center">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                &ldquo;The greatest achievement isn&apos;t building a successful career&mdash;it&apos;s helping others build theirs.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-medium px-3 py-1 rounded-full mb-4">
              Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="group border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-navy text-lg">
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

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-medium px-3 py-1 rounded-full mb-4">
              Community
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
              Become part of a growing community of passionate photographers who are learning, creating, and building successful careers together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Link
              href="https://maps.google.com/?q=Photriya+Academy+Madhapur+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-navy mb-1">Visit Us</h3>
              <p className="text-sm text-gray-500">Madhapur, Hyderabad, India</p>
            </Link>

            <a
              href="tel:+919618855959"
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-navy mb-1">Call Us</h3>
              <p className="text-sm text-gray-500">+91 9618855959</p>
            </a>

            <a
              href="mailto:info@photriya.com"
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-navy mb-1">Email Us</h3>
              <p className="text-sm text-gray-500">info@photriya.com</p>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-gold" />
                <h3 className="font-semibold text-navy">Google Reviews</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Rahul S.", text: "Excellent course! The hands-on training and mentorship from Photriya Venky sir is unmatched. Highly recommended for anyone serious about photography." },
                  { name: "Priya M.", text: "I was a complete beginner and now I confidently take on client assignments. The curriculum is very well structured and practical." },
                  { name: "Arjun K.", text: "The best photography academy in Hyderabad. They don't just teach technical skills but also how to build a successful photography business." },
                ].map((review, i) => (
                  <div key={i} className="pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-1 leading-relaxed">{review.text}</p>
                    <p className="text-xs font-medium text-navy">{review.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-6 md:p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-gold" />
                <h3 className="font-semibold">Follow Us</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Stay connected with us on social media for photography tips, student work highlights, and course updates.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/photriyaacademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-gold/20 rounded-xl px-5 py-3 text-sm font-medium hover:text-gold transition-all"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/photriyaacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-gold/20 rounded-xl px-5 py-3 text-sm font-medium hover:text-gold transition-all"
                >
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/@photriyaacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-gold/20 rounded-xl px-5 py-3 text-sm font-medium hover:text-gold transition-all"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
