import { Dumbbell, Users, Clock, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import image247 from "@/assets/gym-wall.jpg";

export const Features = () => {
  const titleReveal = useScrollReveal();
  const quoteReveal = useScrollReveal();
  
  return (
    <section id="features" className="py-24 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div 
          ref={titleReveal.ref}
          className={`text-center mb-16 scroll-reveal ${titleReveal.isVisible ? 'revealed' : ''}`}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">
            Porque é que é tão bom?
          </h1>
          <p className="text-2xl text-[hsl(var(--muted-foreground-light))] max-w-3xl mx-auto">
            Ferro pesado e espelhos de corpo inteiro. Mais o quê?
          </p>
        </div>

        <p className="text-center text-xl mb-12 text-[hsl(var(--muted-foreground-light))]">No ginásio, vais encontrar:</p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-16 h-16 text-primary" />
            </div>
            <h5 className="text-xl font-bold uppercase mb-2">Horário Alargado</h5>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-16 h-16 text-primary" />
            </div>
            <h5 className="text-xl font-bold uppercase mb-2">Ambiente Privado</h5>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Trophy className="w-16 h-16 text-primary" />
            </div>
            <h5 className="text-xl font-bold uppercase mb-2">Excelentes Instalações</h5>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Dumbbell className="w-16 h-16 text-primary" />
            </div>
            <h5 className="text-xl font-bold uppercase mb-2">Equipamento Profissional</h5>
          </div>
        </div>

        {/* Quote Section with Background */}
        <div 
          ref={quoteReveal.ref}
          className={`relative h-96 overflow-hidden scroll-scale ${quoteReveal.isVisible ? 'revealed' : ''}`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${image247})`,
              filter: 'grayscale(100%) contrast(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
          
          <div className="relative z-10 h-full flex items-center justify-center px-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-center text-foreground max-w-4xl leading-tight">
              Os campeões são feitos quando ninguém está a ver
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
