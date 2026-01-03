import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
          <Leaf className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="font-serif text-4xl font-semibold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Browse Products
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
