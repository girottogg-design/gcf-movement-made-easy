import { useNavigate, useLocation } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Col 1 — Logo + descrição */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              GCF <span className="text-secondary">Transportes</span>
            </h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Soluções completas em logística e transporte rodoviário. Eficiência, tecnologia e compromisso com sua operação.
            </p>
          </div>

          {/* Col 2 — Navegação */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">
              Navegação
            </h3>
            <nav aria-label="Navegação do rodapé">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className="text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <a href="mailto:operacional@gcftransportes.com.br" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors text-sm break-all">
                  operacional@gcftransportes.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <a href="tel:+554136073815" className="text-primary-foreground/75 hover:text-primary-foreground transition-colors text-sm">
                  (41) 3607-3815
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/75 text-sm">
                  Araucária — PR
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4 — Redes sociais */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/gcf_transportes_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da GCF Transportes"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/gcf-transportes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da GCF Transportes"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/15 pt-8">
          <p className="text-primary-foreground/50 text-xs text-center">
            © {new Date().getFullYear()} GCF Transportes. Todos os direitos reservados. | CNPJ: 17.299.756/0001-86
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
