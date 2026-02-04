import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

/* ================= IMAGES ================= */
import about5 from "@/assets/img13.jpg";
import about3 from "@/assets/img20.jpg";
import about1 from "@/assets/img5.jpg";
import about2 from "@/assets/img8.jpg";
import about4 from "@/assets/img9.jpg";

/* ================= TYPEWRITER ================= */

const Typewriter = ({ text }: { text: string }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  const [count, setCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      setIsDeleting(false);
      return;
    }

    const timeout = setTimeout(
      () => {
        setCount((prev) => {
          if (!isDeleting) {
            if (prev < text.length) return prev + 1;
            setIsDeleting(true);
            return prev;
          } else {
            if (prev > 0) return prev - 1;
            setIsDeleting(false);
            return prev;
          }
        });
      },
      isDeleting ? 60 : 120
    );

    return () => clearTimeout(timeout);
  }, [count, isDeleting, isInView, text]);

  return (
    <span ref={ref}>
      {text.slice(0, count)}
      {isInView && (
        <motion.span
          className="ml-1 text-primary"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

/* ================= DATA ================= */

const features = [
  "Luxury Wedding & Event Specialists",
  "Destination Weddings Across India",
  "Creative & Experienced Planning Team",
  "End-to-End Event Management",
];

/* ================= COMPONENT ================= */

const About = () => {
  return (
    <section className="py-14 sm:py-18 md:py-22 lg:py-28 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

          {/* ================= IMAGE CAROUSEL ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-tr from-yellow-400/20 via-pink-400/10 to-purple-500/20 blur-3xl rounded-full" />

            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              centeredSlides
              grabCursor
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              slidesPerView={1.1}
              breakpoints={{
                480: { slidesPerView: 1.2 },
                640: { slidesPerView: 1.35 },
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 1.8 },
                1280: { slidesPerView: 2 },
              }}
              coverflowEffect={{
                rotate: 18,
                depth: 120,
                modifier: 1,
                slideShadows: false,
              }}
              className="relative z-10"
            >
              {[about1, about2, about3, about4, about5].map((img, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    className="
                      rounded-2xl shadow-2xl overflow-hidden
                      h-52 sm:h-60 md:h-72 lg:h-[380px] xl:h-[420px]
                    "
                  >
                    <img
                      src={img}
                      alt="Wedding Event"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="order-1 lg:order-2"
          >
            <p className="section-title text-sm sm:text-base">
              About Us
            </p>

            <h2 className="
              section-heading mb-5 leading-tight
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            ">
              Creating Timeless <br />
              <span className="text-gradient-gold">
                <Typewriter text="Wedding & Event Experiences" />
              </span>
            </h2>

            <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
              Euphoria Events Booster is a premium wedding and event management
              company known for crafting elegant, personalized, and unforgettable
              celebrations.
            </p>

            <p className="text-muted-foreground mb-8 text-sm sm:text-base leading-relaxed">
              From intimate weddings to grand destination events, our expert
              planners bring creativity and perfection to every detail.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-9">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="font-medium text-sm sm:text-base leading-snug">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="/contact"
                className="btn-gold text-center w-full sm:w-auto"
              >
                Book a Consultation
              </a>

              <a
                href="https://wa.me/919477777471"
                className="btn-outline-gold text-center w-full sm:w-auto"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
