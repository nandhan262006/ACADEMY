"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function VideoPopup() {
  const [show, setShow] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (playing && videoRef.current) {
      videoRef.current.play();
    }
  }, [playing]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl">
        <button
          onClick={() => {
            setShow(false);
            setPlaying(false);
          }}
          className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors text-sm"
        >
          &#10005;
        </button>

        {!playing ? (
          <div className="w-[280px] sm:w-[360px] aspect-[9/16] relative">
            <Image
              src="/images/thumbnailpopup.png"
              alt="Video thumbnail"
              fill
              className="object-cover"
              sizes="360px"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/30 z-10">
              <button
                onClick={() => setPlaying(true)}
                className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-black ml-0.5" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="text-white text-sm font-medium">Click to watch</p>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            controls
            playsInline
            className="w-[280px] sm:w-[360px] aspect-[9/16]"
            src="/images/popupvideo.mp4"
          />
        )}
      </div>
    </div>
  );
}
