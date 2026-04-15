import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", href: "#home", type: "scroll" as const },
    { label: "Sobre", href: "#sobre", type: "scroll" as const },
    { label: "Serviços", href: "#servicos", type: "scroll" as const },
    { label: "Destaques", href: "#destaques", type: "scroll" as const },
    { label: "Torre de Controle", href: "/torre-de-controle", type: "route" as const },
    { label: "Blog", href: "/blog", type: "route" as const },
    { label: "Contato", href: "#contato", type: "scroll" as const },
  ];

  const handleNavClick = (item: typeof menuItems[0]) => {
    setIsMenuOpen(false);
    if (item.type === "route") {
      navigate(item.href);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(item.href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center" aria-label="Ir para página inicial">
            <img 
              src="/lovable-uploads/bd01e038-b63c-4a52-b5da-67f949721274.png" 
              alt="GCF Transportes - Logo" 
              className="h-12 w-auto md:h-14" 
            />
          </button>

          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação principal">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium min-h-[44px] flex items-center"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="cta" 
              size="sm"
              onClick={handleContactClick}
              className="min-h-[44px]"
            >
              Fale Conosco
            </Button>
          </nav>

          <button
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-2 pt-4" aria-label="Navegação mobile">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium min-h-[44px] px-2 flex items-center"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="cta" 
                size="sm" 
                className="w-full min-h-[44px]"
                onClick={handleContactClick}
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
