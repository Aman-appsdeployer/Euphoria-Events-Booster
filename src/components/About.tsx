import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import about4 from "@/assets/img2.jpg";
import about1 from "@/assets/img3.jpg";
import about2 from "@/assets/img8.jpg";
import about3 from "@/assets/img9.jpg";

/* ================= TYPEWRITER (LOOP + SCROLL BASED) ================= */

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

    const timeout = setTimeout(() => {
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
    }, isDeleting ? 70 : 140);

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
    <section id="about" className="py-28 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= IMAGE LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[about1, about2, about3, about4].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className={`rounded-2xl overflow-hidden ${
                    i % 2 === 0 ? "h-48" : "h-64"
                  }`}
                >
                  <img
                    src={img}
                    alt="Wedding Event"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
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
              transition={{ delay: 0.45 }}
              className="text-muted-foreground mb-6"
            >
              Euphoria Events Booster is a premium wedding and event management
              company known for crafting elegant, personalized, and unforgettable
              celebrations.
            </motion.p>

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
  );
};

export default About;








// import { motion } from "framer-motion";
// import { CheckCircle } from "lucide-react";

// import about4 from "@/assets/img2.jpg";
// import about1 from "@/assets/img3.jpg";
// import about2 from "@/assets/img8.jpg";
// import about3 from "@/assets/img9.jpg";

// const features = [
//   "Luxury Wedding & Event Specialists",
//   "Destination Weddings Across India",
//   "Creative & Experienced Planning Team",
//   "End-to-End Event Management",
// ];

// const About = () => {
//   return (
//     <section id="about" className="py-24 bg-secondary/30">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* ================= IMAGE GRID ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-4">
//                 <div className="rounded-2xl overflow-hidden h-48">
//                   <img
//                     src={about1}
//                     alt="Luxury Wedding Decor"
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//                 <div className="rounded-2xl overflow-hidden h-64">
//                   <img
//                     src={about2}
//                     alt="Bride and Groom Celebration"
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-4 pt-8">
//                 <div className="rounded-2xl overflow-hidden h-64">
//                   <img
//                     src={about3}
//                     alt="Stage & Event Setup"
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//                 <div className="rounded-2xl overflow-hidden h-48">
//                   <img
//                     src={about4}
//                     alt="Destination Wedding Venue"
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Experience Badge */}
//             {/* <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3, type: "spring" }}
//               className="absolute -bottom-6 left-1/2 -translate-x-1/2 
//                          bg-card border border-primary/30 
//                          rounded-full px-6 py-3 flex items-center gap-3 shadow-lg"
//             >
//               <Award className="w-8 h-8 text-primary" />
//               <div>
//                 <p className="text-xs text-muted-foreground">
//                   Trusted Event Planners
//                 </p>
//                 <p className="font-semibold text-foreground">
//                   Euphoria Events Booster
//                 </p>
//               </div>
//             </motion.div> */}
//           </motion.div>

//           {/* ================= CONTENT ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="section-title">About Us</p>

//             <h2 className="section-heading mb-6">
//               Creating Timeless{" "}
//               <span className="text-gradient-gold">Wedding & Event Experiences</span>
//             </h2>

//             <p className="text-muted-foreground mb-6 leading-relaxed">
//               Euphoria Events Booster is a premium wedding and event management
//               company known for crafting elegant, personalized, and unforgettable
//               celebrations. From intimate weddings to grand destination events,
//               we bring creativity and perfection to every detail.
//             </p>

//             <p className="text-muted-foreground mb-8 leading-relaxed">
//               Our expert planners work closely with couples and brands to design
//               meaningful experiences that reflect your vision, culture, and
//               style — ensuring every moment feels extraordinary.
//             </p>

//             {/* ================= FEATURES ================= */}
//             <div className="grid sm:grid-cols-2 gap-4 mb-10">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={feature}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center gap-3"
//                 >
//                   <CheckCircle className="w-5 h-5 text-primary" />
//                   <span className="text-foreground font-medium">
//                     {feature}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* ================= CTA ================= */}
//             <div className="flex flex-wrap gap-4">
//               <a href="/contact" className="btn-gold">
//                 Book a Consultation
//               </a>

//               <a
//                 href="https://wa.me/91XXXXXXXXXX"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-outline-gold"
//               >
//                 WhatsApp Us
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
