import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

import weddingCeremony from "@/assets/h2.jpg";
import corporateEvent from "@/assets/img1.jpg";
import coupleImage from "@/assets/img10.jpg";
import privateParty from "@/assets/img12.jpg";
import beachWedding from "@/assets/img13.jpg";
import sangeet from "@/assets/img16.jpg";
import reception from "@/assets/img18.jpg";
import cocktailParty from "@/assets/img19.jpg";
import haldi from "@/assets/img22.jpg";
import bridalShower from "@/assets/img23.jpg";
import farewellParty from "@/assets/img24.jpg";
import destinationWedding from "@/assets/img3.jpg";
import engagement from "@/assets/img32.jpg";
import preWeddingShoot from "@/assets/img38.jpg";
import musicEntertainment from "@/assets/img4.jpg";
import cocktailPartyImg from "@/assets/img40.jpg";
import weddingCouple from "@/assets/img9.jpg";

// ================= IMAGES =================
const images = [
  { src: weddingCouple, alt: "Luxury Wedding Celebration" },
  { src: destinationWedding, alt: "Destination Wedding Experience" },
  { src: beachWedding, alt: "Elegant Beach Wedding" },
  { src: musicEntertainment, alt: "Music & Entertainment Night" },
  { src: privateParty, alt: "Private Party Celebration" },
  { src: corporateEvent, alt: "Corporate Event Experience" },
  { src: coupleImage, alt: "Romantic Couple Moments" },
  { src: haldi, alt: "Vibrant Haldi Ceremony" },
  { src: sangeet, alt: "Joyful Sangeet Night" },
  { src: weddingCeremony, alt: "Grand Wedding Ceremony" },
  { src: reception, alt: "Lavish Wedding Reception" },
  { src: cocktailParty, alt: "Chic Cocktail Party" },
  { src: preWeddingShoot, alt: "Pre-Wedding Photoshoot" },
  { src: engagement, alt: "Elegant Engagement Event" },
  { src: bridalShower, alt: "Charming Bridal Shower" },
  { src: farewellParty, alt: "Memorable Farewell Party" },
  { src: cocktailPartyImg, alt: "Vibrant Cocktail Party" },
];

// ================= TYPEWRITER TEXT =================
const words = [
  "Weddings",
  "Destination Events",
  "Luxury Parties",
  "Corporate Moments",
];

const TypewriterText = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setText(word.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === word.length) setDeleting(true);
        } else {
          setText(word.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 70 : 180,
    );

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="text-gradient-gold font-semibold">
      {text}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<null | {
    src: string;
    alt: string;
  }>(null);

  return (
    <section
      id="gallery"
      className="relative py-28 bg-background overflow-hidden"
    >
      {/* Brand Glow Background */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full" />

      <div className="container mx-auto px-4">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="tracking-[0.3em] uppercase text-primary text-sm mb-3">
            Our Portfolio
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Moments Crafted by{" "}
            <span className="text-gradient-gold animate-gradient">
              Euphoria Events
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            Explore unforgettable <TypewriterText />
          </p>
        </motion.div>

        {/* ================= MASONRY GRID ================= */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="break-inside-avoid overflow-hidden rounded-3xl
                       group cursor-pointer
                       bg-card/70 backdrop-blur-xl
                       border border-border/60
                       shadow-xl"
              onClick={() => setActiveImage(image)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Cinematic Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t
                              from-black/75 via-black/30 to-transparent
                              opacity-0 group-hover:opacity-100
                              transition duration-300
                              flex items-end p-6"
                >
                  <span className="text-white font-medium text-sm">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg
                     flex items-center justify-center px-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition"
              >
                <X className="w-7 h-7" />
              </button>

              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />

              <p className="text-center text-gray-300 mt-4">
                {activeImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
