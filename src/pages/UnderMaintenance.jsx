import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Newspaper, ArrowLeft, Bell, Sparkles, Clock } from "lucide-react";

export default function UnderMaintenance() {
  return (
    <div className="relative min-h-[85vh] w-full bg-[#071328] font-sans text-white overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
      
      {/* Background Glow Blobs styled with Theme Tokens */}
      <div 
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-[140px] animate-pulse duration-1000"
        style={{ backgroundColor: "var(--color-primary, #0a61af)", opacity: 0.2 }}
      />
      <div 
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full blur-[140px] animate-bounce" 
        style={{ backgroundColor: "var(--color-accent, #4381b0)", opacity: 0.2, animationDuration: "10s" }}
      />

      {/* Background Grid Pattern Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main Glassmorphism Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full text-center bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden"
      >
        {/* Animated Icon Badge */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg border"
            style={{ 
              backgroundColor: "rgba(10, 97, 175, 0.25)",
              borderColor: "var(--color-secondary, #b9d7ea)",
              boxShadow: "0 10px 25px -5px rgba(10, 97, 175, 0.3)"
            }}
          >
            <Newspaper 
              className="w-10 h-10 animate-pulse" 
              style={{ color: "var(--color-secondary, #b9d7ea)" }}
            />
          </div>
          
          <div 
            className="absolute -bottom-2 -right-2 p-1.5 rounded-lg text-white shadow-md"
            style={{ backgroundColor: "var(--color-primary, #0a61af)" }}
          >
            <Bell className="w-4 h-4" />
          </div>
        </div>

        {/* Status Pill Badge */}
        <div 
          className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border bg-slate-800/60 text-xs font-mono font-semibold uppercase tracking-widest backdrop-blur-md"
          style={{ 
            borderColor: "rgba(67, 129, 176, 0.4)",
            color: "var(--color-secondary, #b9d7ea)" 
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Press & Media Desk</span>
        </div>

        {/* Main Heading */}
        <h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-4"
          style={{ fontFamily: 'var(--font-serif, "Ivar Display", serif)' }}
        >
          News & Updates Portal Under Maintenance
        </h1>

        {/* Subtitle / Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg mx-auto mb-8 font-sans">
          We are currently updating our News & Media center with our latest school partnerships, STEM workshops, press releases, and student success stories.
        </p>

        {/* Launch Status Box */}
        <div className="p-4 mb-8 rounded-2xl bg-slate-800/50 border border-slate-700/60 text-xs sm:text-sm text-slate-300 flex items-center justify-center gap-3 max-w-md mx-auto">
          <Clock className="w-5 h-5 shrink-0" style={{ color: "var(--color-secondary, #b9d7ea)" }} />
          <span>News Hub Live In: <strong className="text-white">Coming Soon</strong></span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
            style={{ 
              backgroundColor: "var(--color-primary, #0a61af)",
              boxShadow: "0 10px 20px -5px rgba(10, 97, 175, 0.4)" 
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 text-slate-200 hover:text-white text-sm font-semibold transition-all duration-300 flex items-center justify-center active:scale-95"
          >
            Contact Media Team
          </Link>
        </div>
      </motion.div>
    </div>
  );
}