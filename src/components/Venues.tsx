import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { useEffect, useState } from "react";

import venue1 from "@/assets/img1.jpg";
import venue2 from "@/assets/img2.jpg";
import venue3 from "@/assets/img3.jpg";
import venue4 from "@/assets/img4.jpg";

const venues = [
  {
    name: "Brookside Garden Resort",
    location: "Kolkata, West Bengal",
    rating: 4.8,
    image: venue1,
  },
  {
    name: "Vembanad Lake Resort",
    location: "West Bengal",
    rating: 4.6,
    image: venue2,
  },
  {
    name: "Heritage Manor",
    location: "Darjeeling, West Bengal",
    rating: 4.9,
    image: venue3,
  },
  {
    name: "Coastal Paradise Resort",
    location: "North 24 Parganas, West Bengal",
    rating: 5.0,
    image: venue4,
  },
];

/* ================= TYPEWRITER ================= */

const words = [
  "Luxury Resorts",
  "Royal Palaces",
  "Beach Weddings",
  "Destination Venues",
];

const TypewriterText = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];

    const t = setTimeout(() => {
      if (!deleting) {
        setText(word.substring(0, charIndex + 1));
        setCharIndex((p) => p + 1);
        if (charIndex + 1 === word.length) setDeleting(true);
      } else {
        setText(word.substring(0, charIndex - 1));
        setCharIndex((p) => p - 1);
        if (charIndex === 0) {
          setDeleting(false);
          setWordIndex((p) => (p + 1) % words.length);
        }
      }
    }, deleting ? 60 : 120);

    return () => clearTimeout(t);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="text-gradient-gold font-semibold">
      {text}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

/* ================= MOTION VARIANTS ================= */

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7 },
  },
};

/* ================= MAIN ================= */

const Venues = () => {
  return (
    <section id="venues" className="relative py-28 bg-background overflow-hidden">

      {/* Brand Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full" />

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="tracking-[0.3em] uppercase text-primary text-sm mb-3">
            Wedding Venues
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Discover{" "}
            <span className="text-gradient-gold animate-gradient">
              Dream Venues
            </span>{" "}
            for Your Wedding
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            Explore <TypewriterText /> across India curated by{" "}
            <span className="text-primary font-semibold">
              Euphoria Events
            </span>
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {venues.map((venue) => (
            <motion.div
              key={venue.name}
              variants={cardVariants}
              whileHover={{ y: -14, scale: 1.03 }}
              className="group relative rounded-3xl overflow-hidden
                         bg-card/70 backdrop-blur-xl
                         border border-border/60
                         shadow-xl transition-all duration-500"
            >

              {/* Brand Glow Border */}
              <div className="absolute inset-0 rounded-3xl
                              bg-gradient-to-r
                              from-primary/40
                              via-[hsl(18_75%_72%)/0.35]
                              to-primary/40
                              opacity-0 group-hover:opacity-100
                              blur-xl transition duration-700" />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 bg-black/70 rounded-full px-3 py-1 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                <span className="text-sm font-medium text-white">
                  {venue.rating}
                </span>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition">
                  {venue.name}
                </h3>

                <div className="flex items-center gap-1 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  {venue.location}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full
                       bg-gradient-to-r from-primary to-[hsl(18_75%_72%)]
                       text-white font-semibold shadow-lg
                       hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore All Venues
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Venues;
