"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Playfair_Display, Dancing_Script } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const stats = [
  { value: 25, label: "Years of Experience", suffix: "+" },
  { value: 37, label: "Batches Completed", suffix: "+" },
  { value: 3000, label: "Students Trained", suffix: "+" },
  { value: 200, label: "Workshops", suffix: "+" },
];

function Stat({
  value,
  suffix,
  label,
  center,
}: {
  value: number;
  suffix?: string;
  label: string;
  center?: boolean;
}) {
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
    <div ref={ref} className={`min-w-0 ${center ? "text-center" : "text-left"}`}>
      <div className="text-2xl font-extrabold tabular-nums leading-none text-black sm:text-[1.75rem]">
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium leading-tight text-gray-600">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* ======================================== */}
      {/* MOBILE — Premium Editorial Single Column */}
      {/* ======================================== */}
      <section className="relative overflow-hidden bg-white px-6 pt-6 pb-0 md:hidden">
        {/* Content column */}
        <div className="relative z-10 w-full max-w-[360px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            Designed by Photriya Venky
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className={`${playfair.className} mt-3 max-w-[320px] text-[clamp(2rem,2.5vw+1.55rem,2.3rem)] font-semibold leading-[0.95] -tracking-[0.01em] text-black`}
          >
            Professional Photography &amp; Videography Course
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`${script.className} mt-1 text-[1.35rem] leading-tight text-gray-500`}
          >
            Master your creative vision
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.48 }}
            className="mt-2 max-w-[300px] text-[15px] leading-relaxed text-gray-600 line-clamp-3"
          >
            Master Photography, Videography, &amp; Business in One Comprehensive Course. An intensive 2-month program created for aspiring photographers, content creators, and creative professionals who want to build a strong foundation and gain practical industry-ready skills.
          </motion.p>

          {/* Stats — tiny single row above CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.58 }}
            className="mt-3 flex justify-between gap-1"
          >
            {stats.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.66 }}
            className="mt-3 flex flex-col items-start gap-2"
          >
            <Link href="/courses/online-photography-course">
              <button
                type="button"
                className="h-10 px-5 rounded-xl bg-black text-xs font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Learn Online
              </button>
            </Link>
            <Link href="/courses/offline-photography-course">
              <button
                type="button"
                className="h-10 px-5 rounded-xl border border-gray-200 bg-white text-xs font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Learn Offline
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Full-bleed image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.74 }}
          className="-mx-6 mt-8 overflow-hidden"
        >
          <div className="w-full">
            <Image
              src="/images/hero-2026.png"
              alt="Photography"
              width={1536}
              height={1024}
              className="h-auto w-full object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>
      </section>

      {/* ======================================== */}
      {/* TABLET — Centered content, image banner  */}
      {/* (also covers iPad Pro / small laptops)    */}
      {/* ======================================== */}
      <section className="relative hidden overflow-hidden bg-white md:block xl:hidden">
        <div className="container mx-auto px-6 pt-12 sm:pt-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mb-4 w-fit inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-gray-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            Designed by Photriya Venky
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className={`${playfair.className} mx-auto max-w-[580px] text-center text-[clamp(2.4rem,0.5vw+2.3rem,2.75rem)] font-semibold leading-[1.02] -tracking-[0.01em] text-black`}
          >
            Professional Photography &amp; Videography Course
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`${script.className} mt-2 text-center text-[1.5rem] leading-tight text-gray-500`}
          >
            Master your creative vision
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.48 }}
            className="mx-auto mt-4 max-w-[520px] text-center text-[15px] leading-relaxed text-gray-600"
          >
            Master Photography, Videography, &amp; Business in One Comprehensive Course. An intensive 2-month program created for aspiring photographers, content creators, and creative professionals who want to build a strong foundation and gain practical industry-ready skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.58 }}
            className="mx-auto mt-6 grid max-w-[560px] grid-cols-4 gap-3"
          >
            {stats.map((stat) => (
              <Stat key={stat.label} {...stat} center />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.66 }}
            className="mt-7 flex flex-row items-center justify-center gap-3"
          >
            <Link href="/courses/online-photography-course">
              <button
                type="button"
                className="h-11 px-7 rounded-xl bg-black text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Learn Online
              </button>
            </Link>
            <Link href="/courses/offline-photography-course">
              <button
                type="button"
                className="h-11 px-7 rounded-xl border border-gray-200 bg-white text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Learn Offline
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.74 }}
          className="relative mt-10 h-[clamp(300px,42vw,520px)] overflow-hidden"
        >
          <Image
            src="/images/hero-2026.png"
            alt="Photography"
            fill
            priority
            className="object-contain"
            sizes="100vw"
          />
        </motion.div>
      </section>

      {/* ======================================== */}
      {/* DESKTOP — Side image, left text column   */}
      {/* ======================================== */}
      <section className="relative hidden overflow-hidden bg-white xl:block xl:min-h-[max(calc(100svh_-_72px),clamp(620px,46vw,900px))]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute inset-y-0 left-[46%] right-0 hidden lg:block"
        >
          <Image
            src="/images/hero-2026.png"
            alt="Photography"
            fill
            className="object-contain"
            priority
            sizes="54vw"
          />
        </motion.div>

        <div className="container relative z-10 mx-auto px-gutter">
          <div className="flex flex-col lg:min-h-[max(calc(100svh_-_72px),clamp(620px,46vw,900px))] lg:flex-row lg:items-center">
            <div className="w-full max-w-2xl py-6 pb-10 sm:py-8 lg:max-w-[40%] lg:py-0 xl:max-w-[42%]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 sm:text-sm lg:mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                Designed by Photriya Venky
              </motion.div>

              <motion.h1 className="mb-3 text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-black sm:mb-4">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block"
                >
                  Professional
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="block"
                >
                  Photography &amp;
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block"
                >
                  Videography Course
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-5 max-w-xl text-body leading-relaxed text-gray-600 lg:mb-6"
              >
                Master Photography, Videography, &amp; Business in One Comprehensive Course. An intensive 2-month program created for aspiring photographers, content creators, and creative professionals who want to build a strong foundation and gain practical industry-ready skills.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-6 hidden max-w-xl text-body leading-relaxed text-gray-500 lg:mb-8 lg:block"
              >
                From understanding your camera to mastering editing techniques and learning how to market yourself as a professional, this course covers every essential aspect required to begin your creative journey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <Link href="/courses/online-photography-course" className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="h-12 w-full rounded-xl bg-black px-6 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:w-auto sm:px-8 sm:text-base"
                  >
                    Learn Online
                  </button>
                </Link>
                <Link href="/courses/offline-photography-course" className="w-full sm:w-auto">
                  <button
                    type="button"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white px-6 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:w-auto sm:px-8 sm:text-base"
                  >
                    Learn Offline
                  </button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4 lg:flex lg:items-stretch lg:justify-between lg:gap-3"
              >
                {stats.map((stat) => (
                  <Stat key={stat.label} {...stat} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
