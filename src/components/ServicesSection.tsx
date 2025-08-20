import { Truck, Warehouse, Clock, BarChart3 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: "Transporte Rodoviário",
      items: [
        "Cargas fechadas completas",
        "Sistema Milk Run otimizado",
        "Múltiplas entregas programadas",
        "Roteirização inteligente inbound"
      ]
    },
    {
      icon: Warehouse,
      title: "Armazenagem",
      items: [
        "Armazenagem segura e climatizada",
        "Crossdocking eficiente",
        "Conferência automatizada de mercadorias",
        "Expedição ágil e rastreada"
      ]
    },
    {
      icon: Clock,
      title: "Fretes Urgentes",
      items: [
        "Carregamento expresso em até 2h",
        "Rota direta ao destino final",
        "Acompanhamento em tempo real",
        "Disponibilidade 24/7"
      ]
    },
    {
      icon: BarChart3,
      title: "TMS e VMS",
      items: [
        "Portal exclusivo para clientes",
        "KPIs e relatórios detalhados",
        "Informações em tempo real",
        "Gestão de janelas de entrega",
        "Controle de tabelas de frete"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gcf-gray-02">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Soluções completas em logística e transporte para atender todas as suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mr-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;