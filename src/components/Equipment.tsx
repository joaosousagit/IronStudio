import { Dumbbell, Zap, Award } from "lucide-react";
import equipmentImg from "@/assets/gym-equipment.jpg";
import hardcoreImg from "@/assets/hardcore-bodybuilding.jpg";
import athleteFocusImg from "@/assets/athlete-focus.jpg";

interface EquipmentItem {
  name: string;
  brand: string;
  description: string;
  image: string;
  benefits: string[];
}

export const Equipment = () => {
  const equipment: EquipmentItem[] = [
    {
      name: "Máquinas de Musculação",
      brand: "Equipamento Premium",
      description: "Equipamento de última geração para treino completo",
      image: equipmentImg,
      benefits: ["Alta durabilidade", "Ergonomia superior", "Resultados profissionais"],
    },
    {
      name: "Zona de Peso Livre",
      brand: "Hardcore Training",
      description: "Área dedicada ao treino intensivo com pesos livres",
      image: hardcoreImg,
      benefits: ["Treino funcional", "Máxima performance", "Ambiente profissional"],
    },
    {
      name: "Cardio Premium",
      brand: "Tecnologia Avançada",
      description: "Equipamento cardiovascular de topo de gama",
      image: athleteFocusImg,
      benefits: ["Monitorização precisa", "Programas personalizados", "Conforto máximo"],
    },
  ];

  return (
    <section id="equipment" className="py-20 bg-gradient-to-b from-background to-secondary/20">
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
              As Melhores Máquinas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Equipamento de topo de gama para maximizar os teus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
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
                  <Zap className="w-5 h-5 text-primary glow-pulse" />
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                    {item.brand}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase flex items-center gap-2">
                  <Dumbbell className="w-6 h-6 text-primary" />
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary glow"></div>
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            * Brevemente com fotos atualizadas de todo o nosso equipamento premium
          </p>
        </div>
      </div>
    </section>
  );
};
