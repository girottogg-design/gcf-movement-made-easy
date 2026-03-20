import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section aria-label="Depoimento de cliente" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 mx-auto mb-8 text-secondary" />
          
          <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed animate-fade-in">
            "Com a GCF Transportes, sempre temos a certeza de que nossas entregas chegam no 
            prazo e em perfeitas condições. Serviço eficiente e de total confiança!"
          </blockquote>
          
          <div className="flex items-center justify-center gap-6 animate-fade-in-up">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-lg">TM</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Thiago Marques</div>
              <div className="text-primary-foreground/80">CEO, Nascar Brasil</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;