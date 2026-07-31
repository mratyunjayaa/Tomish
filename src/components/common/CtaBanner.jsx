import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Calendar, ArrowRight, Sparkles } from "lucide-react";

export function CtaBanner() {
  const whatsappNumber = "9478070741";
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in partnering with your STEM education programs."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Main Banner Card */}
        <div className="relative overflow-hidden rounded-2xl bg-[#071328] p-6 sm:p-8 border border-slate-800/80 shadow-2xl">
          
          {/* Animated Background Mesh using Theme Tokens */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[var(--color-primary,#0a61af)]/25 blur-[80px] animate-pulse duration-1000" />
          <div 
            className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[var(--color-accent,#4381b0)]/25 blur-[80px] animate-bounce" 
            style={{ animationDuration: '6s' }}
          />
          <div 
            className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 h-32 w-80 rounded-full bg-[var(--color-secondary,#b9d7ea)]/15 blur-[60px] animate-pulse" 
            style={{ animationDuration: '4s' }}
          />

          {/* Animated Gradient Light Beam using Theme Colors */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-primary,#0a61af)]/15 via-[var(--color-accent,#4381b0)]/10 to-[var(--color-secondary,#b9d7ea)]/10 opacity-70" />

          {/* Grid Pattern Overlay */}
          <div 
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Horizontal Split Content Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
            
            {/* Left Column: Text & Badge */}
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wide text-[var(--color-secondary,#b9d7ea)] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-secondary,#b9d7ea)] animate-spin" style={{ animationDuration: '8s' }} />
                Transforming STEM Education
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight font-serif">
                Ready to Elevate Learning?
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Join the revolution in educational excellence with practical AI, Robotics, and IoT programs.
              </p>
            </div>

            {/* Right Column: CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              {/* WhatsApp Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-emerald-950/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group"
              >
                <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Schedule Demo Button (Routes to /contact via React Router Link) */}
              <Link
                to="/contact"
                className="w-full sm:w-auto px-5 py-2.5 bg-[var(--color-primary,#0a61af)]/20 hover:bg-[var(--color-primary,#0a61af)]/40 text-white text-xs sm:text-sm font-semibold rounded-xl backdrop-blur-md border border-[var(--color-accent,#4381b0)]/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group"
              >
                <Calendar className="w-4 h-4 text-[var(--color-secondary,#b9d7ea)]" />
                <span>Schedule Demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}