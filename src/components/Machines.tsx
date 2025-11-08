import { Dumbbell, Award, Activity, Bike, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import equipmentImg from "@/assets/gym-equipment.jpg";
import hardcoreImg from "@/assets/hardcore-bodybuilding.jpg";
import athleteFocusImg from "@/assets/athlete-focus.jpg";

interface MachineItem {
  name: string;
  brand: string;
  description: string;
  image: string;
  muscleGroups: string[];
  icon: any;
}

export const Machines = () => {
  const navigate = useNavigate();
  
  const machines: MachineItem[] = [
    {
      name: "Leg Press 45°",
      brand: "Technogym",
      description: "Prensa de pernas profissional para treino de membros inferiores",
      image: equipmentImg,
      muscleGroups: ["Quadricípites", "Glúteos", "Isquiotibiais"],
      icon: TrendingUp,
    },
    {
      name: "Smith Machine",
      brand: "Life Fitness",
      description: "Barra guiada para agachamentos e supino com segurança máxima",
      image: hardcoreImg,
      muscleGroups: ["Peito", "Pernas", "Ombros"],
      icon: Dumbbell,
    },
    {
      name: "Cable Crossover",
      brand: "Matrix",
      description: "Sistema de cabos duplos para treino funcional completo",
      image: equipmentImg,
      muscleGroups: ["Peito", "Costas", "Core"],
      icon: Activity,
    },
    {
      name: "Elíptica Premium",
      brand: "Precor",
      description: "Cardio de baixo impacto com programas personalizados",
      image: athleteFocusImg,
      muscleGroups: ["Corpo inteiro", "Cardio"],
      icon: Bike,
    },
    {
      name: "Pec Deck",
      brand: "Hammer Strength",
      description: "Máquina de abertura de peito com movimento isolado",
      image: equipmentImg,
      muscleGroups: ["Peitoral", "Ombros anteriores"],
      icon: Dumbbell,
    },
    {
      name: "Hack Squat",
      brand: "Body-Solid",
      description: "Agachamento guiado para desenvolvimento de pernas",
      image: hardcoreImg,
      muscleGroups: ["Quadricípites", "Glúteos"],
      icon: TrendingUp,
    },
  ];

  return (
    <section id="machines" className="py-20 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 glass px-6 py-3 rounded-full">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Equipamento Premium
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient neon-text">
              As Melhores Máquinas do Mercado
            </span>
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground-light))] max-w-2xl mx-auto">
            Marcas líderes mundiais em equipamento de fitness profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machines.slice(0, 3).map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[hsl(var(--border-light))] hover-3d group overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80"></div>
                  <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full">
                    <IconComponent className="w-5 h-5 text-primary glow-pulse" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                      {item.brand}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-3 uppercase">
                    {item.name}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground-light))] mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs text-[hsl(var(--muted-foreground-light))] uppercase tracking-wider font-semibold">
                      Músculos trabalhados:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.muscleGroups.map((muscle, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-3 py-1 bg-[hsl(var(--muted-light))] rounded-full text-[hsl(var(--foreground-light))]"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => navigate("/maquinas")}
            className="group hover-3d"
          >
            Ver Todas as Máquinas
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
