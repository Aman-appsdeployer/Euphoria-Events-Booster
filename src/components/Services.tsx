import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import privateParty from "@/assets/img10.jpg";
import weddingCouple from "@/assets/img11.jpg";
import musicEntertainment from "@/assets/img13.jpg";
import beachWedding from "@/assets/img3.jpg";
import corporateEvent from "@/assets/img5.jpg";
import destinationWedding from "@/assets/img6.jpg";

const services = [
  {
    title: "Corporate Events",
    description:
      "Impress clients and teams with professionally curated corporate events that reflect your brand’s excellence.",
    image: corporateEvent,
  },
  {
    title: "Wedding Planning",
    description:
      "From intimate ceremonies to grand celebrations, we design weddings that feel timeless and personal.",
    image: weddingCouple,
  },
  {
    title: "Destination Weddings",
    description:
      "Celebrate your love in breathtaking destinations, planned seamlessly with luxury and precision.",
    image: destinationWedding,
  },
  {
    title: "Beach Weddings",
    description:
      "Say ‘I do’ by the serene shores with elegant beach wedding setups crafted to perfection.",
    image: beachWedding,
  },
  {
    title: "Music & Entertainment",
    description:
      "Live bands, DJs, and performances that elevate your celebration and keep the energy alive.",
    image: musicEntertainment,
  },
  {
    title: "Private Parties",
    description:
      "Birthdays, anniversaries, and exclusive gatherings designed to create unforgettable moments.",
    image: privateParty,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="section-title">Our Services</p>

          <h2 className="section-heading">
            Exceptional Experiences by{" "}
            <span className="text-gradient-gold">Euphoria Events</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We specialize in luxury weddings, destination celebrations, and
            premium events across Kerala and beyond — crafted with creativity,
            elegance, and flawless execution.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group card-hover"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card">

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover 
                               transition-transform duration-700 
                               group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t 
                             from-background/95 via-background/50 
                             to-transparent opacity-90"
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-xl font-serif font-bold text-foreground 
                               mb-2 group-hover:text-primary 
                               transition-colors"
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 
                               text-primary font-medium text-sm group/btn"
                  >
                    Explore Service
                    <ArrowRight
                      className="w-4 h-4 transition-transform 
                                 group-hover/btn:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
