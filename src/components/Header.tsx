import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [logoError, setLogoError] = useState(false);

  const logoUrls = [
    "/lovable-uploads/6d6954b9-ac8b-43be-8f8e-d4e7289604c3.png",
    "/lovable-uploads/dd6e8a23-261a-4c0f-95c2-fde1c342c479.png", 
    "/lovable-uploads/532fc83c-ac6c-456b-95b1-12ca4ba155d2.png"
  ];

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Destaques", href: "#destaques" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {!logoError ? (
              <img 
                src={logoUrls[currentLogoIndex]} 
                alt="GCF Transportes" 
                className="h-12 w-auto md:h-14" 
                onLoad={() => console.log(`Logo carregada com sucesso: ${logoUrls[currentLogoIndex]}`)}
                onError={(e) => {
                  console.error(`Erro ao carregar logo ${currentLogoIndex + 1}:`, logoUrls[currentLogoIndex]);
                  if (currentLogoIndex < logoUrls.length - 1) {
                    setCurrentLogoIndex(currentLogoIndex + 1);
                  } else {
                    setLogoError(true);
                  }
                }}
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary tracking-tight">
                  GCF
                </span>
                <span className="text-xs text-muted-foreground font-medium -mt-1">
                  TRANSPORTES
                </span>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="cta" 
              size="sm"
              onClick={() => scrollToSection("#contato")}
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="cta" 
                size="sm" 
                className="w-full"
                onClick={() => scrollToSection("#contato")}
              >
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;