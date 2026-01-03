import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { EcoScore } from "@/components/ui/EcoScore";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      layout
    >
      <Link to={`/products/${product.id}`} className="group block">
        <article className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
          {/* Image */}
          <div className="relative aspect-square bg-muted overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            
            {/* Eco Score Badge */}
            <div className="absolute top-3 right-3">
              <EcoScore score={product.ecoScore} size="sm" />
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-block px-2.5 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full text-muted-foreground">
                {product.category}
              </span>
            </div>

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.02 }}
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="mb-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {product.brand}
              </p>
              <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {product.name}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-foreground">
                  ${product.price}
                </span>
                <span className="text-xs text-muted-foreground">
                  {product.carbonFootprint} kg CO₂
                </span>
              </div>
              
              <motion.span
                className="text-primary flex items-center gap-1 text-sm font-medium"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              >
                View
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </div>

            {/* Certifications */}
            {product.certifications.length > 0 && (
              <div className="mt-3 pt-3 border-t border-border flex flex-wrap gap-1">
                {product.certifications.slice(0, 2).map((cert) => (
                  <span
                    key={cert}
                    className="inline-block px-2 py-0.5 text-xs bg-primary/5 text-primary rounded"
                  >
                    {cert}
                  </span>
                ))}
                {product.certifications.length > 2 && (
                  <span className="inline-block px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">
                    +{product.certifications.length - 2}
                  </span>
                )}
              </div>
            )}
          </div>
        </article>
      </Link>
    </motion.div>
  );
};
