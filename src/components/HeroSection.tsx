import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-frame.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) setShowVideo(false);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const titleWords = ["Somos", "o", "movimento", "que"];
  const accentWords = ["transforma", "o", "Brasil"];

  return (
    <section
      id="home"
      aria-label="Início"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background video */}
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroImage}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>
      )}
      {!showVideo && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
      )}

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 bg-primary/60 pointer-events-none"
        aria-hidden="true"
      />
      {/* Bottom gradient for smooth fade into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent pointer-events-none"
        aria-hidden="true"
      />

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
            <span className="block mt-2">
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
