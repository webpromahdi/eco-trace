import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";

export const FeaturedProducts = () => {
  const featuredProducts = products
    .sort((a, b) => b.ecoScore - a.ecoScore)
    .slice(0, 4);

  return (
    <section className="py-16 md:py-24 xl:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12"
        >
          <div>
            <h2 className="font-serif heading-section font-semibold text-foreground mb-3">
              Top Eco-Friendly Products
            </h2>
            <p className="text-muted-foreground text-body-lg max-w-xl">
              Discover products that lead the way in sustainability with the
              highest eco-scores.
            </p>
          </div>
          <Button asChild variant="outline" className="group shrink-0">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-fluid">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
