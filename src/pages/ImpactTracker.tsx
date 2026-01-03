import { motion } from "framer-motion";
import {
  TrendingDown,
  Leaf,
  Droplets,
  TreePine,
  Trash2,
  ArrowRight,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { EcoScore } from "@/components/ui/EcoScore";
import { products } from "@/data/products";
import {
  trackedProducts,
  monthlyImpactData,
  impactStats,
  scenarioData,
} from "@/data/impactData";

const statCards = [
  {
    title: "Carbon Saved",
    value: `${impactStats.totalCarbonSaved} kg`,
    icon: TrendingDown,
    color: "text-eco-excellent",
    bg: "bg-eco-excellent/10",
  },
  {
    title: "Average Eco Score",
    value: impactStats.averageEcoScore,
    icon: Leaf,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Trees Equivalent",
    value: impactStats.treesEquivalent,
    icon: TreePine,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Plastic Avoided",
    value: `${impactStats.plasticAvoided} kg`,
    icon: Trash2,
    color: "text-amber",
    bg: "bg-amber/10",
  },
];

const ImpactTracker = () => {
  const trackedProductDetails = trackedProducts
    .map((tp) => {
      const product = products.find((p) => p.id === tp.productId);
      return product ? { ...tp, product } : null;
    })
    .filter(Boolean);

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
              Your Impact Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl"
            >
              Track your environmental journey and see the positive impact of your
              sustainable choices.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          >
            {statCards.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {/* Carbon Saved Over Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="font-serif text-xl font-medium mb-6">
                Carbon Saved Over Time
              </h3>
              <div className="h-48 sm:h-56 md:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyImpactData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-muted-foreground" />
                    <YAxis className="text-muted-foreground" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="carbonSaved"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Eco Score Trend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="font-serif text-xl font-medium mb-6">
                Average Eco Score Trend
              </h3>
              <div className="h-48 sm:h-56 md:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyImpactData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-muted-foreground" />
                    <YAxis domain={[0, 100]} className="text-muted-foreground" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar
                      dataKey="ecoScore"
                      fill="hsl(var(--accent))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Scenario Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-10"
          >
            <h2 className="font-serif text-2xl font-medium mb-6">
              What If You Switched?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {scenarioData.map((scenario) => (
                <div
                  key={scenario.id}
                  className="bg-card rounded-xl border border-border p-6 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {scenario.difficulty}
                    </span>
                    <span className="text-lg font-bold text-eco-excellent">
                      -{scenario.savings}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-medium mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {scenario.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Current</p>
                      <p className="font-semibold">{scenario.currentImpact} kg CO₂</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground">Potential</p>
                      <p className="font-semibold text-eco-excellent">
                        {scenario.potentialImpact} kg CO₂
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tracked Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-medium">
                Your Tracked Products
              </h2>
              <Button asChild variant="outline" size="sm">
                <Link to="/products">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Products
                </Link>
              </Button>
            </div>

            {trackedProductDetails.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {trackedProductDetails.map((item) => (
                  <Link
                    key={item!.productId}
                    to={`/products/${item!.productId}`}
                    className="bg-card rounded-xl border border-border p-4 flex items-center gap-4 hover:border-primary/20 transition-colors"
                  >
                    <EcoScore score={item!.product.ecoScore} size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item!.product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item!.product.carbonFootprint} kg CO₂
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-card rounded-xl border border-border p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  No products tracked yet
                </h3>
                <p className="text-muted-foreground mb-4">
                  Start by adding eco-friendly products to track your impact.
                </p>
                <Button asChild>
                  <Link to="/products">Explore Products</Link>
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ImpactTracker;
