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
      <div className="hidden md:flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
        {videos.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-[280px] snap-center">
            <TestimonialVideo src={src} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 md:hidden">
        {videos.map((src, i) => (
          <div key={i}>
            <TestimonialVideo src={src} />
          </div>
        ))}
      </div>
    </>
  );
}
