import { motion } from "framer-motion";
import { useState } from "react";

import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";
import img12 from "@/assets/img12.jpg";
import img13 from "@/assets/img13.jpg";
import img14 from "@/assets/img14.jpg";
import img15 from "@/assets/img15.jpg";
import galleryHeroImage from "@/assets/img24.jpg";
import img25 from "@/assets/img25.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";

/* ================= OUR WORK IMAGES ================= */

const ourWorkImages = [
  { id: 1, title: "Luxury Wedding", category: "Weddings", image: img13 },
  { id: 2, title: "Corporate Conference", category: "Corporate Events", image: img8 },
  { id: 3, title: "Destination Celebration", category: "Destination Events", image: img11 },
  { id: 4, title: "Private Celebration", category: "Private Parties", image: img12 },
  { id: 5, title: "Brand Launch", category: "Corporate Events", image: img25 },
  { id: 6, title: "Beach Wedding", category: "Weddings", image: img9 },
];

/* ================= CATEGORY GALLERY IMAGES ================= */

const categoryImages = [
  { id: 101, title: "Royal Wedding", category: "Weddings", image: img12 },
  { id: 102, title: "Business Summit", category: "Corporate Events", image: img8 },
  { id: 103, title: "Island Wedding", category: "Destination Events", image: img9 },
  { id: 104, title: "Birthday Party", category: "Private Parties", image: img13 },
  { id: 105, title: "Product Launch", category: "Corporate Events", image: img12 },
  { id: 106, title: "Traditional Wedding", category: "Weddings", image: img13 },
  { id: 107, title: "Mountain Retreat", category: "Destination Events", image: img10 },
  { id: 108, title: "Anniversary Celebration", category: "Private Parties", image: img11 },
  { id: 109, title: "Gala Dinner", category: "Corporate Events", image: img9 },
  { id: 110, title: "Garden Wedding", category: "Weddings", image: img12 },
  { id: 111, title: "Cityscape Wedding", category: "Destination Events", image: img14 },
  { id: 112, title: "Family Reunion", category: "Private Parties", image: img15 },

];

const categories = [
  "All",
  "Weddings",
  "Corporate Events",
  "Destination Events",
  "Private Parties",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? categoryImages
      : categoryImages.filter(
          (img) => img.category === activeCategory
        );

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <img
      src={galleryHeroImage}
      alt="Luxury Event Gallery"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 ">
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="max-w-3xl text-left"
    >
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="section-title"
      >
        Moments We’ve Crafted
      </motion.p>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6"
      >
        Our <span className="text-gradient-gold">Gallery</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-muted-foreground max-w-xl mb-10 leading-relaxed"
      >
        A visual journey through weddings, celebrations, and events we’ve
        thoughtfully designed.
      </motion.p>

      {/* CTA */}
      <motion.a
        href="#category-gallery"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="btn-gold inline-block"
      >
        Explore Moments
      </motion.a>
    </motion.div>
  </div>
</section>


      {/* ================= OUR WORK ================= */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">

          <div className="max-w-2xl mb-14">
            <p className="section-title">Our Work</p>
            <h3 className="text-3xl font-semibold mb-4">
              Moments That Define Our Craft
            </h3>
            <p className="text-muted-foreground">
              A curated selection of our finest celebrations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {ourWorkImages.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative h-72 rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-0 p-6 opacity-0 group-hover:opacity-100 transition">
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BROWSE BY CATEGORY ================= */}
      <section id="category-gallery" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-title">Browse By Category</p>
            <h3 className="text-3xl font-semibold mb-4">
              Explore Our Work
            </h3>
            <p className="text-muted-foreground">
              Filter moments by event type and relive crafted experiences.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition
                  ${
                    activeCategory === cat
                      ? "bg-primary text-white"
                      : "bg-secondary/40 hover:bg-secondary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filtered Images */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative h-72 rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-0 p-6 opacity-0 group-hover:opacity-100 transition">
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Gallery;
