import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-4xl mt-4 mx-auto text-center"
        >
          {/* Status badge */}
          <motion.div
            variants={fadeInUp as unknown as Variants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-primary"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: [1, 3], opacity: [0.5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeOut",
                }}
              />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Available for new projects</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeInUp as unknown as Variants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Building <span className="text-primary">Data-Driven & Scalable</span>
            <br />
            Digital Systems
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp as unknown as Variants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            Freelance Web Developer & AI Engineer helping startups and businesses build high-performing websites,
            intelligent data systems, and AI-powered solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerContainer as unknown as Variants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              variants={fadeInUp as unknown as Variants}
              href="#book-call"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-colors duration-300 hover:bg-primary/90"
            >
              Book a Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              variants={fadeInUp as unknown as Variants}
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg transition-colors duration-300 hover:bg-card hover:border-primary/50"
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={staggerContainer as unknown as Variants}
            className="flex items-center justify-center gap-8 sm:gap-12 mt-16 pt-16 border-t border-border/50"
          >
            {[
              { value: "1.5+", label: "Years Experience" },
              { value: "5+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp as unknown as Variants} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
