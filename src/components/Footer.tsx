import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", href: "#home", type: "scroll" as const },
    { label: "Sobre", href: "#sobre", type: "scroll" as const },
    { label: "Serviços", href: "#servicos", type: "scroll" as const },
    { label: "Destaques", href: "#destaques", type: "scroll" as const },
    { label: "Blog", href: "/blog", type: "route" as const },
    { label: "Contato", href: "#contato", type: "scroll" as const },
  ];

  const handleNavClick = (item: typeof menuItems[0]) => {
    if (item.type === "route") {
      navigate(item.href);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">
              GCF <span className="text-secondary">Transportes</span>
            </h2>
          </div>

          <nav className="mb-8" aria-label="Navegação do rodapé">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 font-medium min-h-[44px] flex items-center"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="mb-8 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-primary-foreground/80">
              <span>operacional@gcftransportes.com.br</span>
              <span className="hidden md:inline">•</span>
              <span>(41) 3607-3815</span>
              <span className="hidden md:inline">•</span>
              <span>Araucária - PR</span>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} GCF Transportes. Todos os direitos reservados. | 
              CNPJ: 17.299.756/0001-86
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
