import logo from "@/assets/Logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
/* ================= DATA ================= */

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/about" },
  { label: "SERVICES", to: "/services" },
  // { label: "DESTINATIONS", to: "/" },
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
        <div className="flex items-center justify-between h-28">
          {/* ================= LOGO ================= */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Euphoria Events"
              className="h-20  md:h-20 lg:h-28 w-28 object-contain"
            />
          </NavLink>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ================= CTA ================= */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/contact"
              className="flex items-center gap-2 bg-primary text-primary-foreground 
                         px-5 py-2.5 rounded-full font-medium text-sm 
                         transition-all duration-300 hover:bg-primary/90"
            >
              <Phone className="w-4 h-4" />
              Book Consultation
            </a>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
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
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-2 font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <a href="/contact" className="btn-gold text-center mt-4">
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
