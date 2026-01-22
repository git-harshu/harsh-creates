import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Globe, Bot, ShoppingCart, Zap } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const projects = [
  {
    icon: ShoppingCart,
    title: "Modom Grooming",
    category: "E-commerce | Web Development",
    description: "Developed a conversion-optimized WordPress e-commerce website for an international unisex grooming brand. Implemented custom themes, WooCommerce integration, and SEO optimization resulting in improved sales performance.",
    technologies: ["WordPress", "WooCommerce", "Elementor", "HTML", "CSS", "JavaScript"],
    link: "https://modomgrooming.com",
  },
  {
    icon: Globe,
    title: "Hair Mastery",
    category: "LMS | Web Development",
    description: "Built a comprehensive WordPress Learning Management System for Hair Mastery, enabling online courses, student management, and interactive learning experiences. Custom theme development with full LMS functionality.",
    technologies: ["WordPress", "LearnDash", "Elementor", "Custom PHP", "HTML", "CSS"],
    link: "https://hair-mastery.com",
  },
  {
    icon: Bot,
    title: "Automatic Number Plate Recognition System",
    category: "Computer Vision | Deep Learning",
    description: "Built a real-time ANPR system using Python, OpenCV, and TensorFlow for detecting and recognizing vehicle number plates from images and videos with 85%+ OCR accuracy.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "Computer Vision"],
    link: "#",
  },
  {
    icon: Globe,
    title: "Azure Data Warehouse & Power BI Analytics",
    category: "Cloud | Data Engineering",
    description: "Designed a cloud-based ETL and analytics system processing 1M+ stock market records with automated pipelines and interactive Power BI dashboards.",
    technologies: ["Azure Data Factory", "Azure Data Lake", "Azure SQL", "Power BI", "SQL"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-card/30">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of real-world projects showcasing my expertise in web development, data science, and AI.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              variants={fadeInUp as unknown as Variants}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={(e) => project.link === "#" && e.preventDefault()}
              className={`group relative p-6 sm:p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors block ${project.link === "#" ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <project.icon className="w-6 h-6" />
                </div>
                {project.link !== "#" && (
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </div>

              <span className="inline-block px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3">
                {project.category}
              </span>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section >
  );
};

export default Projects;
