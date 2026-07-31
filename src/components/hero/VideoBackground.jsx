export default function VideoBackground({ videoSrc = "", poster }) {
  if (!videoSrc) return null;

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
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Transparent overlay using Tailwind syntax: bg-[#4381b0]/50 */}
      <div className="absolute inset-0 bg-[#4381b0]/50" />
    </div>
  );
}