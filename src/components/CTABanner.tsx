import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import destinationWedding from "@/assets/img4.jpg";

/* ================= TYPEWRITER (LOOP + SCROLL BASED) ================= */

const Typewriter = ({ text }: { text: string }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const [count, setCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      setIsDeleting(false);
      return;
    }

    const timeout = setTimeout(() => {
      setCount((prev) => {
        if (!isDeleting) {
          if (prev < text.length) return prev + 1;
          setIsDeleting(true);
          return prev;
        } else {
          if (prev > 0) return prev - 1;
          setIsDeleting(false);
          return prev;
        }
      });
    }, isDeleting ? 70 : 140);

    return () => clearTimeout(timeout);
  }, [count, isDeleting, isInView, text]);

  return (
    <span ref={ref}>
      {text.slice(0, count)}
      {isInView && (
        <motion.span
          className="ml-1 text-primary"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

/* ================= COMPONENT ================= */

const CTABanner = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={destinationWedding}
          alt="Luxury Destination Wedding"
          className="w-full h-full object-cover scale-105"
        />

        {/* Luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-r 
                        from-background/80 via-background/60 to-background/30" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-title mb-3"
          >
            Destination Weddings
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="section-heading mb-6 leading-tight"
          >
            Turn Your Dream Wedding Into a <br />
            <span className="text-gradient-gold">
              <Typewriter text="Beautiful Reality" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-muted-foreground mb-10 leading-relaxed"
          >
            Euphoria Events Booster specializes in luxury destination weddings
            across India — beaches, backwaters, palaces, and exclusive resorts.
            From planning to execution, we curate unforgettable celebrations
            infused with elegance and perfection.
          </motion.p>

          {/* ================= CTA BUTTONS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-5"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="btn-gold inline-flex items-center gap-2"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              WhatsApp Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;









