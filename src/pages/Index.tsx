import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ImpactCTA } from "@/components/home/ImpactCTA";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <HowItWorks />
      <FeaturedProducts />
      <ImpactCTA />
    </PageLayout>
  );
};

export default Index;
