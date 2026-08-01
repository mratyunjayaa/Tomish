import { useState, useEffect } from "react";
import { BotMessageSquare, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import CartIcon from "../common/CartIcon";
import  NavLinks  from "./NavLinks";

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    y: -8,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to trigger background glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (e) => {
      if (e.matches) setIsOpen(false);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full font-serif text-primary border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-slate-200/80 bg-white shadow-xs"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-sans text-lg font-extrabold tracking-tight text-primary sm:text-xl"
        >
          <BotMessageSquare className="h-6 w-6 text-accent sm:h-7 sm:w-7" />
          <span>TOMISH</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 font-sans text-sm tracking-wide md:flex lg:gap-2">
          <NavLinks />
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="h-6 w-px bg-slate-200" />

          <button
            type="button"
            className="rounded-lg bg-accent px-5 py-2 font-sans text-sm font-semibold text-white transition hover:opacity-90 active:scale-95"
          >
            Login
          </button>

          <CartIcon />
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <CartIcon />

          <button
            type="button"
            className="p-1.5 text-primary transition hover:text-accent"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="space-y-4 px-6 pb-6 pt-4 font-sans">
              <NavLinks mobile onItemClick={() => setIsOpen(false)} />

              <motion.div
                variants={itemVariants}
                className="border-t border-slate-100 pt-4"
              >
                <button
                  type="button"
                  className="w-full rounded-lg bg-accent py-2.5 text-sm font-semibold text-white transition active:scale-95"
                >
                  Login
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}