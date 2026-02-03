import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/* ================= IMAGES ================= */
import img10 from "@/assets/img10.jpg";
import img12 from "@/assets/img12.jpg";
import img13 from "@/assets/img13.jpg";
import img14 from "@/assets/img14.jpg";
import img15 from "@/assets/img15.jpg";
import img16 from "@/assets/img16.jpg";
import img18 from "@/assets/img18.jpg";
import img19 from "@/assets/img19.jpg";
import img23 from "@/assets/img23.jpg";
import img24 from "@/assets/img24.jpg";
import img25 from "@/assets/img25.jpg";
import img29 from "@/assets/img29.jpg";
import img32 from "@/assets/img32.jpg";
import img38 from "@/assets/img38.jpg";
import img4 from "@/assets/img4.jpg";
import img42 from "@/assets/img42.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";
import img11 from "@/assets/img32.jpg";

/* ================= ADDITIONAL ASSETS ================= */

/* ================= HERO IMAGES ================= */
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import hero4 from "@/assets/hero4.jpg";
import hero5 from "@/assets/hero5.jpg";

/* ================= HERO CAROUSEL ================= */
const heroImages = [hero1, hero2, hero3, hero4, hero5];

/* ================= TYPEWRITER ================= */
const Typewriter = () => {
  const text = "Gallery";
  const [value, setValue] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 60 : 120;

    const timer = setTimeout(() => {
      setValue((prev) =>
        deleting
          ? text.substring(0, prev.length - 1)
          : text.substring(0, prev.length + 1),
      );

      if (!deleting && value === text) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && value === "") {
        setDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [value, deleting]);

  return (
    <span className="text-gradient-gold">
      {value}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

/* ================= FEATURED WORK ================= */
const ourWorkImages = [

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
    image: img18,
  },
  {
    id: 4,
    title: "Private Celebration",
    category: "Private Parties",
    image: img13,
  },
  { id: 5, title: "Brand Launch", category: "Corporate Events", image: img25 },
  { id: 6, title: "Beach Wedding", category: "Weddings", image: img9 },
  { id: 1, title: "Grand Wedding", category: "Weddings", image: img29 },  
  { id: 9, title: "Cultural Event", category: "Private Parties", image: img19 },
  {
    id: 10,
    title: "Luxury Reception",
    category: "Weddings",
    image: img15,
  },
  {
    id: 14,
    title: "Glamorous Sangeet",
    category: "Weddings",
    image: img32,
  },
];

/* ================= FULL ARCHIVE ================= */
const categoryImages = [
  ...ourWorkImages,
  {
    id: 7,
    title: "Island Wedding",
    category: "Destination Events",
    image: img10,
  },
  {
    id: 8,
    title: "Anniversary Celebration",
    category: "Private Parties",
    image: img11,
  },
  
 
  {
    id: 11,
    title: "Cityscape Wedding",
    category: "Destination Events",
    image: img38,
  },
  {
    id: 12,
    title: "Family Reunion",
    category: "Private Parties",
    image: img15,
  },
  { id: 13, title: "Product Launch", category: "Corporate Events", image: img14 },
  { id: 14, title: "Rooftop Wedding", category: "Weddings", image: img8 },
 
  {
    id: 16,
    title: "Birthday Bash",
    category: "Private Parties",
    image: img25,
  },
  { id: 17, title: "Gala Dinner", category: "Corporate Events", image: img4 },
  {
    id: 18,
    title: "Beachside Wedding",
    category: "Weddings",
    image: img12,
  },
 
  {
    id: 20,
    title: "Wedding Ceremony",
    category: "Weddings",
    image: img18,
  },
  {
    id: 21,
    title: "Farewell Party",
    category: "Private Parties",
    image: img24,
  },
  {
    id: 22,
    title: "Sangeet Night",
    category: "Weddings",
    image: img16,
  },
  {
    id: 23,
    title: "Bridal Shower",
    category: "Weddings",
    image: img23,
  },
  {
    id: 24,
    title: "Engagement Event",
    category: "Weddings",
    image: img32,
  }, 
 
  { id :42, title: "Music & Entertainment", category: "Corporate Events", image: img42 },  

];

const categories = [
  "All",
  "Weddings",
  "Corporate Events",
  "Destination Events",
  "Private Parties",
];

/* ================= PAGE ================= */
const Gallery = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  /* Hero carousel */
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredImages =
    activeCategory === "All"
      ? categoryImages
      : categoryImages.filter((img) => img.category === activeCategory);

  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.img
              key={heroIndex}
              src={heroImages[heroIndex]}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-title"
            >
              Moments We’ve Crafted
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6"
            >
              Our <Typewriter />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-muted-foreground max-w-xl mb-10"
            >
              A visual journey through weddings, celebrations, and events
              thoughtfully designed with emotion, elegance, and precision.
            </motion.p>

            <motion.a
              href="#our-work"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="btn-gold inline-block"
            >
              Explore Moments
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ================= OUR WORK ================= */}
      <section
        id="our-work"
        className="py-10 bg-secondary/30 relative overflow-hidden"
      >
        {/* Luxury Background Glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <h2 className="section-heading mb-4">
              Moments That Define Our{" "}
              <span className="text-gradient-gold">Craft</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A curated selection of celebrations that reflect our creativity
              and precision.
            </p>
          </motion.div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.6 },
              1024: { slidesPerView: 2.6 },
            }}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            className="mt-8"
          >
            {ourWorkImages.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="group relative h-[480px] rounded-3xl overflow-hidden shadow-2xl"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70" />

                  {/* Caption */}
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 p-8 text-white"
                  >
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm opacity-80">{item.category}</p>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= BROWSE BY CATEGORY ================= */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="section-title">Browse by Category</p>
            <h2 className="text-3xl font-semibold mb-4">
              Explore Our Full Collection
            </h2>
            <p className="text-muted-foreground">
              Filter moments by event type and rediscover timeless experiences.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition
                  ${
                    activeCategory === cat
                      ? "bg-primary text-white"
                      : "bg-secondary/40 hover:bg-secondary"
                  }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative h-72 rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-0 p-6 text-white opacity-0 group-hover:opacity-100 transition">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm">{item.category}</p>
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
