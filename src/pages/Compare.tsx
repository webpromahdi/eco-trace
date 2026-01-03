import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowRight, Award, Leaf } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { EcoScore } from "@/components/ui/EcoScore";
import { products, Product } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Compare = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([
    products[0],
    products[3],
  ]);

  const addProduct = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product && !selectedProducts.find((p) => p.id === productId)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const removeProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== productId));
  };

  const availableProducts = products.filter(
    (p) => !selectedProducts.find((sp) => sp.id === p.id)
  );

  const bestProduct = selectedProducts.reduce((best, current) =>
    current.ecoScore > best.ecoScore ? current : best
  , selectedProducts[0]);

  const metrics = [
    { key: "ecoScore", label: "Eco Score", unit: "/100" },
    { key: "carbonFootprint", label: "Carbon Footprint", unit: " kg CO₂" },
    { key: "price", label: "Price", unit: "", prefix: "$" },
  ];

  const sustainabilityMetrics = [
    { key: "materials", label: "Materials" },
    { key: "manufacturing", label: "Manufacturing" },
    { key: "transport", label: "Transport" },
    { key: "packaging", label: "Packaging" },
    { key: "endOfLife", label: "End of Life" },
  ];

  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-3"
            >
              Compare Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl"
            >
              Compare sustainability metrics side-by-side to make the most
              eco-conscious choice.
            </motion.p>
          </div>

          {/* Add Product Selector */}
          {selectedProducts.length < 4 && availableProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4">
                <Select onValueChange={addProduct}>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Add a product to compare" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableProducts.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="text-sm text-muted-foreground">
                  Compare up to 4 products
                </span>
              </div>
            </motion.div>
          )}

          {/* Comparison Table */}
          {selectedProducts.length >= 2 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div>
                {/* Product Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <AnimatePresence mode="popLayout">
                    {selectedProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        layout
                        className={`relative bg-card rounded-xl border p-6 ${
                          product.id === bestProduct?.id
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border"
                        }`}
                      >
                        {/* Best Choice Badge */}
                        {product.id === bestProduct?.id && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                              <Award className="h-3 w-3" />
                              Best Choice
                            </span>
                          </div>
                        )}

                        {/* Remove Button */}
                        {selectedProducts.length > 2 && (
                          <button
                            onClick={() => removeProduct(product.id)}
                            className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
                          >
                            <X className="h-4 w-4 text-muted-foreground" />
                          </button>
                        )}

                        {/* Product Info */}
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                            <Leaf className="h-8 w-8 text-primary/40" />
                          </div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                            {product.brand}
                          </p>
                          <h3 className="font-serif text-lg font-medium mb-4">
                            {product.name}
                          </h3>
                          <EcoScore score={product.ecoScore} size="md" showLabel />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Metrics Comparison */}
                <div className="mt-8 space-y-6">
                  {/* Key Metrics */}
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-serif text-lg font-medium mb-4">
                      Key Metrics
                    </h3>
                    <div className="space-y-4">
                      {metrics.map((metric) => (
                        <div key={metric.key}>
                          <p className="text-sm text-muted-foreground mb-2">
                            {metric.label}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {selectedProducts.map((product) => {
                              const value = product[metric.key as keyof Product];
                              const isBest =
                                metric.key === "carbonFootprint"
                                  ? value === Math.min(...selectedProducts.map((p) => p.carbonFootprint))
                                  : metric.key === "price"
                                  ? value === Math.min(...selectedProducts.map((p) => p.price))
                                  : value === Math.max(...selectedProducts.map((p) => p.ecoScore));

                              return (
                                <div
                                  key={product.id}
                                  className={`text-center p-3 rounded-lg ${
                                    isBest ? "bg-primary/10" : "bg-muted"
                                  }`}
                                >
                                  <span className={`text-lg font-semibold ${isBest ? "text-primary" : ""}`}>
                                    {metric.prefix}{String(value)}{metric.unit}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sustainability Breakdown */}
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-serif text-lg font-medium mb-4">
                      Sustainability Breakdown
                    </h3>
                    <div className="space-y-4">
                      {sustainabilityMetrics.map((metric) => (
                        <div key={metric.key}>
                          <p className="text-sm text-muted-foreground mb-2">
                            {metric.label}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {selectedProducts.map((product) => {
                              const value = product.sustainability[metric.key as keyof typeof product.sustainability];
                              const maxValue = Math.max(
                                ...selectedProducts.map(
                                  (p) => p.sustainability[metric.key as keyof typeof p.sustainability]
                                )
                              );
                              const isBest = value === maxValue;

                              return (
                                <div key={product.id}>
                                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <motion.div
                                      className={`h-full rounded-full ${
                                        isBest ? "bg-primary" : "bg-muted-foreground/30"
                                      }`}
                                      initial={{ width: 0 }}
                                      animate={{ width: `${value}%` }}
                                      transition={{ duration: 0.5 }}
                                    />
                                  </div>
                                  <p className={`text-center text-sm mt-1 ${isBest ? "text-primary font-medium" : ""}`}>
                                    {value}%
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-serif text-lg font-medium mb-4">
                      Certifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {selectedProducts.map((product) => (
                        <div key={product.id} className="flex flex-wrap gap-2">
                          {product.certifications.map((cert) => (
                            <span
                              key={cert}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-primary/5 text-primary text-xs rounded"
                            >
                              <Award className="h-3 w-3" />
                              {cert}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-card rounded-xl border border-border p-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                Select products to compare
              </h3>
              <p className="text-muted-foreground mb-4">
                Add at least 2 products to start comparing their sustainability
                metrics.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Compare;
