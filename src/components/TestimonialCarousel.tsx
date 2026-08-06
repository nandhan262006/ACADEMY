"use client";

import TestimonialVideo from "./TestimonialVideo";

const videos = [
  "/images/testimonial1.mp4",
  "/images/testimonial2.mp4",
  "/images/testimonial3.mp4",
  "/images/testimonial4.mp4",
];

export default function TestimonialCarousel() {
  return (
    <>
      {/* Phone: 2-col grid */}
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {videos.map((src, i) => (
          <div key={i} className="min-w-0">
            <TestimonialVideo src={src} />
          </div>
        ))}
      </div>

      {/* Tablet+: horizontal snap scroll */}
      <div className="-mx-4 hidden gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-none sm:flex md:gap-6 md:mx-0 md:px-0">
        {videos.map((src, i) => (
          <div
            key={i}
            className="w-[min(240px,70vw)] shrink-0 snap-center md:w-[260px] lg:w-[280px]"
          >
            <TestimonialVideo src={src} />
          </div>
        ))}
      </div>
    </>
  );
}
