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
    <section id="pricing" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Preços
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Planos simples e transparentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Mensal */}
          <div className="glass-strong rounded-lg p-8 hover-3d glow-strong">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Plano Mensal</h3>
              <div className="mb-4">
                <span className="text-5xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient neon-text">
                  50€
                </span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Pagamento por MBWay
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
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
          <div className="glass rounded-lg p-8 hover-3d glow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Experimenta</h3>
              <div className="mb-4">
                <span className="text-5xl font-black text-foreground">15€</span>
                <span className="text-muted-foreground">/dia</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Testa antes de decidir
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Acesso por 1 dia</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Todas as instalações</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Conhece o espaço</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Sem compromisso</span>
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

        <p className="text-center text-muted-foreground mt-8">
          Para mais informações, contacta-nos via Instagram ou WhatsApp
        </p>
      </div>
    </section>
  );
};
