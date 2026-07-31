// src/components/HeroSection.jsx
import  Typewriter  from "../common/Typewriter";
import VideoBackground from "./VideoBackground";

export default function HeroSection() {
  const whatsappNumber = "9478070741"; 
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in partnering with your STEM education programs."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-start px-4 sm:px-12 lg:px-20 text-white overflow-hidden bg-transparent font-sans">
      {/* Video Background with Overlay */}
      <VideoBackground videoSrc="/Lightfall.webm" />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-slate-950/50 z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-3xl space-y-6 pt-12 w-full">
        <div className="inline-block">
          {/* Applies JetBrains Mono */}
          <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-mono tracking-wide text-slate-200">
            Creating Future Innovators
          </span>
        </div>

        {/* Applies Lora */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight text-white min-h-[2.4em] sm:min-h-[auto]">
          <Typewriter text="Empowering the Next Generation of Innovators" />
        </h1>

        {/* Applies DM Sans */}
        <p className="text-base sm:text-lg lg:text-xl font-sans text-slate-200/90 leading-relaxed max-w-2xl">
          Hands-on learning in AI, Robotics, IoT, Cyber Security, and Automation. Empowering every student to innovate with confidence.
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-3 sm:gap-4 pt-4 font-sans font-semibold">
          <a
            href="#programs"
            className="w-full sm:w-auto px-3 sm:px-8 py-3 bg-accent hover:opacity-90 text-white text-center rounded-2xl shadow-lg transition text-xs sm:text-base flex items-center justify-center active:scale-95"
          >
            Explore Programs
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-3 sm:px-8 py-3 bg-white hover:bg-slate-100 text-primary text-center rounded-2xl shadow-md transition text-xs sm:text-base flex items-center justify-center active:scale-95"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}