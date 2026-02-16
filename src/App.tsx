import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ImpactTracker from "./pages/ImpactTracker";
import Compare from "./pages/Compare";
import Learn from "./pages/Learn";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/impact" element={<ImpactTracker />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
