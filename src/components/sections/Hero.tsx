"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Sparkles, Camera, Play } from "lucide-react";
import gsap from "gsap";

// Particle system for Ram Mandir silhouette effect
function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const [positions] = useState(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      // Create temple-like distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2 + Math.random() * 3;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi) * 0.8 - 0.5;
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    return positions;
  });

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4A574"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

// Floating camera 3D scene
function CameraScene() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ParticleField />
    </group>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    // Initial loading animation sequence
    const timer = setTimeout(() => {
      setShowFlash(true);
      setTimeout(() => {
        setIsLoaded(true);
        setShowFlash(false);
      }, 300);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded && titleRef.current && subtitleRef.current && ctaRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      );
    }
  }, [isLoaded]);

  const handleCtaClick = () => {
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 300);
    
    // Scroll to portfolio
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Flash effect */}
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-white z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#D4A574" />
          <CameraScene />
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]/50 z-10 pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 vignette z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <Sparkles className="w-8 h-8 text-[#D4A574] animate-pulse" />
            <div className="absolute inset-0 blur-xl bg-[#D4A574] opacity-50" />
          </div>
        </motion.div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-gradient">Saurabh</span>
          <br />
          <span className="text-white/90">Studio</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto opacity-0"
        >
          Where <span className="text-[#D4A574]">frames come alive</span> — Premium photography
          and cinematography with cutting-edge digital technology
        </p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-sm uppercase tracking-[0.3em] text-[#D4A574]/60 mb-10"
        >
          Capturing Divine Moments
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            ref={ctaRef}
            onClick={handleCtaClick}
            className="group relative btn-primary flex items-center gap-3 opacity-0 pulse-glow"
          >
            <Camera className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>Capture Your Moments</span>
          </button>

          <motion.a
            href="#video-showcase"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-2 text-white/70 hover:text-[#D4A574] transition-colors group"
          >
            <span className="w-12 h-12 rounded-full border-2 border-white/30 group-hover:border-[#D4A574] flex items-center justify-center transition-all group-hover:scale-110">
              <Play className="w-5 h-5 ml-1" />
            </span>
            <span>Watch Showreel</span>
          </motion.a>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#D4A574] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>

      {/* Cinematic bars */}
      <div className="absolute top-0 left-0 right-0 h-[5vh] bg-black z-30" />
      <div className="absolute bottom-0 left-0 right-0 h-[5vh] bg-black z-30" />
    </section>
  );
}
