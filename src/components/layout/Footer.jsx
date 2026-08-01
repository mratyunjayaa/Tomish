import React from "react";
import { Link } from "react-router-dom";
import { 
  BotMessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowUp 
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = "9478070741";

  return (
    <footer className="relative w-full bg-[#071328] text-slate-300 font-sans border-t border-slate-800/60 overflow-hidden">
      
      {/* --- SUBTLE ANIMATED BACKGROUND LAYER --- */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--color-primary,#0a61af)]/15 blur-[140px] animate-pulse duration-1000" />
      <div 
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--color-accent,#4381b0)]/15 blur-[140px] animate-bounce" 
        style={{ animationDuration: "10s" }}
      />
      
      {/* Background Grid Pattern Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* --- FOOTER CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-4">
            {/* Logo Header */}
            <div className="flex items-center gap-3">
              <div 
                className="p-2.5 rounded-2xl flex items-center justify-center shadow-md shadow-[var(--color-primary,#0a61af)]/30"
                style={{ backgroundColor: "var(--color-primary, #0a61af)" }}
              >
                <BotMessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-wider text-white font-serif leading-none">
                  TOMISH
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[var(--color-secondary,#b9d7ea)] uppercase mt-1">
                  Solution Pvt. Ltd.
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-1 font-sans">
              Empowering the next generation of creators, thinkers, and innovators through practical hands-on STEM, AI, and Robotics education.
            </p>

            {/* Social Media Pill Buttons */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                { icon: FaFacebookF, href: "#", label: "Facebook" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:bg-[var(--color-primary,#0a61af)] hover:border-[var(--color-primary,#0a61af)] transition-all duration-300 active:scale-95 shadow-xs flex items-center justify-center"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Learning Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white font-mono uppercase underline decoration-[var(--color-primary,#0a61af)] underline-offset-8 decoration-2">
              Learning Programs
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400 pt-1 font-sans">
              {[
                "AI & Machine Learning",
                "Robotics & Automation (Class 1-8)",
                "IoT & Microcontrollers",
                "Cybersecurity Lab Tracks",
                "STEM Innovation (Class 9-12)",
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white font-mono uppercase underline decoration-[var(--color-primary,#0a61af)] underline-offset-8 decoration-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400 pt-1 font-sans">
              {[
                { label: "About Us", path: "/about" },
                { label: "Terms & Conditions", path: "/news" },
                { label: "Privacy Policy", path: "/news" },
                { label: "Refund Policy", path: "/news" },
                { label: "Contact Us", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white font-mono uppercase underline decoration-[var(--color-primary,#0a61af)] underline-offset-8 decoration-2">
              Get In Touch
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 pt-1 font-sans">
              <a 
                href="mailto:info@tomish.in" 
                className="flex items-center gap-3 hover:text-[var(--color-secondary,#b9d7ea)] transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>info@tomish.in</span>
              </a>

              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[var(--color-secondary,#b9d7ea)] transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>+91 - {whatsappNumber}</span>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Lucknow - 226010, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Working Hours Card Container */}
            <div className="mt-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2 font-sans">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Clock className="w-4 h-4 text-[var(--color-secondary,#b9d7ea)]" />
                <span>Working Hours</span>
              </div>
              <p className="text-xs text-slate-300">
                Mon - Sat: 09:00 AM - 05:00 PM
              </p>
              <p className="text-xs text-rose-400 font-medium">
                Sunday: Closed
              </p>
            </div>
          </div>

        </div>

        {/* --- COPYRIGHT & SCROLL TO TOP ROW --- */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-slate-200">Tomish Solution Pvt. Ltd.</span> All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3.5 rounded-full bg-[var(--color-primary,#0a61af)] hover:bg-blue-600 text-white shadow-lg shadow-blue-900/40 transition-all duration-300 active:scale-90 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}