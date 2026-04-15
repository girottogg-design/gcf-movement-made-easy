import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  ArrowRight,
  Route,
  Package,
  Clock,
  MapPin,
  Shield,
  BarChart3,
} from "lucide-react";

const TransporteRodoviario = () => {
  const benefits = [
    {
      icon: Route,
      title: "Roteirização Inteligente",
      description: "Planejamento de rotas otimizado para reduzir custos e prazos, com análise de malha viária e pedágios.",
    },
    {
      icon: Package,
      title: "Cargas Fechadas e Fracionadas",
      description: "Atendemos desde cargas completas (FTL) até entregas fracionadas com consolidação eficiente.",
    },
    {
      icon: Clock,
      title: "Milk Run Otimizado",
      description: "Coletas programadas em múltiplos fornecedores com rotas circulares, reduzindo custo e tempo de ciclo.",
    },
    {
      icon: MapPin,
      title: "Múltiplas Entregas Programadas",
      description: "Distribuição sequenciada com janelas de entrega, garantindo pontualidade e organização no recebimento.",
    },
    {
      icon: Shield,
      title: "Segurança da Carga",
      description: "Rastreamento veicular 24h, seguro de carga, equipe treinada e procedimentos de gerenciamento de risco.",
    },
    {
      icon: BarChart3,
      title: "Indicadores de Performance",
      description: "KPIs de pontualidade, avarias, lead time e custo por entrega disponíveis em tempo real.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Transporte Rodoviário de Cargas",
    provider: {
      "@type": "Organization",
      name: "GCF Transportes",
      url: "https://gcf-movement-made-easy.lovable.app",
    },
    description: "Serviço de transporte rodoviário de cargas com roteirização inteligente, Milk Run, cargas fechadas e fracionadas.",
    areaServed: { "@type": "Country", name: "Brasil" },
    serviceType: "Transporte Rodoviário de Cargas",
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Transporte Rodoviário de Cargas | GCF Transportes</title>
        <meta name="description" content="Transporte rodoviário de cargas com roteirização inteligente, Milk Run, cargas fechadas e múltiplas entregas programadas. Solicite uma proposta." />
        <link rel="canonical" href="https://gcf-movement-made-easy.lovable.app/transporte-rodoviario" />
        <meta property="og:title" content="Transporte Rodoviário de Cargas | GCF Transportes" />
        <meta property="og:description" content="Roteirização inteligente, Milk Run e cargas fechadas. Transporte rodoviário com rastreamento e indicadores em tempo real." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcf-movement-made-easy.lovable.app/transporte-rodoviario" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        <section className="relative bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
                <Truck className="w-4 h-4" />
                <span className="text-sm font-semibold">Serviço Especializado</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Transporte Rodoviário de Cargas
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed">
                Soluções completas em transporte rodoviário com roteirização inteligente, sistema Milk Run e rastreamento em tempo real. Eficiência e segurança para sua cadeia logística.
              </p>
              <Button variant="cta" size="lg" onClick={() => window.location.href = "/#contato"} className="min-h-[48px] text-base">
                Solicite uma Proposta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Como Funciona Nosso Transporte Rodoviário</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Operamos com frota própria e agregada, oferecendo flexibilidade para atender demandas regulares e sazonais. Nosso diferencial está na combinação de tecnologia, processos e pessoas qualificadas.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gcf-gray-02">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Benefícios</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Por que escolher a GCF para o transporte rodoviário da sua empresa.
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
              Precisa de Transporte Rodoviário Confiável?
            </h2>
            <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-10">
              Entre em contato e receba uma proposta personalizada para a sua operação logística.
            </p>
            <Button variant="cta" size="lg" onClick={() => window.location.href = "/#contato"} className="min-h-[48px] text-base">
              Solicite uma Proposta
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

export default TransporteRodoviario;
