"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

const stats = [
  { value: 25, label: "Years of Experience", suffix: "+" },
  { value: 37, label: "Batches Completed", suffix: "+" },
  { value: 3000, label: "Students Trained", suffix: "+" },
  { value: 200, label: "Workshops", suffix: "+" },
];

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return controls.stop;
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="flex-1 text-center">
      <div className="text-lg md:text-3xl font-bold text-black">
        {display}
        {suffix}
      </div>
      <div className="text-[10px] md:text-xs text-gray-500 mt-0.5">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-[72px] min-h-screen md:min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:hidden relative h-[35vh]"
      >
        <Image
          src="/images/hero.png"
          alt="Photography"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="hidden md:block absolute right-0 top-0 w-[45vw] h-full"
      >
        <Image
          src="/images/hero.png"
          alt="Photography"
          fill
          className="object-cover"
          priority
          sizes="45vw"
        />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-72px)] items-center">
          <div className="flex-1 py-6 md:py-0 md:max-w-[55%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-xs md:text-sm text-gray-600 mb-3 md:mb-6"
            >
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              Designed by Photriya Venky
            </motion.div>

            <motion.h1 className="text-[2rem] sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-black mb-2 md:mb-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block"
              >
                Professional
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="block"
              >
                Photography &amp;
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block"
              >
                Videography Course
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xs md:text-base text-gray-600 max-w-xl mb-3 md:mb-6 leading-relaxed"
            >
              Master Photography, Videography, &amp; Business in One Comprehensive Course. An intensive 2-month program created for aspiring photographers, content creators, and creative professionals who want to build a strong foundation and gain practical industry-ready skills.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="hidden md:block text-xs md:text-sm text-gray-500 max-w-xl mb-6 md:mb-8 leading-relaxed"
            >
              From understanding your camera to mastering editing techniques and learning how to market yourself as a professional, this course covers every essential aspect required to begin your creative journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex items-stretch justify-between gap-2 md:gap-3 mt-4 md:mt-8 md:max-w-xl"
            >
              {stats.map((stat) => (
                <Stat key={stat.label} {...stat} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-2 md:gap-4 mt-4 md:mt-8"
            >
              <Link href="/courses/online-photography-course">
                <button className="w-full sm:w-auto h-10 md:h-12 px-5 md:px-8 bg-black text-white font-medium rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-xs md:text-base">
                  Learn Online
                </button>
              </Link>
              <Link href="/courses/offline-photography-course">
                <button className="w-full sm:w-auto h-10 md:h-12 px-5 md:px-8 bg-white text-black font-medium rounded-xl border border-gray-200 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-xs md:text-base">
                  Learn Offline
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
