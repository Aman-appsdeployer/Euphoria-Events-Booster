import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import hero4 from "@/assets/hero4.jpg";
import hero5 from "@/assets/hero5.jpg";
import hero6 from "@/assets/hero6.jpg";


const images = [hero1, hero2, hero3, hero4, hero5, hero6];

// ================= BRAND TYPEWRITER =================
const BrandTypewriter = () => {
  const brand = "Euphoria Events";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 70 : 140;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? brand.substring(0, prev.length - 1)
          : brand.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === brand) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <span className="text-gradient-gold inline-block">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

// ================= HERO COMPONENT =================
const Hero = () => {
  const [index, setIndex] = useState(0);

  // Background carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ================= BACKGROUND CAROUSEL ================= */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt="Luxury Event Background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
          className="max-w-3xl"
        >
          {/* Subtitle */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="section-title"
          >
            Premium Wedding & Event Planners
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              font-serif font-bold text-foreground 
              leading-tight mb-6"
          >
            Crafting Unforgettable Celebrations <br />
            with <BrandTypewriter />
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Euphoria Events Booster specializes in luxury weddings, destination
            celebrations, and bespoke events across India and beyond.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <a href="/contact" className="btn-gold">
              Book a Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;





