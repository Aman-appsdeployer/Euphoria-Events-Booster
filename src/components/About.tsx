import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import about4 from "@/assets/img2.jpg";
import about1 from "@/assets/img3.jpg";
import about2 from "@/assets/img8.jpg";
import about3 from "@/assets/img9.jpg";

/* ================= TYPEWRITER (LOOP + SCROLL BASED) ================= */

const Typewriter = ({ text }: { text: string }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { amount: 0.4 });

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

/* ================= DATA ================= */

const features = [
  "Luxury Wedding & Event Specialists",
  "Destination Weddings Across India",
  "Creative & Experienced Planning Team",
  "End-to-End Event Management",
];

/* ================= COMPONENT ================= */

const About = () => {
  return (
    <section id="about" className="py-28 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= IMAGE LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[about1, about2, about3, about4].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className={`rounded-2xl overflow-hidden ${
                    i % 2 === 0 ? "h-48" : "h-64"
                  }`}
                >
                  <img
                    src={img}
                    alt="Wedding Event"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= CONTENT RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="section-title"
            >
              About Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="section-heading mb-6 leading-tight"
            >
              Creating Timeless <br />
              <span className="text-gradient-gold">
                <Typewriter text="Wedding & Event Experiences" />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-muted-foreground mb-6"
            >
              Euphoria Events Booster is a premium wedding and event management
              company known for crafting elegant, personalized, and unforgettable
              celebrations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground mb-10"
            >
              From intimate weddings to grand destination events, our expert
              planners bring creativity and perfection to every detail.
            </motion.p>

            {/* ================= FEATURES ================= */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* ================= CTA ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex gap-5"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="btn-gold"
              >
                Book a Consultation
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/91XXXXXXXXXX"
                className="btn-outline-gold"
              >
                WhatsApp Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;







