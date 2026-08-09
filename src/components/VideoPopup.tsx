"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const DISMISS_KEY = "photriya-video-popup-dismissed";

export default function VideoPopup() {
  const [show, setShow] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [closing, setClosing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const dismiss = useCallback(() => {
    setShow(false);
    setPlaying(false);
    setClosing(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore storage errors
    }
  }, []);

  const fadeOut = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      dismiss();
    }, 400);
  }, [dismiss]);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      // ignore storage errors
    }

    const timer = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [show, dismiss]);

  useEffect(() => {
    if (playing && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [playing]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label="Promotional video"
    >
      <div
        className="relative mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors text-sm"
          aria-label="Close"
        >
          &#10005;
        </button>

        {!playing ? (
          <div className="w-[clamp(280px,50vw,360px)] aspect-[9/16] relative">
            <Image
              src="/images/thumbnailpopup.png"
              alt="Video thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 280px, 360px"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/30 z-10">
              <button
                onClick={() => setPlaying(true)}
                className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Play video"
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
            onEnded={fadeOut}
            className="w-[clamp(280px,50vw,360px)] aspect-[9/16]"
            src="/images/popupvideo.mp4"
          />
        )}
      </div>
    </div>
  );
}
