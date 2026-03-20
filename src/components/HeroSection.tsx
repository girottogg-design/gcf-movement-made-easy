import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-transport.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" aria-label="Início" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 62, 79, 0.7), rgba(15, 62, 79, 0.5)), url(${heroImage})`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Somos o movimento que 
            <span className="text-secondary block mt-2">transforma o Brasil</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-background/90 animate-fade-in-up">
            Transporte especializado, com tecnologia e segurança
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("#contato")}
              className="min-w-[200px]"
            >
              Entre em contato
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg"
              onClick={() => scrollToSection("#servicos")}
              className="min-w-[200px]"
            >
              Conheça nossos serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;