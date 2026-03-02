import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QualitySection from "@/components/QualitySection";
import ProductsSection from "@/components/ProductsSection";
import WhyUsSection from "@/components/WhyUsSection";
import StorySection from "@/components/StorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <QualitySection />
      <ProductsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <StorySection />
      <BlogSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
