"use client";

import { useEffect, useRef, useState } from "react";

export default function TestimonialVideo({
  src,
  poster,
  label,
  priority = false,
}: {
  src: string;
  poster: string;
  label: number;
  priority?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (shouldLoad) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const handlePlay = (e: React.PointerEvent | React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setShouldLoad(true);
    const play = () => {
      videoRef.current?.play().catch(() => {});
      setPlaying(true);
    };
    if (videoRef.current?.readyState && videoRef.current.readyState >= 2) {
      play();
    } else {
      requestAnimationFrame(() => play());
    }
  };

  return (
    <div
      ref={containerRef}
      className="aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden border border-gray-100 relative"
    >
      {playing ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          playsInline
          autoPlay
          className="w-full h-full object-cover"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <button
          type="button"
          onPointerDown={handlePlay}
          onClick={handlePlay}
          aria-label={`Play testimonial ${label}`}
          className="absolute inset-0 w-full h-full group cursor-pointer z-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={`Student testimonial ${label}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading={priority ? "eager" : "lazy"}
          />
          <span className="absolute top-2.5 left-2.5 min-w-7 h-7 px-2 rounded-full bg-black/60 text-white text-xs font-bold flex items-center justify-center backdrop-blur-sm">
            {label}
          </span>
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
            <span className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-black ml-0.5"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
