import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingDown, Leaf, Droplets, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: TrendingDown,
    value: "45.2 kg",
    label: "CO₂ Reduced",
    color: "text-eco-excellent",
    bg: "bg-eco-excellent/10",
  },
  {
    icon: Leaf,
    value: "2.3",
    label: "Trees Equivalent",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Droplets,
    value: "1,250 L",
    label: "Water Saved",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export const ImpactCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-6">
              Track your environmental journey
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Join thousands of conscious consumers who are making a real
              difference. Our Impact Tracker helps you visualize your progress
              and discover new ways to reduce your footprint.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group"
            >
              <Link to="/impact">
                View Your Impact
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-bold">{stat.value}</p>
                  <p className="text-primary-foreground/70">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
