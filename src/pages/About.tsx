import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ================= IMAGES ================= */
import about4 from "@/assets/img1.jpg";
import about1 from "@/assets/img13.jpg";
import about2 from "@/assets/img5.jpg";
import about3 from "@/assets/img8.jpg";

import hero1 from "@/assets/img1.jpg";
import hero2 from "@/assets/img2.jpg";
import hero3 from "@/assets/img3.jpg";

const images = [hero1, hero2, hero3];

/* ================= DATA ================= */
const features = [
  "Luxury Wedding Planning",
  "Destination Weddings",
  "Creative Event Design",
  "End-to-End Execution",
];

const values = [
  {
    icon: HeartHandshake,
    title: "Client First",
    desc: "Your happiness and peace of mind are our top priority.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    desc: "Every event is uniquely designed with fresh ideas.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    desc: "Honest communication and reliable execution.",
  },
];

/* ================= TYPEWRITER ================= */
const Typewriter = () => {
  const text = "Unforgettable Celebrations";
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      setDisplay((prev) =>
        isDeleting
          ? text.substring(0, prev.length - 1)
          : text.substring(0, prev.length + 1)
      );

      if (!isDeleting && display === text) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && display === "") {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [display, isDeleting]);

  return (
    <span className="text-gradient-gold">
      {display}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

/* ================= PAGE ================= */
const About = () => {
  const [index, setIndex] = useState(0);

  /* Carousel Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.img
              key={index}
              src={images[index]}
              alt="Luxury Wedding & Event Setup"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32">
          <div className="max-w-3xl text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-widest text-sm mb-4 text-primary"
            >
              Premium Wedding & Event Planners
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl xl:text-7xl font-serif font-bold mb-6"
            >
              Crafting <Typewriter />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mb-10 text-white/90"
            >
              Luxury weddings, destination celebrations, and bespoke events
              across Kerala and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <a href="#contact" className="btn-gold">
                Book a Consultation
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
        </div>
      </section>
      {/* ================= OUR STORY ================= */}
     <section className="py-24 bg-background">
  <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

    {/* ================= IMAGE ================= */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="rounded-3xl overflow-hidden shadow-xl">
        <img
          src={about4} // use your best emotional image
          alt="Euphoria Events Story"
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* Small floating badge (optional but premium) */}
      <div className="absolute -bottom-6 left-6 bg-card px-6 py-3 rounded-full shadow-lg text-sm font-medium">
        Crafting Memories Since Day One
      </div>
    </motion.div>

    {/* ================= CONTENT ================= */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <p className="section-title mb-2">Our Story</p>

      <h2 className="section-heading mb-6">
        Turning Dreams Into{" "}
        <span className="text-gradient-gold">
          Beautiful Celebrations
        </span>
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-6">
        Euphoria Events Booster was born from a genuine passion for
        creating unforgettable moments. What began as a small creative
        vision has grown into a trusted event management company known
        for elegance, precision, and deeply personalized experiences.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-8">
        Every wedding and event we plan is treated as our own — with
        careful attention to detail, respect for traditions, and a
        heartfelt commitment to excellence. We believe celebrations
        should not just be seen, but truly felt.
      </p>

      {/* Optional highlight points */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="glass-card p-4">
          <p className="font-semibold">Emotion-Driven Planning</p>
          <p className="text-sm text-muted-foreground">
            Every detail reflects your story.
          </p>
        </div>

        <div className="glass-card p-4">
          <p className="font-semibold">Timeless Aesthetics</p>
          <p className="text-sm text-muted-foreground">
            Designs that never go out of style.
          </p>
        </div>
      </div>
    </motion.div>

  </div>
</section>


      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div className="grid grid-cols-2 gap-4">
            {[about1, about2, about3, about4].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden h-56">
                <img
                  src={img}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>

          <div>
            <p className="section-title">About Us</p>
            <h2 className="section-heading mb-6">
              Creating Timeless{" "}
              <span className="text-gradient-gold">
                Wedding & Event Experiences
              </span>
            </h2>

            <p className="text-muted-foreground mb-10">
              From intimate ceremonies to grand destination weddings,
              we craft moments that last a lifetime.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= MISSION & VISION ================= */}
<section className="py-28 bg-secondary/30 relative overflow-hidden">
  {/* Soft background decoration */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

  <div className="container mx-auto px-4 relative">
    
    {/* Section Header */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <p className="section-title">Our Purpose</p>
      <h2 className="section-heading">
        Driven by{" "}
        <span className="text-gradient-gold">
          Passion & Vision
        </span>
      </h2>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-12">

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-12 hover:shadow-2xl transition-shadow"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Target className="text-primary w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Our Mission</h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          To design and deliver elegant, meaningful, and stress-free
          wedding and event experiences that truly reflect our clients’
          stories, cultures, and dreams — while ensuring every detail
          feels effortless and memorable.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card p-12 hover:shadow-2xl transition-shadow"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Eye className="text-primary w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Our Vision</h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          To become one of the most trusted and admired event management
          brands, known for creativity, professionalism, innovation,
          and timeless celebrations that leave lasting impressions.
        </p>
      </motion.div>

    </div>
  </div>
</section>

     
    {/* ================= OUR VALUES ================= */}
 <section className="py-28 bg-background relative overflow-hidden">
  {/* Soft background accent */}
  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

  <div className="container mx-auto px-4 relative">
    
    {/* Section Header */}
    <div className="text-center max-w-2xl mx-auto mb-20">
      <p className="section-title">Our Values</p>
      <h2 className="section-heading">
        What We{" "}
        <span className="text-gradient-gold">
          Stand For
        </span>
      </h2>
      <p className="text-muted-foreground mt-4">
        The principles that guide every decision, design, and celebration we create.
      </p>
    </div>

    {/* Values Grid */}
    <div className="grid md:grid-cols-3 gap-10">
      {values.map((v, i) => (
        <motion.div
          key={v.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="glass-card p-10 text-center hover:shadow-2xl transition-all duration-300"
        >
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <v.icon className="text-primary w-7 h-7" />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-xl mb-3">
            {v.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {v.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="py-28 bg-secondary/30 relative overflow-hidden text-center">
  {/* Soft background glow */}
  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

  <div className="container mx-auto px-4 relative max-w-3xl">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-heading mb-6"
    >
      Let’s Plan Your{" "}
      <span className="text-gradient-gold">
        Perfect Event
      </span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-muted-foreground mb-10"
    >
      From intimate celebrations to grand weddings, we’re here to
      transform your vision into an unforgettable experience —
      stress-free, elegant, and beautifully executed.
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
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline-gold"
      >
        WhatsApp Us
      </a>
    </motion.div>
  </div>
</section>


    </main>
  );
};

export default About;