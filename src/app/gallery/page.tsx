"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const images = Array.from(
    { length: 27 },
    (_, i) => `/images/gallery/gallery${i + 1}.jpg`,
  );

  return (
    <div className="flex flex-col pt-[72px]">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-4"
            >
              Gallery
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-black tracking-tight mb-4"
            >
              Our Academy
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 max-w-lg mx-auto"
            >
              Glimpses from our academy batches and events
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {images.map((src, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelected(src)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={src}
                    alt={`Gallery photo ${i + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-sm mb-4">
              Want to see more? Visit our academy or contact us.
            </p>
            <Link href="/contact">
              <button className="h-11 px-8 bg-black text-white font-medium rounded-xl hover:scale-[1.02] transition-all">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white text-sm hover:underline"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selected}
                alt="Gallery photo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
