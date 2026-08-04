"use client";

import { useRef, useState } from "react";

export default function TestimonialVideo({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = (e: React.PointerEvent | React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    setPlaying(true);
  };

  return (
    <div className="aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden border border-gray-100 relative">
      <video
        ref={videoRef}
        src={src}
        controls={playing}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onClick={(e) => e.stopPropagation()}
      />
      {!playing && (
        <div
          onPointerDown={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group cursor-pointer z-10"
        >
          <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-black ml-0.5" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
