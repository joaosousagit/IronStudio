import { Shield, Zap, Target } from "lucide-react";
import image247 from "@/assets/gym-wall.jpg";

export const Features = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            Treina à <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tua Maneira</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acesso total, sem restrições, sem compromissos de horário
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="glass rounded-lg p-8 text-center hover-3d glow">
            <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 glow-pulse animate-gradient">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Ambiente Privado</h3>
            <p className="text-muted-foreground">
              Ginásio exclusivo para membros. Treina em paz, sem multidões nem esperas por equipamento.
            </p>
          </div>

          <div className="glass rounded-lg p-8 text-center hover-3d glow">
            <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 glow-pulse animate-gradient">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Zero Distrações</h3>
            <p className="text-muted-foreground">
              Foco total no treino. Uma comunidade que entende e respeita a tua dedicação ao ferro.
            </p>
          </div>

          <div className="glass rounded-lg p-8 text-center hover-3d glow">
            <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 glow-pulse animate-gradient">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Só Resultados</h3>
            <p className="text-muted-foreground">
              Equipamento profissional e atmosfera que inspira a dar sempre mais. Progressão garantida.
            </p>
          </div>
        </div>

        {/* 24/7 Feature Highlight */}
        <div className="relative rounded-xl overflow-hidden shadow-[var(--shadow-elevated)]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image247})` }}
          >
            <div className="absolute inset-0 bg-background/80"></div>
          </div>
          
          <div className="relative z-10 py-16 px-8 text-center">
            <h3 className="text-5xl md:text-6xl font-black mb-4 uppercase">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                24/7
              </span>
            </h3>
            <p className="text-2xl font-bold mb-2">Sempre Aberto</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Treina de madrugada, à hora de almoço, ou tarde da noite. O ginásio está sempre disponível para ti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
