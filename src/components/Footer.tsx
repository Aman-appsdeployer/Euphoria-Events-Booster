import logo from "@/assets/Logo.png";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { NavLink } from "react-router-dom";

/* ================= DATA ================= */
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Wedding Planning",
  "Destination Weddings",
  "Corporate Events",
  "Private Parties",
  "Event Decor & Styling",
  "Photography & Videography",
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-20">
        {/* ================= GRID ================= */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ================= BRAND ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* ================= LOGO ================= */}
            <img
              src={logo}
              alt="Euphoria Events Booster"
              className="h-24  lg:h-36  w-auto object-contain"
            />

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A premium wedding & event management company delivering elegant,
              personalized, and unforgettable celebrations across India and
              destination locations worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center
                             text-muted-foreground hover:bg-primary hover:text-primary-foreground
                             transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ================= QUICK LINKS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl  font-serif font-extrabold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `group inline-flex items-center gap-2 text-sm transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`
                    }
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition" />
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================= SERVICES ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-serif font-bold mb-6">Our Services</h4>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================= CONTACT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-serif font-bold mb-6">Contact Info</h4>

            <ul className="space-y-5 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <a
                  href="tel:+919477777471"
                  className="hover:text-primary transition-colors"
                >
                  +91 9477777471
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <a
                  href="mailto:info@euphoriaevents.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  info@euphoriaevents.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>India · Destination Events Worldwide</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Euphoria Events Booster. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
