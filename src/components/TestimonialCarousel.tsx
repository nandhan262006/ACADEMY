"use client";

import TestimonialVideo from "./TestimonialVideo";

const testimonials = [
  { src: "/images/testimonial1.mp4", poster: "/images/testimonial-posters/testimonial1.jpg" },
  { src: "/images/testimonial2.mp4", poster: "/images/testimonial-posters/testimonial2.jpg" },
  { src: "/images/testimonial3.mp4", poster: "/images/testimonial-posters/testimonial3.jpg" },
  { src: "/images/testimonial4.mp4", poster: "/images/testimonial-posters/testimonial4.jpg" },
  { src: "/images/testimonial5.mp4", poster: "/images/testimonial-posters/testimonial5.jpg" },
  { src: "/images/testimonial6.mp4", poster: "/images/testimonial-posters/testimonial6.jpg" },
  { src: "/images/testimonial7.mp4", poster: "/images/testimonial-posters/testimonial7.jpg" },
  { src: "/images/testimonial8.mp4", poster: "/images/testimonial-posters/testimonial8.jpg" },
  { src: "/images/testimonial9.mp4", poster: "/images/testimonial-posters/testimonial9.jpg" },
  { src: "/images/testimonial10.mp4", poster: "/images/testimonial-posters/testimonial10.jpg" },
];

export default function TestimonialCarousel() {
  return (
    <>
      {/* Phone: 2-col grid */}
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {testimonials.map((t, i) => (
          <div key={t.src} className="min-w-0">
            <TestimonialVideo
              src={t.src}
              poster={t.poster}
              label={i + 1}
              priority={i < 2}
            />
          </div>
        ))}
      </div>

      {/* Tablet+: horizontal snap scroll */}
      <div className="-mx-gutter hidden gap-4 overflow-x-auto px-gutter pb-4 snap-x snap-mandatory scrollbar-none sm:flex md:gap-6 md:mx-0 md:px-0">
        {testimonials.map((t, i) => (
          <div
            key={t.src}
            className="w-[clamp(12rem,10rem+10vw,17.5rem)] shrink-0 snap-center"
          >
            <TestimonialVideo
              src={t.src}
              poster={t.poster}
              label={i + 1}
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </>
  );
}
