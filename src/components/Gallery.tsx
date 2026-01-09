import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import beachWedding from "@/assets/beach-wedding.jpg";
import corporateEvent from "@/assets/corporate-event.jpg";
import destinationWedding from "@/assets/destination-wedding.jpg";
import musicEntertainment from "@/assets/music-entertainment.jpg";
import privateParty from "@/assets/private-party.jpg";
import weddingCouple from "@/assets/wedding-couple.jpg";

const images = [
  { src: weddingCouple, alt: "Luxury Wedding Celebration" },
  { src: destinationWedding, alt: "Destination Wedding in Kerala" },
  { src: beachWedding, alt: "Elegant Beach Wedding" },
  { src: musicEntertainment, alt: "Music & Entertainment Night" },
  { src: privateParty, alt: "Private Party Celebration" },
  { src: corporateEvent, alt: "Corporate Event Experience" },
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" className="relative py-24 bg-secondary/30">
      <div className="container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="section-title">Our Portfolio</p>

          <h2 className="section-heading">
            Celebrations Crafted by{" "}
            <span className="text-gradient-gold">Euphoria Events</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Every event tells a story. Explore moments from weddings,
            destination celebrations, private parties, and corporate events
            curated with elegance and perfection.
          </p>
        </motion.div>

        {/* ================= MASONRY GRID ================= */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid overflow-hidden rounded-2xl 
                         group cursor-pointer card-hover"
              onClick={() => setActiveImage(image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover 
                             transition-transform duration-700 
                             group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t 
                             from-background/80 via-background/30 
                             to-transparent opacity-0 
                             group-hover:opacity-100 
                             transition-opacity duration-300 
                             flex items-end p-6"
                >
                  <span className="text-foreground font-medium">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg 
                       flex items-center justify-center px-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 text-foreground 
                           hover:text-primary transition-colors"
              >
                <X className="w-7 h-7" />
              </button>

              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />

              <p className="text-center text-muted-foreground mt-4">
                {activeImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
