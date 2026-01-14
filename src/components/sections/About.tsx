"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { STUDIO_STATS, TEAM_MEMBERS } from "@/lib/constants";
import { Award, Camera, MapPin, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCountUp } from "@/hooks/useAnimations";

gsap.registerPlugin(ScrollTrigger);

// Counter component with animation
function AnimatedCounter({
  value,
  suffix,
  isActive,
}: {
  value: number;
  suffix: string;
  isActive: boolean;
}) {
  const count = useCountUp(value, 2000, 0, isActive);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax layers
    const layers = sectionRef.current.querySelectorAll(".parallax-layer");
    layers.forEach((layer, index) => {
      const speed = 1 - index * 0.2;
      gsap.to(layer, {
        yPercent: -20 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Camera assembly animation
    if (cameraRef.current) {
      const cameraParts = cameraRef.current.querySelectorAll(".camera-part");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cameraRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        },
      });

      cameraParts.forEach((part, index) => {
        tl.fromTo(
          part,
          {
            opacity: 0,
            scale: 0.5,
            rotation: Math.random() * 180 - 90,
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            x: 0,
            y: 0,
            duration: 0.3,
          },
          index * 0.1
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A0A0A] min-h-screen"
    >
      {/* Parallax Background Layers */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none">
        {/* Layer 1: Ayodhya skyline (slowest) */}
        <div className="parallax-layer absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#D4A574]/20 to-transparent" />
          {/* Temple silhouettes */}
          <svg
            className="absolute bottom-0 left-0 right-0 w-full h-48 text-[#D4A574]/10"
            viewBox="0 0 1200 200"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              d="M0,200 L0,150 L100,150 L100,120 L120,80 L140,120 L140,150 L200,150 L200,100 L220,60 L240,100 L240,150 L400,150 L400,130 L420,90 L440,130 L440,150 L600,150 L600,80 L620,40 L640,80 L640,150 L800,150 L800,110 L820,70 L840,110 L840,150 L1000,150 L1000,140 L1020,100 L1040,140 L1040,150 L1200,150 L1200,200 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Layer 2: Floating clouds */}
        <div className="parallax-layer absolute inset-0">
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-32 h-12 bg-white/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ x: [0, -80, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-20 w-40 h-16 bg-white/5 rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#D4A574] uppercase tracking-[0.3em] text-sm mb-4 block">
              Our Story
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About <span className="text-gradient">Saurabh Studio</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A legacy of capturing divine moments in the sacred city of Ayodhya.
              Where tradition meets modern artistry.
            </p>
          </motion.div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Camera Assembly Animation */}
            <motion.div
              ref={cameraRef}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Camera body */}
                <div className="camera-part absolute w-48 h-32 bg-[#2A2A2A] rounded-lg" />
                {/* Lens */}
                <div className="camera-part absolute w-24 h-24 bg-[#1A1A1A] rounded-full border-4 border-[#3A3A3A]">
                  <div className="absolute inset-2 bg-[#0A0A0A] rounded-full">
                    <div className="absolute inset-2 bg-gradient-to-br from-[#D4A574] to-[#F7C873] rounded-full opacity-50" />
                  </div>
                </div>
                {/* Flash */}
                <div className="camera-part absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#3A3A3A] rounded" />
                {/* Viewfinder */}
                <div className="camera-part absolute -top-2 right-8 w-8 h-4 bg-[#2A2A2A] rounded" />
                {/* Grip */}
                <div className="camera-part absolute right-0 w-8 h-28 bg-[#1A1A1A] rounded-r-lg" />
                {/* Shutter button */}
                <div className="camera-part absolute -top-3 right-12 w-4 h-4 bg-[#D4A574] rounded-full" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-[#D4A574] rounded-full blur-[100px] opacity-20" />
              </div>
            </motion.div>

            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3
                className="text-3xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A Journey of <span className="text-[#D4A574]">15+ Years</span>
              </h3>
              <div className="space-y-4 text-white/70">
                <p>
                  Founded in the heart of Ayodhya, Saurabh Studio began with a simple vision:
                  to capture the divine essence of life&apos;s most precious moments. What
                  started as a small photography venture has grown into a full-service
                  creative studio.
                </p>
                <p>
                  We blend traditional aesthetics with cutting-edge technology, ensuring
                  every frame tells a story that transcends time. Our team of passionate
                  artists brings decades of combined experience to every project.
                </p>
                <p>
                  From the sacred ghats of Sarayu to the grandeur of wedding mandaps, we
                  have had the privilege of capturing thousands of moments that our clients
                  cherish forever.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4A574]/20 rounded-lg flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <span className="text-white/80 text-sm">Professional Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4A574]/20 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <span className="text-white/80 text-sm">Award Winning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4A574]/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <span className="text-white/80 text-sm">Expert Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4A574]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <span className="text-white/80 text-sm">Local Expertise</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onViewportEnter={() => setStatsInView(true)}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {STUDIO_STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#D4A574]/30 transition-colors"
              >
                <div
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isActive={statsInView}
                  />
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Our <span className="text-gradient">Team</span>
            </h3>
            <p className="text-white/60 max-w-xl mx-auto">
              The creative minds behind Saurabh Studio
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Photo container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#1A1A1A] mb-4">
                  {/* Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] flex items-center justify-center">
                    <Users className="w-12 h-12 text-white/10" />
                  </div>

                  {/* Hover overlay with bio */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent p-4 flex flex-col justify-end"
                  >
                    <p className="text-white/80 text-sm">{member.bio}</p>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h4 className="text-white font-semibold">{member.name}</h4>
                  <p className="text-[#D4A574] text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
