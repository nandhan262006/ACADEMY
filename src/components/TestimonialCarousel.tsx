"use client";

import { useRef, useState } from "react";
import TestimonialVideo from "./TestimonialVideo";

const videos = [
  "/images/testimonial1.mp4",
  "/images/testimonial2.mp4",
  "/images/testimonial3.mp4",
  "/images/testimonial4.mp4",
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);

  const prev = () => setCurrent((c) => (c === 0 ? videos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === videos.length - 1 ? 0 : c + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const getPosition = (index: number) => {
    const diff = index - current;
    const angle = diff * 30;
    const translateX = diff * 200;
    const scale = diff === 0 ? 1 : 0.75;
    const opacity = diff === 0 ? 1 : 0.4;
    const zIndex = diff === 0 ? 10 : 0;

    return {
      transform: `perspective(1000px) rotateY(${angle}deg) translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div
        className="relative w-full max-w-[300px] mx-auto overflow-visible touch-pan-y select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full aspect-[9/16]">
          {videos.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 w-full h-full transition-all duration-500 ease-out pointer-events-none"
              style={{
                ...getPosition(i),
                pointerEvents: i === current ? "auto" : "none",
              }}
            >
              <TestimonialVideo src={src} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={prev}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-black w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
