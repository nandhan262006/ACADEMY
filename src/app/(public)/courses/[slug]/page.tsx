import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  ArrowRight,
  Calendar,
  Sparkles,
  MapPin,
  Monitor,
  BookOpen,
  Camera,
  Video,
  Smartphone,
  Palette,
  TrendingUp,
} from "lucide-react";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const photographyTopics = [
  "Fundamentals of Photography",
  "Camera Types – DSLR & Mirrorless",
  "Exposure Control – Aperture, Shutter Speed, ISO",
  "ISO Sensitivity",
  "Focusing Techniques",
  "White Balance & Metering",
  "Depth of Field",
  "Using Filters in Photography",
  "Importance of Lenses",
  "Art of Composition",
  "Properties of Light",
  "Types of Lighting – Indoor & Outdoor",
  "Importance of Colours",
  "Wedding Photography",
];

const videographyTopics = [
  "Basics of Videography",
  "Types of Video Shots",
  "Frame Rates & Shutter Speed",
  "Log Shooting",
  "Usage of Gimbal",
  "Balancing & Calibrating Gimbal",
  "Shooting Timelapse & Hyperlapse",
];

const videoEditingTopics = [
  "Vertical vs Horizontal Formats",
  "Beat-Based Cutting",
  "Using Trending Music",
  "Matching Clips to Beat Drops",
  "Quick Transitions for Wedding Reels",
  "Templates & Presets for Fast Edit",
  "Speed Ramping & Slow Motion",
  "Background Sound Enhancement",
  "Export Settings for Fast Delivery",
];

const photoEditingTopics = [
  "Photo Editing Techniques",
  "Quick Editing & Batch Processing in Lightroom",
  "Color Correction & Color Grading",
  "Retouching & Image Enhancement",
  "AI Tools in Editing",
];

const marketingTopics = [
  "Social Media Marketing for Photographers",
  "Career Guidance",
];

const categories = [
  { title: "Photography", icon: Camera, topics: photographyTopics },
  { title: "Videography", icon: Video, topics: videographyTopics },
  { title: "Video Editing (Mobile & PC)", icon: Smartphone, topics: videoEditingTopics },
  { title: "Photo Editing", icon: Palette, topics: photoEditingTopics },
  { title: "Marketing & Career Growth", icon: TrendingUp, topics: marketingTopics },
];

interface CourseData {
  title: string;
  slug: string;
  price: number;
  mode: "online" | "offline";
  batchName: string;
  startDate: string;
  description: string;
  intro: string[];
  faqs: { q: string; a: string }[];
}

const onlineCourse: CourseData = {
  title: "Online Photography & Videography Course",
  slug: "online-photography-course",
  price: 37000,
  mode: "online",
  batchName: "Batch 38",
  startDate: "Oct 5th",
  description:
    "Master Photography, Videography, & Business in One Comprehensive Course — live-streamed from our classroom via Zoom.",
  intro: [
    "At Photriya Academy, we believe every student deserves the same quality of education, regardless of location.",
    "Our Offline Course is conducted live in the classroom, and the same sessions are streamed in real time via Zoom for online students. This ensures that both online and offline learners follow the same curriculum, learn from the same instructor, and progress together throughout the course.",
    "Whether you attend in person or join remotely, you'll receive the same comprehensive training, practical demonstrations, and expert guidance.",
  ],
  faqs: [
    {
      q: "How are the online classes conducted?",
      a: "All classes are conducted live via Zoom, streaming directly from our offline classroom. You'll attend the same sessions as our classroom students and learn from the same instructor.",
    },
    {
      q: "Who are the instructors?",
      a: "Photriya Venky & the Photriya Academy team, experienced professionals in photography & videography.",
    },
    {
      q: "Difference between Online & Offline courses?",
      a: "Offline students get mentor-supervised practice, while online students practice independently with instructions from our team.",
    },
    {
      q: "What if I miss a class?",
      a: "Refer to the soft copies of presentations and clarify doubts in the student community or the next session.",
    },
    {
      q: "What equipment do I need?",
      a: "A basic DSLR/Mirrorless camera, a laptop/computer for editing, and a good internet connection.",
    },
    {
      q: "Is the online curriculum the same as the offline course?",
      a: "Yes. Both online and offline students follow the same curriculum, instructor, schedule, and course content.",
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes. Students who successfully complete the course will receive a Digital Photriya Academy Course Completion Certificate.",
    },
  ],
};

