import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PrivateLabelSection from "@/components/PrivateLabelSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductCategoriesSection />
      <WhyChooseSection />
      <PrivateLabelSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
