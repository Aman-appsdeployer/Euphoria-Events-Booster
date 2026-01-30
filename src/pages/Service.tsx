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
import weddingCouple from "@/assets/img11.jpg";
import corporateEvent from "@/assets/img12.jpg";
import destinationWedding from "@/assets/img5.jpg";
import beachWedding from "@/assets/img6.jpg";
import musicEntertainment from "@/assets/img9.jpg";

/* ================= HERO CAROUSEL ================= */
const heroImages = [
  weddingCouple,
  destinationWedding,
  corporateEvent,
];

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
          : text.substring(0, prev.length + 1)
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
    description:
      "Luxury destination weddings with precision and elegance.",
    image: destinationWedding,
    icon: MapPin,
  },
  {
    title: "Beach Weddings",
    description:
      "Romantic beachside weddings with stunning décor.",
    image: beachWedding,
    icon: Sparkles,
  },
  {
    title: "Corporate Events",
    description:
      "Professional conferences, launches, and brand events.",
    image: corporateEvent,
    icon: Briefcase,
  },
  {
    title: "Music & Entertainment",
    description:
      "Live bands, DJs, and premium entertainment.",
    image: musicEntertainment,
    icon: Music,
  },
  {
    title: "Private Parties",
    description:
      "Birthdays, anniversaries, and exclusive celebrations.",
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
              From luxury weddings to corporate events, we deliver
              seamless experiences through creativity and precision.
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
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <item.icon className="text-primary w-8 h-8 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
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
      <section className="py-10 bg-secondary/30 relative overflow-hidden">
  {/* Subtle background texture */}
  <div className="absolute inset-0 bg-secondary/30 from-primary/5 to-transparent pointer-events-none" />

  <div className="container mx-auto px-4 max-w-6xl relative">
    
    {/* ================= HEADER ================= */}
    <div className="text-center max-w-2xl mx-auto mb-20">
      <p className="section-title">How We Work</p>

      <h2 className="section-heading">
        Our Event Planning{" "}
        <span className="text-gradient-gold">Process</span>
      </h2>

      <p className="text-muted-foreground mt-4">
        A carefully crafted approach that ensures clarity, creativity,
        and flawless execution at every stage of your event.
      </p>
    </div>

    {/* ================= PROCESS STEPS ================= */}
    <div className="grid md:grid-cols-4 gap-10">
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="glass-card p-10 text-center 
                     hover:-translate-y-1 hover:shadow-2xl 
                     transition-all duration-300"
        >
          {/* Step Number */}
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground 
                          flex items-center justify-center mx-auto mb-6 
                          font-bold text-lg">
            {i + 1}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-xl mb-4">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {step.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="relative py-10 bg-background text-center overflow-hidden">
  {/* Soft background accent */}
  <div className="absolute inset-0 bg-secondary/30 from-primary/10 to-transparent pointer-events-none" />

  <div className="container mx-auto px-4 relative max-w-3xl">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-heading mb-6"
    >
      Ready to Create an{" "}
      <span className="text-gradient-gold">
        Unforgettable Event?
      </span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed"
    >
      From planning and coordination to flawless execution, our expert
      team ensures every detail is handled seamlessly — so you can
      focus on enjoying the moments that truly matter.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap justify-center gap-4"
    >
      <a href="/contact" className="btn-gold">
        Contact Us Today
      </a>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="btn-outline-gold"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp Us
      </a>
    </motion.div>
  </div>
</section>
{/* //================= WHO WE SERVE ================= // */}

<section className="py-24 bg-secondary/30">
  <div className="container mx-auto px-4 text-center">
    <p className="section-title">Who We Serve</p>
    <h2 className="section-heading mb-14">
      Curated Experiences for{" "}
      <span className="text-gradient-gold">Every Occasion</span>
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        {
          title: "Luxury Weddings",
          desc: "Bespoke celebrations crafted with elegance, emotion, and timeless detail."
        },
        {
          title: "Corporate & Brand Events",
          desc: "Strategic, high-impact events that strengthen brands and inspire audiences."
        },
        {
          title: "Private Celebrations",
          desc: "Intimate moments transformed into unforgettable memories."
        },
        {
          title: "Destination Events",
          desc: "Extraordinary experiences in breathtaking locations, flawlessly executed."
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
        >
          <h3 className="font-semibold text-lg mb-3">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* ================= TRUSTED BY ================= */}
<section className="py-20 bg-background overflow-hidden">
  <div className="container mx-auto px-4 text-center">
    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
      Trusted by Clients Across India
    </p>

    <h3 className="text-2xl md:text-3xl font-semibold mb-12">
      Brands & Families Who Believe in Our Work
    </h3>
  </div>

  {/* 🔼 TOP MARQUEE (Left ➝ Right) */}
  <Marquee
    speed={25}
    gradient={false}
    className="mb-10"
  >
    {clients.map((client, i) => (
      <img
        key={`top-${i}`}
        src={client.logo}
        alt={client.name}
        className="h-8 mx-14 grayscale opacity-50"
      />
    ))}
  </Marquee>

  {/* 🔲 CENTER GRID (STATIC) */}
  {/* <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
      {clients.map((client, i) => (
        <div
          key={`grid-${i}`}
          className="h-16 flex items-center justify-center rounded-lg bg-secondary/40 hover:bg-secondary transition"
        >
          <img
            src={client.logo}
            alt={client.name}
            className="max-h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
          />
        </div>
      ))}
    </div>
  </div> */}

  {/* 🔽 BOTTOM MARQUEE (Right ➝ Left) */}
  <Marquee
    speed={25}
    direction="right"
    gradient={false}
    className="mt-10"
  >
    {clients.map((client, i) => (
      <img
        key={`bottom-${i}`}
        src={client.logo}
        alt={client.name}
        className="h-8 mx-14 grayscale opacity-50"
      />
    ))}
  </Marquee>
</section>
    </main>
  );
};

export default Services;
