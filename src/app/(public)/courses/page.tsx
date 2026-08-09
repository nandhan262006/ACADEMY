import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Monitor, MapPin, Calendar } from "lucide-react";
import { buildSeo, itemListSchema } from "@/lib/seo";
import { getAllCourseDetails } from "@/lib/course-details";

export const metadata: Metadata = buildSeo({
  title: "Photography Courses in Hyderabad & Telangana",
  description:
    "Discover the best photography courses in Hyderabad and across Telangana. Learn photography and videography from industry experts with comprehensive online and offline courses at Photriya Academy.",
  path: "/courses",
  keywords: [
    "best photography course in Hyderabad",
    "photography course in Telangana",
    "photography classes in Hyderabad",
    "online photography course",
    "videography course",
    "photo editing course",
    "Photriya Academy",
  ],
});

export default async function CoursesPage() {
  const allDetails = await getAllCourseDetails().catch(() => []);
  const detailsBySlug = new Map(
    allDetails.map((d) => [d.slug, d])
  );
  const online = detailsBySlug.get("online-photography-course");
  const offline = detailsBySlug.get("offline-photography-course");

  const courseListJsonLd = itemListSchema([
    {
      name: "Online Photography & Videography Course",
      url: "https://academy.photriya.com/courses/online-photography-course",
    },
    {
      name: "Offline Photography & Videography Course",
      url: "https://academy.photriya.com/courses/offline-photography-course",
    },
  ]);

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListJsonLd) }}
      />
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-gutter py-hero relative">
          <h1 className="text-display font-bold text-white mb-4 tracking-tight">
            Photography Courses in Hyderabad &amp; Telangana
          </h1>
          <p className="text-lead text-gray-300 max-w-2xl leading-relaxed">
            Learn photography from industry experts with the best photography
            courses in Hyderabad and across Telangana. Available both online and
            offline.
          </p>
        </div>
      </section>

      <section className="py-section-xl">
        <div className="container mx-auto px-gutter">
          <div className="grid gap-6 sm:gap-8 md:gap-10">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[clamp(13rem,45vw,16rem)] md:h-auto md:min-h-[320px]">
                  <Image
                    src="/images/online-course.jpg"
                    alt="Online Photography & Videography Course"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-[clamp(1.25rem,2vw+0.8rem,2.5rem)] flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge className="bg-gold text-navy border-0">Featured</Badge>
                    <Badge variant="outline" className="border-gray-200 text-gray-600">
                      <Monitor className="h-3 w-3 mr-1" />
                      Online
                    </Badge>
                  </div>
                  <h2 className="text-h2 font-bold text-navy mb-3 sm:mb-4 tracking-tight">
                    Online Photography & Videography Course
                  </h2>
                  <p className="text-body text-gray-600 mb-6 leading-relaxed">
                    Live sessions streamed via Zoom from our classroom. Master Photography, Videography, Editing, and Business — all from the comfort of your home. Same curriculum, same instructor, same schedule as the offline course.
                  </p>
                  <div className="flex flex-wrap gap-5 mb-6">
                    {[
                      { icon: Clock, label: online?.duration ?? "2 Months" },
                      { icon: Monitor, label: online?.location ?? "Live via Zoom" },
                      { icon: Calendar, label: online?.schedule ?? "Monday to Friday" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <item.icon className="h-4 w-4 text-gold" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-h3 font-bold text-navy">
                      ₹{(online?.price ?? 37000).toLocaleString("en-IN")}
                    </span>
                    <Link href="/courses/online-photography-course" className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white shadow-sm">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[clamp(13rem,45vw,16rem)] md:h-auto md:min-h-[320px] md:order-2">
                  <Image
                    src="/images/gallery/gallery1.jpg"
                    alt="Offline Photography & Videography Course"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-[clamp(1.25rem,2vw+0.8rem,2.5rem)] flex flex-col justify-center md:order-1">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge className="bg-gold text-navy border-0">Featured</Badge>
                    <Badge variant="outline" className="border-gray-200 text-gray-600">
                      <MapPin className="h-3 w-3 mr-1" />
                      Offline
                    </Badge>
                  </div>
                  <h2 className="text-h2 font-bold text-navy mb-3 sm:mb-4 tracking-tight">
                    Offline Photography &amp; Videography Course
                  </h2>
                  <p className="text-body text-gray-600 mb-6 leading-relaxed">
                    In-person training at our Madhapur studio in Hyderabad. Build a strong foundation with extensive hands-on practice, live demonstrations, camera practice, lighting setups, and personalized guidance from Photriya Venky.
                  </p>
                  <div className="flex flex-wrap gap-5 mb-6">
                    {[
                      { icon: Clock, label: offline?.duration ?? "2 Months" },
                      { icon: MapPin, label: offline?.location ?? "Madhapur, Hyderabad" },
                      { icon: Calendar, label: offline?.schedule ?? "Monday to Friday" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <item.icon className="h-4 w-4 text-gold" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-h3 font-bold text-navy">
                      ₹{(offline?.price ?? 43000).toLocaleString("en-IN")}
                    </span>
                    <Link href="/courses/offline-photography-course" className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white shadow-sm">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
              {[
                {
                  title: "Advanced Photography",
                  description:
                    "Take your photography skills to the next level with advanced techniques in lighting, composition, and post-processing.",
                  status: "Coming Soon",
                },
                {
                  title: "Video Editing Masterclass",
                  description:
                    "Master video editing with Adobe Premiere Pro, DaVinci Resolve, and Final Cut Pro.",
                  status: "Coming Soon",
                },
              ].map((course, index) => (
                <Card
                  key={index}
                  className="border border-gray-100 bg-gray-50/50"
                >
                  <CardHeader>
                    <Badge
                      variant="outline"
                      className="w-fit border-gray-200 text-gray-500 mb-2"
                    >
                      {course.status}
                    </Badge>
                    <CardTitle className="text-navy text-xl">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {course.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
