"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import GalleryCTA from "@/components/GalleryCTA";

const topics = [
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
  "Introduction to Premiere Pro",
  "Wedding Photography",
  "Branding & Marketing",
];

const audience = [
  { title: "Photography Enthusiasts", desc: "Many photography enthusiasts are requesting online classes who are unable to attend offline classes." },
  { title: "Remote Learners", desc: "Photography lovers who reside far from Hyderabad in other states." },
  { title: "Homemakers", desc: "Homemakers who have a lot of interest in photography." },
  { title: "Working Professionals", desc: "Software engineers who want to explore their hobby." },
];

const teachingPoints = [
  { title: "Multiple Perspectives", desc: "Multi-camera streams let you see the classroom, the camera viewfinder, and the editing screen simultaneously.", image: "/images/multiple-perspectives.jpg" },
  { title: "Live Editing", desc: "Watch every retouch and adjustment in real time on your own screen — no squinting at a projector.", image: "/images/live-editing.jpg" },
  { title: "Closer Look", desc: "See exactly how the pros handle gear. Our close-up shots reveal every dial, button, and setting.", image: "/images/closer-look.jpg" },
];

const curriculumCards = [
  { title: "Theory & Fundamentals", desc: "Learn exposure triangle, metering modes, white balance, and focusing techniques.", image: "/images/theory.png" },
  { title: "Practical Shooting", desc: "Indoor and outdoor lighting, tabletop photography, and hands-on shooting assignments.", image: "/images/practicalshooting.png" },
  { title: "Post-Processing", desc: "Retouching in Photoshop, colour grading in Lightroom, and video editing in Premiere Pro.", image: "/images/course-content.jpg" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-6">
                About The Course
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 tracking-tight">
                Online Photography Course
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The live-streamed sessions aim at offering the possibility to
                pursue photography, online at the comfort of your home. The
                online photography course made available with minimal cost
                focuses on fundamentals as well as lessons on composition,
                lighting, editing techniques, colour correction, etc.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From choosing the right camera to producing a portfolio of good
                photographs, you can be confident this course will improve your
                knowledge and skill dramatically.
              </p>
              <div className="flex flex-wrap gap-4">
                {["8 Weeks", "30 Students/Batch", "Certificate"].map((label) => (
                  <div key={label} className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block aspect-[4/3] bg-gray-100 rounded-2xl"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-28 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
              Curriculum
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              Course Contents
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto"
          >
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-black/20 hover:shadow-md transition-all group"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors leading-tight">
                  {topic}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
              Curriculum
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              Class Curriculum
            </h2>
          </motion.div>
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {curriculumCards.map((item) => (
              <motion.div key={item.title} variants={staggerItem} className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] sm:aspect-[3/4] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-black text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
              Approach
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              How We Teach Online
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid gap-8 max-w-5xl mx-auto md:grid-cols-3">
            {teachingPoints.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="bg-gray-50 rounded-2xl overflow-hidden grid grid-cols-[120px_1fr] md:grid-cols-1"
              >
                <div className="aspect-[3/4] md:aspect-[4/3] relative shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 120px, 384px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-5">
                  <h3 className="text-black text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
              Batches
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              Upcoming Batches
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-3xl mx-auto">
            <div className="border border-gray-100 shadow-sm rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-gray-100 text-gray-700 rounded-full text-xs px-3 py-1 font-medium">Upcoming</span>
                <span className="text-sm text-gray-500">0/30 seats filled</span>
              </div>
              <h3 className="text-black text-xl font-semibold mb-1">January 2026 Batch</h3>
              <p className="text-base text-gray-500 mb-4">Online Photography Course</p>
              <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-black rounded-full" style={{ width: "0%" }} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {["Jan 15 - Mar 15, 2026", "Mon-Fri, 8:00 AM IST", "30 available"].map((label) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-3 text-sm text-gray-700">
                    {label}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-black">₹38,000</p>
                <Link href="/contact">
                  <button className="h-10 px-6 bg-black text-white font-medium rounded-xl text-sm hover:scale-[1.02] transition-all">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link href="/batches">
                <button className="h-10 px-6 font-medium text-sm rounded-xl border border-gray-200 text-black hover:bg-gray-50 transition-all">
                  View All Batches
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 md:py-28"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              What Our Students Say
            </h2>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-28 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
              Audience
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              Who Is This For
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {audience.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <h3 className="text-black text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <GalleryCTA />
    </div>
  );
}
