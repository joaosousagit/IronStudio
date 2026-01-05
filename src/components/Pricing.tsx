import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Pricing = () => {
  const titleReveal = useScrollReveal();
  const plan1Reveal = useScrollReveal({ threshold: 0.2 });
  const plan2Reveal = useScrollReveal({ threshold: 0.2 });
  const plan3Reveal = useScrollReveal({ threshold: 0.2 });
  const plan4Reveal = useScrollReveal({ threshold: 0.2 });
  
  const features = [
    "Acesso 24/7",
    "Equipamento completo",
    "Ambiente privado",
    "Balneários e chuveiros",
    "Zero distrações",
    "Estacionamento gratuito",
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/351910100793', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={titleReveal.ref}
            className={`text-5xl md:text-6xl font-black mb-6 uppercase italic scroll-reveal ${titleReveal.isVisible ? 'revealed' : ''}`}
          >
            <span className="text-primary">Preços</span>
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground-light))]">
            Planos simples e transparentes
          </p>
          <div className="mt-4 inline-block bg-primary text-white px-6 py-2 font-bold uppercase">
            🔥 Promoção Especial 🔥
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {/* Plano Estudante */}
          <div 
            ref={plan1Reveal.ref}
            className={`bg-white border-4 border-blue-500 p-8 hover:shadow-2xl transition-all duration-300 relative scroll-slide-left flex flex-col h-full ${plan1Reveal.isVisible ? 'revealed' : ''}`}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 text-sm font-bold uppercase">
              Estudantes
            </div>
            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground-light))] uppercase">Plano Estudante</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-[hsl(var(--muted-foreground-light))] line-through mr-2">
                  40€
                </span>
                <span className="text-5xl font-black text-blue-500">
                  30€
                </span>
                <span className="text-[hsl(var(--muted-foreground-light))]">/mês</span>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground-light))] uppercase">
                Com cartão de estudante
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-[hsl(var(--foreground-light))]">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="default"
              size="lg"
              className="w-full uppercase font-bold tracking-wide bg-blue-500 hover:bg-blue-600 mt-auto"
              onClick={openWhatsApp}
            >
              Juntar-me Agora
            </Button>
          </div>

          {/* Plano Mensal */}
          <div 
            ref={plan2Reveal.ref}
            className={`bg-white border-4 border-primary p-8 hover:shadow-2xl transition-all duration-300 scroll-slide-up flex flex-col h-full ${plan2Reveal.isVisible ? 'revealed' : ''}`}
          >
            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground-light))] uppercase">Plano Mensal</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-[hsl(var(--muted-foreground-light))] line-through mr-2">
                  50€
                </span>
                <span className="text-5xl font-black text-primary">
                  40€
                </span>
                <span className="text-[hsl(var(--muted-foreground-light))]">/mês</span>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground-light))] uppercase">
                Pagamento por MBWay
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-[hsl(var(--foreground-light))]">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="default"
              size="lg"
              className="w-full uppercase font-bold tracking-wide mt-auto"
              onClick={openWhatsApp}
            >
              Juntar-me Agora
            </Button>
          </div>

          {/* Plano Anual */}
          <div 
            ref={plan3Reveal.ref}
            className={`bg-white border-4 border-primary p-8 hover:shadow-2xl transition-all duration-300 relative scroll-slide-up flex flex-col h-full ${plan3Reveal.isVisible ? 'revealed' : ''}`}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm font-bold uppercase">
              Melhor Valor
            </div>
            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground-light))] uppercase">Plano Anual</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-[hsl(var(--muted-foreground-light))] line-through mr-2">
                  480€
                </span>
                <span className="text-5xl font-black text-primary">
                  360€
                </span>
                <span className="text-[hsl(var(--muted-foreground-light))]">/ano</span>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground-light))] uppercase">
                Poupa 120€ por ano
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-[hsl(var(--foreground-light))]">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="default"
              size="lg"
              className="w-full uppercase font-bold tracking-wide mt-auto"
              onClick={openWhatsApp}
            >
              Juntar-me Agora
            </Button>
          </div>

          {/* Plano Experimental */}
          <div 
            ref={plan4Reveal.ref}
            className={`bg-white border-2 border-[hsl(var(--border-light))] p-8 hover:shadow-2xl transition-all duration-300 scroll-slide-right flex flex-col h-full ${plan4Reveal.isVisible ? 'revealed' : ''}`}
          >
            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground-light))] uppercase">Experimenta</h3>
              <div className="mb-4">
                <span className="text-5xl font-black text-[hsl(var(--foreground-light))]">15€</span>
                <span className="text-[hsl(var(--muted-foreground-light))]">/dia</span>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground-light))] uppercase">
                Testa antes de decidir
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-[hsl(var(--foreground-light))]">Acesso por 1 dia</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-[hsl(var(--foreground-light))]">Todas as instalações</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-[hsl(var(--foreground-light))]">Conhece o espaço</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-[hsl(var(--foreground-light))]">Sem compromisso</span>
              </li>
            </ul>

            <Button
              variant="outline"
              size="lg"
              className="w-full uppercase font-bold tracking-wide mt-auto"
              onClick={openWhatsApp}
            >
              Experimentar
            </Button>
          </div>
        </div>

        <p className="text-center text-[hsl(var(--muted-foreground-light))] mt-8">
          Para mais informações, contacta-nos via Instagram ou WhatsApp
        </p>
      </div>
    </section>
  );
};
