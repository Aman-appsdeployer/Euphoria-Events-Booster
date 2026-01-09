import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-24">

      {/* 1️⃣ HERO */}
      <section className="py-24 bg-background text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-serif font-bold"
        >
          Contact <span className="text-primary">Us</span>
        </motion.h1>
        <p className="text-muted-foreground mt-4">
          Let’s create something unforgettable together.
        </p>
      </section>

      {/* 2️⃣ CONTACT FORM */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl glass-card p-10">
          <form className="space-y-6">
            <input className="input-elegant w-full" placeholder="Your Name" />
            <input className="input-elegant w-full" placeholder="Phone Number" />
            <input className="input-elegant w-full" placeholder="Email" />
            <textarea
              className="input-elegant w-full min-h-[120px]"
              placeholder="Tell us about your event..."
            />
            <button className="btn-gold w-full flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* 3️⃣ CONTACT INFO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6 flex gap-4">
            <Phone className="text-primary" />
            <span>+91 XXXXXXXXXX</span>
          </div>
          <div className="glass-card p-6 flex gap-4">
            <Mail className="text-primary" />
            <span>info@euphoriaevents.com</span>
          </div>
        </div>
      </section>

      {/* 4️⃣ CTA */}
      <section className="py-20 bg-secondary/30 text-center">
        <h2 className="section-heading mb-6">
          Book a Free Consultation
        </h2>
        <a href="tel:+91XXXXXXXXXX" className="btn-gold">
          Call Now
        </a>
      </section>
    </main>
  );
};

export default Contact;
