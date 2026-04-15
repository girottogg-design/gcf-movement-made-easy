import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Eye,
  BarChart3,
  ShieldCheck,
  Cpu,
  TrendingDown,
  Users,
  ArrowRight,
  Monitor,
  AlertTriangle,
  Clock,
} from "lucide-react";

const TorreDeControle = () => {
  const handleCtaClick = () => {
    const el = document.querySelector("#contato-torre");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: Eye,
      title: "Visibilidade 360°",
      description:
        "Acompanhe cada etapa da sua operação logística em tempo real, do carregamento à entrega final.",
    },
    {
      icon: TrendingDown,
      title: "Redução de Custos",
      description:
        "Identifique gargalos, elimine retrabalho e otimize rotas com dados concretos e análise contínua.",
    },
    {
      icon: AlertTriangle,
      title: "Gestão Proativa de Ocorrências",
      description:
        "Antecipe problemas antes que impactem a operação. Atrasos, desvios e avarias tratados em tempo real.",
    },
    {
      icon: BarChart3,
      title: "Indicadores em Tempo Real",
      description:
        "Dashboards com KPIs operacionais — pontualidade, lead time, custo por entrega, taxa de avarias.",
    },
    {
      icon: Cpu,
      title: "Integração com TMS e ERP",
      description:
        "Conectamos nossa torre aos seus sistemas de gestão para fluxo de dados contínuo e sem retrabalho.",
    },
    {
      icon: ShieldCheck,
      title: "Segurança e Compliance",
      description:
        "Monitoramento de jornada, checklist veicular, conferência documental e rastreabilidade total.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Torre de Controle Logística",
    provider: {
      "@type": "Organization",
      name: "GCF Transportes",
      url: "https://gcf-movement-made-easy.lovable.app",
    },
    description:
      "Serviço de Torre de Controle Logística para monitoramento em tempo real, gestão de ocorrências e visibilidade total da cadeia de transporte.",
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    serviceType: "Torre de Controle Logística",
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Torre de Controle Logística | GCF Transportes</title>
        <meta
          name="description"
          content="Torre de Controle Logística da GCF Transportes: monitoramento em tempo real, gestão de ocorrências, indicadores operacionais e visibilidade total da sua cadeia de transporte."
        />
        <link
          rel="canonical"
          href="https://gcf-movement-made-easy.lovable.app/torre-de-controle"
        />
        <meta
          property="og:title"
          content="Torre de Controle Logística | GCF Transportes"
        />
        <meta
          property="og:description"
          content="Monitoramento em tempo real, gestão proativa de ocorrências e indicadores operacionais para sua logística."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://gcf-movement-made-easy.lovable.app/torre-de-controle"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
                <Monitor className="w-4 h-4" />
                <span className="text-sm font-semibold">Serviço Especializado</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Torre de Controle Logística
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed">
                Visibilidade total da sua operação de transporte em tempo real.
                Monitoramento, gestão de ocorrências e indicadores que transformam
                dados em decisões — com a experiência de quem opera logística de
                verdade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={handleCtaClick}
                  className="min-h-[48px] text-base"
                >
                  Solicite uma Proposta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="hero-outline"
                  size="lg"
                  onClick={() => {
                    document
                      .querySelector("#o-que-e")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="min-h-[48px] text-base"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* O que é */}
        <section id="o-que-e" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                O Que É a Torre de Controle Logística?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Torre de Controle é uma central de monitoramento e gestão que
                acompanha toda a operação de transporte em tempo real. Desde a
                saída do veículo até a confirmação de entrega, cada etapa é
                monitorada, registrada e analisada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Monitor,
                  title: "Monitoramento em Tempo Real",
                  text: "Rastreamento GPS, status de entregas, posição de cada veículo e previsão de chegada — tudo em uma única tela.",
                },
                {
                  icon: AlertTriangle,
                  title: "Gestão de Ocorrências",
                  text: "Atrasos, devoluções, avarias e desvios são tratados de forma imediata, com comunicação direta ao cliente.",
                },
                {
                  icon: Clock,
                  title: "Relatórios e Indicadores",
                  text: "KPIs operacionais atualizados em tempo real: pontualidade, lead time, custo por entrega e muito mais.",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="border-none shadow-soft bg-gcf-gray-02 text-center"
                >
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-gcf-gray-02">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Benefícios da Torre de Controle GCF
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Resultados concretos para quem precisa de controle, previsibilidade
                e eficiência na operação logística.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((b, i) => (
                <Card
                  key={i}
                  className="border-none shadow-soft hover:shadow-medium transition-shadow duration-300"
                >
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                      <b.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {b.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {b.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Para quem */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Para Quem É a Torre de Controle?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Atendemos tanto empresas que precisam terceirizar sua torre de
                  controle quanto indústrias que já possuem operação própria e
                  buscam um parceiro para complementar ou operar junto.
                </p>
                <ul className="space-y-4">
                  {[
                    "Indústrias com operação de transporte dedicada ou frota própria",
                    "Embarcadores que contratam múltiplas transportadoras",
                    "Empresas que precisam de visibilidade ponta a ponta",
                    "Operações que exigem SLA rigoroso de entrega",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary rounded-2xl p-10 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">
                  Terceirize ou Complemente
                </h3>
                <p className="text-primary-foreground/85 leading-relaxed mb-6">
                  Você não precisa montar uma torre do zero. A GCF Transportes já
                  possui estrutura, equipe, tecnologia e processos prontos para
                  operar a gestão da sua logística com a mesma exigência que
                  aplicamos na nossa própria operação.
                </p>
                <Button
                  variant="cta"
                  size="lg"
                  onClick={handleCtaClick}
                  className="min-h-[48px]"
                >
                  Fale com Nosso Time
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA + Link para blog */}
        <section id="contato-torre" className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Pronto Para Ter Controle Total da Sua Logística?
            </h2>
            <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto mb-10">
              Entre em contato e receba uma proposta personalizada para sua
              operação. Nossa equipe vai entender sua demanda e montar a melhor
              solução para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="cta"
                size="lg"
                onClick={() => {
                  window.location.href = "/#contato";
                }}
                className="min-h-[48px] text-base"
              >
                Solicite uma Proposta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-8">
              Quer entender mais sobre o conceito?{" "}
              <a
                href="/blog/torre-de-controle-logistica-o-que-e"
                className="underline text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Leia nosso artigo completo sobre Torre de Controle Logística
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default TorreDeControle;
