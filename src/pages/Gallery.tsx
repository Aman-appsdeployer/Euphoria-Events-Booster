import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <main className="pt-24">

      {/* 1️⃣ HERO */}
      <section className="py-24 bg-background text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-serif font-bold"
        >
          Our <span className="text-primary">Gallery</span>
        </motion.h1>
        <p className="text-muted-foreground mt-4">
          A glimpse into our most beautiful celebrations.
        </p>
      </section>

      {/* 2️⃣ GALLERY GRID */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-64 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10"
            />
          ))}
        </div>
      </section>

      {/* 3️⃣ DESCRIPTION */}
      <section className="py-20 bg-background text-center">
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Every event is uniquely crafted with creativity, elegance, and
          perfection. Our gallery reflects moments that last forever.
        </p>
      </section>

      {/* 4️⃣ CTA */}
      <section className="py-20 bg-secondary/30 text-center">
        <h2 className="section-heading mb-6">
          Want Your Event Featured Here?
        </h2>
        <a href="/contact" className="btn-gold">
          Get in Touch
        </a>
      </section>
    </main>
  );
};

export default Gallery;
