import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Clock,
  Heart,
  MapPin,
  Music,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

/* ================= IMAGES ================= */
import privateParty from "@/assets/img10.jpg";
import weddingCouple from "@/assets/img11.jpg";
import destinationWedding from "@/assets/img5.jpg";
import beachWedding from "@/assets/img6.jpg";
import corporateEvent from "@/assets/img8.jpg";
import musicEntertainment from "@/assets/img9.jpg";

/* ================= SERVICES DATA ================= */
const services = [
  {
    title: "Wedding Planning",
    description:
      "Complete wedding planning services from concept to execution, ensuring a seamless and stress-free celebration.",
    image: weddingCouple,
    icon: Heart,
  },
  {
    title: "Destination Weddings",
    description:
      "Luxury destination weddings planned with precision, elegance, and world-class coordination.",
    image: destinationWedding,
    icon: MapPin,
  },
  {
    title: "Beach Weddings",
    description:
      "Romantic beachside weddings with stunning décor, serene settings, and flawless arrangements.",
    image: beachWedding,
    icon: Sparkles,
  },
  {
    title: "Corporate Events",
    description:
      "Professional corporate events, conferences, product launches, and brand activations.",
    image: corporateEvent,
    icon: Briefcase,
  },
  {
    title: "Music & Entertainment",
    description:
      "Live bands, DJs, celebrity artists, and performances to elevate your event experience.",
    image: musicEntertainment,
    icon: Music,
  },
  {
    title: "Private Parties",
    description:
      "Birthdays, anniversaries, and exclusive celebrations curated with creativity and style.",
    image: privateParty,
    icon: PartyPopper,
  },
];

/* ================= HIGHLIGHTS ================= */
const highlights = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    desc: "Luxury designs with attention to every detail.",
  },
  {
    icon: Clock,
    title: "On-Time Execution",
    desc: "Perfect coordination and timely delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Vendors",
    desc: "Reliable partners for seamless events.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Personal planners assigned to your event.",
  },
];

/* ================= PAGE ================= */
const Services = () => {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 bg-secondary/30 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title mb-4"
          >
            Our Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="section-heading mb-6"
          >
            Exceptional Event{" "}
            <span className="text-gradient-gold">Planning Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground"
          >
            From luxury weddings to corporate events and private celebrations,
            we deliver experiences crafted with elegance, creativity, and precision.
          </motion.p>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card shadow-lg">

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-6">
                  <service.icon className="w-8 h-8 text-primary mb-3" />

                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="section-title">How We Work</p>

          <h2 className="section-heading mb-14">
            Our Event Planning{" "}
            <span className="text-gradient-gold">Process</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Consultation & Understanding",
              "Concept & Design",
              "Planning & Coordination",
              "Flawless Execution",
            ].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                  {i + 1}
                </span>
                <p className="font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-background text-center">
        <h2 className="section-heading mb-6">
          Ready to Plan Your{" "}
          <span className="text-gradient-gold">Next Event?</span>
        </h2>

        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Let our experienced team handle every detail while you enjoy
          a seamless and unforgettable celebration.
        </p>

        <a href="/contact" className="btn-gold">
          Contact Us Today
        </a>
      </section>

    </main>
  );
};

export default Services;
