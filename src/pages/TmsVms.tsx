import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  ArrowRight,
  Monitor,
  FileText,
  Clock,
  Users,
  Settings,
  TrendingUp,
} from "lucide-react";

const TmsVms = () => {
  const benefits = [
    {
      icon: Monitor,
      title: "Portal Exclusivo para Clientes",
      description: "Acesso dedicado para acompanhar embarques, consultar status de entregas e visualizar documentos fiscais.",
    },
    {
      icon: TrendingUp,
      title: "KPIs e Relatórios Detalhados",
      description: "Indicadores de performance logística — pontualidade, custo por entrega, lead time, taxa de avarias.",
    },
    {
      icon: Clock,
      title: "Informações em Tempo Real",
      description: "Dados atualizados continuamente para tomada de decisão rápida e assertiva sobre sua operação.",
    },
    {
      icon: Settings,
      title: "Gestão de Janelas de Entrega",
      description: "Controle de agendamentos e janelas de recebimento para evitar filas, atrasos e multas por no-show.",
    },
    {
      icon: FileText,
      title: "Controle de Tabelas de Frete",
      description: "Gestão centralizada de tabelas de frete com simulação de custos e comparativos por rota e modal.",
    },
    {
      icon: Users,
      title: "Gestão Multi-Transportadora",
      description: "Consolide informações de múltiplos transportadores em uma única plataforma com visão unificada.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "TMS e VMS - Gestão de Transporte",
    provider: { "@type": "Organization", name: "GCF Transportes", url: "https://gcf-movement-made-easy.lovable.app" },
    description: "Sistema TMS e VMS para gestão de transporte com portal para clientes, KPIs, relatórios e controle de tabelas de frete.",
    areaServed: { "@type": "Country", name: "Brasil" },
    serviceType: "TMS e VMS",
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>TMS e VMS - Gestão de Transporte | GCF Transportes</title>
        <meta name="description" content="Sistema TMS e VMS da GCF Transportes: portal exclusivo, KPIs em tempo real, gestão de janelas de entrega e controle de tabelas de frete." />
        <link rel="canonical" href="https://gcf-movement-made-easy.lovable.app/tms-vms" />
        <meta property="og:title" content="TMS e VMS - Gestão de Transporte | GCF Transportes" />
        <meta property="og:description" content="Portal exclusivo para clientes com KPIs, relatórios detalhados e gestão de janelas de entrega." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcf-movement-made-easy.lovable.app/tms-vms" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        <section className="relative bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm font-semibold">Tecnologia Logística</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                TMS e VMS
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed">
                Tecnologia para gestão completa do transporte. Portal exclusivo, indicadores em tempo real e controle total de custos e performance logística.
              </p>
              <Button variant="cta" size="lg" onClick={() => window.location.href = "/#contato"} className="min-h-[48px] text-base">
                Solicite uma Demonstração
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">O Que É TMS e VMS?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O TMS (Transportation Management System) é o sistema de gestão de transporte que centraliza informações de embarques, custos e performance. O VMS (Visibility Management System) complementa com visibilidade em tempo real de toda a cadeia. Juntos, oferecem controle total da sua logística.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gcf-gray-02">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Benefícios</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tecnologia que transforma dados em decisões para sua operação logística.
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
              Quer Mais Controle Sobre Sua Logística?
            </h2>
            <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-10">
              Conheça nosso TMS e VMS. Solicite uma demonstração e veja como transformar sua gestão de transporte.
            </p>
            <Button variant="cta" size="lg" onClick={() => window.location.href = "/#contato"} className="min-h-[48px] text-base">
              Solicite uma Demonstração
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

export default TmsVms;
