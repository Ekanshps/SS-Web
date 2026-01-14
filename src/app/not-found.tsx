"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Camera, Aperture } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A574] rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-[200px] opacity-5" />
      </div>

      {/* Film grain */}
      <div className="film-grain" />

      <div className="relative z-10 text-center px-4">
        {/* Aperture Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 mx-auto">
            {/* Aperture blades */}
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full text-[#D4A574]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M50,50 L${50 + 40 * Math.cos((i * Math.PI) / 4)},${50 + 40 * Math.sin((i * Math.PI) / 4)} A40,40 0 0,1 ${50 + 40 * Math.cos(((i + 1) * Math.PI) / 4)},${50 + 40 * Math.sin(((i + 1) * Math.PI) / 4)} Z`}
                  fill="currentColor"
                  opacity={0.3 + (i % 2) * 0.2}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [0.8, 1, 0.8] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
              <circle cx="50" cy="50" r="15" fill="#0A0A0A" />
              <circle
                cx="50"
                cy="50"
                r="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity={0.5}
              />
            </motion.svg>

            {/* 404 in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-bold text-[#D4A574]"
              >
                404
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frame Not Found
          </h1>
          <p className="text-white/60 text-lg mb-2">
            Looks like this shot didn&apos;t develop properly.
          </p>
          <p className="text-white/40 text-sm mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        {/* Camera icon with flash effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(212, 165, 116, 0)",
                "0 0 0 20px rgba(212, 165, 116, 0.3)",
                "0 0 0 0 rgba(212, 165, 116, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full"
          >
            <Camera className="w-8 h-8 text-[#D4A574]" />
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 px-6 py-3 bg-[#D4A574] text-[#0A0A0A] rounded-full font-medium hover:bg-[#F7C873] transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Decorative film strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="w-12 h-16 bg-white/5 rounded border border-white/10 flex items-center justify-center"
              >
                <Aperture className="w-6 h-6 text-white/20" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Studio name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-white/30 text-sm"
        >
          Saurabh Studio — Capturing Divine Moments
        </motion.p>
      </div>
    </div>
  );
}
