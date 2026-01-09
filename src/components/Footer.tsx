import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
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
  {
    icon: Instagram,
    href: "https://www.instagram.com/euphoria_eb",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "#",
    label: "Youtube",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
  },
];

const Footer = () => {
  return (
    <footer className="bg-card py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= BRAND ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="inline-block mb-4">
              <span className="text-2xl font-serif font-bold text-foreground">
                Euphoria <span className="text-primary">Events</span>
              </span>
            </a>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Euphoria Events Booster is a premium wedding and event planning
              company delivering elegant, personalized, and unforgettable
              experiences across India and international destinations.
            </p>

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
            <h4 className="text-lg font-serif font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
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
            <h4 className="text-lg font-serif font-bold text-foreground mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================= CONTACT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-serif font-bold text-foreground mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Phone:</strong>
                <br />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="hover:text-primary transition-colors"
                >
                  +91 XXXXXXXXXX
                </a>
              </li>

              <li>
                <strong className="text-foreground">Email:</strong>
                <br />
                <a
                  href="mailto:info@euphoriaevents.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  info@euphoriaevents.com
                </a>
              </li>

              <li>
                <strong className="text-foreground">Location:</strong>
                <br />
                India · Destination Events Worldwide
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ================= FOOTER BOTTOM ================= */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Euphoria Events Booster. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
