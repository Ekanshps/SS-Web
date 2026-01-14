"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Scroll to active testimonial
  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const itemWidth = scrollWidth / TESTIMONIALS.length;
      scrollRef.current.scrollTo({
        left: itemWidth * activeIndex - window.innerWidth / 2 + itemWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const navigate = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    if (direction === "prev") {
      setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-[#050505] relative overflow-hidden"
    >
      {/* Film strip decorations */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#1A1A1A] flex items-center overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-[#0A0A0A] rounded-sm mx-1 flex-shrink-0"
          />
        ))}
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#D4A574] rounded-full blur-[200px]" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FF6B35] rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 py-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 container-custom"
        >
          <span className="text-[#D4A574] uppercase tracking-[0.3em] text-sm mb-4 block">
            Client Love
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Stories From <span className="text-gradient">Happy Hearts</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Every project is a story, and every client becomes family. Here&apos;s what
            they have to say about their experience with us.
          </p>
        </motion.div>

        {/* Film Strip Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => navigate("prev")}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigate("next")}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar px-8 md:px-20 py-8"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "flex-shrink-0 w-80 md:w-96 transition-all duration-500 cursor-pointer",
                  activeIndex === index
                    ? "scale-105 opacity-100"
                    : "scale-95 opacity-50 hover:opacity-70"
                )}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
              >
                {/* Film frame */}
                <div
                  className={cn(
                    "relative rounded-lg overflow-hidden border-2 bg-[#1A1A1A] transition-all duration-500",
                    activeIndex === index
                      ? "border-[#D4A574] shadow-[0_0_40px_rgba(212,165,116,0.3)]"
                      : "border-[#2A2A2A]"
                  )}
                >
                  {/* Sprocket holes top */}
                  <div className="h-6 bg-[#0A0A0A] flex items-center justify-around px-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-[#1A1A1A] rounded-sm" />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Photo and info */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Client photo */}
                      <div
                        className={cn(
                          "w-16 h-16 rounded-full overflow-hidden border-2 flex-shrink-0 transition-all duration-1000",
                          activeIndex === index
                            ? "border-[#D4A574] grayscale-0"
                            : "border-white/20 grayscale"
                        )}
                      >
                        <div className="w-full h-full relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]" />
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-grow">
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-[#D4A574] text-sm">{testimonial.event}</p>

                        {/* Rating */}
                        <div className="flex gap-0.5 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={
                                activeIndex === index
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: 0.3, scale: 0.8 }
                              }
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star
                                className={cn(
                                  "w-4 h-4",
                                  i < testimonial.rating
                                    ? "text-[#F7C873] fill-[#F7C873]"
                                    : "text-white/20"
                                )}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Video indicator */}
                      {testimonial.hasVideo && (
                        <div className="w-8 h-8 bg-[#D4A574] rounded-full flex items-center justify-center flex-shrink-0">
                          <Play className="w-4 h-4 text-[#0A0A0A] ml-0.5" />
                        </div>
                      )}
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-1 w-6 h-6 text-[#D4A574]/20" />
                      <p className="text-white/70 text-sm leading-relaxed pl-4 line-clamp-4">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>

                  {/* Sprocket holes bottom */}
                  <div className="h-6 bg-[#0A0A0A] flex items-center justify-around px-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-[#1A1A1A] rounded-sm" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIndex === index
                  ? "bg-[#D4A574] w-8"
                  : "bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>

        {/* Featured Testimonial - Full View */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container-custom mt-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-[#D4A574]/30 mx-auto mb-6" />
            <p
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;{TESTIMONIALS[activeIndex].text}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4A574] relative bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]" />
                <Image
                  src={TESTIMONIALS[activeIndex].image}
                  alt={TESTIMONIALS[activeIndex].name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold">
                  {TESTIMONIALS[activeIndex].name}
                </h4>
                <p className="text-[#D4A574] text-sm">
                  {TESTIMONIALS[activeIndex].event}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Film strip decoration bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#1A1A1A] flex items-center overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-[#0A0A0A] rounded-sm mx-1 flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
}
