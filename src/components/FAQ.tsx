import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// ================= FAQ DATA =================
const faqs = [
  {
    question: "How much does event management cost in India?",
    answer:
      "The cost of event management depends on the type, scale, and level of customization required. Prices typically vary based on décor, venue, guest count, and services involved. Contact us to discuss your vision, and we’ll provide a personalised quotation tailored to your needs.",
  },
  {
    question: "What services does Euphoria Events provide?",
    answer:
      "We offer end-to-end event management services including wedding planning, destination weddings, corporate events, private celebrations, venue coordination, décor & styling, entertainment, photography, and complete event execution across India and beyond.",
  },
  {
    question: "Do you plan events for different budgets?",
    answer:
      "Absolutely. We believe every celebration should be special. Our team designs customised event plans that align with your budget while maintaining quality, elegance, and seamless execution.",
  },
  {
    question: "When should I book an event planner?",
    answer:
      "We recommend booking your event planner as soon as your date and venue are decided. Ideally, reaching out 4–6 months in advance helps ensure better planning, availability, and stress-free execution—especially during peak wedding seasons.",
  },
  {
    question: "How much does a destination wedding in Kolkata cost?",
    answer:
      "Destination wedding costs vary based on location, guest count, décor, accommodation, and services selected. Our team works closely with you to design a destination wedding experience that matches your vision and budget expectations.",
  },
];

// ================= TYPEWRITER TEXT =================
const words = [
  "Weddings",
  "Corporate Events",
  "Luxury Celebrations",
  "Destination Weddings",
];

const TypewriterText = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setText(word.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === word.length) setDeleting(true);
        } else {
          setText(word.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 70 : 140,
    );

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="text-gradient-gold font-semibold">
      {text}
      <span className="animate-pulse text-text-primary">|</span>
    </span>
  );
};

// ================= MAIN COMPONENT =================
const FAQ = () => {
  return (
    <section className="relative py-28 bg-background overflow-hidden">
      {/* Brand Glow Background */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="tracking-[0.3em] uppercase text-primary text-sm mb-3">
              Need Help?
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Frequently Asked{" "}
              <span className="text-gradient-gold animate-gradient">
                Questions
              </span>
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Get answers about planning <TypewriterText /> with{" "}
              <span className="text-primary font-semibold">
                Euphoria Events
              </span>
              .
            </p>

            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-full
                       bg-gradient-to-r from-primary to-[hsl(18_75%_72%)]
                       text-white font-semibold shadow-lg
                       hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* ================= ACCORDION ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="group relative rounded-3xl
                             bg-card/70 backdrop-blur-xl
                             border border-border/60
                             shadow-xl transition-all duration-500"
                  >
                    {/* Brand Glow Border */}
                    <div
                      className="absolute inset-0 rounded-3xl
                                  bg-gradient-to-r
                                  from-primary/40
                                  via-[hsl(18_75%_72%)/0.35]
                                  to-primary/40
                                  opacity-0 group-hover:opacity-100
                                  blur-xl transition duration-700"
                    />

                    <AccordionTrigger
                      className="relative z-10 px-6 py-5 text-left
                               text-white font-medium text-lg
                               hover:text-primary hover:no-underline transition"
                    >
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent className="relative z-10 px-6 pb-5 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
