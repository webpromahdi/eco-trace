import { motion } from "framer-motion";
import { Search, BarChart2, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "Discover Products",
    description:
      "Browse our curated collection of sustainable products with transparent eco-scores and carbon footprint data.",
  },
  {
    icon: BarChart2,
    title: "Track Your Impact",
    description:
      "Add products to your impact tracker and visualize your environmental footprint over time.",
  },
  {
    icon: Target,
    title: "Make Better Choices",
    description:
      "Compare alternatives, discover insights, and switch to more sustainable options.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            How EcoTrace Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps to understanding and reducing your environmental
            footprint.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="bg-background rounded-2xl p-8 border border-border transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/20">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <span className="font-serif text-4xl font-light text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/products">
              Start Exploring
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
