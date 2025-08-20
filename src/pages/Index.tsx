import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import ServicesSection from "@/components/ServicesSection";
import TechHighlights from "@/components/TechHighlights";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <NumbersSection />
        <AboutSection />
        <TestimonialSection />
        <ServicesSection />
        <TechHighlights />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
