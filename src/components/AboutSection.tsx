const AboutSection = () => {
  return (
    <section id="sobre" aria-label="Sobre a GCF Transportes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-2">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in">
                Nossa História
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground animate-fade-in-up">
                <p>
                  Há mais de uma década, a <strong className="text-primary">GCF Transportes</strong> se destaca como referência em 
                  transporte e armazenagem especializada, atendendo segmentos estratégicos como papel, aço e 
                  autopeças.
                </p>
                <p>
                  Nossa experiência consolidada nos permite garantir <strong className="text-secondary">segurança, agilidade e tecnologia</strong> em cada 
                  operação, sempre focados na excelência operacional e na satisfação total de nossos clientes.
                </p>
                <p>
                  Mais do que movimentar cargas, entregamos <strong className="text-primary">tranquilidade, pontualidade e resultados excepcionais</strong> 
                  para empresas que confiam em nossa expertise logística.
                </p>
              </div>
            </div>
          </div>

          {/* Image Mosaic */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <div className="space-y-4">
                <div className="aspect-square bg-gcf-blue-light rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <div className="text-center text-primary">
                      <div className="text-2xl font-bold mb-2">13+</div>
                      <div className="text-sm">Anos</div>
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-secondary/10 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center">
                    <div className="text-center text-secondary">
                      <div className="text-2xl font-bold mb-2">24/7</div>
                      <div className="text-sm">Suporte</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square bg-gcf-success/10 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-gcf-success/20 to-gcf-success/40 flex items-center justify-center">
                    <div className="text-center text-gcf-success">
                      <div className="text-2xl font-bold mb-2">100%</div>
                      <div className="text-sm">Segurança</div>
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-primary/10 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <div className="text-center text-primary">
                      <div className="text-2xl font-bold mb-2">GPS</div>
                      <div className="text-sm">Rastreamento</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;