import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: "", phone: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da GCF Transportes.");
    window.open(`https://wa.me/5541996073815?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "operacional@gcftransportes.com.br",
      href: "mailto:operacional@gcftransportes.com.br"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(41) 3607-3815",
      href: "tel:+554136073815"
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "R. Francisco Galarda, 187 - Thomaz Coelho, Araucária - PR, 83707-085",
      href: "https://maps.google.com/?q=R.+Francisco+Galarda,+187+-+Thomaz+Coelho,+Araucária+-+PR,+83707-085"
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Segunda a sexta, 8h às 18h",
      href: null
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gcf-gray-02">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Fale conosco e descubra como podemos otimizar sua logística
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
                <Button 
                  type="button" 
                  variant="cta-outline" 
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="flex-1"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar via WhatsApp
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <div className="bg-background rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-8">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gcf-gray-02 transition-colors duration-300">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary mb-1">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:scale-105 transition-transform duration-300"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;