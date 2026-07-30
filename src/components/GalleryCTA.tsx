"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GalleryCTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-28 bg-black text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-2 md:mb-4"
        >
          Gallery
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6"
        >
          Our Academy Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          Take a peek inside our classrooms, live shoots, and student moments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/gallery">
            <button className="h-10 md:h-12 px-8 md:px-10 bg-white text-black font-medium rounded-xl text-sm md:text-base hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
              View Gallery
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
