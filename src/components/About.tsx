import { Dumbbell, Users, Clock, Trophy } from "lucide-react";
import equipmentImage from "@/assets/gym-equipment.jpg";

export const About = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Equipamento de Elite",
      description: "Equipamento profissional de musculação, pensado para atletas sérios que procuram resultados reais."
    },
    {
      icon: Users,
      title: "Comunidade Focada",
      description: "Não somos um ginásio comercial. Somos uma comunidade privada de pessoas dedicadas ao ferro."
    },
    {
      icon: Clock,
      title: "Acesso 24/7",
      description: "Treina quando quiseres. Aberto 24 horas por dia, todos os dias. Sem desculpas."
    },
    {
      icon: Trophy,
      title: "Resultados Reais",
      description: "Ambiente focado em progressão, ganhos reais e superação de limites. Sem distrações."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-[var(--shadow-elevated)]">
              <img 
                src={equipmentImage} 
                alt="Iron Studio BB Club - Equipamento de Musculação" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white border border-[hsl(var(--border-light))] rounded-lg p-6 shadow-[var(--shadow-elevated)]">
              <p className="text-sm text-[hsl(var(--muted-foreground-light))]">Fundado em</p>
              <p className="text-3xl font-black text-primary">2023</p>
            </div>
          </div>

          {/* Content */}
          <div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
            Sobre o <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Iron Studio</span>
          </h2>
            
            <p className="text-lg text-[hsl(var(--muted-foreground-light))] mb-8">
              O Iron Studio não é apenas um ginásio. É um espaço privado onde atletas verdadeiramente comprometidos 
              com a musculação encontram o ambiente perfeito para evoluir. Sem multidões, sem distrações, 
              apenas ferro pesado e uma comunidade que partilha os mesmos objetivos.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white border border-[hsl(var(--border-light))] rounded-lg p-6 hover:border-primary transition-[var(--transition-smooth)]">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground-light))]">{feature.title}</h3>
                    <p className="text-[hsl(var(--muted-foreground-light))] text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
