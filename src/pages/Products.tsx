import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, LayoutGrid, List } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ecoScoreRange, setEcoScoreRange] = useState<[number, number]>([0, 100]);
  const [carbonRange, setCarbonRange] = useState<[number, number]>([0, 10]);
  const [sortBy, setSortBy] = useState("eco-desc");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Eco score filter
    result = result.filter(
      (p) => p.ecoScore >= ecoScoreRange[0] && p.ecoScore <= ecoScoreRange[1]
    );

    // Carbon filter
    result = result.filter(
      (p) => p.carbonFootprint >= carbonRange[0] && p.carbonFootprint <= carbonRange[1]
    );

    // Sort
    switch (sortBy) {
      case "eco-desc":
        result.sort((a, b) => b.ecoScore - a.ecoScore);
        break;
      case "eco-asc":
        result.sort((a, b) => a.ecoScore - b.ecoScore);
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "carbon-asc":
        result.sort((a, b) => a.carbonFootprint - b.carbonFootprint);
        break;
    }

    return result;
  }, [selectedCategory, ecoScoreRange, carbonRange, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setEcoScoreRange([0, 100]);
    setCarbonRange([0, 10]);
  };

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
              Explore Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl"
            >
              Discover sustainable alternatives with transparent eco-scores and
              environmental impact data.
            </motion.p>
          </div>

          <div className="flex gap-8">
            {/* Desktop Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block w-72 shrink-0"
            >
              <div className="sticky top-24 bg-card rounded-xl border border-border p-6">
                <ProductFilters
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  ecoScoreRange={ecoScoreRange}
                  onEcoScoreChange={setEcoScoreRange}
                  carbonRange={carbonRange}
                  onCarbonChange={setCarbonRange}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  onReset={resetFilters}
                />
              </div>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile filter button */}
              <div className="lg:hidden mb-6">
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters & Sort
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <div className="py-4">
                      <ProductFilters
                        selectedCategory={selectedCategory}
                        onCategoryChange={(cat) => {
                          setSelectedCategory(cat);
                        }}
                        ecoScoreRange={ecoScoreRange}
                        onEcoScoreChange={setEcoScoreRange}
                        carbonRange={carbonRange}
                        onCarbonChange={setCarbonRange}
                        sortBy={sortBy}
                        onSortChange={setSortBy}
                        onReset={resetFilters}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Results count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing{" "}
                  <span className="font-medium text-foreground">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                </p>
              </div>

              {/* Products Grid */}
              <motion.div layout className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Empty state */}
              {filteredProducts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <LayoutGrid className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    No products found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters to see more results.
                  </p>
                  <Button variant="outline" onClick={resetFilters}>
                    Reset Filters
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
