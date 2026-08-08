"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Image from "next/image";
import VideoPopup from "@/components/VideoPopup";
import { homeFaqs } from "@/lib/home-faqs";

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
  return (
    <div className="flex flex-col">
      <Hero />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="py-14 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight text-center mb-8">
            The Best Photography Academy in Hyderabad &amp; Telangana
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-600">
            <p>
              Photriya Academy is one of the best photography academies in
              Hyderabad and across Telangana, offering professional photography
              and videography courses to students from all over the state —
              including Secunderabad, Warangal, Karimnagar, Nizamabad, and every
              district. Whether you&apos;re a beginner looking for the best
              photography course in Telangana or a working professional seeking
              advanced training, our 2-month program covers camera techniques,
              lighting, composition, editing, and business skills.
            </p>
            <p>
              Our classroom is located in Madhapur, Hyderabad, and our live
              online classes bring the same industry-expert training to
              learners anywhere in Telangana and India. With 25+ years of
              teaching experience and 3,000+ students trained, Photriya Academy
              is trusted as a top photography institute in Telangana.
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
        className="py-14 md:py-28 bg-gray-50"
      >
        <div className="container mx-auto px-4 text-center">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              Course Duration
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
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

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 md:py-28 bg-black text-white"
      >
        <div className="container mx-auto px-4 text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-2 md:mb-4">
            Academy Gallery
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Glimpses from our academy batches and events
          </p>
        </div>

        <div className="container mx-auto px-4">
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
        className="py-14 md:py-28 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-3 md:mt-4 max-w-xl mx-auto">
              Everything you need to know about learning photography at Photriya Academy
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-3">
            {homeFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-gray-100 hover:border-black/20 transition-colors"
              >
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-sm md:text-base font-semibold text-black pr-4">
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
