"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VIDEO_SHOWCASE } from "@/lib/constants";
import { Play, X, Film, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

function toYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        const videoId = parsed.searchParams.get("v");
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }

      if (parsed.pathname.startsWith("/embed/")) {
        return url;
      }
    }

    if (host === "youtu.be") {
      const videoId = parsed.pathname.replace("/", "");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch {
    // ignore
  }

  return url;
}

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<(typeof VIDEO_SHOWCASE)[0] | null>(
    null
  );
  const [isMuted, setIsMuted] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="video-showcase"
      ref={sectionRef}
      className="section-padding bg-[#050505] relative overflow-hidden"
    >
      {/* Film strip decoration */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#1A1A1A] flex items-center overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-[#0A0A0A] rounded-sm mx-1 flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#1A1A1A] flex items-center overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-[#0A0A0A] rounded-sm mx-1 flex-shrink-0"
          />
        ))}
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A574] rounded-full blur-[200px]" />
      </div>

      <div className="container-custom relative z-10 py-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A574] uppercase tracking-[0.3em] text-sm mb-4 block">
            Cinematography
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Film Reel <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Watch our cinematic masterpieces. Each video is crafted with the same passion
            and attention to detail as our photographs.
          </p>
        </motion.div>

        {/* Film Reel Carousel */}
        <div className="relative">
          {/* Reel container */}
          <div className="relative overflow-hidden">
            {/* 3D Film reel effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 px-4"
            >
              {VIDEO_SHOWCASE.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 40, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-72 md:w-80 lg:w-96"
                  onMouseEnter={() => setHoveredId(video.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Film frame */}
                  <div
                    className={cn(
                      "relative rounded-lg overflow-hidden border-2 border-[#2A2A2A] bg-[#1A1A1A] transition-all duration-500 cursor-pointer",
                      hoveredId === video.id
                        ? "border-[#D4A574] shadow-[0_0_40px_rgba(212,165,116,0.3)] scale-105"
                        : ""
                    )}
                    onClick={() => setSelectedVideo(video)}
                  >
                    {/* Sprocket holes */}
                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-[#0A0A0A] flex flex-col items-center justify-around py-4">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-[#1A1A1A] rounded-sm" />
                      ))}
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-6 bg-[#0A0A0A] flex flex-col items-center justify-around py-4">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-[#1A1A1A] rounded-sm" />
                      ))}
                    </div>

                    {/* Thumbnail */}
                    <div className="aspect-video mx-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]" />
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 70vw, (max-width: 1024px) 40vw, 384px"
                        className="object-cover"
                        priority={video.id <= 2}
                      />
                      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                      <Film className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/20 pointer-events-none" />

                      {/* Play button overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredId === video.id ? 1 : 0 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: hoveredId === video.id ? 1 : 0.8 }}
                          className="w-16 h-16 bg-[#D4A574] rounded-full flex items-center justify-center"
                        >
                          <Play className="w-8 h-8 text-[#0A0A0A] ml-1" />
                        </motion.div>
                      </motion.div>

                      {/* Duration badge */}
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs text-white">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video info */}
                    <div className="p-4 mx-6">
                      <h3 className="text-white font-semibold mb-1 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-[#D4A574] text-sm capitalize">{video.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-4"
          >
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
              <span>Scroll to explore | Use Shift + Scroll </span>
            </div>
          </motion.div>
        </div>

        {/* Featured Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Videos Created", value: "300+" },
            { label: "Hours of Footage", value: "2000+" },
            { label: "Happy Couples", value: "100+" },
            { label: "Viral Videos", value: "10+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 rounded-lg border border-white/10"
            >
              <div
                className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95"
            />

            {/* Film grain */}
            <div className="absolute inset-0 film-grain pointer-events-none" />

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Video container with vintage TV border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Vintage TV frame */}
              <div className="relative bg-[#1A1A1A] rounded-xl p-3 md:p-6 border-4 border-[#2A2A2A]">
                {/* TV top decoration */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#2A2A2A] rounded-t-lg" />

                {/* Video player */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                  <iframe
                    src={`${toYouTubeEmbedUrl(selectedVideo.videoUrl)}?autoplay=1&mute=${isMuted ? 1 : 0}`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />

                  {/* Projector flicker overlay */}
                  <motion.div
                    animate={{ opacity: [0.03, 0.01, 0.03] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                    className="absolute inset-0 bg-black pointer-events-none"
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <div>
                    <h3 className="text-white font-semibold">{selectedVideo.title}</h3>
                    <p className="text-[#D4A574] text-sm capitalize">
                      {selectedVideo.category}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* TV stand decoration */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#2A2A2A] rounded-b-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
