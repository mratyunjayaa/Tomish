import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { testimonialsData } from "../constants/testimonialsData";


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = testimonialsData.length;

  // Auto-play timer
  useEffect(() => {
    if (isHovered || totalItems <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, totalItems]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-8 md:px-12 bg-[#071328] font-sans text-white overflow-hidden border-t border-slate-800/50">
      
      {/* Background Animated Subtle Theme Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[var(--color-primary,#0a61af)]/20 blur-[130px] animate-pulse duration-1000" />
      <div 
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[var(--color-accent,#4381b0)]/20 blur-[130px] animate-bounce"
        style={{ animationDuration: '9s' }}
      />

      {/* Grid Pattern Texture to match Footer */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
          <span className="text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[var(--color-accent,#4381b0)]/40 text-[var(--color-secondary,#b9d7ea)] bg-slate-900/60 backdrop-blur-md shadow-xs inline-block mb-3 font-semibold">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-white">
            Voices of Transformation
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Hear from the educators, partners, and students who experience our impact firsthand.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Smooth Sliding Track */}
          <div className="overflow-hidden py-4">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))}%)`,
              }}
            >
              {testimonialsData.map((testimonial, idx) => (
                <div
                  key={testimonial.id || idx}
                  className="w-full md:w-1/3 shrink-0 px-3 sm:px-4"
                >
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="h-full bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative group hover:border-[var(--color-primary,#0a61af)]/60 transition-all duration-300"
                  >
                    <div>
                      {/* Rating & Quote Watermark */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(testimonial.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-slate-700 group-hover:text-[var(--color-secondary,#b9d7ea)] transition-colors" />
                      </div>

                      {/* Quote Text */}
                      <p className="text-xs sm:text-sm italic leading-relaxed text-slate-300 mb-8">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Author Details */}
                    <div className="border-t border-slate-800/80 pt-4">
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[var(--color-secondary,#b9d7ea)] transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-[var(--color-secondary,#b9d7ea)]/80 mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Centered Navigation Buttons */}
          {totalItems > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full bg-slate-800/80 hover:bg-[var(--color-primary,#0a61af)] border border-slate-700/60 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-slate-800/80 hover:bg-[var(--color-primary,#0a61af)] border border-slate-700/60 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Pagination Indicators / Dots */}
          {totalItems > 1 && (
            <div className="flex items-center justify-center gap-2 mt-5">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-7 bg-[var(--color-primary,#0a61af)]"
                      : "w-2 bg-slate-700 hover:bg-slate-600"
                  }`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}