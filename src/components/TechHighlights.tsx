import { Satellite, Phone, Monitor } from "lucide-react";

const TechHighlights = () => {
  const highlights = [
    {
      icon: Satellite,
      title: "Rastreamento Total",
      description: "GPS em todos os veículos da frota"
    },
    {
      icon: Phone,
      title: "Suporte 24/7",
      description: "Atendimento ininterrupto via telefone e WhatsApp"
    },
    {
      icon: Monitor,
      title: "Sistema Próprio",
      description: "Plataforma TI exclusiva para conexão direta com clientes"
    }
  ];

  return (
    <section id="destaques" aria-label="Destaques tecnológicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
            Destaques Tecnológicos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Tecnologia de ponta para garantir eficiência e transparência em cada operação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-gcf-gray-02 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{highlight.title}</h3>
                <p className="text-muted-foreground text-lg">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechHighlights;