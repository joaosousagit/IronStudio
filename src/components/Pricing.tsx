import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Pricing = () => {
  const titleReveal = useScrollReveal();
  const plan1Reveal = useScrollReveal({ threshold: 0.2 });
  const plan2Reveal = useScrollReveal({ threshold: 0.2 });
  
  const features = [
    "Acesso 24/7",
    "Equipamento completo",
    "Ambiente privado",
    "Balneários e chuveiros",
    "Zero distrações",
    "Estacionamento gratuito",
  ];

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
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Mensal */}
          <div 
            ref={plan1Reveal.ref}
            className={`bg-white border-4 border-primary p-10 hover:shadow-2xl transition-all duration-300 scroll-slide-left ${plan1Reveal.isVisible ? 'revealed' : ''}`}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground-light))] uppercase">Plano Mensal</h3>
              <div className="mb-4">
                <span className="text-6xl font-black text-primary">
                  50€
                </span>
                <span className="text-[hsl(var(--muted-foreground-light))]">/mês</span>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground-light))] uppercase">
                Pagamento por MBWay
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-[hsl(var(--foreground-light))]">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="default"
              size="lg"
              className="w-full uppercase font-bold tracking-wide"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Juntar-me Agora
            </Button>
          </div>

          {/* Plano Experimental */}
          <div 
            ref={plan2Reveal.ref}
            className={`bg-white border-2 border-[hsl(var(--border-light))] p-10 hover:shadow-2xl transition-all duration-300 scroll-slide-right ${plan2Reveal.isVisible ? 'revealed' : ''}`}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground-light))] uppercase">Experimenta</h3>
              <div className="mb-4">
                <span className="text-6xl font-black text-[hsl(var(--foreground-light))]">15€</span>
                <span className="text-[hsl(var(--muted-foreground-light))]">/dia</span>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground-light))] uppercase">
                Testa antes de decidir
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[hsl(var(--foreground-light))]">Acesso por 1 dia</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[hsl(var(--foreground-light))]">Todas as instalações</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[hsl(var(--foreground-light))]">Conhece o espaço</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-[hsl(var(--foreground-light))]">Sem compromisso</span>
              </li>
            </ul>

            <Button
              variant="outline"
              size="lg"
              className="w-full uppercase font-bold tracking-wide"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
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
