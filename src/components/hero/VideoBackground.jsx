import React from "react";

export default function VideoBackground({ videoSrc = "", poster }) {
  if (!videoSrc) return null;

  const getVideoType = (src) => {
    if (src.endsWith(".webm")) return "video/webm";
    if (src.endsWith(".mp4")) return "video/mp4";
    if (src.endsWith(".ogg")) return "video/ogg";
    return undefined;
  };

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
        className="h-full w-full object-cover"
      >
        <source src={videoSrc} type={getVideoType(videoSrc)} />
      </video>

      <div className="absolute inset-0 bg-[#4381b0]/50" />
    </div>
  );
}