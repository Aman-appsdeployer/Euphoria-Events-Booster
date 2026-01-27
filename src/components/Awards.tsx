import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useRef } from "react";

import beachWedding from "@/assets/img4.jpg";

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

const Awards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax effect (px instead of % = works better)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* ================= BACKGROUND IMAGE (FIXED) ================= */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={beachWedding}
          alt="Luxury Beach Wedding"
          className="w-full h-full object-cover scale-110"
        />

        {/* Cinematic overlay (lighter so image visible) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated luxury gold light */}
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-transparent to-yellow-500/20"
        />
      </motion.div>

      {/* Floating glow lights */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-500/20 blur-[160px] rounded-full z-10"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-yellow-500/10 blur-[160px] rounded-full z-10"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="tracking-[0.3em] uppercase text-yellow-400 text-sm mb-3">
            Recognition & Trust
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Why Clients Choose{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent animate-gradient">
              Euphoria Events
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-200 text-lg">
            Our reputation is built on creativity, professionalism, and
            unforgettable experiences that leave a lasting impression.
          </p>
        </motion.div>

        {/* Awards Grid */}
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
                         bg-white/12 backdrop-blur-xl border border-white/25 
                         shadow-xl transition-all duration-500"
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/40 via-pink-500/30 to-yellow-400/40 opacity-0 group-hover:opacity-100 blur-xl transition duration-700" />

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-5 rounded-full bg-yellow-500/25 flex items-center justify-center shadow-lg">
                <award.icon className="w-8 h-8 text-yellow-400" />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-semibold text-white mb-3">
                {award.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-gray-300 leading-relaxed">
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







