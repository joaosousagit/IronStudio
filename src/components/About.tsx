import { Dumbbell, Users, Clock, Trophy } from "lucide-react";
import equipmentImage from "@/assets/equipment.jpg";

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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-[var(--shadow-elevated)]">
              <img 
                src={equipmentImage} 
                alt="Iron Beasts Gym Equipment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-lg p-6 shadow-[var(--shadow-elevated)]">
              <p className="text-sm text-muted-foreground">Fundado em</p>
              <p className="text-3xl font-black text-primary">2024</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
              Sobre o <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Iron Beasts</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              O Iron Beasts não é apenas um ginásio. É um espaço privado onde atletas verdadeiramente comprometidos 
              com a musculação encontram o ambiente perfeito para evoluir. Sem multidões, sem distrações, 
              apenas ferro pesado e uma comunidade que partilha os mesmos objetivos.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-[var(--transition-smooth)]">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
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
