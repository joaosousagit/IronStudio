import { Dumbbell, Users, Clock, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import equipmentImage from "@/assets/gym-equipment.jpg";
export const About = () => {
  const titleReveal = useScrollReveal();
  const imageReveal = useScrollReveal();
  const contentReveal = useScrollReveal({
    threshold: 0.2
  });
  const features = [{
    icon: Dumbbell,
    title: "Equipamento Completo",
    description: "Equipamento de qualidade para todos os tipos de treino, seja qual for o teu objetivo."
  }, {
    icon: Users,
    title: "Ambiente Acolhedor",
    description: "Um espaço onde todos são bem-vindos, independentemente do nível de experiência."
  }, {
    icon: Clock,
    title: "Horário Mais Alargado",
    description: "O centro de treinos com o horário mais alargado de Leiria. Treina quando te é mais conveniente."
  }, {
    icon: Trophy,
    title: "Resultados",
    description: "Ambiente focado em progressão e bem-estar. Alcança os teus objetivos ao teu ritmo."
  }];
  return <section id="about" className="py-20 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageReveal.ref} className={`relative grayscale-red scroll-slide-left ${imageReveal.isVisible ? 'revealed' : ''}`}>
            <div className="aspect-square overflow-hidden">
              <img src={equipmentImage} alt="Iron Studio BB Club - Equipamento de Musculação" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-4">
              <p className="text-xs mb-1 uppercase">DESDE DE</p>
              <p className="text-3xl font-black">2023</p>
            </div>
          </div>

          {/* Content */}
          <div ref={contentReveal.ref} className={`scroll-slide-right ${contentReveal.isVisible ? 'revealed' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase italic">
            Sobre o <span className="text-primary">Iron Studio</span>
          </h2>
            
            <p className="text-lg text-[hsl(var(--muted-foreground-light))] mb-6 leading-relaxed">
              O Iron Studio é mais do que um centro de treinos. É um espaço onde pessoas de todos os níveis 
              encontram o ambiente ideal para alcançar os seus objetivos. Sem multidões, sem distrações, 
              apenas foco no teu bem-estar e evolução pessoal.
            </p>

            <div className="bg-white border-l-4 border-primary px-6 py-4 mb-10">
              <p className="text-[hsl(var(--foreground-light))] font-bold mb-2 uppercase">📍 Instalações Completas</p>
              <p className="text-[hsl(var(--muted-foreground-light))] leading-relaxed">
                Zona de pesos livres • Máquinas profissionais • Área de cardio • Balneários com chuveiros • Estacionamento gratuito
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
              const Icon = feature.icon;
              return <div key={index} className="bg-white border-2 border-[hsl(var(--border-light))] p-6 hover:border-primary transition-all duration-300">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-[hsl(var(--foreground-light))] uppercase">{feature.title}</h3>
                    <p className="text-[hsl(var(--muted-foreground-light))]">{feature.description}</p>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};