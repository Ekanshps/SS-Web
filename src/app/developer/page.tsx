"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Globe,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Layers,
  Palette,
  Rocket,
  Shield,
  Calendar,
  User,
  Building2,
  Heart,
} from "lucide-react";

// Developer Info
const DEVELOPER = {
  name: "Ekansh Pratap Singh",
  company: "DevArea",
  role: "Full Stack Developer",
  email: "ekanshprataps@gmail.com",
  phone: "+91 7068317379",
  whatsapp: "+917068317379",
  location: "Gonda, Uttar Pradesh, India",
  tagline: "Building Digital Experiences",
  avatar: "/dev.png", // Add your photo
  social: {
    youtube: "https://youtube.com/@DevArea",
    github: "https://github.com/Ekanshps",
    linkedin: "https://linkedin.com/in/ekanshsinghyt/",
    instagram: "https://instagram.com/ekansh.pratap/",
    twitter: "https://x.com/Ekansh_p_singh",
    portfolio: "https://epsingh.in", // Update with your portfolio
  },
};

// Services
const SERVICES = [
  {
    category: "Web Development",
    icon: Code2,
    items: [
      "React.js / Next.js Applications",
      "Full Stack Development (MERN/MEVN)",
      "E-commerce Websites",
      "Portfolio & Business Websites",
      "Progressive Web Apps (PWA)",
      "API Development",
    ],
  },
  {
    category: "Design & Animation",
    icon: Palette,
    items: [
      "UI/UX Design",
      "Motion Graphics",
      "3D Web Experiences (Three.js)",
      "Animation (GSAP, Framer Motion)",
    ],
  },
  {
    category: "Other Services",
    icon: Layers,
    items: [
      "SEO Optimization",
      "Performance Optimization",
      "Website Maintenance",
      "Hosting & Deployment",
    ],
  },
];

// Pricing
const PRICING = [
  { service: "Landing Page", price: "₹8,000" },
  { service: "Business Website (5-10 pages)", price: "₹20,000" },
  { service: "E-commerce Website", price: "₹25,000+" },
  { service: "Custom Web Application", price: "₹50,000+" },
  { service: "Website Maintenance (Monthly)", price: "₹2,000" },
];

