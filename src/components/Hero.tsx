"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-[72px] md:min-h-[70vh] bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:hidden relative h-[45vh]"
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
        <div className="flex flex-col md:flex-row md:min-h-screen items-center">
          <div className="flex-1 py-8 md:py-0 md:max-w-[55%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-xs md:text-sm text-gray-600 mb-4 md:mb-6"
            >
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              Welcome to Photriya Academy
            </motion.div>

            <motion.h1 className="text-[2.75rem] sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-black mb-4 md:mb-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block"
              >
                Photography
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block"
              >
                Mastered.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base md:text-lg text-gray-600 max-w-xl mb-6 md:mb-8 leading-relaxed"
            >
              Learn photography from industry experts with live online classes.
              Master DSLR, composition, lighting, editing, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Link href="/courses/online-photography-course">
                <button className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-8 bg-black text-white font-medium rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-sm md:text-base">
                  Explore Courses
                </button>
              </Link>
              <Link href="/batches">
                <button className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-8 bg-white text-black font-medium rounded-xl border border-gray-200 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-sm md:text-base">
                  Apply Now
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="md:hidden grid grid-cols-2 gap-3 mt-8"
            >
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-black">500+</div>
                <div className="text-xs text-gray-500 mt-0.5">Students Trained</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-black">50+</div>
                <div className="text-xs text-gray-500 mt-0.5">Batches Completed</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-black">18</div>
                <div className="text-xs text-gray-500 mt-0.5">Course Topics</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-black">8</div>
                <div className="text-xs text-gray-500 mt-0.5">Weeks Duration</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="hidden md:block container mx-auto px-4 pb-16"
      >
        <div className="grid grid-cols-4 gap-6 max-w-xl border-t border-gray-100 pt-10">
          <div>
            <div className="text-3xl font-bold text-black">500+</div>
            <div className="text-xs text-gray-500 mt-1">Students Trained</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black">50+</div>
            <div className="text-xs text-gray-500 mt-1">Batches Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black">18</div>
            <div className="text-xs text-gray-500 mt-1">Course Topics</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-black">8</div>
            <div className="text-xs text-gray-500 mt-1">Weeks Duration</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
