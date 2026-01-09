import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 120 }}
      className="fixed bottom-6 right-6 z-[999] mb-10 "
    >
      {/* Tooltip */}
      <div className="group relative">
        <span
          className="absolute right-16 top-1/2 -translate-y-1/2 
                     bg-background text-foreground text-sm 
                     px-3 py-1 rounded-lg shadow-lg 
                     opacity-0 group-hover:opacity-100 
                     transition-opacity whitespace-nowrap"
        >
          Chat with us
        </span>

        {/* Button */}
        <motion.a
          href="https://wa.me/91XXXXXXXXXX?text=Hello%20I%20would%20like%20to%20enquire%20about%20event%20planning"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full 
                     bg-[#25D366] flex items-center justify-center 
                     shadow-2xl"
        >
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />

          {/* Icon */}
          <PhoneCall className="relative w-7 h-7 text-white" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default WhatsAppFloat;
