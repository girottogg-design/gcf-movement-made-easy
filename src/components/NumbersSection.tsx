import { useEffect, useState } from "react";
import { Truck, Clock, Users, Package } from "lucide-react";

const NumbersSection = () => {
  const [counts, setCounts] = useState({
    deliveries: 0,
    experience: 0,
    trucks: 0,
    clients: 0,
  });

  const targetNumbers = {
    deliveries: 60000,
    experience: 13,
    trucks: 40,
    clients: 200,
  };

  const statsData = [
    {
      icon: Package,
      value: counts.deliveries,
      suffix: "+",
      label: "entregas realizadas",
    },
    {
      icon: Clock,
      value: counts.experience,
      suffix: " anos",
      label: "de experiência",
    },
    {
      icon: Truck,
      value: counts.trucks,
      suffix: "+",
      label: "caminhões na frota",
    },
    {
      icon: Users,
      value: counts.clients,
      suffix: "+",
      label: "clientes atendidos",
    },
  ];

  useEffect(() => {
    const animateCount = (target: number, key: keyof typeof counts, duration: number = 2000) => {
      const startTime = Date.now();
      const startValue = 0;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

        setCounts(prev => ({ ...prev, [key]: currentValue }));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    };

    // Start animations with slight delays
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => animateCount(targetNumbers.deliveries, 'deliveries'), 0);
          setTimeout(() => animateCount(targetNumbers.experience, 'experience'), 200);
          setTimeout(() => animateCount(targetNumbers.trucks, 'trucks'), 400);
          setTimeout(() => animateCount(targetNumbers.clients, 'clients'), 600);
          observer.unobserve(entry.target);
        }
      });
    });

    const element = document.getElementById('numbers-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="numbers-section" aria-label="Nossos números" className="py-20 bg-gcf-gray-02">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;