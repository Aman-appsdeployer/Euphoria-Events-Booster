import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


/* ================= IMAGES ================= */
import about4 from "@/assets/img1.jpg";
import about5 from "@/assets/img13.jpg";
import about1 from "@/assets/img2.jpg";
import about2 from "@/assets/img5.jpg";
import about3 from "@/assets/img8.jpg";


import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";




const images = [hero1, hero2, hero3];

/* ================= DATA ================= */
const features = [
  "Luxury Wedding Planning",
  "Destination Weddings",
  "Creative Event Design",
  "End-to-End Execution",
];

const values = [
  {
    icon: HeartHandshake,
    title: "Client First",
    desc: "Your happiness and peace of mind are our top priority.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    desc: "Every event is uniquely designed with fresh ideas.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    desc: "Honest communication and reliable execution.",
  },
];

/* ================= TYPEWRITER ================= */
const Typewriter = () => {
  const text = "Unforgettable Celebrations";
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      setDisplay((prev) =>
        isDeleting
          ? text.substring(0, prev.length - 1)
          : text.substring(0, prev.length + 1)
      );

      if (!isDeleting && display === text) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && display === "") {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [display, isDeleting]);

  return (
    <span className="text-gradient-gold">
      {display}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

/* ================= PAGE ================= */
const About = () => {
  const [index, setIndex] = useState(0);

  /* Carousel Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.img
              key={index}
              src={images[index]}
              alt="Luxury Wedding & Event Setup"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32">
          <div className="max-w-3xl text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-widest text-sm mb-4 text-primary"
            >
              Premium Wedding & Event Planners
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl xl:text-7xl font-serif font-bold mb-6"
            >
              Crafting <Typewriter />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mb-10 text-white/90"
            >
              Luxury weddings, destination celebrations, and bespoke events
              across Kerala and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <a href="#contact" className="btn-gold">
                Book a Consultation
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="btn-outline-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= OUR STORY ================= */}
     <section className="py-10 bg-background">
  <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

    {/* ================= IMAGE ================= */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="rounded-3xl overflow-hidden shadow-xl">
        <img
          src={about4} // use your best emotional image
          alt="Euphoria Events Story"
          className="w-full h-[520px] object-cover"
        />
      </div>

      {/* Small floating badge (optional but premium) */}
      <div className="absolute -bottom-6 left-6 bg-card px-6 py-3 rounded-full shadow-lg text-sm font-medium">
        Crafting Memories Since Day One
      </div>
    </motion.div>

    {/* ================= CONTENT ================= */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <p className="section-title mb-2">Our Story</p>

      <h2 className="section-heading mb-6">
        Turning Dreams Into{" "}
        <span className="text-gradient-gold">
          Beautiful Celebrations
        </span>
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-6">
        Euphoria Events Booster was born from a genuine passion for
        creating unforgettable moments. What began as a small creative
        vision has grown into a trusted event management company known
        for elegance, precision, and deeply personalized experiences.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-8">
        Every wedding and event we plan is treated as our own — with
        careful attention to detail, respect for traditions, and a
        heartfelt commitment to excellence. We believe celebrations
        should not just be seen, but truly felt.
      </p>

      {/* Optional highlight points */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="glass-card p-4">
          <p className="font-semibold">Emotion-Driven Planning</p>
          <p className="text-sm text-muted-foreground">
            Every detail reflects your story.
          </p>
        </div>

        <div className="glass-card p-4">
          <p className="font-semibold">Timeless Aesthetics</p>
          <p className="text-sm text-muted-foreground">
            Designs that never go out of style.
          </p>
        </div>
      </div>
    </motion.div>

  </div>
</section>


      {/* ================= ABOUT ================= */}
   <section id="about" className="py-10 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= IMAGE CAROUSEL LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow Background */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-yellow-400/20 via-pink-400/10 to-purple-500/20 blur-3xl rounded-full"></div>

            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2 },
              }}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 120,
                modifier: 1,
                slideShadows: false,
              }}
              className="relative z-10"
            >
              {[about1, about2, about3, about4, about5].map((img, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl overflow-hidden shadow-2xl h-72 md:h-80 lg:h-96"
                  >
                    <img
                      src={img}
                      alt="Wedding Event"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
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

      {/* ================= MISSION & VISION ================= */}
<section className="py-10 bg-secondary/30 relative overflow-hidden">

  {/* Floating Gradient Orbs */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />

  <div className="container mx-auto px-4 relative">

    {/* Section Header */}
    <div className="text-center max-w-2xl mx-auto mb-20">
      <p className="section-title tracking-widest uppercase">Our Purpose</p>

      <h2 className="section-heading mt-3">
        Driven by{" "}
        <span className="text-gradient-gold">
          Passion & Vision
        </span>
      </h2>

      {/* Decorative Line */}
      <div className="mt-6 flex justify-center">
        <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></span>
      </div>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-14">

      {/* Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="relative group"
      >
        {/* Glow Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-yellow-400/20 to-pink-400/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

        <div className="relative glass-card p-12 rounded-3xl border border-white/20 backdrop-blur-xl shadow-xl">

          <div className="flex items-center gap-5 mb-6">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center"
            >
              <Target className="text-primary w-7 h-7" />
            </motion.div>

            <h3 className="text-2xl font-bold">Our Mission</h3>
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg">
            To design and deliver elegant, meaningful, and stress-free
            wedding and event experiences that truly reflect our clients’
            stories, cultures, and dreams — while ensuring every detail
            feels effortless and memorable.
          </p>
        </div>
      </motion.div>

      {/* Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="relative group"
      >
        {/* Glow Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-yellow-400/20 to-pink-400/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

        <div className="relative glass-card p-12 rounded-3xl border border-white/20 backdrop-blur-xl shadow-xl">

          <div className="flex items-center gap-5 mb-6">
            <motion.div
              whileHover={{ rotate: -10, scale: 1.1 }}
              className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center"
            >
              <Eye className="text-primary w-7 h-7" />
            </motion.div>

            <h3 className="text-2xl font-bold">Our Vision</h3>
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg">
            To become one of the most trusted and admired event management
            brands, known for creativity, professionalism, innovation,
            and timeless celebrations that leave lasting impressions.
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>
  
{/* ================= OUR VALUES ================= */}
 <section className=" py-10 bg-secondary/30 relative overflow-hidden">

  {/* Floating Gradient Orbs (Same Style as Above Sections) */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />

  <div className="container mx-auto px-4 relative">

    {/* Section Header */}
    <div className="text-center max-w-2xl mx-auto mb-20">
      <p className="section-title tracking-widest uppercase">Our Values</p>

      <h2 className="section-heading mt-3">
        What We{" "}
        <span className="text-gradient-gold">
          Stand For
        </span>
      </h2>

      <p className="text-muted-foreground mt-4 text-lg">
        The principles that guide every decision, design, and celebration we create.
      </p>

      {/* Decorative Line */}
      <div className="mt-6 flex justify-center">
        <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></span>
      </div>
    </div>

    {/* Values Grid */}
    <div className="grid md:grid-cols-3 gap-12">
      {values.map((v, i) => (
        <motion.div
          key={v.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.12 }}
          whileHover={{ y: -12, scale: 1.03 }}
          className="relative group"
        >
          {/* Glow Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-yellow-400/20 to-pink-400/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

          <div className="relative glass-card p-10 text-center rounded-3xl border border-white/20 backdrop-blur-xl shadow-xl">

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 12, scale: 1.15 }}
              className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6 shadow-md"
            >
              <v.icon className="text-primary w-8 h-8" />
            </motion.div>

            {/* Title */}
            <h3 className="font-semibold text-xl mb-3 tracking-wide">
              {v.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-base">
              {v.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* ================= CTA ================= */}
      <section className="py-10 bg-secondary/30 relative overflow-hidden text-center">

  {/* Floating Gradient Orbs */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />

  {/* Soft Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

  <div className="container mx-auto px-4 relative max-w-3xl">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="section-heading mb-6"
    >
      Let’s Plan Your{" "}
      <span className="text-gradient-gold">
        Perfect Event
      </span>
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="text-muted-foreground mb-12 text-lg"
    >
      From intimate celebrations to grand weddings, we’re here to
      transform your vision into an unforgettable experience —
      stress-free, elegant, and beautifully executed.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-6"
    >
      {/* Primary Button */}
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="btn-gold relative overflow-hidden"
      >
        <span className="relative z-10">Contact Us Today</span>

        {/* Shine Effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700"></span>
      </motion.a>

      {/* Secondary Button */}
      <motion.a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-outline-gold"
      >
        WhatsApp Us
      </motion.a>
    </motion.div>

    {/* Subtle Divider */}
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "120px", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-14"
    />
  </div>
</section>


    </main>
  );
};

export default About;