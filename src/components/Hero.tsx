import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import gymInterior from "@/assets/gym-interior.jpg";
import gymWide from "@/assets/gym-wide.jpg";
import athleteFocus from "@/assets/athlete-focus.jpg";
import equipment from "@/assets/gym-equipment-wide.jpg";
import hardcoreBodybuilding from "@/assets/hardcore-bodybuilding.jpg";

const heroImages = [
  gymInterior,
  gymWide,
  athleteFocus,
  equipment,
  hardcoreBodybuilding
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
            style={{
              backgroundImage: `url(${image})`,
              filter: 'grayscale(90%) contrast(1.1)',
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-black uppercase text-sm tracking-wider px-10 py-8 rounded-lg min-w-[300px] shadow-2xl shadow-primary/50 transition-all hover:scale-105"
              onClick={() => window.open('https://wa.me/351910000000', '_blank')}
            >
              COMEÇAR AGORA
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/80 bg-black/40 hover:bg-white/10 text-white font-bold uppercase text-sm tracking-wider px-8 py-7 rounded-lg min-w-[200px] transition-all hover:scale-105"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Preços
            </Button>
          </div>

          {/* Info Card */}
          <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
