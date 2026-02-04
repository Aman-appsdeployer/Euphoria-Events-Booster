import { motion } from "framer-motion";
import { Instagram, PhoneCall } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col gap-4">

      {/* ================= INSTAGRAM ================= */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
        className="group relative"
      >
        {/* Tooltip */}
        <span
          className="absolute right-16 top-1/2 -translate-y-1/2 
                     bg-background text-foreground text-sm
                     px-3 py-1 rounded-lg shadow-lg
                     opacity-0 group-hover:opacity-100
                     transition-opacity whitespace-nowrap"
        >
          Follow us
        </span>

        <motion.a
          href="https://www.instagram.com/euphoria_eb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full
                     bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500
                     flex items-center justify-center
                     shadow-2xl"
        >
          <Instagram className="w-6 h-6 text-white" />
        </motion.a>
      </motion.div>

      {/* ================= WHATSAPP ================= */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 120 }}
        className="group relative"
      >
        {/* Tooltip */}
        <span
          className="absolute right-16 top-1/2 -translate-y-1/2 
                     bg-background text-foreground text-sm
                     px-3 py-1 rounded-lg shadow-lg
                     opacity-0 group-hover:opacity-100
                     transition-opacity whitespace-nowrap"
        >
          Chat with us
        </span>

        <motion.a
          href="https://wa.me/91947777471?text=Hello%20I%20would%20like%20to%20enquire%20about%20event%20planning"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full
                     bg-[#25D366] flex items-center justify-center
                     shadow-2xl"
        >
          {/* Pulse */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping" />

          <PhoneCall className="relative w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </motion.a>
      </motion.div>

    </div>
  );
};

export default WhatsAppFloat;



// import { motion } from "framer-motion";
// import { PhoneCall } from "lucide-react";

// const WhatsAppFloat = () => {
//   return (
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       transition={{ delay: 1, type: "spring", stiffness: 120 }}
//       className="fixed bottom-6 right-6 z-[999] mb-10 "
//     >
//       {/* Tooltip */}
//       <div className="group relative">
//         <span
//           className="absolute right-16 top-1/2 -translate-y-1/2 
//                      bg-background text-foreground text-sm 
//                      px-3 py-1 rounded-lg shadow-lg 
//                      opacity-0 group-hover:opacity-100 
//                      transition-opacity whitespace-nowrap"
//         >
//           Chat with us
//         </span>

//         {/* Button */}
//         <motion.a
//           href="https://wa.me/91947777471?text=Hello%20I%20would%20like%20to%20enquire%20about%20event%20planning"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Chat on WhatsApp"
//           whileHover={{ scale: 1.12 }}
//           whileTap={{ scale: 0.95 }}
//           className="relative w-14 h-14 rounded-full 
//                      bg-[#25D366] flex items-center justify-center 
//                      shadow-2xl"
//         >
//           {/* Pulse Ring */}
//           <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />

//           {/* Icon */}
//           <PhoneCall className="relative w-7 h-7 text-white" />
//         </motion.a>
//       </div>
//     </motion.div>
//   );
// };

// export default WhatsAppFloat;
