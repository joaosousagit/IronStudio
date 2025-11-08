import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const features = [
    "Acesso 24/7",
    "Equipamento completo",
    "Ambiente privado",
    "Balneários e chuveiros",
    "Zero distrações",
    "Estacionamento gratuito",
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Preços
            </span>
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground-light))]">
            Planos simples e transparentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Mensal */}
          <div className="bg-white border-2 border-primary rounded-lg p-8 hover-3d shadow-xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-[hsl(var(--foreground-light))]">Plano Mensal</h3>
              <div className="mb-4">
                <span className="text-5xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient neon-text">
                  50€
                </span>
                <span className="text-[hsl(var(--muted-foreground-light))]">/mês</span>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground-light))]">
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
              variant="hero"
              className="w-full"
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
          <div className="bg-white border border-[hsl(var(--border-light))] rounded-lg p-8 hover-3d shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-[hsl(var(--foreground-light))]">Experimenta</h3>
              <div className="mb-4">
                <span className="text-5xl font-black text-[hsl(var(--foreground-light))]">15€</span>
                <span className="text-[hsl(var(--muted-foreground-light))]">/dia</span>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground-light))]">
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
              className="w-full"
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
