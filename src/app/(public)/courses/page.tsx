import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-gold-light mb-5">
            <Sparkles className="h-4 w-4" />
            <span>Our Programs</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Our Courses
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Learn photography from industry experts with comprehensive courses
            designed for all skill levels.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-10">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="relative h-72 md:h-auto">
                  <Image
                    src="/images/online-course.jpg"
                    alt="Online Photography Course"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-gold text-navy border-0">Featured</Badge>
                    <Badge variant="outline" className="border-gray-200 text-gray-600">
                      Online
                    </Badge>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 tracking-tight">
                    Online Photography Course
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The live-streamed sessions aim at offering the possibility to
                    pursue photography, online at the comfort of your home.
                    Focuses on fundamentals, composition, lighting, editing, and
                    colour correction.
                  </p>
                  <div className="flex flex-wrap gap-5 mb-6">
                    {[
                      { icon: Clock, label: "8 Weeks" },
                      { icon: Users, label: "30 Students/Batch" },
                      { icon: BookOpen, label: "18 Topics" },
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
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-navy">₹38,000</span>
                    <Link href="/courses/online-photography-course">
                      <Button className="bg-navy hover:bg-navy-light text-white shadow-sm">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
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
