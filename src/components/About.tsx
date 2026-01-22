import { motion, Variants } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const About = () => {
  const programmingSkills = [
    "Python",
    "JavaScript",
    "C++",
    "SQL",
    "React",
    "WordPress",
    "HTML",
    "CSS",
  ];

  const aiSkills = [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "RAG",
    "LLM Prompting",
    "TensorFlow",
    "Scikit-learn",
  ];

  const dataCloudSkills = [
    "Power BI",
    "Pandas",
    "NumPy",
    "Azure",
    "AWS",
    "ETL Pipelines",
    "SQL Databases",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Figma",
    "Azure Synapse",
    "Azure Data Factory",
  ];

  const Marquee = ({ items }: { items: string[] }) => {
    const doubledItems = [...items, ...items];
    return (
      <div className="relative">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-3 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {doubledItems.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium whitespace-nowrap flex-shrink-0"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
        {/* Shadow overlay left */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent pointer-events-none z-10" />
        {/* Shadow overlay right */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent pointer-events-none z-10" />
      </div>
    );
  };

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer as unknown as Variants}
            viewport={{ once: false }}
          >
            <motion.span variants={fadeInUp as unknown as Variants} className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
              About
            </motion.span>
            <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Hi, I'm Harsh
            </motion.h2>
            <motion.p variants={fadeInUp as unknown as Variants} className="text-muted-foreground text-lg mb-6">
              I'm a Computer Science graduate (Data Science) and a freelance web developer & AI Engineer based in India, working with clients globally.
            </motion.p>
            <motion.p variants={fadeInUp as unknown as Variants} className="text-muted-foreground mb-8">
              I help businesses solve real problems using clean web experiences, intelligent data systems, and AI-powered solutions. From building scalable websites to extracting insights from data — my focus is always on clarity, performance, and long-term value.
            </motion.p>

            <motion.div variants={staggerContainer as unknown as Variants} className="space-y-4">
              <motion.div variants={fadeInUp as unknown as Variants} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Ghaziabad, India</p>
                  <p className="text-sm text-muted-foreground">Working with clients worldwide</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp as unknown as Variants} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Bachelor of Technology – Computer Science (Data Science)</p>
                  <p className="text-sm text-muted-foreground">ABES Engineering College</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: false }}
            className="p-8 bg-card rounded-2xl border border-border space-y-8"
          >
            <motion.div variants={fadeInUp as unknown as Variants}>
              <h3 className="text-xl font-semibold mb-4">Programming & Web</h3>
              <Marquee items={programmingSkills} />
            </motion.div>

            <motion.div variants={fadeInUp as unknown as Variants} className="pt-6 border-t border-border">
              <h3 className="text-xl font-semibold mb-4">Data Science & AI</h3>
              <Marquee items={aiSkills} />
            </motion.div>

            <motion.div variants={fadeInUp as unknown as Variants} className="pt-6 border-t border-border">
              <h3 className="text-xl font-semibold mb-4">Data, Cloud & Tools</h3>
              <Marquee items={dataCloudSkills} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
