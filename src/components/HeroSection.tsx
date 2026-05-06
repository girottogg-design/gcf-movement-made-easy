import { useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-transport.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const titleWords = ["Somos", "o", "movimento", "que"];
  const accentWords = ["transforma", "o", "Brasil"];

  // Radial particles — born near the vanishing point and drift outward (subtle)
  const particles = useMemo(() => {
    const count = 16;
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2 + (i % 3) * 0.4;
      const distance = 600 + (i % 5) * 180;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      const duration = 7 + (i % 5) * 0.8;
      const delay = (i * 0.5) % duration;
      const size = 1 + (i % 3) * 0.5;
      const opacity = 0.15 + (i % 4) * 0.04;
      return { x, y, duration, delay, size, opacity, id: i };
    });
  }, []);

  return (
    <section
      id="home"
      aria-label="Início"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background image with continuous slow zoom-in */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 62, 79, 0.65), rgba(15, 62, 79, 0.55)), url(${heroImage})`,
        }}
      />

      {/* Pulsing vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none animate-vignette-pulse"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(15,62,79,0.85) 100%)",
        }}
      />

      {/* Radial particles rushing outward from vanishing point */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 w-0 h-0">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute top-0 left-0 rounded-full bg-white animate-particle-rush"
              style={
                {
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  "--p-x": `${p.x}px`,
                  "--p-y": `${p.y}px`,
                  "--p-duration": `${p.duration}s`,
                  "--p-delay": `${p.delay}s`,
                  "--p-opacity": p.opacity,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-background">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">
              {titleWords.map((word, i) => (
                <span
                  key={i}
                  className="inline-block animate-blur-in mr-3"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="block mt-2 relative">
              {accentWords.map((word, i) => (
                <span
                  key={i}
                  className="inline-block text-secondary animate-blur-in mr-3"
                  style={{ animationDelay: `${0.5 + i * 0.15}s` }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-10 text-background/90 animate-blur-in"
            style={{ animationDelay: "1.1s" }}
          >
            Transporte especializado, com tecnologia e segurança
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-blur-in"
            style={{ animationDelay: "1.4s" }}
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#contato")}
              className="min-w-[200px] w-full sm:w-auto"
            >
              Entre em contato
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              onClick={() => scrollToSection("#servicos")}
              className="min-w-[200px] w-full sm:w-auto"
            >
              Conheça nossos serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-blur-in"
        style={{ animationDelay: "1.8s" }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-background/70">
          role para descobrir
        </span>
        <div className="flex flex-col -space-y-2">
          <ChevronDown className="w-5 h-5 text-background/80 animate-chevron" />
          <ChevronDown
            className="w-5 h-5 text-background/60 animate-chevron"
            style={{ animationDelay: "0.2s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
