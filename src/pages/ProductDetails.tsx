import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Plus,
  Leaf,
  Factory,
  Truck,
  Package,
  Recycle,
  Award,
  Check,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { EcoScore } from "@/components/ui/EcoScore";
import { products, getEcoScoreLabel } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const sustainabilityMetrics = [
  { key: "materials", label: "Materials", icon: Leaf },
  { key: "manufacturing", label: "Manufacturing", icon: Factory },
  { key: "transport", label: "Transport", icon: Truck },
  { key: "packaging", label: "Packaging", icon: Package },
  { key: "endOfLife", label: "End of Life", icon: Recycle },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 lg:px-6 py-20 text-center">
          <h1 className="font-serif text-2xl font-semibold mb-4">
            Product not found
          </h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const handleAddToTracker = () => {
    toast({
      title: "Added to Impact Tracker",
      description: `${product.name} has been added to your tracker.`,
    });
  };

  return (
    <PageLayout>
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" className="group">
              <Link to="/products">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Products
              </Link>
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-square bg-card rounded-2xl border border-border overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              
              {/* Certifications badges */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {product.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium"
                  >
                    <Award className="h-3.5 w-3.5 text-primary" />
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="mb-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {product.brand}
                </p>
                <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price and Score */}
              <div className="flex items-center gap-8 mb-8 pb-8 border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Price</p>
                  <p className="text-3xl font-semibold">${product.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <EcoScore score={product.ecoScore} size="lg" showLabel />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Carbon</p>
                  <p className="text-xl font-semibold">
                    {product.carbonFootprint} kg CO₂
                  </p>
                </div>
              </div>

              {/* Sustainability Breakdown */}
              <div className="mb-8">
                <h2 className="font-serif text-xl font-medium mb-4">
                  Sustainability Breakdown
                </h2>
                <div className="space-y-4">
                  {sustainabilityMetrics.map((metric) => {
                    const value =
                      product.sustainability[
                        metric.key as keyof typeof product.sustainability
                      ];
                    return (
                      <div key={metric.key}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <metric.icon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">
                              {metric.label}
                            </span>
                          </div>
                          <span className="text-sm font-semibold">{value}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleAddToTracker} className="flex-1">
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Impact Tracker
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                  <Link to="/compare">Compare Products</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Eco Score Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-card rounded-2xl border border-border p-8"
          >
            <h2 className="font-serif text-2xl font-medium mb-6">
              Understanding the Eco-Score
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { range: "90-100", label: "Excellent", color: "bg-eco-excellent" },
                { range: "75-89", label: "Good", color: "bg-eco-good" },
                { range: "60-74", label: "Moderate", color: "bg-eco-moderate" },
                { range: "Below 60", label: "Needs Improvement", color: "bg-eco-poor" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${item.color}`} />
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.range}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground">
              The eco-score is calculated based on materials sourcing, manufacturing
              processes, transportation impact, packaging sustainability, and
              end-of-life recyclability.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProductDetails;
