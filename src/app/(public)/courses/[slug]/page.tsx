import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  ArrowRight,
  Calendar,
  MapPin,
  Monitor,
  BookOpen,
  Camera,
  Video,
  Smartphone,
  Palette,
  TrendingUp,
} from "lucide-react";
import { courseSchema, faqSchema, buildSeo } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

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
  description: string;
  intro: string[];
  faqs: { q: string; a: string }[];
}

const onlineCourse: CourseData = {
  title: "Online Photography & Videography Course",
  slug: "online-photography-course",
  price: 37000,
  mode: "online",
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

  return buildSeo({
    title: course.title,
    description: course.description,
    path: `/courses/${course.slug}`,
    keywords: [
      course.mode === "online"
        ? "online photography course"
        : "photography classes in Hyderabad",
      "photography course",
      "videography course",
      "learn photography",
      "Photriya Academy",
    ],
  });
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const courseJsonLd = courseSchema({
    name: course.title,
    slug: course.slug,
    description: course.description,
    price: course.price,
    mode: course.mode,
    image:
      course.mode === "online"
        ? `${SITE_URL}/images/online-course.jpg`
        : `${SITE_URL}/images/about.avif`,
  });

  const faqsJsonLd = faqSchema(course.faqs);

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsJsonLd) }}
      />

      <section className="bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 relative">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-10">
            <div className="flex-1 space-y-4 md:space-y-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight pt-4">
                {course.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" /> 2 Months
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" /> Mon–Fri
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" /> 8:00 AM – 10:30 AM IST
                </span>
              </div>
              <div className="flex items-center gap-4 pt-1">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  ₹{course.price.toLocaleString()}
                </span>
                <a
                  href={`https://wa.me/919618855959?text=${encodeURIComponent(`Hi Photriya Academy! I'm interested in the ${course.mode === "online" ? "Online" : "Offline"} Course — ${course.title}. Please share the details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="h-11 px-8 bg-white text-black font-medium hover:bg-gray-200 shadow-sm text-sm">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] lg:w-[45%] lg:shrink-0">
              <Image
                src={course.mode === "online" ? "/images/online-course.jpg" : "/images/about.avif"}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-14">
            <div className="md:col-span-2">
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

              {course.mode === "online" && (
                <>
                  <Separator className="my-6 md:my-10" />
                  <h2 className="text-xl md:text-3xl font-bold text-navy mb-1 md:mb-2 tracking-tight">
                    How We Teach Online
                  </h2>
                  <p className="text-gray-500 mb-4 md:mb-8">
                    Multi-camera live streams bring the classroom to your screen
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
                    {[
                      { title: "Multiple Perspectives", desc: "Multi-camera streams let you see the classroom, the camera viewfinder, and the editing screen simultaneously.", image: "/images/multiple-perspectives.jpg" },
                      { title: "Live Editing", desc: "Watch every retouch and adjustment in real time on your own screen — no squinting at a projector.", image: "/images/live-editing.jpg" },
                      { title: "Closer Look", desc: "See exactly how the pros handle gear. Our close-up shots reveal every dial, button, and setting.", image: "/images/closer-look.jpg" },
                    ].map((item) => (
                      <div key={item.title} className="bg-gray-50 rounded-2xl overflow-hidden">
                        <div className="aspect-[4/3] relative w-full">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 384px"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4 sm:p-5">
                          <h3 className="text-black text-base sm:text-lg md:text-xl font-semibold mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

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
              <Card className="sticky top-24 border border-gray-100 shadow-md overflow-hidden">
                <div className="p-6 space-y-5">
                  <h3 className="text-lg font-bold text-navy">Course Details</h3>
                  <div className="space-y-4">
                    {[
                      { icon: BookOpen, label: "Duration", value: "2 Months" },
                      { icon: Calendar, label: "Schedule", value: "Monday to Friday" },
                      { icon: Clock, label: "Timings", value: "8:00 AM – 10:30 AM IST" },
                      course.mode === "online"
                        ? { icon: Monitor, label: "Mode", value: "Live via Zoom" }
                        : { icon: MapPin, label: "Location", value: "Madhapur, Hyderabad" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <item.icon className="h-4 w-4 text-gray-400 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                          <p className="text-sm font-medium text-navy truncate">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div>
                    <span className="text-3xl font-bold text-navy">₹{course.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 ml-1">/ complete course</span>
                  </div>
                  <a
                    href={`https://wa.me/919618855959?text=${encodeURIComponent(`Hi Photriya Academy! I'm interested in the ${course.mode === "online" ? "Online" : "Offline"} Course — ${course.title}. Please share the details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full h-11 bg-black hover:bg-gray-800 text-white font-medium shadow-sm">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-14">
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
