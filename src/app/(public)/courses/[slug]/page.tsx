import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Users,
  ArrowRight,
  Calendar,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const curriculum = [
  "History of Photography",
  "Working Principles of DSLR & Mirrorless Cameras",
  "Genres & Basic Language of Photography",
  "Exposure (Shutter, Aperture & ISO)",
  "Metering Modes & Exposure Compensation",
  "Colours & White Balance",
  "Focusing Modes",
  "Depth of Field & Lenses",
  "Compositions",
  "Types of Lights & Light Modifiers",
  "Indoor & Outdoor Lighting Techniques",
  "Tabletop Photography",
  "Basics of Cinematography",
  "Manipulating & Retouching on Photoshop",
  "Introduction to Lightroom",
  "Introduction to Premiere Pro (Video Editing)",
  "Wedding Photography",
  "Branding & Marketing",
];

const course = {
  title: "Online Photography Course",
  slug: "online-photography-course",
  price: 38000,
  durationWeeks: 8,
  nextBatchStart: "January 15, 2026",
  description:
    "Master photography from fundamentals to advanced techniques with live online classes.",
};

export function generateStaticParams() {
  return [{ slug: course.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== course.slug) return {};

  return {
    title: course.title,
    description:
      "Master photography from fundamentals to advanced techniques with live online classes at Photriya Academy.",
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} | ${SITE_NAME}`,
      description: course.description,
      url: `${SITE_URL}/courses/${course.slug}`,
      type: "website",
    },
  };
}

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: course.title,
  description:
    "The live-streamed sessions focus on fundamentals as well as lessons on composition, lighting, editing techniques and colour correction.",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    sameAs: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "38000",
    priceCurrency: "INR",
    category: "Paid",
  },
};

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug !== course.slug) notFound();

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gold text-navy border-0 mb-4">
                Featured Course
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {course.title}
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Master photography from fundamentals to advanced techniques with
                live online classes.
              </p>
              <div className="flex flex-wrap gap-5 mb-8">
                {[
                  { icon: Clock, label: "8 Weeks" },
                  { icon: Users, label: "30 Students/Batch" },
                  { icon: BookOpen, label: "18 Topics" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-gold" />
                    <span className="text-gray-200">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-gold-light">₹38,000</span>
                <span className="text-gray-400">/ complete course</span>
              </div>
              <Link href="/batches">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy font-semibold shadow-lg shadow-gold/25"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/20 to-white/5 rounded-2xl blur-xl" />
              <Image
                src="/images/online-course.jpg"
                alt="Online Photography Course"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-14">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-medium px-3 py-1 rounded-full mb-5">
                <Sparkles className="h-4 w-4" />
                <span>Overview</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 tracking-tight">
                About This Course
              </h2>
              <div className="text-gray-600 space-y-5 leading-relaxed">
                <p>
                  The live-streamed sessions aim at offering the possibility to
                  pursue photography, online at the comfort of your home. The
                  online photography course made available with minimal cost
                  focuses on fundamentals as well as lessons on composition,
                  lighting, editing techniques, colour correction, etc.
                </p>
                <p>
                  This course also involves broader topics of art and its
                  influence on photography, as well as Marketing skills.
                  You&apos;ll learn to analyze your vision and identify areas for
                  growth. Photriya Venky will also explore the difference between
                  the world perceived by the human eye and the world seen by the
                  camera sensor.
                </p>
                <p>
                  From choosing the right camera to producing a portfolio of good
                  photographs, you can be confident this course will improve your
                  knowledge and skill dramatically.
                </p>
              </div>

              <Separator className="my-10" />

              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 tracking-tight">
                Course Curriculum
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {curriculum.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-gold/30 transition-all"
                  >
                    <span className="flex-shrink-0 w-7 h-7 bg-navy text-white rounded-lg flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-24 border-0 shadow-lg">
                <CardHeader className="bg-navy text-white rounded-t-lg">
                  <CardTitle className="text-white">
                    <Sparkles className="h-5 w-5 text-gold inline mr-2" />
                    Course Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 pt-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-navy text-sm">Next Batch</p>
                      <p className="text-sm text-gray-600">
                        January 15 - March 15, 2026
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-navy text-sm">Timings</p>
                      <p className="text-sm text-gray-600">
                        Mon-Fri, 8:00 AM - 10:30 AM IST
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-navy text-sm">Batch Size</p>
                      <p className="text-sm text-gray-600">30 students max</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-navy mb-1">₹38,000</p>
                    <p className="text-sm text-gray-500 mb-5">
                      Complete Course Fee
                    </p>
                    <Link href="/batches">
                      <Button className="w-full bg-gold hover:bg-gold-light text-navy font-semibold shadow-sm">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
