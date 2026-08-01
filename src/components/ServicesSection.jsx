import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "../constants/services";
import CtaBanner from "./common/CtaBanner";

// Spotlight Glassmorphism Card Wrapper
function ModernSpotlightCard({ children, onClick }) {
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    // Calculate cursor offset relative to the card
    const x = clientX - left;
    const y = clientY - top;
    
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className="group relative h-full cursor-pointer rounded-2xl bg-white p-[1px] transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-2xl hover:shadow-[rgba(10,97,175,0.12)]"
    >
      {/* Dynamic Cursor Spotlight Border */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(67, 129, 176, 0.4), transparent 40%)`,
        }}
      />

      {/* Outer Subtle Accent Border */}
      <div className="absolute inset-0 rounded-2xl border border-slate-200/90 transition-colors duration-300 group-hover:border-transparent" />

      {/* Card Inner Content Container */}
      <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-white via-slate-50/50 to-slate-100/40 p-6 sm:p-7 backdrop-blur-md">
        
        {/* Subtle Mouse Spotlight Interior Glow */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(185, 215, 234, 0.25), transparent 80%)`,
          }}
        />

        {children}
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const services = SERVICES_DATA || [];

  return (
    <>
      <section
        id="services"
        className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60 font-sans overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[var(--color-secondary,#b9d7ea)] text-[var(--color-primary,#0a61af)] bg-white shadow-xs inline-block mb-3 font-semibold">
              Our Expertise
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight"
              style={{ color: "var(--color-primary, #0a61af)" }}
            >
              Programs & Skill Tracks
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive STEM and development tracks designed to prepare students for real-world technology innovation.
            </p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id || service.title} variants={cardVariants}>
                  <ModernSpotlightCard onClick={() => setSelectedService(service)}>
                    <div>
                      {/* Top Row: Icon + Arrow Action */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className="p-3.5 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs"
                          style={{
                            backgroundColor: "rgba(185, 215, 234, 0.35)",
                            color: "var(--color-primary, #0a61af)",
                          }}
                        >
                          {Icon && <Icon className="w-6 h-6 sm:w-7 sm:h-7" />}
                        </div>

                        <div className="rounded-full p-2 text-slate-400 group-hover:text-[var(--color-primary,#0a61af)] group-hover:bg-[rgba(185,215,234,0.3)] transition-all">
                          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[var(--color-primary,#0a61af)] transition-colors mb-2.5">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-200/60">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold tracking-wide uppercase text-slate-500">
                        {service.status || "Active Track"}
                      </span>
                    </div>
                  </ModernSpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Information Modal Popup */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative z-10 w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="p-3.5 rounded-2xl flex items-center justify-center shadow-xs"
                    style={{
                      backgroundColor: "var(--color-secondary, #b9d7ea)",
                      color: "var(--color-primary, #0a61af)",
                    }}
                  >
                    {selectedService.icon && (
                      <selectedService.icon className="w-8 h-8" />
                    )}
                  </div>
                  <div>
                    <span
                      className="text-xs font-mono font-semibold uppercase tracking-wider"
                      style={{ color: "var(--color-accent, #4381b0)" }}
                    >
                      Program Overview
                    </span>
                    <h3
                      className="text-2xl font-bold tracking-tight"
                      style={{ color: "var(--color-primary, #0a61af)" }}
                    >
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {selectedService.detailedInfo || selectedService.description}
                  </p>

                  <div
                    className="p-4 rounded-xl border flex items-center gap-3 text-xs sm:text-sm font-medium shadow-2xs"
                    style={{
                      backgroundColor: "rgba(118, 159, 205, 0.12)",
                      borderColor: "var(--color-secondary, #b9d7ea)",
                      color: "var(--color-primary, #0a61af)",
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[var(--color-primary,#0a61af)]" />
                    <span>Hands-on practical projects & mentor guidance included.</span>
                  </div>
                </div>

                <div className="mt-8 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity shadow-md hover:opacity-90 active:scale-95"
                    style={{ backgroundColor: "var(--color-accent, #4381b0)" }}
                  >
                    Inquire Now
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* CTA Banner Section */}
      <CtaBanner />
    </>
  );
}