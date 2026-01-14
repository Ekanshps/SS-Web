"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid, LayoutGrid } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
  aspectRatio: string;
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [viewMode, setViewMode] = useState<"masonry" | "grid">("masonry");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll(".portfolio-item");

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          delay: (index % 4) * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [filteredItems, viewMode]);

  const handleImageClick = (item: PortfolioItem) => {
    setSelectedImage(item);
  };

  const navigateImage = useCallback((direction: "prev" | "next") => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(filteredItems[newIndex]);
  }, [selectedImage, filteredItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, navigateImage]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="section-padding bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A574] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A574] uppercase tracking-[0.3em] text-sm mb-4 block">
            Our Work
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Living <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Where every frame tells a story. Explore our collection of captured moments
            that celebrate life&apos;s most precious occasions.
          </p>
        </motion.div>

        {/* Category Filter & View Mode Toggle */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-[#D4A574] text-[#0A0A0A]"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-white/5 rounded-full p-1">
            <button
              onClick={() => setViewMode("masonry")}
              className={cn(
                "p-2 rounded-full transition-colors",
                viewMode === "masonry" ? "bg-[#D4A574] text-[#0A0A0A]" : "text-white/60"
              )}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-2 rounded-full transition-colors",
                viewMode === "grid" ? "bg-[#D4A574] text-[#0A0A0A]" : "text-white/60"
              )}
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          ref={gridRef}
          layout
          className={cn(
            viewMode === "masonry"
              ? "columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
              : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          )}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "portfolio-item relative group cursor-pointer overflow-hidden rounded-lg",
                  viewMode === "masonry" ? "break-inside-avoid" : ""
                )}
                onClick={() => handleImageClick(item)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image container with aspect ratio */}
                <div
                  className={cn(
                    "relative bg-[#1A1A1A]",
                    viewMode === "grid"
                      ? "aspect-square"
                      : item.aspectRatio === "portrait"
                        ? "aspect-[3/4]"
                        : item.aspectRatio === "landscape"
                          ? "aspect-[4/3]"
                          : "aspect-square"
                  )}
                >
                  {/* Background fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]" />

                  {/* Actual image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={
                      viewMode === "grid"
                        ? "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    }
                    className="object-cover"
                    priority={item.id <= 4}
                  />

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4"
                  >
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-[#D4A574] text-sm capitalize">{item.category}</p>
                  </motion.div>

                  {/* Zoom icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredId === item.id ? 1 : 0,
                      scale: hoveredId === item.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-[#D4A574] rounded-full flex items-center justify-center"
                  >
                    <ZoomIn className="w-5 h-5 text-[#0A0A0A]" />
                  </motion.div>

                  {/* Shutter reveal effect */}
                  <motion.div
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-[#0A0A0A] origin-top"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-3 border-2 border-[#D4A574] text-[#D4A574] rounded-full font-medium hover:bg-[#D4A574] hover:text-[#0A0A0A] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Works
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            {/* Film grain overlay */}
            <div className="absolute inset-0 film-grain pointer-events-none" />

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image container */}
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-2xl max-h-[70vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Vintage projector border */}
              <div className="relative bg-[#1A1A1A] rounded-lg overflow-hidden border-4 border-[#2A2A2A]">
                <div className="aspect-[4/3] relative bg-black">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Image info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <h3
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {selectedImage.title}
                  </h3>
                  <p className="text-[#D4A574] capitalize">{selectedImage.category}</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm"
            >
              {filteredItems.findIndex((item) => item.id === selectedImage.id) + 1} /{" "}
              {filteredItems.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