// Project Details
const PROJECT = {
  name: "Saurabh Studio Website",
  client: "Saurabh Studio, Akhilesh Maurya",
  type: "Photography Studio Website",
  duration: "3 weeks",
  completionDate: "January 2026",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "GSAP", "Framer Motion"],
  features: [
    "Custom 3D Hero Section with Particle System",
    "Aperture-style Navigation",
    "Portfolio Gallery with Lightbox",
    "YouTube Video Integration",
    "3D Flip Service Cards",
    "Parallax About Section",
    "Multi-stage Contact Form",
    "Content Protection (Anti-download)",
    "Formspree Integration",
    "Responsive Design",
    "SEO Optimization",
    "Performance Optimization",
  ],
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DeveloperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A] text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 165, 116, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Site</span>
        </Link>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="relative w-32 h-32 mx-auto mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574] to-[#8B6914] rounded-full animate-pulse" />
            <div className="absolute inset-1 bg-[#0A0A0A] rounded-full flex items-center justify-center">
              <Code2 className="w-12 h-12 text-[#D4A574]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Building2 className="w-4 h-4 text-[#D4A574]" />
            <span className="text-[#D4A574] text-sm tracking-wider uppercase">
              {DEVELOPER.company}
            </span>
          </motion.div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-3">
            {DEVELOPER.name}
          </h1>
          <p className="text-gray-400 text-lg mb-2">{DEVELOPER.role}</p>
          <p className="text-[#D4A574] italic">{DEVELOPER.tagline}</p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            {[
              { icon: Youtube, href: DEVELOPER.social.youtube, label: "YouTube" },
              { icon: Github, href: DEVELOPER.social.github, label: "GitHub" },
              { icon: Linkedin, href: DEVELOPER.social.linkedin, label: "LinkedIn" },
              { icon: Instagram, href: DEVELOPER.social.instagram, label: "Instagram" },
              { icon: Twitter, href: DEVELOPER.social.twitter, label: "Twitter" },
              { icon: Globe, href: DEVELOPER.social.portfolio, label: "Portfolio" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-[#D4A574]/20 hover:text-[#D4A574] transition-all group"
                title={label}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-gray-400"
          >
            <a
              href={`mailto:${DEVELOPER.email}`}
              className="flex items-center gap-2 hover:text-[#D4A574] transition-colors"
            >
              <Mail className="w-4 h-4" />
              {DEVELOPER.email}
            </a>
            <a
              href={`tel:${DEVELOPER.phone}`}
              className="flex items-center gap-2 hover:text-[#D4A574] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {DEVELOPER.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {DEVELOPER.location}
            </span>
          </motion.div>
        </motion.header>

        {/* Project Details Card */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#D4A574]/10 to-transparent p-8 rounded-2xl border border-[#D4A574]/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#D4A574]/20 rounded-lg">
                <Sparkles className="w-6 h-6 text-[#D4A574]" />
              </div>
              <h2 className="font-playfair text-2xl font-bold">This Project</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#D4A574]" />
                  <div>
                    <p className="text-gray-400 text-sm">Client</p>
                    <p className="font-medium">{PROJECT.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-[#D4A574]" />
                  <div>
                    <p className="text-gray-400 text-sm">Project Type</p>
                    <p className="font-medium">{PROJECT.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#D4A574]" />
                  <div>
                    <p className="text-gray-400 text-sm">Duration</p>
                    <p className="font-medium">{PROJECT.duration}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-3">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {PROJECT.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-400 text-sm mb-4">Features Developed</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {PROJECT.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Services */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-playfair text-3xl font-bold text-center mb-10"
          >
            Services Offered
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <motion.div
                key={service.category}
                variants={itemVariants}
                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#D4A574]/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#D4A574]/10 rounded-lg group-hover:bg-[#D4A574]/20 transition-colors">
                    <service.icon className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <h3 className="font-semibold">{service.category}</h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500/70 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pricing */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-playfair text-3xl font-bold text-center mb-10"
          >
            Pricing
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left px-6 py-4 text-[#D4A574] font-medium">Service</th>
                  <th className="text-right px-6 py-4 text-[#D4A574] font-medium">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((item, index) => (
                  <tr
                    key={item.service}
                    className={`border-t border-white/5 ${
                      index % 2 === 0 ? "bg-white/[0.02]" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-300">{item.service}</td>
                    <td className="px-6 py-4 text-right font-semibold text-white">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-4 bg-white/5 text-center text-sm text-gray-500">
              * Prices may vary based on project requirements
            </div>
          </motion.div>
        </motion.section>

        {/* Terms of Service */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-playfair text-3xl font-bold text-center mb-10"
          >
            Terms of Service
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              { icon: Shield, text: "Upon final payment, the client owns the website code" },
              { icon: Heart, text: "6 months of free support included" },
              { icon: Rocket, text: "Major updates beyond scope may require additional charges" },
              { icon: Globe, text: "Client responsible for hosting costs" },
            ].map((term) => (
              <div
                key={term.text}
                className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <term.icon className="w-5 h-5 text-[#D4A574] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{term.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#D4A574]/20 via-[#D4A574]/10 to-[#D4A574]/20 p-10 rounded-2xl border border-[#D4A574]/20">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              Want a Similar Website?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Let&apos;s build something amazing together. Contact me for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${DEVELOPER.whatsapp}?text=Hi, I saw your work on Saurabh Studio website and I'm interested in getting a website built.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Me
              </a>
              <a
                href={`mailto:${DEVELOPER.email}?subject=Website Development Inquiry&body=Hi Ekansh, I saw your work on Saurabh Studio website and I'm interested in getting a website built.`}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-[#D4A574] font-semibold mb-1">Developed by DevArea</p>
          <p className="text-gray-500 text-sm italic mb-4">Building Digital Experiences</p>
          <p className="text-gray-600 text-xs">© 2026 All Rights Reserved</p>
        </motion.footer>
      </div>
    </div>
  );
}
