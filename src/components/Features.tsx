import { Shield, Zap, Target } from "lucide-react";
import image247 from "@/assets/gym-wall.jpg";

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase italic">
            Porquê o <span className="text-primary">Iron Studio</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Equipamento de elite. Ambiente privado. Zero distrações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-card border-2 border-border p-8 text-center hover:border-primary transition-all duration-300">
            <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase">Ambiente Privado</h3>
            <p className="text-muted-foreground">
              Ginásio exclusivo para membros. Treina em paz, sem multidões.
            </p>
          </div>

          <div className="bg-card border-2 border-border p-8 text-center hover:border-primary transition-all duration-300">
            <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase">Zero Distrações</h3>
            <p className="text-muted-foreground">
              Foco total no treino. Uma comunidade dedicada ao ferro.
            </p>
          </div>

          <div className="bg-card border-2 border-border p-8 text-center hover:border-primary transition-all duration-300">
            <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase">Só Resultados</h3>
            <p className="text-muted-foreground">
              Equipamento profissional. Atmosfera que inspira progressão.
            </p>
          </div>
        </div>

        {/* 24/7 Feature Highlight */}
        <div className="relative overflow-hidden grayscale-red">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image247})` }}
          />
          <div className="absolute inset-0 bg-background/70"></div>
          
          <div className="relative z-10 py-32 px-8 text-center">
            <h3 className="text-7xl md:text-8xl font-black mb-6 uppercase italic text-foreground">
              24/7
            </h3>
            <p className="text-3xl font-bold mb-4 uppercase tracking-wide">Sempre Aberto</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Treina quando quiseres. Sem desculpas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
