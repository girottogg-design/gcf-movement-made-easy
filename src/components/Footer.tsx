const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Destaques", href: "#destaques" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold">
              GCF <span className="text-secondary">Transportes</span>
            </h2>
          </div>

          {/* Navigation Menu */}
          <nav className="mb-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Contact Info */}
          <div className="mb-8 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-primary-foreground/80">
              <span>operacional@gcftransportes.com.br</span>
              <span className="hidden md:inline">•</span>
              <span>(41) 3607-3815</span>
              <span className="hidden md:inline">•</span>
              <span>Araucária - PR</span>
            </div>
          </div>

          {/* Copyright */}
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