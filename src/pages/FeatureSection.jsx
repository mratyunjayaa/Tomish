import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { statsData, featuresData } from "../constants/featureData";

function CounterNumber({ value = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight inline-block font-sans">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function FeatureSection() {
  const stats = statsData || [];
  const features = featuresData || [];

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 md:px-12 bg-slate-50/50 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight font-serif"
          >
            Making a Real Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal"
          >
            We are building the future of education through large-scale STEM initiatives,
            transforming classrooms into innovation hubs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow:
                  "0 12px 25px -5px rgba(10, 97, 175, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-slate-200/60 shadow-xs transition-all duration-300 flex flex-col items-center justify-center cursor-pointer"
            >
              <CounterNumber value={stat.value} />
              <span className="mt-2 text-xs sm:text-sm font-semibold text-slate-600">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                whileHover="hover"
                variants={{
                  hover: {
                    y: -6,
                    scale: 1.02,
                    boxShadow:
                      "0 12px 25px -5px rgba(10, 97, 175, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
                  },
                }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/60 shadow-xs transition-all duration-300 flex flex-col justify-start cursor-pointer group"
              >
                {Icon && (
                  <motion.div
                    variants={{
                      hover: { scale: 1.1, rotate: 5 },
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                    className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary mb-5 transition-colors group-hover:bg-primary group-hover:text-white shrink-0"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                )}

                <h3 className="text-base font-bold text-primary mb-2 transition-colors group-hover:text-accent">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}