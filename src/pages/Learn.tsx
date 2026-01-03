import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Leaf,
  Factory,
  Truck,
  Recycle,
  TrendingDown,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "Understanding Carbon Footprint",
    description:
      "Learn what carbon footprint means and how everyday products contribute to greenhouse gas emissions.",
    icon: TrendingDown,
    readTime: "5 min read",
    category: "Basics",
  },
  {
    id: 2,
    title: "Sustainable Materials Guide",
    description:
      "A comprehensive guide to eco-friendly materials like organic cotton, bamboo, recycled plastics, and hemp.",
    icon: Leaf,
    readTime: "8 min read",
    category: "Materials",
  },
  {
    id: 3,
    title: "The Impact of Fast Fashion",
    description:
      "Discover how the fashion industry affects the environment and what you can do about it.",
    icon: Factory,
    readTime: "6 min read",
    category: "Industry",
  },
  {
    id: 4,
    title: "Reducing Transportation Emissions",
    description:
      "How shipping and logistics impact product sustainability and tips for lower-impact shopping.",
    icon: Truck,
    readTime: "4 min read",
    category: "Logistics",
  },
  {
    id: 5,
    title: "Circular Economy Explained",
    description:
      "Understanding the principles of reduce, reuse, recycle, and how they create sustainable systems.",
    icon: Recycle,
    readTime: "7 min read",
    category: "Concepts",
  },
  {
    id: 6,
    title: "Reading Eco Labels",
    description:
      "A guide to understanding sustainability certifications and what they actually mean.",
    icon: BookOpen,
    readTime: "5 min read",
    category: "Guides",
  },
];

const tips = [
  "Choose products with less packaging or recyclable packaging.",
  "Look for certified organic and Fair Trade labels.",
  "Buy local when possible to reduce transportation emissions.",
  "Invest in quality items that last longer.",
  "Consider second-hand or refurbished options.",
  "Research brands' sustainability commitments.",
];

const Learn = () => {
  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="mb-12 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4"
            >
              Learn About Sustainability
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Empower yourself with knowledge about environmental impact,
              sustainable practices, and how to make better choices for our
              planet.
            </motion.p>
          </div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative bg-gradient-to-br from-primary to-accent rounded-2xl p-8 lg:p-12 text-primary-foreground overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 max-w-2xl">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
                  The Complete Guide to Sustainable Living
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Start your sustainability journey with our comprehensive guide
                  covering everything from understanding your environmental
                  impact to making everyday eco-conscious choices.
                </p>
                <Button variant="secondary" className="group">
                  Read Guide
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="font-serif text-2xl font-medium mb-8">
              Popular Topics
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="group bg-card rounded-xl border border-border p-6 hover:border-primary/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <article.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium mt-2 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl border border-border p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="font-serif text-2xl font-medium mb-4">
                  Quick Sustainability Tips
                </h2>
                <p className="text-muted-foreground mb-6">
                  Simple actions you can take today to reduce your environmental
                  impact when shopping for products.
                </p>
                <Button asChild variant="outline" className="group">
                  <Link to="/products">
                    Browse Sustainable Products
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* External Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <h2 className="font-serif text-2xl font-medium mb-6">
              External Resources
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "EPA Environmental Topics", url: "#" },
                { name: "UN Sustainable Goals", url: "#" },
                { name: "Carbon Footprint Calculator", url: "#" },
                { name: "Eco-Label Index", url: "#" },
              ].map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary/20 transition-colors"
                >
                  <span className="text-sm font-medium">{resource.name}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Learn;
