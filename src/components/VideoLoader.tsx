"use client";

import { useEffect, useState, useRef } from "react";

interface VideoLoaderProps {
  onComplete: () => void;
}

export default function VideoLoader({ onComplete }: VideoLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if the video has already been played during this browser session
    const hasPlayed = sessionStorage.getItem("joe_intro_played");
    if (!hasPlayed) {
      setIsVisible(true);
      // Lock scroll while intro video is playing
      document.body.style.overflow = "hidden";
    } else {
      onComplete();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const handleDismiss = () => {
    sessionStorage.setItem("joe_intro_played", "true");
    setIsVisible(false);
    document.body.style.overflow = "";
    onComplete();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-coffee-black flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/media/load_video.mp4"
        autoPlay
        playsInline
        muted={isMuted}
        onEnded={handleDismiss}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Control Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-coffee-black/80 via-transparent to-coffee-black/60 flex flex-col justify-between p-6 sm:p-10 pointer-events-none">
        
        {/* Top Controls: Unmute / Mute */}
        <div className="flex justify-end pointer-events-auto">
          <button
            onClick={toggleMute}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-light-cream/95 text-coffee-black border-2 border-coffee-black hover:bg-retro-yellow active:translate-y-0.5 transition-all shadow-md cursor-pointer"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              // Muted Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
            ) : (
              // Unmuted Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
            )}
          </button>
        </div>

        {/* Bottom Section: Branding & Skip Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pointer-events-auto w-full">
          {/* Logo overlay */}
          <div className="flex items-center gap-3 bg-coffee-black/60 p-4 rounded-xl border border-light-cream/10 backdrop-blur-sm">
            <img src="/brand/logo.png" alt="Joe of the Cup logo" className="h-10 w-auto object-contain" />
            <div>
              <h3 className="font-display text-lg font-black text-white leading-none uppercase">Joe of the Cup</h3>
              <p className="text-xs font-bold text-retro-yellow uppercase tracking-widest mt-1">Established St. Charles, MO</p>
            </div>
          </div>

          {/* Skip button */}
          <button
            onClick={handleDismiss}
            className="flex items-center justify-center rounded-xl bg-light-cream/95 text-coffee-black hover:bg-retro-yellow font-display text-base font-black uppercase tracking-wider px-8 py-3.5 border-2 border-coffee-black retro-shadow-sm cursor-pointer active:translate-y-0.5 transition-all"
          >
            Skip Intro
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="ml-2 h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
