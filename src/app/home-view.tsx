"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Image from "next/image";
import VideoPopup from "@/components/VideoPopup";
import { homeFaqs } from "@/lib/home-faqs";
import { useCourseDetails } from "@/lib/use-course-details";

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

export default function HomeView() {
  const courses = useCourseDetails();
  const online = courses?.find((c) => c.mode === "online");

  return (
    <div className="flex flex-col">
      <Hero />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="py-section-lg bg-white"
      >
        <div className="container mx-auto px-gutter max-w-4xl">
          <h2 className="text-h1 font-bold text-black tracking-tight text-center mb-8">
            The No. 1 Photography Academy in Telangana &amp; Andhra Pradesh
          </h2>
          <div className="space-y-4 text-body leading-relaxed text-gray-600">
            <p>
              Photriya Academy is one of the leading photography and videography
              academies in the Telugu states of Telangana and Andhra Pradesh,
              located in Hyderabad. We offer professional, industry-focused
              photography and videography training for aspiring photographers,
              filmmakers, and working professionals from across the Telugu
              states.
            </p>
            <p>
              With practical training covering camera techniques, lighting,
              composition, photography, videography, editing, and photography
              business skills, Photriya Academy is designed to help students
              turn their passion into a professional career.
            </p>
            <p>
              Located in Madhapur, Hyderabad, our academy also offers live
              online classes, making professional training accessible to
              students across Telangana, Andhra Pradesh, and beyond. With 25+
              years of teaching experience and 3,000+ students trained, Photriya
              Academy aims to be the top photography academy for Telugu-speaking
              students.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-section-xl bg-gray-50"
      >
        <div className="container mx-auto px-gutter">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
            <h2 className="text-h1 font-bold text-black tracking-tight">
              Course Duration
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(0.75rem,1vw+0.5rem,1.5rem)] max-w-4xl mx-auto">
            {[
              { label: "Duration", value: online?.duration ?? "2 Months" },
              { label: "Schedule", value: online?.schedule ?? "Monday – Friday" },
              { label: "Timings", value: online?.timings ?? "8:00 AM – 10:30 AM (IST)" },
              { label: "Batch Starts From", value: online?.batchStartsFrom ?? "15 January 2026" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-gray-100 p-[clamp(1.25rem,1.5vw+0.8rem,1.75rem)] text-center"
              >
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  {item.label}
                </p>
                <p className="text-body-lg font-bold text-black leading-snug">
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
        className="py-section-xl bg-black text-white"
      >
        <div className="container mx-auto px-gutter text-center">
          <h2 className="text-h1 font-bold text-white tracking-tight mb-3 md:mb-4">
            Course Contents
          </h2>
          <p className="text-body text-gray-400 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Whether you choose to learn Online or Offline, you&apos;ll follow the same comprehensive curriculum designed to help you confidently take on professional assignments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              href="/courses/online-photography-course"
              className="w-full sm:w-auto h-[clamp(3rem,4vw+2rem,3.5rem)] px-[clamp(2rem,1.5vw+1.5rem,2.5rem)] bg-white text-black font-medium rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex items-center justify-center text-body"
            >
              Online Course
            </Link>
            <Link
              href="/courses/offline-photography-course"
              className="w-full sm:w-auto h-[clamp(3rem,4vw+2rem,3.5rem)] px-[clamp(2rem,1.5vw+1.5rem,2.5rem)] bg-transparent text-white font-medium rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center text-body"
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
        className="py-section-xl"
      >
        <div className="container mx-auto px-gutter">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
            <h2 className="text-h1 font-bold text-black tracking-tight">
              Learning Outcomes
            </h2>
            <p className="text-body text-gray-500 mt-3 md:mt-4 max-w-xl mx-auto">
              After completing this course, you will be able to:
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(0.75rem,1vw+0.5rem,1rem)] max-w-4xl mx-auto"
          >
            {learningOutcomes.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-start gap-3 p-[clamp(1rem,0.8vw+0.8rem,1.25rem)] rounded-xl border border-gray-100 hover:border-black/20 hover:shadow-sm transition-all"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  &#10003;
                </span>
                <span className="text-body text-gray-700 leading-relaxed">
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
        className="py-section-xl"
      >
        <div className="container mx-auto px-gutter">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
            <h2 className="text-h1 font-bold text-black tracking-tight">
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
        className="py-section-xl bg-gray-50"
      >
        <div className="container mx-auto px-gutter">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
            <h2 className="text-h1 font-bold text-black tracking-tight">
              Who Is This For
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(1rem,1.5vw+0.5rem,1.5rem)] max-w-4xl mx-auto">
            {audience.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-[clamp(1.25rem,1vw+1rem,1.5rem)]"
              >
                <h3 className="text-black text-h3 font-semibold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-gray-600 text-body-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-section-xl bg-black text-white"
      >
        <div className="container mx-auto px-gutter text-center mb-8 md:mb-12">
          <h2 className="text-h1 font-bold text-white tracking-tight mb-2 md:mb-4">
            Academy Gallery
          </h2>
          <p className="text-body text-gray-400 max-w-xl mx-auto">
            Glimpses from our academy batches and events
          </p>
        </div>

        <div className="container mx-auto px-gutter">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-2">
            {[
              "/images/gallery/gallery1.jpg",
              "/images/gallery/gallery2.jpg",
              "/images/gallery/gallery3.jpg",
              "/images/gallery/gallery4.jpg",
              "/images/gallery/gallery5.jpg",
              "/images/gallery/gallery6.jpg",
              "/images/gallery/gallery7.jpg",
              "/images/gallery/gallery8.jpg",
              "/images/gallery/gallery9.jpg",
              "/images/gallery/gallery10.jpg",
              "/images/gallery/gallery11.jpg",
              "/images/gallery/gallery12.jpg",
              "/images/gallery/gallery13.jpg",
              "/images/gallery/gallery14.jpg",
              "/images/gallery/gallery15.jpg",
              "/images/gallery/gallery16.jpg",
              "/images/gallery/gallery17.jpg",
              "/images/gallery/gallery18.jpg",
              "/images/gallery/gallery19.jpg",
              "/images/gallery/gallery20.jpg",
              "/images/gallery/gallery21.jpg",
              "/images/gallery/gallery22.jpg",
              "/images/gallery/gallery23.jpg",
              "/images/gallery/gallery24.jpg",
              "/images/gallery/gallery25.jpg",
              "/images/gallery/gallery26.jpg",
              "/images/gallery/gallery27.jpg",
            ].map((src, i) => (
              <div key={src} className="break-inside-avoid mb-2 overflow-hidden rounded-xl bg-gray-900">
                <Image
                  src={src}
                  alt={`Gallery photo ${i + 1}`}
                  width={600}
                  height={400}
                  sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-section-xl bg-gray-50"
      >
        <div className="container mx-auto px-gutter">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
            <h2 className="text-h1 font-bold text-black tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-body text-gray-500 mt-3 md:mt-4 max-w-xl mx-auto">
              Everything you need to know about learning photography at Photriya Academy
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-3">
            {homeFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-gray-100 hover:border-black/20 transition-colors"
              >
                <summary className="flex items-center justify-between p-[clamp(1rem,0.5vw+0.9rem,1.25rem)] cursor-pointer list-none">
                  <span className="text-body font-semibold text-black pr-4">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-open:bg-black group-open:text-white transition-colors">
                    <svg className="w-3 h-3 group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg className="w-3 h-3 hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </motion.section>

      <VideoPopup />
    </div>
  );
}
