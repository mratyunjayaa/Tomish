import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UserPlus,
  UserCheck,
  GraduationCap,
  MonitorPlay,
  ClipboardCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

// Steps Data
const stepsData = [
  {
    id: 1,
    title: "School signs-up with TOMISH",
    description: "Begin your journey with a simple registration process.",
    icon: UserPlus,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Program Manager is assigned",
    description: "Get a dedicated expert to oversee your program.",
    icon: UserCheck,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Teacher is recruited and trained",
    description: "We carefully select and prepare educators for your needs.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Teacher starts classes offline Mode",
    description: "Seamless integration with our advanced technology.",
    icon: MonitorPlay,
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Regular audits by Program Manager",
    description: "Continuous quality assurance for optimal results.",
    icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "School tracks progress over platform",
    description: "Monitor performance and outcomes with real-time data.",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
  },
];

export default function ProcessTimeline() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section 
      className="relative w-full py-12 overflow-hidden font-sans"
      style={{ 
        backgroundColor: "rgba(118, 159, 205, 0.15)",
        fontFamily: 'var(--font-sans, "Neue Montreal", sans-serif)' 
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-8 md:px-[12%] lg:px-[15%]">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold tracking-tight sm:text-3xl font-serif"
            style={{ 
              color: "var(--color-primary, #0a61af)",
              fontFamily: 'var(--font-serif, "Ivar Display", serif)'
            }}
          >
            Empowering Success with{" "}
            <span 
              className="underline underline-offset-4"
              style={{ 
                color: "var(--color-accent, #4381b0)",
                textDecorationColor: "var(--color-secondary, #b9d7ea)"
              }}
            >
              TOMISH Solutions
            </span>
          </motion.h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-800 font-sans">
            We take full responsibility for class delivery and student impact.
          </p>
        </div>

        {/* Timeline Wrap */}
        <div className="relative mx-auto">
          <div className="relative space-y-4 sm:space-y-5">
            {/* Center Line (Desktop) */}
            <div 
              className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2" 
              style={{ backgroundColor: "var(--color-secondary, #b9d7ea)" }}
            />

            {/* Left Line (Mobile) */}
            <div 
              className="block md:hidden absolute left-4 top-4 bottom-4 w-0.5" 
              style={{ backgroundColor: "var(--color-secondary, #b9d7ea)" }}
            />

            {/* Dynamic Animated Line */}
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2"
              style={{
                background: "linear-gradient(to bottom, var(--color-primary, #0a61af), var(--color-accent, #4381b0), var(--color-primary, #0a61af))"
              }}
            />

            {stepsData.map((step, index) => {
              const isLeft = index % 2 === 0;
              const Icon = step.icon;
              const isHovered = hoveredId === step.id;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredId(step.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer"
                >
                  {/* Number Node */}
                  <motion.div
                    animate={
                      isHovered
                        ? {
                            scale: 1.15,
                            rotate: 360,
                            backgroundColor: "var(--color-primary, #0a61af)",
                            color: "#FFFFFF",
                            borderColor: "var(--color-accent, #4381b0)",
                          }
                        : {
                            scale: 1,
                            rotate: 0,
                            backgroundColor: "#FFFFFF",
                            color: "var(--color-primary, #0a61af)",
                            borderColor: "var(--color-secondary, #b9d7ea)",
                          }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="z-20 absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 md:top-1/2 md:-translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs sm:text-sm font-bold shadow-md transition-colors"
                  >
                    {step.id}
                  </motion.div>

                  {/* Card Container */}
                  <div
                    className={`w-full pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <motion.div
                      animate={
                        isHovered
                          ? {
                              scale: 1.02,
                              y: -2,
                              boxShadow:
                                "0 12px 20px -5px rgba(10, 97, 175, 0.25), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                              borderColor: "var(--color-accent, #4381b0)",
                            }
                          : {
                              scale: 1,
                              y: 0,
                              boxShadow: "0 1px 3px 0 rgba(0,0,0,0.05)",
                              borderColor: "var(--color-secondary, #b9d7ea)",
                            }
                      }
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="group relative flex overflow-hidden rounded-xl border bg-white p-2.5 transition-colors duration-300"
                    >
                      <div
                        className={`flex w-full items-center gap-3 ${
                          isLeft
                            ? "md:flex-row-reverse md:text-right"
                            : "md:flex-row md:text-left"
                        }`}
                      >
                        {/* Thumbnail Image */}
                        <div 
                          className="relative h-14 w-20 sm:h-16 sm:w-24 flex-shrink-0 overflow-hidden rounded-lg"
                          style={{ backgroundColor: "var(--color-secondary, #b9d7ea)" }}
                        >
                          <img
                            src={step.image}
                            alt={step.title}
                            loading="lazy"
                            className={`h-full w-full object-cover transition-transform duration-500 ${
                              isHovered ? "scale-110" : "scale-100"
                            }`}
                          />
                          <div
                            className={`absolute bottom-1 ${
                              isLeft ? "md:left-1 right-1" : "right-1"
                            } flex h-5 w-5 items-center justify-center rounded-full text-white shadow-sm`}
                            style={{ backgroundColor: "var(--color-primary, #0a61af)" }}
                          >
                            <Icon className="h-3 w-3" />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-xs sm:text-sm font-bold transition-colors duration-200 leading-tight font-serif"
                            style={{
                              color: isHovered ? "var(--color-primary, #0a61af)" : "var(--color-accent, #4381b0)"
                            }}
                          >
                            {step.title}
                          </h3>
                          <p className="mt-0.5 text-[11px] text-slate-600 line-clamp-2 leading-tight font-sans">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="mt-10 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold text-white shadow-lg transition-all sm:text-sm font-sans"
                style={{
                  background: "linear-gradient(135deg, var(--color-primary, #0a61af), var(--color-accent, #4381b0))",
                  boxShadow: "0 10px 15px -3px rgba(10, 97, 175, 0.3)"
                }}
              >
                <span>Get Started Today with TOMISH</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}