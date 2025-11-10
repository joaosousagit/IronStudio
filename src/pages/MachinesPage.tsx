import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Dumbbell, Award, Activity, Bike, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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

const MachinesPage = () => {
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
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar ao Início
          </Button>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 glass px-6 py-3 rounded-full">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Equipamento Premium
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
                As Melhores Máquinas do Mercado
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Marcas líderes mundiais em equipamento de fitness profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="glass-strong hover-3d glow group overflow-hidden rounded-2xl"
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
                    <h3 className="text-2xl font-black mb-3 uppercase tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        Músculos trabalhados:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.muscleGroups.map((muscle, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs px-3 py-1 glass rounded-full text-foreground/80"
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
            <p className="text-muted-foreground italic">
              * Brevemente com fotos atualizadas de todo o nosso equipamento premium
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MachinesPage;
