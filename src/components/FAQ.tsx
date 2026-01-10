import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How much does event management cost in India?",
    answer:
      "The cost of event management depends on the type, scale, and level of customization required. Prices typically vary based on décor, venue, guest count, and services involved. Contact us to discuss your vision, and we’ll provide a personalised quotation tailored to your needs.",
  },
  {
    question: "What services does Euphoria Events Booster provide?",
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

const FAQ = () => {
  return (
    <section className="relative py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-title">Need Help?</p>

            <h2 className="section-heading mb-6">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We’ve answered some of the most common questions to help you
              understand our event planning process. If you need more details,
              our team is always happy to assist you personally.
            </p>

            <a href="#contact" className="btn-gold">
              Get in Touch
            </a>
          </motion.div>

          {/* ================= FAQ ACCORDION ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger
                    className="text-foreground font-medium text-left 
                               hover:text-primary hover:no-underline py-5"
                  >
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
