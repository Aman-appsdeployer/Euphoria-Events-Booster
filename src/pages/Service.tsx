import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Clock,
  Heart,
  MapPin,
  Music,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

/* ================= IMAGES ================= */
import privateParty from "@/assets/img10.jpg";
import weddingCouple from "@/assets/img3.jpg";
import corporateEvent from "@/assets/img12.jpg";
import destinationWedding from "@/assets/img5.jpg";
import beachWedding from "@/assets/img6.jpg";
import musicEntertainment from "@/assets/img9.jpg";

/* ================= HERO IMAGES ================= */

import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import hero4 from "@/assets/hero4.jpg";
import hero5 from "@/assets/hero5.jpg"; 

/* ================= HERO CAROUSEL ================= */
const heroImages = [hero1, hero2, hero3, hero4, hero5];

/* ================= TYPEWRITER ================= */
const Typewriter = () => {
  const text = "Planning Experiences";
  const [value, setValue] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 60 : 120;

    const timer = setTimeout(() => {
      setValue((prev) =>
        deleting
          ? text.substring(0, prev.length - 1)
          : text.substring(0, prev.length + 1),
      );

      if (!deleting && value === text) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && value === "") {
        setDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [value, deleting]);

  return (
    <span className="text-gradient-gold inline-block">
      {value}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

/* ================= DATA ================= */
const services = [
  {
    title: "Wedding Planning",
    description:
      "Complete wedding planning services from concept to execution.",
    image: weddingCouple,
    icon: Heart,
  },
  {
    title: "Destination Weddings",
    description: "Luxury destination weddings with precision and elegance.",
    image: destinationWedding,
    icon: MapPin,
  },
  {
    title: "Beach Weddings",
    description: "Romantic beachside weddings with stunning décor.",
    image: beachWedding,
    icon: Sparkles,
  },
  {
    title: "Corporate Events",
    description: "Professional conferences, launches, and brand events.",
    image: corporateEvent,
    icon: Briefcase,
  },
  {
    title: "Music & Entertainment",
    description: "Live bands, DJs, and premium entertainment.",
    image: musicEntertainment,
    icon: Music,
  },
  {
    title: "Private Parties",
    description: "Birthdays, anniversaries, and exclusive celebrations.",
    image: privateParty,
    icon: PartyPopper,
  },
];

const highlights = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    desc: "Luxury designs with fine attention to detail.",
  },
  {
    icon: Clock,
    title: "On-Time Execution",
    desc: "Perfect coordination and delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Vendors",
    desc: "Reliable partners for flawless events.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Personal planners for every event.",
  },
];

const clients = [
  { name: "Taj Hotels", logo: "/logos/taj-hotels.svg" },
  { name: "ITC Hotels", logo: "/logos/itc.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Infosys", logo: "/logos/infosys.svg" },
];

/* ================= PAGE ================= */
const Services = () => {
  const [index, setIndex] = useState(0);

  /* Auto slide carousel */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img
              key={index}
              src={heroImages[index]}
              alt="Event Planning Services"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-24">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="section-title mb-4"
            >
              Our Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-6"
            >
              Exceptional Event <Typewriter />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground max-w-xl mb-10 text-lg"
            >
              From luxury weddings to corporate events, we deliver seamless
              experiences through creativity and precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
              className="flex gap-5"
            >
              <a href="#services" className="btn-gold">
                Explore Our Services
              </a>
              <a href="/contact" className="btn-outline-gold">
                Get a Custom Quote
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-28 bg-secondary/30 relative overflow-hidden">
        {/* Floating Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 relative">
          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -12, scale: 1.04, rotateX: 4, rotateY: -4 }}
                className="relative group perspective-1000"
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-yellow-400/20 to-pink-400/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                {/* Card */}
                <div className="relative glass-card p-9 text-center rounded-3xl border border-white/20 backdrop-blur-xl shadow-xl transition-all duration-300 h-[260px] flex flex-col justify-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.2 }}
                    className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5 shadow-md"
                  >
                    <item.icon className="text-primary w-8 h-8" />
                  </motion.div>

                  {/* Title */}
                  <h4 className="font-semibold text-xl mb-2 tracking-wide">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card shadow-lg">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-6">
                  <service.icon className="w-8 h-8 text-primary mb-3" />

                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-28 bg-secondary/30 relative overflow-hidden">
        {/* Floating Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 max-w-6xl relative">
          {/* ================= HEADER ================= */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="section-title tracking-widest uppercase">
              How We Work
            </p>

            <h2 className="section-heading mt-3">
              Our Event Planning{" "}
              <span className="text-gradient-gold">Process</span>
            </h2>

            <p className="text-muted-foreground mt-4 text-lg">
              A carefully crafted approach that ensures clarity, creativity, and
              flawless execution at every stage of your event.
            </p>

            {/* Decorative Line */}
            <div className="mt-6 flex justify-center">
              <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </div>
          </div>

          {/* ================= PROCESS STEPS ================= */}
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Timeline Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

            {[
              {
                title: "Consultation & Understanding",
                desc: "We begin by understanding your vision, preferences, and expectations in detail.",
              },
              {
                title: "Concept & Design",
                desc: "Our creative team develops themes, layouts, and design concepts tailored to you.",
              },
              {
                title: "Planning & Coordination",
                desc: "We manage vendors, timelines, logistics, and budgets with precision.",
              },
              {
                title: "Flawless Execution",
                desc: "On the event day, we handle every detail while you enjoy stress-free moments.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -12, scale: 1.04 }}
                className="relative group"
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-yellow-400/20 to-pink-400/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                {/* Card */}
                <div
                  className="relative glass-card p-9 text-center rounded-3xl border border-white/20 backdrop-blur-xl shadow-xl 
                          h-[320px] flex flex-col justify-between"
                >
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full 
                         bg-gradient-to-br from-primary to-yellow-400 text-white 
                         font-bold flex items-center justify-center shadow-lg"
                  >
                    {i + 1}
                  </motion.div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-xl mb-4 tracking-wide">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <span
                    className="block w-16 h-[2px] mx-auto mt-6 
                             bg-gradient-to-r from-transparent via-primary to-transparent 
                             opacity-0 group-hover:opacity-100 transition duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-10 bg-secondary/30 text-center overflow-hidden">
        {/* Floating Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />

        {/* Soft Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative max-w-3xl">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="section-heading mb-6"
          >
            Ready to Create an{" "}
            <span className="text-gradient-gold">Unforgettable Event?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed text-lg"
          >
            From planning and coordination to flawless execution, our expert
            team ensures every detail is handled seamlessly — so you can focus
            on enjoying the moments that truly matter.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {/* Primary Button */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us Today</span>

              {/* Shine Effect */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                         translate-x-[-120%] group-hover:translate-x-[120%] 
                         transition-transform duration-700"
              ></span>
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline-gold"
            >
              WhatsApp Us
            </motion.a>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "140px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-14"
          />
        </div>
      </section>

      {/* //================= WHO WE SERVE ================= // */}

      <section className="py-10 bg-secondary/30 relative overflow-hidden">
        {/* Floating Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 text-center relative">
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-20">
            <p className="section-title tracking-widest uppercase">
              Who We Serve
            </p>

            <h2 className="section-heading mt-3 mb-4">
              Curated Experiences for{" "}
              <span className="text-gradient-gold">Every Occasion</span>
            </h2>

            <p className="text-muted-foreground text-lg">
              We craft exceptional experiences tailored to every celebration,
              brand, and story.
            </p>

            {/* Decorative Line */}
            <div className="mt-6 flex justify-center">
              <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Luxury Weddings",
                desc: "Bespoke celebrations crafted with elegance, emotion, and timeless detail.",
              },
              {
                title: "Corporate & Brand Events",
                desc: "Strategic, high-impact events that strengthen brands and inspire audiences.",
              },
              {
                title: "Private Celebrations",
                desc: "Intimate moments transformed into unforgettable memories.",
              },
              {
                title: "Destination Events",
                desc: "Extraordinary experiences in breathtaking locations, flawlessly executed.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -12, scale: 1.04, rotateX: 4, rotateY: -4 }}
                className="relative group perspective-1000"
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-yellow-400/20 to-pink-400/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                {/* Card */}
                <div
                  className="relative glass-card p-9 text-center rounded-3xl border border-white/20 backdrop-blur-xl shadow-xl 
                          h-[260px] flex flex-col justify-center"
                >
                  {/* Title */}
                  <h3 className="font-semibold text-xl mb-4 tracking-wide">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {item.desc}
                  </p>

                  {/* Bottom Accent Line */}
                  <span
                    className="absolute bottom-6 left-10 right-10 h-[2px] 
                             bg-gradient-to-r from-transparent via-primary to-transparent 
                             opacity-0 group-hover:opacity-100 transition duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        {/* Floating Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 text-center relative mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Trusted by Clients Across India
          </p>

          <h3 className="section-heading text-2xl md:text-3xl font-semibold">
            Brands & Families Who Believe in Our{" "}
            <span className="text-gradient-gold">Work</span>
          </h3>

          {/* Decorative Line */}
          <div className="mt-6 flex justify-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          </div>
        </div>

        {/* 🔼 TOP MARQUEE (Left ➝ Right) */}
        <Marquee speed={22} gradient={false} className="mb-12">
          {clients.map((client, i) => (
            <div
              key={`top-${i}`}
              className="mx-16 group flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 md:h-12 grayscale opacity-50 transition-all duration-500 
                     group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
          ))}
        </Marquee>

        {/* 🔽 BOTTOM MARQUEE (Right ➝ Left) */}
        <Marquee speed={22} direction="right" gradient={false}>
          {clients.map((client, i) => (
            <div
              key={`bottom-${i}`}
              className="mx-16 group flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 md:h-12 grayscale opacity-50 transition-all duration-500 
                     group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
          ))}
        </Marquee>
      </section>
    </main>
  );
};

export default Services;
