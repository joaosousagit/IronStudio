import { Shield, User, Shirt, Clock, Volume2, Heart } from "lucide-react";
interface Rule {
  icon: any;
  title: string;
  description: string;
}
export const GymRules = () => {
  const rules: Rule[] = [{
    icon: Shirt,
    title: "Traz a Tua Toalha",
    description: "Obrigatório para usar nos equipamentos. Mantém o espaço limpo para todos."
  }, {
    icon: User,
    title: "Respeita o Espaço",
    description: "Devolve os pesos ao lugar e limpa o equipamento após usar."
  }, {
    icon: Volume2,
    title: "Ambiente Focado",
    description: "Música permitida com phones. Evita conversas longas e distrações."
  }, {
    icon: Clock,
    title: "Sem Limites de Tempo",
    description: "Treina o tempo que precisares. O centro de treinos é teu 24/7."
  }, {
    icon: Shield,
    title: "Segurança Primeiro",
    description: "Usa os equipamentos corretamente. Pede ajuda se tiveres dúvidas."
  }, {
    icon: Heart,
    title: "Comunidade Unida",
    description: "Todos estamos aqui pelos mesmos objetivos. Respeito acima de tudo."
  }];
  return <section className="py-20 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Regras do Centro de Treinos
            </span>
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground-light))] max-w-2xl mx-auto">
            Simples e diretas. Para manter o ambiente focado e profissional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {rules.map((rule, index) => {
          const Icon = rule.icon;
          return <div key={index} className="bg-white border border-[hsl(var(--border-light))] rounded-lg p-6 hover:border-primary transition-[var(--transition-smooth)] hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground-light))]">
                  {rule.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground-light))] text-sm leading-relaxed">
                  {rule.description}
                </p>
              </div>;
        })}
        </div>

        <div className="text-center mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20 rounded-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            
            <p className="text-lg text-[hsl(var(--foreground-light))] font-semibold">
              Seguir estas regras garante que todos tenham a melhor experiência possível no Iron Studio.
            </p>
          </div>
        </div>
      </div>
    </section>;
};