"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EVENT_TYPES, BUDGET_RANGES, STUDIO_INFO } from "@/lib/constants";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  ChevronRight,
  ChevronLeft,
  Check,
  Loader2,
  Camera,
  Aperture,
  Focus,
  Image,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please select a date"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const stages = [
  { id: 1, title: "EXPOSURE", subtitle: "Basic Details", icon: Aperture },
  { id: 2, title: "DEVELOPMENT", subtitle: "Requirements", icon: Focus },
  { id: 3, title: "FIXING", subtitle: "Review", icon: Image },
  { id: 4, title: "FINAL PRINT", subtitle: "Confirmation", icon: Camera },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const formData = watch();

  const validateStage = async (stage: number): Promise<boolean> => {
    switch (stage) {
      case 1:
        return await trigger(["name", "email", "phone"]);
      case 2:
        return await trigger(["eventType", "eventDate", "budget"]);
      default:
        return true;
    }
  };

  const nextStage = async () => {
    const isValid = await validateStage(currentStage);
    if (isValid && currentStage < 4) {
      setCurrentStage(currentStage + 1);
    }
  };

  const prevStage = () => {
    if (currentStage > 1) {
      setCurrentStage(currentStage - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Generate unique booking ID
      const newBookingId = `SS${Date.now().toString(36).toUpperCase()}`;
      setBookingId(newBookingId);
      
      // Get labels for display
      const budgetLabel = BUDGET_RANGES.find((r) => r.value === data.budget)?.label || data.budget;
      const eventLabel = EVENT_TYPES.find((e) => e.value === data.eventType)?.label || data.eventType;
      
      // Submit to Formspree
      // NOTE: Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
      // 1. Go to https://formspree.io/ and create free account
      // 2. Create a new form and get the form ID (e.g., 'xyzabcde')
      // 3. Replace the ID below
      
      const formspreeEndpoint = "https://formspree.io/f/YOUR_FORMSPREE_ID";
      
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          booking_id: newBookingId,
          name: data.name,
          email: data.email,
          phone: `+91 ${data.phone}`,
          event_type: eventLabel,
          event_date: data.eventDate,
          budget: budgetLabel,
          message: data.message || "No additional message",
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setCurrentStage(4);
        
        // Redirect to home after 3 seconds
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Darkroom ambient effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Red darkroom glow */}
        <div className="absolute inset-0 bg-gradient-radial from-red-900/5 via-transparent to-transparent" />
        {/* Corner glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A574] rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-[200px] opacity-5" />
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
            Get In Touch
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The <span className="text-gradient">Darkroom</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Let&apos;s develop your vision together. Share your requirements and we&apos;ll
            create something beautiful.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                const isActive = currentStage === stage.id;
                const isCompleted = currentStage > stage.id;

                return (
                  <div key={stage.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                          isActive
                            ? "bg-[#D4A574] text-[#0A0A0A] scale-110"
                            : isCompleted
                              ? "bg-green-500 text-white"
                              : "bg-white/10 text-white/40"
                        )}
                      >
                        {isCompleted ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Icon className="w-5 h-5" />
                        )}
                      </div>
                      <p
                        className={cn(
                          "text-xs mt-2 hidden sm:block font-medium",
                          isActive ? "text-[#D4A574]" : "text-white/80"
                        )}
                      >
                        {stage.title}
                      </p>
                    </div>
                    {index < stages.length - 1 && (
                      <div
                        className={cn(
                          "w-8 sm:w-16 h-0.5 mx-2",
                          isCompleted ? "bg-green-500" : "bg-white/10"
                        )}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Form Container - Darkroom themed */}
            <div className="relative bg-[#1A1A1A] rounded-2xl p-6 md:p-8 border border-white/10 overflow-hidden">
              {/* Red light ambient effect on focus */}
              <div className="absolute inset-0 darkroom-glow pointer-events-none opacity-0 transition-opacity duration-500 peer-focus:opacity-100" />

              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {/* Stage 1: Basic Details */}
                  {currentStage === 1 && (
                    <motion.div
                      key="stage1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-[#D4A574] text-sm mb-2 font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          {...register("name")}
                          placeholder="Enter your full name"
                          className={cn(
                            "input-darkroom peer",
                            errors.name && "border-red-500"
                          )}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[#D4A574] text-sm mb-2 font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          placeholder="your@email.com"
                          className={cn(
                            "input-darkroom",
                            errors.email && "border-red-500"
                          )}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[#D4A574] text-sm mb-2 font-medium">
                          Phone Number
                        </label>
                        <div className="flex">
                          <span className="flex items-center px-4 bg-white/5 border border-r-0 border-[#262626] rounded-l-lg text-[#D4A574]">
                            +91
                          </span>
                          <input
                            type="tel"
                            {...register("phone")}
                            placeholder="98765 43210"
                            className={cn(
                              "input-darkroom rounded-l-none",
                              errors.phone && "border-red-500"
                            )}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Stage 2: Requirements */}
                  {currentStage === 2 && (
                    <motion.div
                      key="stage2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-[#D4A574] text-sm mb-2 font-medium">
                          Event Type
                        </label>
                        <select
                          {...register("eventType")}
                          className={cn(
                            "input-darkroom",
                            errors.eventType && "border-red-500"
                          )}
                          style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
                        >
                          <option value="" style={{ backgroundColor: '#1a1a1a', color: '#888888' }}>Select event type</option>
                          {EVENT_TYPES.map((type) => (
                            <option key={type.value} value={type.value} style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                        {errors.eventType && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.eventType.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[#D4A574] text-sm mb-2 font-medium">
                          Event Date
                        </label>
                        <input
                          type="date"
                          {...register("eventDate")}
                          className={cn(
                            "input-darkroom",
                            errors.eventDate && "border-red-500"
                          )}
                        />
                        {errors.eventDate && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.eventDate.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[#D4A574] text-sm mb-2 font-medium">
                          Budget Range
                        </label>
                        <select
                          {...register("budget")}
                          className={cn(
                            "input-darkroom",
                            errors.budget && "border-red-500"
                          )}
                          style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
                        >
                          <option value="" style={{ backgroundColor: '#1a1a1a', color: '#888888' }}>Select budget range</option>
                          {BUDGET_RANGES.map((range) => (
                            <option key={range.value} value={range.value} style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>
                              {range.label}
                            </option>
                          ))}
                        </select>
                        {errors.budget && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.budget.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[#D4A574] text-sm mb-2 font-medium">
                          Additional Message (Optional)
                        </label>
                        <textarea
                          {...register("message")}
                          placeholder="Tell us more about your requirements..."
                          rows={4}
                          className="input-darkroom resize-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Stage 3: Review */}
                  {currentStage === 3 && (
                    <motion.div
                      key="stage3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white/5 rounded-lg p-6 space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-4">
                          Review Your Details
                        </h4>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[#D4A574]/80 text-sm font-medium">Name</p>
                            <p className="text-white">{formData.name || "-"}</p>
                          </div>
                          <div>
                            <p className="text-[#D4A574]/80 text-sm font-medium">Email</p>
                            <p className="text-white">{formData.email || "-"}</p>
                          </div>
                          <div>
                            <p className="text-[#D4A574]/80 text-sm font-medium">Phone</p>
                            <p className="text-white">+91 {formData.phone || "-"}</p>
                          </div>
                          <div>
                            <p className="text-[#D4A574]/80 text-sm font-medium">Event Type</p>
                            <p className="text-white capitalize">
                              {formData.eventType?.replace("-", " ") || "-"}
                            </p>
                          </div>
                          <div>
                            <p className="text-[#D4A574]/80 text-sm font-medium">Event Date</p>
                            <p className="text-white">{formData.eventDate || "-"}</p>
                          </div>
                          <div>
                            <p className="text-[#D4A574]/80 text-sm font-medium">Budget</p>
                            <p className="text-white">
                              {BUDGET_RANGES.find((r) => r.value === formData.budget)
                                ?.label || "-"}
                            </p>
                          </div>
                        </div>

                        {formData.message && (
                          <div className="pt-4 border-t border-white/10">
                            <p className="text-[#D4A574]/80 text-sm font-medium">Message</p>
                            <p className="text-white">{formData.message}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Stage 4: Confirmation */}
                  {currentStage === 4 && isSubmitted && (
                    <motion.div
                      key="stage4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-8"
                    >
                      {/* Photo developing animation */}
                      <motion.div
                        initial={{ filter: "sepia(100%) brightness(50%)" }}
                        animate={{ filter: "sepia(0%) brightness(100%)" }}
                        transition={{ duration: 2 }}
                        className="w-32 h-32 mx-auto mb-6 rounded-lg bg-gradient-to-br from-[#D4A574] to-[#F7C873] flex items-center justify-center"
                      >
                        <Check className="w-16 h-16 text-[#0A0A0A]" />
                      </motion.div>

                      <h3
                        className="text-2xl font-bold text-white mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Booking Received!
                      </h3>
                      <p className="text-white/60 mb-2">
                        Thank you, {formData.name}! We&apos;ll contact you within 24 hours.
                      </p>
                      <p className="text-[#D4A574]/80 text-sm mb-6">
                        Redirecting to home in 3 seconds...
                      </p>

                      {/* Photo hanging on clothesline */}
                      <motion.div
                        initial={{ y: -20, rotate: -5 }}
                        animate={{ y: [0, 5, 0], rotate: [-5, 5, -5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block"
                      >
                        <div className="relative">
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-white/30" />
                          <div className="px-6 py-4 bg-white/10 rounded-lg border border-white/20">
                            <p className="text-[#D4A574] text-sm">
                              Booking #{bookingId}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                {!isSubmitted && (
                  <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                    <button
                      type="button"
                      onClick={prevStage}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white transition-colors",
                        currentStage === 1 && "invisible"
                      )}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </button>

                    {currentStage < 3 ? (
                      <button
                        type="button"
                        onClick={nextStage}
                        className="btn-primary flex items-center gap-2"
                      >
                        Next
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    ) : currentStage === 3 ? (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Camera className="w-5 h-5" />
                            Submit Booking
                          </>
                        )}
                      </button>
                    ) : null}
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#D4A574]/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#D4A574]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D4A574] transition-colors">
                  <Phone className="w-6 h-6 text-[#D4A574] group-hover:text-[#0A0A0A]" />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Call Us</p>
                  <p className="text-white font-medium">{STUDIO_INFO.phone}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#D4A574]/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#D4A574]/20 rounded-lg flex items-center justify-center group-hover:bg-[#D4A574] transition-colors">
                  <Mail className="w-6 h-6 text-[#D4A574] group-hover:text-[#0A0A0A]" />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Email Us</p>
                  <p className="text-white font-medium">{STUDIO_INFO.email}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={STUDIO_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-sm">WhatsApp</p>
                  <p className="text-white font-medium">Chat with us instantly</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-[#D4A574]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#D4A574]" />
                </div>
                <div>
                  <p className="text-white/40 text-sm">Visit Us</p>
                  <p className="text-white font-medium">
                    {STUDIO_INFO.address.line1}
                    <br />
                    {STUDIO_INFO.address.line2} - {STUDIO_INFO.address.pin}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/40 text-sm mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href={STUDIO_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={STUDIO_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href={STUDIO_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:text-[#FF0000] hover:bg-[#FF0000]/10 transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#D4A574] mx-auto mb-2" />
                  <p className="text-white/40 text-sm">
                    Interactive map coming soon
                  </p>
                </div>
              </div>

              {/* Decorative map grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