const offlineCourse: CourseData = {
  title: "Photography Foundation Course",
  slug: "offline-photography-course",
  price: 43000,
  mode: "offline",
  batchName: "Batch 38",
  startDate: "Oct 5th",
  description:
    "Designed by Photriya Venky, this course is ideal for anyone who wants to build a strong foundation in photography with extensive hands-on practice.",
  intro: [
    "Designed by Photriya Venky, this course is ideal for anyone who wants to build a strong foundation in photography within a short period. Whether you're a beginner or an aspiring professional, the curriculum combines theory with extensive hands-on practice to help you develop both technical skills and creative vision.",
    "You'll learn to confidently use your camera, understand exposure, composition, lighting, and lenses, while also exploring the techniques used by renowned photographers. Through practical assignments involving nature, portraits, and still life photography, you'll develop the ability to create compelling images with purpose and confidence.",
    "By the end of the course, you'll have the knowledge, confidence, and practical experience to independently undertake small to medium-scale photography assignments.",
  ],
  faqs: [
    {
      q: "Where are the offline classes conducted?",
      a: "All offline classes are conducted at Photriya Academy, Madhapur, Hyderabad.",
    },
    {
      q: "Is this course suitable for beginners?",
      a: "Yes. The course starts with the fundamentals and gradually progresses to advanced photography, videography, editing, and marketing concepts.",
    },
    {
      q: "Will I get hands-on practical training?",
      a: "Yes. Practical learning is a core part of the course. You'll gain experience through live demonstrations, camera practice, lighting setups, and assignments.",
    },
    {
      q: "Will I receive a certificate after completing the course?",
      a: "Yes. Students who successfully complete the course will receive a Photriya Academy Course Completion Certificate.",
    },
    {
      q: "Can I interact with the mentor during the course?",
      a: "Absolutely. Students can ask questions throughout the sessions and receive direct guidance and feedback from the mentor.",
    },
  ],
};

