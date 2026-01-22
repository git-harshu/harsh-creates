import { motion, Variants } from "framer-motion";
import { Code2, Bot, Zap, Globe, Database, Settings } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with React and WordPress. Clean UI, fast performance, and conversion-focused design.",
  },
  {
    icon: Code2,
    title: "Data Science & Machine Learning",
    description: "End-to-end data solutions including EDA, predictive modeling, and ML pipelines using Python, TensorFlow, and Scikit-learn.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "AI-powered systems including NLP solutions, LLM-based workflows, RAG pipelines, and intelligent automation to reduce manual effort.",
  },
  {
    icon: Database,
    title: "Custom Applications",
    description: "Scalable applications from MVP to production using modern stacks and cloud infrastructure.",
  },
  {
    icon: Zap,
    title: "Data Analytics & Visualization",
    description: "Interactive dashboards and analytics using Power BI, Python, and SQL to turn raw data into actionable insights.",
  },
  {
    icon: Settings,
    title: "Cloud & ETL Systems",
    description: "Cloud-based data pipelines and warehouses using Microsoft Azure and AWS for reliable, scalable data processing.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-card/30">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What I Build
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Purpose-driven digital solutions — designed for performance, scalability, and real business impact.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp as unknown as Variants}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
