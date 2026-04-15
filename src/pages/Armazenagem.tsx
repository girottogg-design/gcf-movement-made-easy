import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Warehouse,
  ArrowRight,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Boxes,
  ScanLine,
  Clock,
} from "lucide-react";

const Armazenagem = () => {
  const benefits = [
    {
      icon: Boxes,
      title: "Armazenagem Segura",
      description: "Estrutura com controle de acesso, monitoramento 24h e organização por SKU para máxima segurança e rastreabilidade.",
    },
    {
      icon: RefreshCw,
      title: "Crossdocking Eficiente",
      description: "Recebimento e redistribuição rápida de cargas sem necessidade de estocagem, reduzindo tempo e custo operacional.",
    },
    {
      icon: ScanLine,
      title: "Conferência Automatizada",
      description: "Processos de conferência com leitura de código de barras, eliminando erros e agilizando a entrada de mercadorias.",
    },
    {
      icon: PackageCheck,
      title: "Expedição Ágil e Rastreada",
      description: "Picking, packing e expedição com rastreabilidade total, garantindo que cada pedido saia corretamente.",
    },
    {
      icon: ShieldCheck,
      title: "Controle de Inventário",
      description: "Gestão de estoque em tempo real com relatórios de posição, movimentação e acuracidade.",
    },
    {
      icon: Clock,
      title: "Operação Flexível",
      description: "Adaptamos a operação ao seu volume — de poucos paletes a operações de grande escala, com escalabilidade sob demanda.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Armazenagem e Crossdocking",
    provider: { "@type": "Organization", name: "GCF Transportes", url: "https://gcf-movement-made-easy.lovable.app" },
    description: "Serviço de armazenagem segura, crossdocking, conferência automatizada e expedição rastreada.",
    areaServed: { "@type": "Country", name: "Brasil" },
    serviceType: "Armazenagem e Crossdocking",
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Armazenagem e Crossdocking | GCF Transportes</title>
        <meta name="description" content="Armazenagem segura, crossdocking eficiente, conferência automatizada e expedição rastreada. Soluções de armazenagem logística em Araucária-PR." />
        <link rel="canonical" href="https://gcf-movement-made-easy.lovable.app/armazenagem" />
        <meta property="og:title" content="Armazenagem e Crossdocking | GCF Transportes" />
        <meta property="og:description" content="Armazenagem segura com crossdocking, conferência automatizada e controle de inventário em tempo real." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcf-movement-made-easy.lovable.app/armazenagem" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        <section className="relative bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
                <Warehouse className="w-4 h-4" />
                <span className="text-sm font-semibold">Serviço Especializado</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Armazenagem e Crossdocking
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed">
                Estrutura completa para armazenar, conferir e expedir suas mercadorias com segurança, agilidade e rastreabilidade total.
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Nossa Estrutura de Armazenagem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Operamos com galpões estruturados em Araucária-PR, com capacidade para atender operações de diferentes portes. Desde a recepção até a expedição, cada etapa é controlada e documentada.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gcf-gray-02">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Benefícios</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Por que confiar sua armazenagem à GCF Transportes.
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
              Precisa de Armazenagem Confiável?
            </h2>
            <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-10">
              Fale com nosso time e receba uma proposta sob medida para sua operação.
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

export default Armazenagem;
