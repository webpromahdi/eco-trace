import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Shield,
  Lightbulb,
  Users,
  BarChart3,
  Leaf,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Transparency",
    description:
      "We believe in open, honest data. Every eco-score is backed by verifiable metrics and clear methodology.",
  },
  {
    icon: Shield,
    title: "Accuracy",
    description:
      "Our scoring system uses industry-standard lifecycle assessment methods to ensure reliable results.",
  },
  {
    icon: Lightbulb,
    title: "Empowerment",
    description:
      "We give consumers the knowledge they need to make informed, sustainable purchasing decisions.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Together, small individual choices add up to meaningful environmental impact.",
  },
];

const methodologySteps = [
  {
    step: 1,
    title: "Data Collection",
    description:
      "We gather information from manufacturers, certifications bodies, and independent research on materials, production, and supply chain.",
  },
  {
    step: 2,
    title: "Lifecycle Assessment",
    description:
      "Each product is analyzed across five dimensions: materials sourcing, manufacturing processes, transportation, packaging, and end-of-life options.",
  },
  {
    step: 3,
    title: "Score Calculation",
    description:
      "Our algorithm weights each factor based on environmental impact research to produce a composite eco-score from 0-100.",
  },
  {
    step: 4,
    title: "Verification",
    description:
      "Scores are regularly reviewed and updated as new data becomes available or manufacturing processes change.",
  },
];

const futureFeatures = [
  "Real-time carbon tracking with purchase integration",
  "Community-driven product reviews and ratings",
  "Personalized sustainability recommendations",
  "Brand sustainability report cards",
  "Mobile app for in-store scanning",
  "Integration with popular shopping platforms",
];

const About = () => {
  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Hero */}
          <div className="max-w-3xl mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4"
            >
              <Leaf className="h-4 w-4" />
              Our Mission
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight"
            >
              Making sustainable choices the{" "}
              <span className="eco-gradient-text">easy choice</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              EcoTrace was created with a simple belief: everyone wants to make
              better choices for the planet, but finding reliable information
              shouldn't be hard. We're building the tools to make sustainability
              transparent, accessible, and actionable.
            </motion.p>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-8">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-xl border border-border p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            id="methodology"
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="h-6 w-6 text-primary" />
              <h2 className="font-serif text-2xl lg:text-3xl font-medium">
                Our Methodology
              </h2>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
              <p className="text-muted-foreground mb-8 max-w-2xl">
                Our eco-scoring methodology is designed to be comprehensive,
                fair, and scientifically grounded. Here's how we calculate
                sustainability scores:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {methodologySteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="font-serif text-xl font-medium mb-4">
                  Scoring Dimensions
                </h3>
                <div className="grid sm:grid-cols-5 gap-4">
                  {[
                    { name: "Materials", weight: "25%" },
                    { name: "Manufacturing", weight: "20%" },
                    { name: "Transport", weight: "15%" },
                    { name: "Packaging", weight: "20%" },
                    { name: "End of Life", weight: "20%" },
                  ].map((dim) => (
                    <div
                      key={dim.name}
                      className="bg-muted rounded-lg p-4 text-center"
                    >
                      <p className="font-medium mb-1">{dim.name}</p>
                      <p className="text-2xl font-bold text-primary">
                        {dim.weight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Assumptions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-8">
              Data & Assumptions
            </h2>
            <div className="bg-muted/50 rounded-xl p-8">
              <p className="text-muted-foreground mb-6">
                EcoTrace strives for accuracy, but we want to be transparent
                about our data sources and limitations:
              </p>
              <ul className="space-y-3">
                {[
                  "Product data is sourced from manufacturer disclosures, third-party certifications, and independent research",
                  "Carbon footprint calculations use industry-average emission factors when specific data is unavailable",
                  "Transportation impact assumes average shipping distances based on manufacturing location",
                  "End-of-life scores consider regional recycling infrastructure availability",
                  "Scores are updated quarterly or when significant new data becomes available",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Future Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-8">
              What's Next
            </h2>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
              <p className="text-muted-foreground mb-8 max-w-2xl">
                We're constantly working to improve EcoTrace and expand our
                capabilities. Here's what we're planning:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {futureFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="flex items-center gap-3 bg-background rounded-lg p-4 border border-border"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center bg-card rounded-2xl border border-border p-12"
          >
            <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-4">
              Ready to start your journey?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Explore our product catalog and begin tracking your environmental
              impact today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/impact">View Impact Tracker</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
