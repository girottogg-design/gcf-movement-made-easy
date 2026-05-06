import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-transport.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const titleWords = ["Somos", "o", "movimento", "que"];
  const accentWords = ["transforma", "o", "Brasil"];

  return (
    <section
      id="home"
      aria-label="Início"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background image with Ken Burns + parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 62, 79, 0.65), rgba(15, 62, 79, 0.55)), url(${heroImage})`,
          }}
        />
      </div>

      {/* Speed road lines (horizontal moving stripes) */}
      <div
        className="absolute inset-x-0 bottom-[18%] h-[2px] opacity-40 mix-blend-screen pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full w-[200%] animate-road-lines"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.9) 0 40px, transparent 40px 90px)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 bottom-[12%] h-[1px] opacity-25 mix-blend-screen pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full w-[200%] animate-road-lines"
          style={{
            animationDuration: "4s",
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,220,150,0.8) 0 25px, transparent 25px 70px)",
          }}
        />
      </div>

      {/* Diagonal light streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[20%] left-0 w-[40%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-light-streak"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-[55%] left-0 w-[30%] h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent animate-light-streak"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />
        <div
          className="absolute top-[75%] left-0 w-[50%] h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent animate-light-streak hidden sm:block"
          style={{ animationDelay: "3.5s", animationDuration: "7s" }}
        />
      </div>

      {/* Floating particles (atmosphere) */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/40 animate-drift"
            style={{
              top: `${15 + ((i * 11) % 70)}%`,
              left: `${10 + ((i * 13) % 80)}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${6 + (i % 4)}s`,
            }}
          />
        ))}
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
            <span className="block mt-2 relative inline-block">
              {accentWords.map((word, i) => (
                <span
                  key={i}
                  className="inline-block text-secondary animate-blur-in mr-3"
                  style={{ animationDelay: `${0.5 + i * 0.15}s` }}
                >
                  {word}
                </span>
              ))}
              <span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary animate-draw-underline"
                style={{ animationDelay: "1.3s", opacity: 0 }}
                ref={(el) => {
                  if (el) {
                    setTimeout(() => {
                      el.style.opacity = "1";
                    }, 1300);
                  }
                }}
              />
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
        <div className="w-px h-10 bg-background/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary animate-road-lines" style={{ animationDuration: "1.8s" }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
