"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const images = [
  { src: "/images/gallery/gallery1.jpg", width: 1200, height: 598 },
  { src: "/images/gallery/gallery2.jpg", width: 1200, height: 703 },
  { src: "/images/gallery/gallery3.jpg", width: 1200, height: 660 },
  { src: "/images/gallery/gallery4.jpg", width: 1200, height: 715 },
  { src: "/images/gallery/gallery5.jpg", width: 1200, height: 706 },
  { src: "/images/gallery/gallery6.jpg", width: 1200, height: 729 },
  { src: "/images/gallery/gallery7.jpg", width: 1200, height: 802 },
  { src: "/images/gallery/gallery8.jpg", width: 1200, height: 583 },
  { src: "/images/gallery/gallery9.jpg", width: 1200, height: 675 },
  { src: "/images/gallery/gallery10.jpg", width: 1200, height: 800 },
  { src: "/images/gallery/gallery11.jpg", width: 1200, height: 821 },
  { src: "/images/gallery/gallery12.jpg", width: 1200, height: 780 },
  { src: "/images/gallery/gallery13.jpg", width: 1200, height: 800 },
  { src: "/images/gallery/gallery14.jpg", width: 1200, height: 800 },
  { src: "/images/gallery/gallery15.jpg", width: 1200, height: 800 },
  { src: "/images/gallery/gallery16.jpg", width: 1200, height: 800 },
  { src: "/images/gallery/gallery17.jpg", width: 1080, height: 907 },
  { src: "/images/gallery/gallery18.jpg", width: 1200, height: 624 },
  { src: "/images/gallery/gallery19.jpg", width: 1200, height: 639 },
  { src: "/images/gallery/gallery20.jpg", width: 1200, height: 573 },
  { src: "/images/gallery/gallery21.jpg", width: 1200, height: 645 },
  { src: "/images/gallery/gallery22.jpg", width: 1200, height: 777 },
  { src: "/images/gallery/gallery23.jpg", width: 1200, height: 606 },
  { src: "/images/gallery/gallery24.jpg", width: 1200, height: 664 },
  { src: "/images/gallery/gallery25.jpg", width: 1200, height: 633 },
  { src: "/images/gallery/gallery26.jpg", width: 1200, height: 628 },
  { src: "/images/gallery/gallery27.jpg", width: 1200, height: 661 },
];

export default function GalleryContent() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col pt-[72px]">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
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
        </div>
      </section>

      <div className="columns-2 sm:columns-3 lg:columns-4 gap-0">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setSelected(img.src)}
            className="relative block w-full overflow-hidden bg-gray-100 cursor-pointer group break-inside-avoid"
            aria-label={`View gallery photo ${i + 1}`}
          >
            <Image
              src={img.src}
              alt={`Gallery photo ${i + 1}`}
              width={img.width}
              height={img.height}
              sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="py-16 md:py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Want to see more? Visit our academy or contact us.
          </p>
          <Link href="/contact">
            <button className="h-11 px-8 bg-black text-white font-medium rounded-xl hover:scale-[1.02] transition-all">
              Contact Us
            </button>
          </Link>
        </div>
      </motion.section>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
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
