import galleryHero1 from "@/assets/img21.jpg";
import galleryHero2 from "@/assets/img22.jpg";
import galleryHero3 from "@/assets/img23.jpg";

import { useToast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarHeart,
  CheckCircle,
  ClipboardList,
  Mail,
  MapPin,
  PartyPopper,
  Phone,
  PhoneCall,
  Send,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ================= HERO IMAGES ================= */
const heroImages = [galleryHero1, galleryHero2, galleryHero3];

/* ================= DATA ================= */
const offices = [
  { city: "Kolkata", address: "West Bengal, India – 700001" },
  { city: "Mumbai", address: "Maharashtra, India – 400001" },
  { city: "Howrah", address: "Howrah, West Bengal – 711101" },
];

const steps = [
  { icon: PhoneCall, title: "Initial Consultation", desc: "We understand your vision, style, and expectations." },
  { icon: ClipboardList, title: "Planning & Design", desc: "Our team curates concepts, themes, and vendors." },
  { icon: Sparkles, title: "Execution", desc: "Every detail is managed flawlessly on your big day." },
  { icon: PartyPopper, title: "Celebrate", desc: "Enjoy stress-free moments and unforgettable memories." },
];

const reasons = [
  "10+ Years of Event Planning Experience",
  "500+ Successful Weddings & Events",
  "Premium & Trusted Vendor Network",
  "End-to-End Stress-Free Execution",
  "Personalized Planning for Every Client",
  "Luxury Design with Budget Flexibility",
];

/* ================= TYPEWRITER ================= */
const Typewriter = () => {
  const text = "Perfect Event";
  const [value, setValue] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 50 : 110;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (value.length < text.length) {
          setValue(text.slice(0, value.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (value.length > 0) {
          setValue(text.slice(0, value.length - 1));
        } else {
          setDeleting(false);
        }
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

/* ================= PAGE ================= */
const Contact = () => {
  const { toast } = useToast();
  const [heroIndex, setHeroIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  /* ================= HERO CAROUSEL ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* ================= FORM SUBMIT ================= */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      title: "Thank You!",
      description: "Our team will contact you shortly to plan your celebration.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <main className="overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroIndex}
              src={heroImages[heroIndex]}
              alt="Contact Euphoria Events"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />

          
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-24">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <p className="section-title">Contact Us</p>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6">
              Let’s Plan Your <Typewriter />
            </h1>

            <p className="text-muted-foreground max-w-xl mb-10">
              From luxury weddings to corporate celebrations, Euphoria Events
              helps you create unforgettable moments with elegance and precision.
            </p>

            <a href="#contact-form" className="btn-gold inline-block">
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </section>
      {/* ================= WHY CHOOSE US SECTION ================= */}
<section className="py-28 bg-background relative">
  <div className="container mx-auto px-4">

    {/* Header */}
    <div className="text-center max-w-2xl mx-auto mb-20">
      <p className="section-title">Why Choose Us</p>

      <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-5">
        Excellence in <span className="text-gradient-gold">Every Detail</span>
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        We don’t just plan events — we craft unforgettable experiences with
        precision, creativity, and care.
      </p>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {reasons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="group relative glass-card p-8 rounded-2xl 
                     transition-all duration-300 
                     hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-primary/15 
                          flex items-center justify-center mb-5
                          group-hover:bg-primary/25 transition">
            <CheckCircle className="w-6 h-6 text-primary" />
          </div>

          {/* Text */}
          <p className="font-medium text-foreground leading-relaxed">
            {item}
          </p>

          {/* Decorative line */}
          <span className="absolute bottom-0 left-8 right-8 h-[1px] 
                           bg-gradient-to-r from-transparent 
                           via-primary/30 to-transparent opacity-0 
                           group-hover:opacity-100 transition" />
        </motion.div>
      ))}
    </div>

  </div>
</section>

      {/* ================= HOW IT WORKS SECTION ================= */}
<section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-title">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Simple Planning Process
          </h2>
          <p className="text-muted-foreground">
            A seamless journey from idea to celebration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <step.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact-form"
        className="relative py-24 bg-background overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* ================= FORM ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <CalendarHeart className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif font-bold">
                  Book a Consultation
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="input-elegant w-full"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="input-elegant w-full"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="input-elegant w-full"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Event Details
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="input-elegant w-full min-h-[140px] resize-none"
                    placeholder="Tell us about your wedding or event..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </button>
              </form>
            </motion.div>

            {/* ================= INFO ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              {/* Contact Cards */}
              <div className="glass-card p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="text-lg font-semibold hover:text-primary"
                    >
                      +91 XXXXXXXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <a
                      href="mailto:info@euphoriaevents.com"
                      className="text-lg font-semibold hover:text-primary break-all"
                    >
                      info@euphoriaevents.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <h3 className="text-lg font-serif font-bold mb-4">
                  Our Locations
                </h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="glass-card p-4 flex items-start gap-3"
                    >
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">{office.city}</p>
                        <p className="text-sm text-muted-foreground">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MAP SECTION (KOLKATA) ================= */}
      <section className="w-full h-[450px]">
        <iframe
          title="Kolkata Office Location"
          src="https://www.google.com/maps?q=Kolkata,West%20Bengal,India&z=13&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

    </main>
  );
};

export default Contact;