const courses = [onlineCourse, offlineCourse];

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.description,
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

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: String(course.price),
      priceCurrency: "INR",
      category: "Paid",
    },
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 md:w-80 h-48 md:h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-8 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
            <div>
              <div className="hidden md:flex gap-2 mb-4">
                <Badge className="bg-gold text-navy border-0">
                  {course.mode === "online" ? "Online" : "In-Person"}
                </Badge>
                <Badge variant="outline" className="border-white/20 text-gray-300">
                  {course.batchName}
                </Badge>
              </div>
              <h1 className="text-lg md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="hidden md:block text-xs md:text-lg text-gray-300 mb-3 md:mb-6 leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-5 mb-2 md:mb-6">
                {[
                  { icon: Clock, label: "2 Months" },
                  { icon: Calendar, label: "Mon-Fri" },
                  { icon: Clock, label: "8:00 AM – 10:30 AM IST" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <item.icon className="h-3.5 w-3.5 md:h-5 md:w-5 text-gold" />
                    <span className="text-gray-200 text-[11px] md:text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-baseline gap-2 mb-3 md:mb-8">
                <span className="text-2xl md:text-4xl font-bold text-gold-light">
                  ₹{course.price.toLocaleString()}
                </span>
                <span className="text-gray-400 text-xs">/ complete course</span>
              </div>
              <Link href="/batches">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy font-semibold shadow-lg shadow-gold/25 h-10 md:h-12 px-5 md:px-8 text-xs md:text-sm"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative md:hidden mb-4 rounded-xl overflow-hidden aspect-[16/9]">
              <Image
                src={course.mode === "online" ? "/images/online-course.jpg" : "/images/about.avif"}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/20 to-white/5 rounded-2xl blur-xl" />
              <Image
                src={course.mode === "online" ? "/images/online-course.jpg" : "/images/about.avif"}
                alt={course.title}
                width={600}
                height={400}
                className="relative rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-14">
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-medium px-3 py-1 rounded-full mb-5">
                <Sparkles className="h-4 w-4" />
                <span>Overview</span>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-navy mb-4 md:mb-6 tracking-tight">
                {course.mode === "online"
                  ? "One Course. Two Ways to Learn."
                  : "About This Course"}
              </h2>
              <div className="text-gray-600 space-y-3 md:space-y-5 leading-relaxed">
                {course.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <Separator className="my-6 md:my-10" />

              <h2 className="text-xl md:text-3xl font-bold text-navy mb-1 md:mb-2 tracking-tight">
                Course Content
              </h2>
              <p className="text-gray-500 mb-4 md:mb-8">
                Comprehensive curriculum covering Photography, Videography, Editing, and Marketing
              </p>

              <div className="space-y-3 md:space-y-10">
                {/* Desktop: flat grid */}
                <div className="hidden md:block space-y-10">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div key={category.title}>
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-navy mb-4">
                          <Icon className="h-5 w-5 text-gold" />
                          {category.title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-2">
                          {category.topics.map((topic, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gold/30 transition-all"
                            >
                              <span className="flex-shrink-0 w-5 h-5 bg-navy text-white rounded-md flex items-center justify-center text-[10px] font-bold">
                                &#10003;
                              </span>
                              <span className="text-sm text-gray-700">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile: collapsible sections */}
                <div className="md:hidden space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <details key={category.title} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                          <span className="flex items-center gap-2 text-sm font-semibold text-navy">
                            <Icon className="h-4 w-4 text-gold" />
                            {category.title}
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">{category.topics.length} topics</span>
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center group-open:bg-navy group-open:text-white transition-colors">
                              <svg className="w-3 h-3 group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                              <svg className="w-3 h-3 hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </span>
                          </span>
                        </summary>
                        <div className="px-4 pb-4 grid gap-1.5">
                          {category.topics.map((topic, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2.5 p-2 rounded-lg bg-gray-50"
                            >
                              <span className="flex-shrink-0 w-4 h-4 bg-navy text-white rounded flex items-center justify-center text-[9px] font-bold">
                                &#10003;
                              </span>
                              <span className="text-[13px] text-gray-700">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </details>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <Card className="sticky top-24 border-0 shadow-lg">
                <CardHeader className="bg-navy text-white rounded-t-lg">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-gold" />
                    {course.batchName} Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 pt-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-navy text-sm">Start Date</p>
                      <p className="text-sm text-gray-600">{course.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-navy text-sm">Duration</p>
                      <p className="text-sm text-gray-600">2 Months</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-navy text-sm">Schedule</p>
                      <p className="text-sm text-gray-600">Monday to Friday</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-navy text-sm">Timings</p>
                      <p className="text-sm text-gray-600">8:00 AM to 10:30 AM IST</p>
                    </div>
                  </div>
                  {course.mode === "online" && (
                    <div className="flex items-start gap-3">
                      <Monitor className="h-5 w-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-navy text-sm">Mode</p>
                        <p className="text-sm text-gray-600">Live via Zoom</p>
                      </div>
                    </div>
                  )}
                  {course.mode === "offline" && (
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-navy text-sm">Location</p>
                        <p className="text-sm text-gray-600">Madhapur, Hyderabad</p>
                      </div>
                    </div>
                  )}
                  <Separator />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-navy mb-1">
                      ₹{course.price.toLocaleString()}
                    </p>
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

      <section className="py-10 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-sm font-medium px-3 py-1 rounded-full mb-4">
              <Sparkles className="h-4 w-4" />
              FAQ
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-navy tracking-tight">
              Photriya Academy &mdash; {course.mode === "online" ? "Online" : "Offline"} Course FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-2 md:space-y-3">
            {course.faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-gray-100"
              >
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[13px] md:text-base font-medium text-navy pr-4">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center group-open:bg-navy group-open:text-white transition-colors">
                    <svg
                      className="w-3 h-3 group-open:hidden"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg
                      className="w-3 h-3 hidden group-open:block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
