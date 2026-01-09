import { motion } from "framer-motion";
import { Award, CheckCircle, Star } from "lucide-react";

const About = () => {
  return (
    <main className="pt-24">

      {/* 1️⃣ HERO */}
      <section className="py-24 bg-background text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-serif font-bold"
        >
          About <span className="text-primary">Euphoria Events</span>
        </motion.h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Luxury wedding and event planners creating unforgettable celebrations.
        </p>
      </section>

      {/* 2️⃣ ABOUT CONTENT */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-heading mb-6">
              Crafting Elegant Experiences
            </h2>
            <p className="text-muted-foreground mb-4">
              Euphoria Events Booster specializes in premium weddings, destination
              events, and bespoke celebrations across Kerala and beyond.
            </p>
            <p className="text-muted-foreground">
              Every event is designed with creativity, precision, and attention
              to detail.
            </p>
          </div>
          <div className="glass-card p-8">
            <Award className="w-10 h-10 text-primary mb-4" />
            <p className="font-medium">
              Trusted by couples and brands for luxury events.
            </p>
          </div>
        </div>
      </section>

      {/* 3️⃣ FEATURES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Luxury Weddings",
            "Destination Events",
            "Creative Planning",
            "End-to-End Execution",
          ].map((item) => (
            <div key={item} className="glass-card p-6 flex gap-3">
              <CheckCircle className="text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4️⃣ STATS */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {["250+ Events", "50+ Weddings", "10+ Destinations", "5★ Rating"].map(
            (stat) => (
              <div key={stat} className="glass-card p-8">
                <Star className="mx-auto mb-2 text-primary" />
                <p className="font-bold">{stat}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* 5️⃣ CTA */}
      <section className="py-20 bg-background text-center">
        <h2 className="section-heading mb-6">
          Let’s Plan Your Perfect Event
        </h2>
        <a href="/contact" className="btn-gold">
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default About;
