import Image from "next/image";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Camera, Heart, Target, Award, Sparkles } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Photriya Academy makes photography education accessible to everyone. Founded by Photriya Venky, we've trained hundreds of students across India.",
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
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-gold-light mb-5">
            <Sparkles className="h-4 w-4" />
            <span>Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Learn about our mission to make photography education accessible to
            everyone.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-medium px-3 py-1 rounded-full mb-5">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 tracking-tight">
                Photriya Academy
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Our Online Class was created out of a strong passion, a shared
                  vision and a ceaseless commitment to making learning easily
                  accessible from anywhere in the world.
                </p>
                <p>
                  Our unique approach to online learning is designed to provide
                  our students with the best classroom experience, along with the
                  opportunity to get education from their home.
                </p>
                <p>
                  Founded by Photriya Venky, an industry expert with years of
                  experience in photography and videography, our academy has
                  trained hundreds of students across India.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/20 to-navy/20 rounded-2xl blur-xl" />
              <Image
                src="/images/about.avif"
                alt="Photriya Academy Classroom"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-medium px-3 py-1 rounded-full mb-4">
              What We Stand For
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
    </div>
  );
}
