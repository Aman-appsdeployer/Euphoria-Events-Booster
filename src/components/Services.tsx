import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import privateParty from "@/assets/img10.jpg";
import weddingCouple from "@/assets/img11.jpg";
import musicEntertainment from "@/assets/img13.jpg";
import beachWedding from "@/assets/img3.jpg";
import corporateEvent from "@/assets/img5.jpg";
import destinationWedding from "@/assets/img6.jpg";

// ================= DATA =================
const services = [
  {
    title: "Corporate Events",
    desc: "Premium corporate experiences designed with precision and elegance.",
    image: corporateEvent,
  },
  {
    title: "Wedding Planning",
    desc: "Timeless weddings crafted with luxury, emotion, and perfection.",
    image: weddingCouple,
  },
  {
    title: "Destination Weddings",
    desc: "Celebrate love in breathtaking destinations with flawless planning.",
    image: destinationWedding,
  },
  {
    title: "Beach Weddings",
    desc: "Elegant beach ceremonies with stunning décor and ambiance.",
    image: beachWedding,
  },
  {
    title: "Music & Entertainment",
    desc: "Live performances, DJs, and entertainment that elevate celebrations.",
    image: musicEntertainment,
  },
  {
    title: "Private Parties",
    desc: "Exclusive private events designed for unforgettable moments.",
    image: privateParty,
  },
];

// ================= TYPING TEXT =================
const words = ["Luxury Weddings", "Corporate Events", "Elite Celebrations"];

const AnimatedTypingText = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.substring(0, char + 1));
        setChar((prev) => prev + 1);
        if (char + 1 === word.length) setDeleting(true);
      } else {
        setText(word.substring(0, char - 1));
        setChar((prev) => prev - 1);
        if (char === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 70 : 140);

    return () => clearTimeout(timer);
  }, [char, deleting, index]);

  return <span className="text-yellow-400 font-semibold">{text}|</span>;
};

// ================= MAIN COMPONENT =================
const Services = () => {
  return (
    <section id="services" className="relative py-28 bg-background overflow-hidden">
      {/* ===== LUXURY BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="tracking-[0.3em] uppercase text-yellow-400 text-sm mb-3">
            Our Services
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Crafting{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent animate-gradient">
              Luxury Experiences
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            We specialize in <AnimatedTypingText />
          </p>
        </motion.div>

        {/* ===== GRID (NOT OVER-ANIMATED) ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white/8 backdrop-blur-xl border border-white/15 shadow-xl"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                  {service.desc}
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-yellow-400 text-sm font-medium hover:gap-3 transition-all"
                >
                  Explore Service <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Subtle Glow Border */}
              <div className="absolute inset-0 rounded-3xl border border-yellow-400/20 opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;













// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// import privateParty from "@/assets/img10.jpg";
// import weddingCouple from "@/assets/img11.jpg";
// import musicEntertainment from "@/assets/img13.jpg";
// import beachWedding from "@/assets/img3.jpg";
// import corporateEvent from "@/assets/img5.jpg";
// import destinationWedding from "@/assets/img6.jpg";

// const services = [
//   {
//     title: "Corporate Events",
//     description:
//       "Impress clients and teams with professionally curated corporate events that reflect your brand’s excellence.",
//     image: corporateEvent,
//   },
//   {
//     title: "Wedding Planning",
//     description:
//       "From intimate ceremonies to grand celebrations, we design weddings that feel timeless and personal.",
//     image: weddingCouple,
//   },
//   {
//     title: "Destination Weddings",
//     description:
//       "Celebrate your love in breathtaking destinations, planned seamlessly with luxury and precision.",
//     image: destinationWedding,
//   },
//   {
//     title: "Beach Weddings",
//     description:
//       "Say ‘I do’ by the serene shores with elegant beach wedding setups crafted to perfection.",
//     image: beachWedding,
//   },
//   {
//     title: "Music & Entertainment",
//     description:
//       "Live bands, DJs, and performances that elevate your celebration and keep the energy alive.",
//     image: musicEntertainment,
//   },
//   {
//     title: "Private Parties",
//     description:
//       "Birthdays, anniversaries, and exclusive gatherings designed to create unforgettable moments.",
//     image: privateParty,
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="relative py-24 bg-background">
//       <div className="container mx-auto px-4">

//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <p className="section-title">Our Services</p>

//           <h2 className="section-heading">
//             Exceptional Experiences by{" "}
//             <span className="text-gradient-gold">Euphoria Events</span>
//           </h2>

//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             We specialize in luxury weddings, destination celebrations, and
//             premium events across India and beyond — crafted with creativity,
//             elegance, and flawless execution.
//           </p>
//         </motion.div>

//         {/* ================= SERVICES GRID ================= */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.12 }}
//               className="group card-hover"
//             >
//               <div className="relative overflow-hidden rounded-2xl bg-card">

//                 {/* Image */}
//                 <div className="aspect-[4/3] overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover 
//                                transition-transform duration-700 
//                                group-hover:scale-110"
//                   />
//                 </div>

//                 {/* Overlay */}
//                 <div
//                   className="absolute inset-0 bg-gradient-to-t 
//                              from-background/95 via-background/50 
//                              to-transparent opacity-90"
//                 />

//                 {/* Content */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <h3
//                     className="text-xl font-serif font-bold text-foreground 
//                                mb-2 group-hover:text-primary 
//                                transition-colors"
//                   >
//                     {service.title}
//                   </h3>

//                   <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
//                     {service.description}
//                   </p>

//                   <a
//                     href="/contact"
//                     className="inline-flex items-center gap-2 
//                                text-primary font-medium text-sm group/btn"
//                   >
//                     Explore Service
//                     <ArrowRight
//                       className="w-4 h-4 transition-transform 
//                                  group-hover/btn:translate-x-1"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
