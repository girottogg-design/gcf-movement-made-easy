import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  ArrowRight,
  Zap,
  MapPin,
  Radio,
  Phone,
  Truck,
  Shield,
} from "lucide-react";

const FretesUrgentes = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Carregamento em Até 2h",
      description: "Acionamento rápido com veículo disponível para coleta em até 2 horas após a solicitação.",
    },
    {
      icon: MapPin,
      title: "Rota Direta ao Destino",
      description: "Sem paradas intermediárias. Carga dedicada com rota direta para máxima agilidade.",
    },
    {
      icon: Radio,
      title: "Rastreamento em Tempo Real",
      description: "Acompanhe a posição do veículo e o status da entrega em tempo real, com atualizações constantes.",
    },
    {
      icon: Phone,
      title: "Disponibilidade 24/7",
      description: "Atendimento 24 horas por dia, 7 dias por semana. Urgência não espera horário comercial.",
    },
    {
      icon: Truck,
      title: "Frota Diversificada",
      description: "Veículos de diferentes capacidades — de utilitários a carretas — prontos para qualquer tipo de carga urgente.",
    },
    {
      icon: Shield,
      title: "Seguro e Documentação",
      description: "Todas as cargas urgentes saem com seguro e documentação completa, sem abrir mão da conformidade.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fretes Urgentes",
    provider: { "@type": "Organization", name: "GCF Transportes", url: "https://gcf-movement-made-easy.lovable.app" },
    description: "Serviço de fretes urgentes com carregamento em até 2h, rota direta, rastreamento em tempo real e disponibilidade 24/7.",
    areaServed: { "@type": "Country", name: "Brasil" },
    serviceType: "Fretes Urgentes",
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Fretes Urgentes 24h | GCF Transportes</title>
        <meta name="description" content="Fretes urgentes com carregamento em até 2h, rota direta, rastreamento em tempo real e atendimento 24/7. GCF Transportes." />
        <link rel="canonical" href="https://gcf-movement-made-easy.lovable.app/fretes-urgentes" />
        <meta property="og:title" content="Fretes Urgentes 24h | GCF Transportes" />
        <meta property="og:description" content="Carregamento expresso em até 2h, rota direta e rastreamento em tempo real. Disponibilidade 24/7." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcf-movement-made-easy.lovable.app/fretes-urgentes" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        <section className="relative bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold">Serviço Especializado</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Fretes Urgentes
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed">
                Quando o prazo é crítico, a GCF responde. Carregamento expresso, rota direta e acompanhamento em tempo real — 24 horas por dia, 7 dias por semana.
              </p>
              <Button variant="cta" size="lg" onClick={() => window.location.href = "/#contato"} className="min-h-[48px] text-base">
                Solicite um Frete Urgente
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Como Funciona</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Você solicita, nós acionamos. Em até 2 horas um veículo está pronto para coleta, seguindo rota direta ao destino com rastreamento contínuo. Sem intermediários, sem espera.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gcf-gray-02">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Benefícios</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Agilidade com segurança para cargas que não podem esperar.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((b, i) => (
                <Card key={i} className="border-none shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                      <b.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Precisa de um Frete Urgente Agora?
            </h2>
            <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-10">
              Entre em contato agora mesmo. Nossa equipe está pronta para atender sua demanda com rapidez e segurança.
            </p>
            <Button variant="cta" size="lg" onClick={() => window.location.href = "/#contato"} className="min-h-[48px] text-base">
              Solicite Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default FretesUrgentes;
