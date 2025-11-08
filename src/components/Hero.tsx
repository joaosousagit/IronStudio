import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/gym-interior.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Image - Desaturated */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'grayscale(90%) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-16 text-foreground text-center leading-tight">
            Aberto com horário alargado.
          </h1>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="bg-[#D1D5DB] hover:bg-[#B8BCC3] text-black font-black uppercase text-sm tracking-wider px-8 py-7 rounded-lg min-w-[280px] shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              JUNTAR À COMUNIDADE
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/80 bg-black/40 hover:bg-white/10 text-white font-bold uppercase text-sm tracking-wider px-8 py-7 rounded-lg min-w-[200px]"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saber Mais
            </Button>
          </div>

          {/* Info Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-10 text-center border border-white/10">
              <p className="text-sm text-gray-400 mb-3 uppercase tracking-widest">Em Leiria</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Horário Mais Alargado
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
