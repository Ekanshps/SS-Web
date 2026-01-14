"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import {
  Heart,
  Camera,
  Calendar,
  Building,
  Package,
  Plane,
  X,
  Check,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Heart,
  Camera,
  Calendar,
  Building,
  Package,
  Plane,
} as const;

type IconName = keyof typeof iconMap;

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<(typeof SERVICES)[0] | null>(
    null
  );
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCardClick = (serviceId: string) => {
    setFlippedCard(flippedCard === serviceId ? null : serviceId);
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#D4A574] rounded-full blur-[200px] opacity-10" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
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
            What We Offer
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From intimate portraits to grand celebrations, we offer comprehensive
            photography and videography services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as IconName] || Camera;
            const isFlipped = flippedCard === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="perspective-1000"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={cn(
                    "relative w-full h-[400px] cursor-pointer transition-transform duration-700",
                    isFlipped ? "[transform:rotateY(180deg)]" : "",
                    "[transform-style:preserve-3d]"
                  )}
                  onClick={() => handleCardClick(service.id)}
                >
                  {/* Front of card */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl p-6 flex flex-col",
                      "bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]",
                      "border border-white/10 [backface-visibility:hidden]",
                      "transition-all duration-500",
                      hoveredCard === service.id && !isFlipped
                        ? "border-[#D4A574]/50 shadow-[0_0_40px_rgba(212,165,116,0.15)] -translate-y-2"
                        : ""
                    )}
                  >
                    {/* Icon with particles */}
                    <div className="relative mb-6">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-[#D4A574] to-[#F7C873] rounded-xl flex items-center justify-center"
                        animate={
                          hoveredCard === service.id
                            ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-[#0A0A0A]" />
                      </motion.div>

                      {/* Floating particles */}
                      {hoveredCard === service.id && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-[#D4A574] rounded-full"
                              initial={{ opacity: 0, x: 32, y: 32 }}
                              animate={{
                                opacity: [0, 1, 0],
                                x: 32 + Math.cos((i * Math.PI) / 3) * 40,
                                y: 32 + Math.sin((i * Math.PI) / 3) * 40,
                              }}
                              transition={{
                                duration: 1,
                                delay: i * 0.1,
                                repeat: Infinity,
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-bold text-white mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm flex-grow line-clamp-3">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-white/40 text-sm">Starting from</p>
                      <p className="text-2xl font-bold text-gradient">
                        {service.startingPrice}
                      </p>
                    </div>

                    {/* Flip hint */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === service.id ? 1 : 0 }}
                      className="absolute bottom-4 right-4 text-[#D4A574] text-sm flex items-center gap-1"
                    >
                      <span>Click to flip</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Back of card */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl p-6 flex flex-col",
                      "bg-gradient-to-br from-[#D4A574] to-[#B8956A]",
                      "[backface-visibility:hidden] [transform:rotateY(180deg)]"
                    )}
                  >
                    <h3
                      className="text-xl font-bold text-[#0A0A0A] mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      What&apos;s Included
                    </h3>

                    {/* Features list */}
                    <ul className="space-y-3 flex-grow">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-[#0A0A0A]/80"
                        >
                          <div className="w-5 h-5 bg-[#0A0A0A] rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-[#D4A574]" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="mt-4 w-full py-3 bg-[#0A0A0A] text-white rounded-lg font-medium hover:bg-[#1A1A1A] transition-colors"
                    >
                      Book This Package
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-white/5 rounded-2xl border border-white/10">
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Need a Custom Package?
            </h3>
            <p className="text-white/60 mb-6 max-w-md">
              We create personalized packages tailored to your specific requirements and
              budget.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg bg-[#1A1A1A] rounded-2xl p-6 md:p-8 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4A574] to-[#F7C873] rounded-xl flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const Icon = iconMap[selectedService.icon as IconName] || Camera;
                    return <Icon className="w-8 h-8 text-[#0A0A0A]" />;
                  })()}
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {selectedService.title}
                </h3>
                <p className="text-[#D4A574] text-lg font-semibold">
                  Starting from {selectedService.startingPrice}
                </p>
              </div>

              <p className="text-white/60 text-center mb-6">
                {selectedService.description}
              </p>

              {/* Features */}
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <p className="text-white/40 text-sm mb-3">Package includes:</p>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedService.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                      <Check className="w-4 h-4 text-[#D4A574] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-3 bg-[#D4A574] text-[#0A0A0A] rounded-lg font-medium text-center hover:bg-[#F7C873] transition-colors"
                >
                  Book Now
                </a>
                <a
                  href="https://wa.me/919198297260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-white/10 text-white rounded-lg font-medium text-center hover:bg-white/20 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
