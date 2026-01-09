import heroImage from "@/assets/hero-wedding.jpg";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Wedding & Event Setup"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r 
                     from-background/95 via-background/70 to-background/40"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Premium Wedding & Event Planners
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                       font-serif font-bold text-foreground 
                       leading-tight mb-6"
          >
            Crafting{" "}
            <span className="text-gradient-gold">
              Unforgettable Celebrations
            </span>{" "}
            with Euphoria Events
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Euphoria Events Booster specializes in luxury weddings, destination
            celebrations, and bespoke events across Kerala and beyond. Every
            detail is curated with elegance, creativity, and perfection.
          </motion.p>

          {/* CTA + Rating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 mb-10"
          >
            <a href="#contact" className="btn-gold">
              Book a Consultation
            </a>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary 
                               border-2 border-background overflow-hidden"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-primary/60 to-primary/20" />
                  </div>
                ))}
              </div>

              <div>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                    />
                  ))}
                </div>
                <span className="text-sm text-foreground">
                  4.9/5 Client Satisfaction
                </span>
              </div>
            </div>
          </motion.div>

          {/* Phone CTA */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            href="tel:+91XXXXXXXXXX"
            className="inline-flex items-center gap-2 
                       text-foreground hover:text-primary 
                       transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">
              Call Us for Instant Consultation
            </span>
          </motion.a>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
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
