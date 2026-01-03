import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EcoScoreProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  animate?: boolean;
}

const getScoreColor = (score: number) => {
  if (score >= 90) return "text-eco-excellent";
  if (score >= 75) return "text-eco-good";
  if (score >= 60) return "text-eco-moderate";
  if (score >= 40) return "text-eco-poor";
  return "text-eco-critical";
};

const getScoreBg = (score: number) => {
  if (score >= 90) return "bg-eco-excellent";
  if (score >= 75) return "bg-eco-good";
  if (score >= 60) return "bg-eco-moderate";
  if (score >= 40) return "bg-eco-poor";
  return "bg-eco-critical";
};

const getScoreLabel = (score: number) => {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 60) return "Moderate";
  if (score >= 40) return "Poor";
  return "Critical";
};

const sizeClasses = {
  sm: {
    container: "w-12 h-12",
    ring: "w-12 h-12",
    inner: "w-9 h-9",
    text: "text-xs font-semibold",
    label: "text-xs",
  },
  md: {
    container: "w-16 h-16",
    ring: "w-16 h-16",
    inner: "w-12 h-12",
    text: "text-sm font-bold",
    label: "text-xs",
  },
  lg: {
    container: "w-24 h-24",
    ring: "w-24 h-24",
    inner: "w-18 h-18",
    text: "text-xl font-bold",
    label: "text-sm",
  },
};

export const EcoScore = ({
  score,
  size = "md",
  showLabel = false,
  animate = true,
}: EcoScoreProps) => {
  const classes = sizeClasses[size];
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={cn("relative", classes.container)}>
        <svg
          className={cn("transform -rotate-90", classes.ring)}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className={getScoreColor(score)}
            strokeDasharray={circumference}
            initial={animate ? { strokeDashoffset: circumference } : { strokeDashoffset }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className={cn(classes.text, getScoreColor(score))}
            initial={animate ? { opacity: 0, scale: 0.5 } : { opacity: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            {score}
          </motion.span>
        </div>
      </div>
      {showLabel && (
        <span className={cn(classes.label, "text-muted-foreground")}>
          {getScoreLabel(score)}
        </span>
      )}
    </div>
  );
};

export const EcoScoreBadge = ({ score }: { score: number }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        getScoreBg(score),
        "text-white"
      )}
    >
      <span>{score}</span>
      <span className="opacity-80">/ 100</span>
    </div>
  );
};
