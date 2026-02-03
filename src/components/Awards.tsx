import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import beachWedding from "@/assets/img4.jpg";

/* ================= TYPEWRITER ================= */

const words = [
  "Premium Weddings",
  "Elite Events",
  "Luxury Celebrations",
];

const TypewriterText = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];

    const t = setTimeout(() => {
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
    }, deleting ? 70 : 180);

    return () => clearTimeout(t);
  }, [char, deleting, index]);

  return (
    <span className="text-gradient-gold">
      {text}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

/* ================= DATA ================= */

const awards = [
  {
    icon: Award,
    title: "Recognized Event Specialists",
    description:
      "Trusted for delivering premium weddings and memorable events across India.",
  },
  {
    icon: Sparkles,
    title: "Luxury Wedding Expertise",
    description:
      "Known for elegant destination weddings and bespoke event experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Planning Standards",
    description:
      "Structured processes, transparent communication, and seamless execution.",
  },
  {
    icon: Star,
    title: "Highly Rated by Clients",
    description:
      "Consistently praised for creativity, coordination, and attention to detail.",
  },
];

/* ================= COMPONENT ================= */

const Awards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden">

      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={beachWedding}
          alt="Luxury Beach Wedding"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/55" />

        <motion.div
          animate={{ opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-primary/25 via-transparent to-primary/25"
        />
      </motion.div>

      {/* Floating glow */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/20 blur-[160px] rounded-full z-10"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full z-10"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="tracking-[0.3em] uppercase text-primary text-sm mb-3">
            Recognition & Trust
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Why Clients Choose <TypewriterText />
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-200 text-lg">
            Our reputation is built on creativity, professionalism, and
            unforgettable experiences that leave a lasting impression.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -12 }}
              className="group relative rounded-3xl p-8
                         bg-card/70 backdrop-blur-xl
                         border border-border/60
                         shadow-xl transition-all duration-500"
            >

              <div className="absolute inset-0 rounded-3xl
                              bg-gradient-to-r
                              from-primary/40
                              via-[hsl(18_75%_72%)/0.35]
                              to-primary/40
                              opacity-0 group-hover:opacity-100
                              blur-xl transition duration-700" />

              <div className="relative z-10 w-16 h-16 mx-auto mb-5 rounded-full
                              bg-primary/20 flex items-center justify-center">
                <award.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="relative z-10 text-lg font-semibold text-white mb-3">
                {award.title}
              </h3>

              <p className="relative z-10 text-sm text-gray-300">
                {award.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
