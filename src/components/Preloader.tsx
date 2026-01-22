// c:\Users\Harsh\builtwithakki\src\components\Preloader.tsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Hello", "Bonjour", "Namaste", "Hola", "Ciao", "Harsh."];

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Lock body scroll while loading
    document.body.style.overflow = "hidden";

    // Cycle words
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === words.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      // Slight delay at the end before lifting the curtain
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "unset";
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <>
          {/* Main Background Curtain */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
            }}
          >
            {/* Content Container */}
            <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 overflow-hidden">
              
              {/* Top Section */}
              <div className="flex justify-between items-start w-full">
                 <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl font-bold tracking-tight"
                 >
                    HU.
                 </motion.span>
                 <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="hidden sm:block text-sm font-medium text-muted-foreground"
                 >
                    Portfolio &copy; {new Date().getFullYear()}
                 </motion.span>
              </div>

              {/* Center Section */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative overflow-hidden h-[1.2em] text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-foreground leading-none">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                      className="block"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex justify-between items-end w-full">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-2"
                  >
                    <span className="text-sm uppercase tracking-widest text-muted-foreground">Loading Experience</span>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-sm font-medium">System Ready</span>
                    </div>
                  </motion.div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary rounded-full blur-[100px]" />
              </div>
            </div>
          </motion.div>

          {/* Secondary Layer for Parallax Exit Effect */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-primary/20 backdrop-blur-3xl"
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
