import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Leaf, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.45, 0.05, 0.55, 0.95],
    },
  },
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70svh] flex items-center overflow-hidden hero-gradient">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-[10%] w-[min(16rem,40vw)] h-[min(16rem,40vw)] bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-[min(24rem,50vw)] h-[min(24rem,50vw)] bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto py-16 md:py-24 xl:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                <Sparkles className="h-4 w-4" />
                Sustainability made simple
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif heading-hero font-semibold text-foreground mb-6 text-balance"
            >
              Discover your
              <span className="block eco-gradient-text">
                environmental impact
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed mb-8 text-measure"
            >
              EcoTrace helps you make informed choices by revealing the true
              environmental footprint of everyday products. Track, compare, and
              reduce your impact.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link to="/impact">View Your Impact</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-4 sm:gap-6"
            >
              {[
                { value: "50K+", label: "Products" },
                { value: "2.5M", label: "kg CO₂ Tracked" },
                { value: "98%", label: "Accuracy" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif heading-subsection font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central circle */}
              <motion.div
                className="absolute inset-[15%] rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <Leaf className="h-20 w-20 text-primary" />
              </motion.div>

              {/* Floating cards */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-0 right-0 bg-card shadow-lg rounded-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-eco-excellent/20 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-eco-excellent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Eco Score</p>
                    <p className="text-2xl font-bold text-eco-excellent">92</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="absolute bottom-10 left-0 bg-card shadow-lg rounded-xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Carbon Saved</p>
                    <p className="text-2xl font-bold text-accent">45.2 kg</p>
                  </div>
                </div>
              </motion.div>

              {/* Orbit rings */}
              <div className="absolute inset-0 rounded-full border border-primary/10" />
              <div className="absolute inset-[10%] rounded-full border border-primary/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
