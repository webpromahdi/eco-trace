import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  ecoScoreRange: [number, number];
  onEcoScoreChange: (range: [number, number]) => void;
  carbonRange: [number, number];
  onCarbonChange: (range: [number, number]) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onReset: () => void;
}

const sortOptions = [
  { value: "eco-desc", label: "Highest Eco Score" },
  { value: "eco-asc", label: "Lowest Eco Score" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "carbon-asc", label: "Lowest Carbon" },
];

export const ProductFilters = ({
  selectedCategory,
  onCategoryChange,
  ecoScoreRange,
  onEcoScoreChange,
  carbonRange,
  onCarbonChange,
  sortBy,
  onSortChange,
  onReset,
}: ProductFiltersProps) => {
  const hasActiveFilters =
    selectedCategory !== "All" ||
    ecoScoreRange[0] > 0 ||
    ecoScoreRange[1] < 100 ||
    carbonRange[0] > 0 ||
    carbonRange[1] < 10;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-sans font-semibold">Filters</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Reset
          </Button>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground">Category</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "px-3 py-1.5 text-sm rounded-full border transition-all",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Eco Score Range */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-muted-foreground">Eco Score</h4>
          <span className="text-sm text-foreground font-medium">
            {ecoScoreRange[0]} - {ecoScoreRange[1]}
          </span>
        </div>
        <Slider
          value={ecoScoreRange}
          onValueChange={(value) => onEcoScoreChange(value as [number, number])}
          min={0}
          max={100}
          step={5}
          className="py-2"
        />
      </div>

      {/* Carbon Footprint Range */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-muted-foreground">
            Carbon Footprint (kg CO₂)
          </h4>
          <span className="text-sm text-foreground font-medium">
            {carbonRange[0]} - {carbonRange[1]}
          </span>
        </div>
        <Slider
          value={carbonRange}
          onValueChange={(value) => onCarbonChange(value as [number, number])}
          min={0}
          max={10}
          step={0.5}
          className="py-2"
        />
      </div>

      {/* Sort */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
