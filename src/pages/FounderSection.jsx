import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FounderSection() {
  return (
    <section
      id="story" // Added section ID for hash-based anchor navigation
      className="relative w-full py-20 px-4 flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "rgba(118, 159, 205, 0.15)", // Tonal tint of --color-app-bg
        fontFamily:
          'var(--font-sans, "Hammersmith One", "Plus Jakarta Sans", sans-serif)',
      }}
    >
      {/* Background Soft Glow Decorators */}
      <div 
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ backgroundColor: "var(--color-primary, #0a61af)" }}
      />
      <div 
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ backgroundColor: "var(--color-secondary, #b9d7ea)" }}
      />

      {/* Main Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl rounded-2xl p-8 sm:p-12 text-center border backdrop-blur-md shadow-lg transition-all duration-300"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderColor: "var(--color-secondary, #b9d7ea)",
          boxShadow: "0 10px 30px -10px rgba(10, 97, 175, 0.15)",
        }}
      >
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4"
          style={{ color: "var(--color-primary, #0a61af)" }}
        >
          Our Founder's Vision
        </h2>

        {/* Vision Statement */}
        <p className="text-sm sm:text-base italic leading-relaxed text-slate-700 max-w-xl mx-auto mb-6">
          Recognising that many students, especially in rural communities, lack access to future-ready education, Abhishek Mishra{" "}
          took the initiative to ensure they are not left behind in the AI-driven world through quality STEM learning.
        </p>

        {/* Action Link using React Router Link */}
        <motion.div whileHover={{ x: 3 }} className="inline-block">
          <Link
            to="#story"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            style={{ color: "var(--color-accent, #4381b0)" }}
          >
            <span>Read the full story</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}