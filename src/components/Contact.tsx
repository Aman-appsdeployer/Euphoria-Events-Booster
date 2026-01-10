import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { CalendarHeart, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const offices = [
  {
    city: "Kolkata",
    address: "West bengal, India – 682011",
  },
  {
    city: "Mumbai",
    address: "kolkata, India – 680001",
  },
  {
    city: "Hawrah",
    address: "Hawrah, India – 673001",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Thank You!",
      description: "Our team will contact you shortly to plan your celebration.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="section-title">Contact Us</p>
          <h2 className="section-heading">
            Let’s Create Your <span className="text-gradient-gold">Perfect Event</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From luxury weddings to unforgettable celebrations, Euphoria Events
            Booster is here to turn your dreams into reality.
          </p>
        </motion.div>

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
              <h3 className="text-xl font-serif font-bold text-foreground">
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
                    className="text-lg font-semibold hover:text-primary transition-colors"
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
                    className="text-lg font-semibold hover:text-primary transition-colors break-all"
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
  );
};

export default Contact;
