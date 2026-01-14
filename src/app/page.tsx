"use client";

import dynamic from "next/dynamic";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import SecurityWrapper from "@/components/ui/SecurityWrapper";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";

// Dynamic imports for better performance
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"), {
  ssr: false,
});

const VideoShowcase = dynamic(
  () => import("@/components/sections/VideoShowcase"),
  { ssr: false }
);

const Services = dynamic(() => import("@/components/sections/Services"), {
  ssr: false,
});

const About = dynamic(() => import("@/components/sections/About"), {
  ssr: false,
});

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: false }
);

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: false,
});

export default function Home() {
  return (
    <SecurityWrapper>
      {/* Preloader */}
      <Preloader />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Film grain overlay */}
      <div className="film-grain" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Video Showcase */}
        <VideoShowcase />

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <About />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </SecurityWrapper>
  );
}
