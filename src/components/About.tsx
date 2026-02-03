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
      isDeleting ? 70 : 140
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
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 bg-secondary/30 "
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= IMAGE CAROUSEL ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow Background */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-yellow-400/20 via-pink-400/10 to-purple-500/20 blur-3xl rounded-full" />

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
                640: { slidesPerView: 1.4 },
                768: { slidesPerView: 1.6 },
                1024: { slidesPerView: 2 },
              }}
              coverflowEffect={{
                rotate: 18,
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
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl  shadow-2xl 
                               h-56 sm:h-64 md:h-72 lg:h-96"
                  >
                    <img
                      src={img}
                      alt="Wedding Event"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-2xl"
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
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="section-title"
            >
              About Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
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
              transition={{ delay: 0.3 }}
              className="text-muted-foreground mb-5"
            >
              Euphoria Events Booster is a premium wedding and event management
              company known for crafting elegant, personalized, and unforgettable
              celebrations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-muted-foreground mb-8"
            >
              From intimate weddings to grand destination events, our expert
              planners bring creativity and perfection to every detail.
            </motion.p>

            {/* ================= FEATURES ================= */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-sm sm:text-base">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ================= CTA ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="btn-gold text-center"
              >
                Book a Consultation
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919477777471"
                className="btn-outline-gold text-center"
              >
                WhatsApp Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;










// import { motion, useInView } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import { Autoplay, EffectCoverflow } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";

// import about3 from "@/assets/img20.jpg";
// import about1 from "@/assets/img5.jpg";
// import about2 from "@/assets/img8.jpg";
// import about4 from "@/assets/img9.jpg";
// import about5 from "@/assets/img13.jpg";

// /* ================= TYPEWRITER ================= */

// const Typewriter = ({ text }: { text: string }) => {
//   const ref = useRef<HTMLSpanElement | null>(null);
//   const isInView = useInView(ref, { amount: 0.4 });

//   const [count, setCount] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     if (!isInView) {
//       setCount(0);
//       setIsDeleting(false);
//       return;
//     }

//     const timeout = setTimeout(
//       () => {
//         setCount((prev) => {
//           if (!isDeleting) {
//             if (prev < text.length) return prev + 1;
//             setIsDeleting(true);
//             return prev;
//           } else {
//             if (prev > 0) return prev - 1;
//             setIsDeleting(false);
//             return prev;
//           }
//         });
//       },
//       isDeleting ? 70 : 140,
//     );

//     return () => clearTimeout(timeout);
//   }, [count, isDeleting, isInView, text]);

//   return (
//     <span ref={ref}>
//       {text.slice(0, count)}
//       {isInView && (
//         <motion.span
//           className="ml-1 text-primary"
//           animate={{ opacity: [0, 1, 0] }}
//           transition={{ repeat: Infinity, duration: 1 }}
//         >
//           |
//         </motion.span>
//       )}
//     </span>
//   );
// };

// /* ================= DATA ================= */

// const features = [
//   "Luxury Wedding & Event Specialists",
//   "Destination Weddings Across India",
//   "Creative & Experienced Planning Team",
//   "End-to-End Event Management",
// ];

// /* ================= COMPONENT ================= */

// const About = () => {
//   return (
//     <section id="about" className="py-10 bg-secondary/30 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* ================= IMAGE CAROUSEL LEFT ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ amount: 0.3 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="relative"
//           >
//             {/* Glow Background */}
//             <div className="absolute -inset-10 bg-gradient-to-tr from-yellow-400/20 via-pink-400/10 to-purple-500/20 blur-3xl rounded-full"></div>

//             <Swiper
//               modules={[Autoplay, EffectCoverflow]}
//               effect="coverflow"
//               grabCursor={true}
//               centeredSlides={true}
//               loop={true}
//               autoplay={{ delay: 2500, disableOnInteraction: false }}
//               slidesPerView={1.2}
//               breakpoints={{
//                 640: { slidesPerView: 1.5 },
//                 1024: { slidesPerView: 2 },
//               }}
//               coverflowEffect={{
//                 rotate: 20,
//                 stretch: 0,
//                 depth: 120,
//                 modifier: 1,
//                 slideShadows: false,
//               }}
//               className="relative z-10"
//             >
//               {[about1, about2, about3, about4, about5].map((img, i) => (
//                 <SwiperSlide key={i}>
//                   <motion.div
//                     whileHover={{ scale: 1.06 }}
//                     transition={{ duration: 0.5 }}
//                     className="rounded-2xl overflow-hidden shadow-2xl h-72 md:h-80 lg:h-96"
//                   >
//                     <img
//                       src={img}
//                       alt="Wedding Event"
//                       className="w-full h-full object-cover"
//                     />
//                   </motion.div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </motion.div>

//           {/* ================= CONTENT RIGHT ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ amount: 0.3 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.15 }}
//               className="section-title"
//             >
//               About Us
//             </motion.p>

//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="section-heading mb-6 leading-tight"
//             >
//               Creating Timeless <br />
//               <span className="text-gradient-gold">
//                 <Typewriter text="Wedding & Event Experiences" />
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.45 }}
//               className="text-muted-foreground mb-6"
//             >
//               Euphoria Events Booster is a premium wedding and event management
//               company known for crafting elegant, personalized, and unforgettable
//               celebrations.
//             </motion.p>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="text-muted-foreground mb-10"
//             >
//               From intimate weddings to grand destination events, our expert
//               planners bring creativity and perfection to every detail.
//             </motion.p>

//             {/* ================= FEATURES ================= */}
//             <div className="grid sm:grid-cols-2 gap-5 mb-12">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={feature}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.15 }}
//                   className="flex items-center gap-3"
//                 >
//                   <CheckCircle className="w-5 h-5 text-primary" />
//                   <span className="font-medium">{feature}</span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* ================= CTA ================= */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.85 }}
//               className="flex gap-5"
//             >
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="/contact"
//                 className="btn-gold"
//               >
//                 Book a Consultation
//               </motion.a>

//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="https://wa.me/91XXXXXXXXXX"
//                 className="btn-outline-gold"
//               >
//                 WhatsApp Us
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
