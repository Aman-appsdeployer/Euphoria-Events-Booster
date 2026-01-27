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

// ================= TYPEWRITER TEXT =================
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
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setDeleting(true);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent font-semibold">
      {text}
      <span className="animate-pulse text-yellow-400">|</span>
    </span>
  );
};

// ================= FRAMER MOTION VARIANTS =================

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ================= MAIN COMPONENT =================

const Venues = () => {
  return (
    <section id="venues" className="relative py-28 bg-background overflow-hidden">
      {/* Glow Background */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-500/15 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-yellow-500/10 blur-[160px] rounded-full" />

      <div className="container mx-auto px-4">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="tracking-[0.3em] uppercase text-yellow-400 text-sm mb-3">
            Wedding Venues
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Discover{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent animate-gradient">
              Dream Venues
            </span>{" "}
            for Your Wedding
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            Explore <TypewriterText /> across India curated by{" "}
            <span className="text-yellow-400 font-semibold">
              Euphoria Events
            </span>
          </p>
        </motion.div>

        {/* ================= VENUES GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {venues.map((venue) => (
            <motion.div
              key={venue.name}
              variants={cardVariants}
              whileHover={{ y: -14, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative rounded-3xl overflow-hidden 
                         bg-white/10 backdrop-blur-xl border border-white/20 
                         shadow-xl transition-all duration-500"
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                              from-yellow-400/40 via-pink-500/30 to-yellow-400/40 
                              opacity-0 group-hover:opacity-100 blur-xl transition duration-700" />

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

              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-white">
                  {venue.rating}
                </span>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition">
                  {venue.name}
                </h3>

                <div className="flex items-center gap-1 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  {venue.location}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= CTA BUTTON ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full 
                       bg-gradient-to-r from-yellow-400 to-yellow-600 
                       text-black font-semibold shadow-lg 
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
