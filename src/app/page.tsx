"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import GalleryCTA from "@/components/GalleryCTA";

const learningOutcomes = [
  "Confidently operate DSLR and Mirrorless cameras",
  "Capture professional-quality photos and videos",
  "Edit photographs using Lightroom and AI tools",
  "Create engaging reels and short-form videos",
  "Understand professional lighting and composition",
  "Build an efficient editing workflow",
  "Market yourself effectively on social media",
  "Handle small to medium-scale photography and videography assignments independently",
];

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

const teachingPoints = [
  { title: "Multiple Perspectives", desc: "Multi-camera streams let you see the classroom, the camera viewfinder, and the editing screen simultaneously.", image: "/images/multiple-perspectives.jpg" },
  { title: "Live Editing", desc: "Watch every retouch and adjustment in real time on your own screen — no squinting at a projector.", image: "/images/live-editing.jpg" },
  { title: "Closer Look", desc: "See exactly how the pros handle gear. Our close-up shots reveal every dial, button, and setting.", image: "/images/closer-look.jpg" },
];

const audience = [
  { title: "Photography Enthusiasts", desc: "Many photography enthusiasts are requesting classes who are unable to attend offline classes." },
  { title: "Remote Learners", desc: "Photography lovers who reside far from Hyderabad in other states." },
  { title: "Homemakers", desc: "Homemakers who have a lot of interest in photography." },
  { title: "Working Professionals", desc: "Software engineers who want to explore their hobby." },
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
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="py-14 md:py-20 bg-black text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-3 md:mb-4">
            Learning Modes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 md:mb-4">
            Online &amp; Offline
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Whether you choose to learn Online or Offline, you&apos;ll follow the same comprehensive curriculum designed to help you confidently take on professional assignments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              href="/courses/online-photography-course"
              className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 bg-white text-black font-medium rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex items-center justify-center text-sm md:text-base"
            >
              Online Course
            </Link>
            <Link
              href="/courses/offline-photography-course"
              className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 bg-transparent text-white font-medium rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center text-sm md:text-base"
            >
              Offline Course
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-14 md:py-28 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
            <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-3 md:mb-4">
              Course Details
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              Course Duration
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { label: "Duration", value: "2 Months" },
              { label: "Schedule", value: "Monday – Friday" },
              { label: "Timings", value: "8:00 AM – 10:30 AM (IST)" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 text-center"
              >
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  {item.label}
                </p>
                <p className="text-lg md:text-xl font-bold text-black">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-14 md:py-28"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
            <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-3 md:mb-4">
              What You&apos;ll Learn
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              Learning Outcomes
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-3 md:mt-4 max-w-xl mx-auto">
              After completing this course, you will be able to:
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto"
          >
            {learningOutcomes.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-start gap-3 p-4 md:p-5 rounded-xl border border-gray-100 hover:border-black/20 hover:shadow-sm transition-all"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  &#10003;
                </span>
                <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {item}
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
        className="py-12 md:py-28 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-6 md:mb-16">
            <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-2 md:mb-4">
              Curriculum
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              Course Contents
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3 max-w-5xl mx-auto"
          >
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-center gap-2.5 p-2 md:p-4 rounded-xl bg-white border border-gray-100 hover:border-black/20 hover:shadow-md transition-all group"
              >
                <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-black text-white rounded-lg flex items-center justify-center text-[10px] md:text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[12px] md:text-sm font-medium text-gray-700 group-hover:text-black transition-colors leading-tight">
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
        className="py-14 md:py-28"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
            <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-2 md:mb-4">
              Approach
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              How We Teach Online
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid gap-4 md:gap-8 max-w-5xl mx-auto md:grid-cols-3">
            {teachingPoints.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="bg-gray-50 rounded-2xl overflow-hidden grid grid-cols-1"
              >
                <div className="aspect-[4/3] relative shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 100px, 384px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-4 md:p-5">
                  <h3 className="text-black text-base md:text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
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
        className="py-14 md:py-28"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
            <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-2 md:mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
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
        className="py-16 md:py-28 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
            <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-2 md:mb-4">
              Audience
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              Who Is This For
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {audience.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 md:p-6"
              >
                <h3 className="text-black text-base md:text-lg font-semibold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <GalleryCTA />
    </div>
  );
}
