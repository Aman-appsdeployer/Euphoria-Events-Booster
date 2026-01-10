import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

import venue1 from "@/assets/img1.jpg";
import venue2 from "@/assets/img2.jpg";
import venue3 from "@/assets/img3.jpg";
import venue4 from "@/assets/img4.jpg";

const venues = [
  {
    name: "Brookside Garden Resort",
    location: "kolkata, West Bengal",
    rating: 4.8,
    image: venue1,
  },
  {
    name: "Vembanad Lake Resort",
    location: "west Bengal",
    rating: 4.6,
    image: venue2,
  },
  {
    name: "Heritage Manor",
    location: "Darjeeling, West Bengal",
    rating: 4.9,
    image: venue3,
  },
  {
    name: "Coastal Paradise Resort",
    location: "Noth24, West Bengal",
    rating: 5.0,
    image: venue4,
  },
];

const Venues = () => {
  return (
    <section id="venues" className="relative py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="section-title">Wedding Venues</p>

          <h2 className="section-heading">
            Handpicked Venues by{" "}
            <span className="text-gradient-gold">Euphoria Events</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover breathtaking wedding venues across India — from serene
            backwaters to luxury beach resorts — curated for unforgettable
            celebrations.
          </p>
        </motion.div>

        {/* ================= VENUES GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.name}
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
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover 
                               transition-transform duration-700 
                               group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t 
                                from-background/80 via-background/20 
                                to-transparent opacity-0 
                                group-hover:opacity-100 transition-opacity" />

                {/* Rating */}
                <div
                  className="absolute top-4 right-4 
                             bg-background/90 backdrop-blur-sm 
                             rounded-full px-3 py-1 
                             flex items-center gap-1 shadow"
                >
                  <Star className="w-3.5 h-3.5 text-primary fill-current" />
                  <span className="text-sm font-medium">
                    {venue.rating}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="text-lg font-serif font-bold text-foreground 
                               mb-2 group-hover:text-primary 
                               transition-colors"
                  >
                    {venue.name}
                  </h3>

                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {venue.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a href="#contact" className="btn-gold">
            Explore All Venues
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Venues;
