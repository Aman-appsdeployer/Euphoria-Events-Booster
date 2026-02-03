import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

/* ================= TYPEWRITER WORDS ================= */

const words = ["Happy Clients", "Real Stories", "Trusted Reviews"];

const TypewriterText = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.substring(0, char + 1));
        setChar((p) => p + 1);
        if (char + 1 === word.length) setDeleting(true);
      } else {
        setText(word.substring(0, char - 1));
        setChar((p) => p - 1);
        if (char === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % words.length);
        }
      }
    }, deleting ? 70 : 130);

    return () => clearTimeout(timer);
  }, [char, deleting, index]);

  return (
    <span className="text-gradient-gold font-bold">
      {text}|
    </span>
  );
};

/* ================= DATA ================= */

const testimonials = [
  {
    name: "Arun & Priya",
    event: "Destination Wedding",
    rating: 5,
    review:
      "Euphoria Events Booster turned our dream wedding into a magical reality. Every detail was curated with elegance and perfection. Truly unforgettable!",
  },
  {
    name: "Rajesh Kumar",
    event: "Corporate Event",
    rating: 5,
    review:
      "From planning to execution, the team was extremely professional. Our corporate event was seamless and impressive. Highly recommended!",
  },
  {
    name: "Meera & Anand",
    event: "Beach Wedding",
    rating: 5,
    review:
      "The beach wedding setup was breathtaking. The decor, coordination, and overall experience exceeded our expectations in every way.",
  },
];

/* ================= COMPONENT ================= */

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-secondary/30 overflow-hidden">

      {/* Brand Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="section-title">Testimonials</p>

          <h2 className="section-heading">
            Words from Our <TypewriterText />
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We take pride in delivering unforgettable experiences. Here’s what
            our clients say about working with Euphoria Events Booster.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-8 relative hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >

              <Quote className="w-12 h-12 text-primary/20 absolute -top-4 -right-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground/90 mb-8 leading-relaxed italic">
                “{testimonial.review}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full
                                bg-gradient-to-br
                                from-primary
                                to-[hsl(18_75%_72%)]
                                flex items-center justify-center
                                text-primary-foreground
                                font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.event}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
