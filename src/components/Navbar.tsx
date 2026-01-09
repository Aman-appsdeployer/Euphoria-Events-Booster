import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/about" },
  { label: "SERVICES", to: "/" }, // services are on home page
  { label: "DESTINATIONS", to: "/" },
  { label: "GALLERY", to: "/gallery" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-foreground">
              Euphoria <span className="text-primary">Events</span>
            </span>
            <span className="hidden sm:block text-xs text-muted-foreground">
              Weddings & Celebrations
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm text-foreground/80 hover:text-primary 
                           transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-2 bg-primary text-primary-foreground 
                         px-5 py-2.5 rounded-full font-medium text-sm 
                         transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Book Consultation
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary py-2 font-medium"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:+91XXXXXXXXXX"
                className="btn-gold text-center mt-4"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;




// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, Phone, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const navLinks = [
//   { label: "HOME", href: "#home" },
//   { label: "ABOUT US", href: "#about" },
//   { label: "SERVICES", href: "#services" },
//   { label: "DESTINATIONS", href: "#venues" },
//   { label: "GALLERY", href: "#gallery" },
//   { label: "CONTACT", href: "#contact" },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">

//           {/* ================= LOGO ================= */}
//           <a href="#home" className="flex items-center gap-2">
//             <span className="text-2xl font-serif font-bold text-foreground">
//               Euphoria <span className="text-primary">Events</span>
//             </span>
//             <span className="hidden sm:block text-xs text-muted-foreground">
//               Weddings & Celebrations
//             </span>
//           </a>

//           {/* ================= DESKTOP MENU ================= */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="text-sm text-foreground/80 hover:text-primary 
//                            transition-colors duration-300 font-medium"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* ================= CTA ================= */}
//           <div className="hidden md:flex items-center gap-4">
//             <a
//               href="tel:+91XXXXXXXXXX"
//               className="flex items-center gap-2 bg-primary text-primary-foreground 
//                          px-5 py-2.5 rounded-full font-medium text-sm 
//                          transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
//             >
//               <Phone className="w-4 h-4" />
//               Book Consultation
//             </a>
//           </div>

//           {/* ================= MOBILE TOGGLE ================= */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden p-2 text-foreground"
//             aria-label="Toggle Menu"
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border"
//           >
//             <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="text-foreground hover:text-primary 
//                              transition-colors py-2 font-medium"
//                 >
//                   {link.label}
//                 </a>
//               ))}

//               <a
//                 href="tel:+91XXXXXXXXXX"
//                 className="btn-gold text-center mt-4"
//               >
//                 <Phone className="w-4 h-4 inline mr-2" />
//                 Book Consultation
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;
