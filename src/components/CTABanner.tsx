import destinationWedding from "@/assets/img2.jpg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={destinationWedding}
          alt="Luxury Destination Wedding"
          className="w-full h-full object-cover"
        />
        {/* Dark luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-r 
                        from-background/95 via-background/85 to-background/60" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-3"
          >
            Destination Weddings
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-6"
          >
            Turn Your Dream Wedding Into a{" "}
            <span className="text-gradient-gold">Beautiful Reality</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-10 leading-relaxed"
          >
            Euphoria Events Booster specializes in luxury destination weddings
            across India, beaches, backwaters, and exclusive resorts. From
            planning to execution, we curate unforgettable celebrations infused
            with elegance, tradition, and perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="btn-gold inline-flex items-center gap-2"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
