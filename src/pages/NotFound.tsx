import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        {/* 404 Number */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[8rem] md:text-[10rem] font-bold text-transparent bg-clip-text 
                     bg-gradient-to-r from-primary to-[hsl(40_85%_60%)] leading-none"
        >
          404
        </motion.h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl md:text-3xl font-serif font-bold text-foreground">
          Page Not Found
        </h2>

        <p className="mt-3 max-w-md mx-auto text-muted-foreground">
          Oops! The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to something beautiful.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="btn-gold flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-full 
                       border border-border text-foreground 
                       hover:bg-secondary transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
