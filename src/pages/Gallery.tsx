import galleryHeroImage from "@/assets/img11.jpg";
import { motion } from "framer-motion";


import img12 from "@/assets/img12.jpg";
import img13 from "@/assets/img13.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";

const galleryImages = [
  {
    id: 1,
    title: "Luxury Wedding",
    category: "Weddings",
    image: img13,
  },
  {
    id: 2,
    title: "Corporate Conference",
    category: "Corporate Events",
    image: img8,
  },
  {
    id: 3,
    title: "Destination Celebration",
    category: "Destination Events",
    image: img9,
  },
  {
    id: 4,
    title: "Private Celebration",
    category: "Private Parties",
    image: img12,
  },
  {
    id: 5,
    title: "Brand Launch",
    category: "Corporate Events",
    image: img13,
  },
  {
    id: 6,
    title: "Beach Wedding",
    category: "Weddings",
    image: img9,
  },
];

const title = "Our Gallery";
const subtitle =
  "Explore moments crafted with passion, precision, and timeless elegance.";

const Gallery = () => {
  return (
    <main className="">
      <section
      id="gallery-hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={galleryHeroImage}
          alt="Luxury Event Gallery"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r 
                     from-background/95 via-background/75 to-background/40"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Moments We’ve Crafted
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                       font-serif font-bold text-foreground 
                       leading-tight mb-6"
          >
            Our{" "}
            <span className="text-gradient-gold">
              Gallery
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            A visual journey through weddings, celebrations, and events we’ve
            thoughtfully designed. Each image captures emotion, elegance, and
            unforgettable experiences.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a href="#gallery-grid" className="btn-gold">
              Explore Moments
            </a>

            <span className="text-sm text-muted-foreground">
              Weddings • Corporate • Private • Destination
            </span>
          </motion.div>
        </div>
      </div>

      
    </section>

      {/*  CATEGORY HIGHLIGHTS */}
<section className="py-24 bg-background">
  <div className="container mx-auto px-4">

    {/* Section Intro */}
    <div className="max-w-2xl mb-14">
      <p className="section-title">Our Work</p>
      <h3 className="text-2xl md:text-3xl font-semibold mb-4">
        Moments That Define Our Craft
      </h3>
      <p className="text-muted-foreground">
        Each frame reflects our attention to detail, creativity, and dedication
        to creating unforgettable experiences.
      </p>
    </div>

    {/* Gallery Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {galleryImages.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group relative h-72 rounded-2xl overflow-hidden"
        >
          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover 
                       transition-transform duration-500 
                       group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-300" />

          {/* Text Info */}
          <div className="absolute inset-x-0 bottom-0 p-6 
                          translate-y-4 group-hover:translate-y-0 
                          opacity-0 group-hover:opacity-100 
                          transition-all duration-300">
            <h4 className="text-white font-semibold text-lg">
              {item.title}
            </h4>
            <p className="text-white/80 text-sm">
              {item.category}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* EXPERIENCE / MESSAGE */}
      <section className="py-20 bg-secondary/30 text-center">
        <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
          Every photograph reflects our commitment to excellence. From intimate
          gatherings to grand celebrations, we focus on creating experiences
          that feel personal, seamless, and truly unforgettable.
        </p>
      </section>

      {/* 5️⃣ CTA */}
      <section className="py-24 bg-background text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Let’s Create Your Next Celebration
        </h2>
        <p className="text-muted-foreground mb-8">
          Your story deserves to be beautifully crafted and remembered forever.
        </p>
        <a href="/contact" className="btn-gold">
          Plan Your Event
        </a>
      </section>
    </main>
  );
};

export default Gallery;
