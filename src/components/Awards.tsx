import { motion } from "framer-motion";
import { Award, ShieldCheck, Sparkles, Star } from "lucide-react";

import beachWedding from "@/assets/img2.jpg";

const awards = [
  {
    icon: Award,
    title: "Recognized Event Specialists",
    description:
      "Trusted for delivering premium weddings and memorable events across Kerala.",
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
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={beachWedding}
          alt="Luxury Beach Wedding"
          className="w-full h-full object-cover"
        />
        {/* Dark luxury overlay */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="section-title">Recognition & Trust</p>

          <h2 className="section-heading">
            Why Clients Choose{" "}
            <span className="text-gradient-gold">Euphoria Events</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our reputation is built on creativity, professionalism, and
            unforgettable experiences that leave a lasting impression.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="glass-card p-8 text-center 
                         hover:shadow-2xl hover:scale-[1.03] 
                         transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5 rounded-full 
                              bg-primary/20 flex items-center justify-center">
                <award.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-foreground mb-3">
                {award.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
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
