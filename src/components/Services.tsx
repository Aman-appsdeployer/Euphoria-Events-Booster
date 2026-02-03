import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import privateParty from "@/assets/img10.jpg";
import weddingCouple from "@/assets/img32.jpg";
import musicEntertainment from "@/assets/img13.jpg";
import beachWedding from "@/assets/img3.jpg";
import corporateEvent from "@/assets/img5.jpg";
import destinationWedding from "@/assets/img6.jpg";

/* ================= DATA ================= */

const services = [
  {
    title: "Corporate Events",
    desc: "Premium corporate experiences designed with precision and elegance.",
    image: corporateEvent,
  },
  {
    title: "Wedding Planning",
    desc: "Timeless weddings crafted with luxury, emotion, and perfection.",
    image: weddingCouple,
  },
  {
    title: "Destination Weddings",
    desc: "Celebrate love in breathtaking destinations with flawless planning.",
    image: destinationWedding,
  },
  {
    title: "Beach Weddings",
    desc: "Elegant beach ceremonies with stunning décor and ambiance.",
    image: beachWedding,
  },
  {
    title: "Music & Entertainment",
    desc: "Live performances, DJs, and entertainment that elevate celebrations.",
    image: musicEntertainment,
  },
  {
    title: "Private Parties",
    desc: "Exclusive private events designed for unforgettable moments.",
    image: privateParty,
  },
];

/* ================= TYPING TEXT ================= */

const words = ["Luxury Weddings", "Corporate Events", "Elite Celebrations"];

const AnimatedTypingText = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.substring(0, char + 1));
        setChar((p) => p + 1);
        if (char + 1 === word.length) setDeleting(true);
      } else {
        setText(word.substring(0, char - 1));
        setChar((p) => p - 1);
        if (char === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % words.length);
        }
      }
    }, deleting ? 70 : 140);

    return () => clearTimeout(timer);
  }, [char, deleting, index]);

  return <span className="text-primary font-semibold">{text}|</span>;
};

/* ================= MAIN ================= */

const Services = () => {
  return (
    <section id="services" className="relative py-28 bg-background overflow-hidden">

      {/* ===== BRAND ROSE GLOW ===== */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="tracking-[0.3em] uppercase text-primary text-sm mb-3">
            Our Services
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Crafting{" "}
            <span className="text-gradient-gold animate-gradient">
              Luxury Experiences
            </span>
          </h2>

          <p className="mt-5 text-2xl text-muted-foreground">
            We specialize in <AnimatedTypingText />
          </p>
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden 
                         bg-card/70 backdrop-blur-xl 
                         border border-border/60 shadow-xl"
            >

              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                  {service.desc}
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                >
                  Explore Service <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Brand Glow Border */}
              <div className="absolute inset-0 rounded-3xl border border-primary/25 opacity-0 group-hover:opacity-100 transition duration-500" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;
