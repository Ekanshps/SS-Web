"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { Menu, X, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = NAV_ITEMS.map((item) => item.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Aperture Style */}
      <motion.nav
        ref={navRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          isScrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Aperture Logo */}
              <div className="relative w-12 h-12">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-[#D4A574] group-hover:rotate-45 transition-transform duration-700"
                >
                  {/* Outer ring */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  {/* Aperture blades */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <path
                      key={i}
                      d={`M 50 50 L ${50 + 35 * Math.cos((angle * Math.PI) / 180)} ${50 + 35 * Math.sin((angle * Math.PI) / 180)} A 35 35 0 0 1 ${50 + 35 * Math.cos(((angle + 30) * Math.PI) / 180)} ${50 + 35 * Math.sin(((angle + 30) * Math.PI) / 180)} Z`}
                      fill="currentColor"
                      opacity="0.3"
                      className="group-hover:opacity-60 transition-opacity"
                    />
                  ))}
                  {/* Center */}
                  <circle cx="50" cy="50" r="12" fill="currentColor" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white">
                  Saurabh <span className="text-[#D4A574]">Studio</span>
                </h1>
                <p className="text-xs text-white/50">Photography & Cinematography</p>
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    activeSection === item.id
                      ? "text-[#D4A574]"
                      : "text-white/70 hover:text-white"
                  )}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4A574] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="btn-primary text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Camera className="w-4 h-4" />
                Book Now
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              {/* Aperture hamburger */}
              <div className="relative w-8 h-8">
                <motion.div
                  animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {isOpen ? (
                    <X className="w-8 h-8 text-[#D4A574]" />
                  ) : (
                    <Menu className="w-8 h-8 text-white" />
                  )}
                </motion.div>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ clipPath: "circle(0% at calc(100% - 48px) 40px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 48px) 40px)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 48px) 40px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center"
            >
              {/* Decorative aperture */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <svg viewBox="0 0 100 100" className="w-[80vw] h-[80vw] text-[#D4A574]">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <path
                      key={i}
                      d={`M 50 50 L ${50 + 45 * Math.cos((angle * Math.PI) / 180)} ${50 + 45 * Math.sin((angle * Math.PI) / 180)} A 45 45 0 0 1 ${50 + 45 * Math.cos(((angle + 22.5) * Math.PI) / 180)} ${50 + 45 * Math.sin(((angle + 22.5) * Math.PI) / 180)} Z`}
                      fill="currentColor"
                    />
                  ))}
                </svg>
              </div>

              {/* Navigation Links */}
              <nav className="relative z-10 flex flex-col items-center gap-6">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className={cn(
                      "text-3xl font-bold transition-colors",
                      activeSection === item.id
                        ? "text-[#D4A574]"
                        : "text-white/70 hover:text-white"
                    )}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.label}
                  </motion.a>
                ))}

                {/* Mobile CTA */}
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="btn-primary mt-8 flex items-center gap-2"
                >
                  <Camera className="w-5 h-5" />
                  Book Now
                </motion.a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
