import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "../common/Typewriter";
import Lightfallbg from "../common/Lightfallbg";
export default function HeroSection() {
  const whatsappNumber = "9478070741";
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in partnering with your STEM education programs."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-start px-4 sm:px-12 lg:px-20 text-white overflow-hidden bg-transparent font-sans">
      {/* Lightfall Shader Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Lightfallbg/>
      </div>

      {/* Dark overlay for extra text readability */}
      <div className="absolute inset-0 bg-slate-950/40 z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-3xl space-y-6 pt-12 w-full">
        <div className="inline-block">
          <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-mono tracking-wide text-slate-200">
            Creating Future Innovators
          </span>
        </div>

        <h1 className="font-serif text-4xl font-normal leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl min-h-[2.4em] sm:min-h-[auto] bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent drop-shadow-sm">
          <Typewriter text="Empowering the Next Generation of Innovators" />
        </h1>

        <p className="font-sans text-base sm:text-lg lg:text-xl font-normal leading-relaxed tracking-wide text-slate-200/90 max-w-2xl mt-6">
          Hands-on learning in AI, Robotics, IoT, Cyber Security, and Automation. Empowering every student to innovate with confidence.
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-3 sm:gap-4 pt-4 font-sans font-semibold">
          <Link
            to="/services"
            className="w-full sm:w-auto px-3 sm:px-8 py-3 bg-[var(--color-primary,#0a61af)] hover:opacity-90 text-white text-center rounded-2xl shadow-lg transition text-xs sm:text-base flex items-center justify-center active:scale-95"
          >
            Explore Programs
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-3 sm:px-8 py-3 bg-white hover:bg-slate-100 text-[#0a61af] text-center rounded-2xl shadow-md transition text-xs sm:text-base flex items-center justify-center active:scale-95"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}