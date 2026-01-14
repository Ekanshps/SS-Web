"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { STUDIO_INFO, NAV_ITEMS, SERVICES } from "@/lib/constants";
import {
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Heart,
  Camera,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      {/* Cinema credits animation background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#D4A574]/20 via-transparent to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="container-custom relative z-10 py-16">
        {/* Top Section - Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Aperture Logo */}
          <div className="inline-block mb-4">
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 mx-auto"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4A574]">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <path
                    key={i}
                    d={`M 50 50 L ${50 + 35 * Math.cos((angle * Math.PI) / 180)} ${50 + 35 * Math.sin((angle * Math.PI) / 180)} A 35 35 0 0 1 ${50 + 35 * Math.cos(((angle + 30) * Math.PI) / 180)} ${50 + 35 * Math.sin(((angle + 30) * Math.PI) / 180)} Z`}
                    fill="currentColor"
                    opacity="0.3"
                  />
                ))}
                <circle cx="50" cy="50" r="12" fill="currentColor" />
              </svg>
            </motion.div>
          </div>

          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {STUDIO_INFO.name}
          </h2>
          <p className="text-[#D4A574]">{STUDIO_INFO.tagline}</p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-[#D4A574] transition-colors text-sm inline-block relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4A574] transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-[#D4A574] transition-colors text-sm inline-block relative group"
                  >
                    {service.title.split(" ")[0]}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4A574] transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="text-white/60 hover:text-[#D4A574] transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {STUDIO_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="text-white/60 hover:text-[#D4A574] transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {STUDIO_INFO.email}
                </a>
              </li>
              <li className="text-white/60 text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  {STUDIO_INFO.address.line1}, {STUDIO_INFO.address.line2}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={STUDIO_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={STUDIO_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={STUDIO_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:text-[#FF0000] hover:bg-[#FF0000]/10 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={STUDIO_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-white/40 text-sm">
                © {currentYear} {STUDIO_INFO.name}. All Rights Reserved.
              </p>
              <p className="text-white/30 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in
                Ayodhya
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/30 text-sm italic text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &quot;A Digital Shrine to Frozen Moments&quot;
            </motion.p>

            {/* Developer Credit */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <a
                href={STUDIO_INFO.developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-[#D4A574]/30 transition-all group"
              >
                <span className="text-white/40 text-sm">Developed by</span>
                <span className="text-[#D4A574] font-semibold flex items-center gap-1">
                  {STUDIO_INFO.developer.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <p className="text-white/20 text-xs">
              Powered by Next.js • GSAP • Three.js • Framer Motion
            </p>
          </motion.div>
        </div>
      </div>

      {/* Animated camera icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-4 right-4 w-8 h-8 text-white/10"
      >
        <Camera className="w-full h-full" />
      </motion.div>
    </footer>
  );
}
