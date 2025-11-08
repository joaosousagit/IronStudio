import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gym-interior.jpg";
import logo from "@/assets/logo.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Grayscale Effect */}
      <div className="absolute inset-0 grayscale-red">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 inline-block scroll-reveal revealed">
          <img 
            src={logo} 
            alt="Iron Studio Logo" 
            className="w-64 md:w-80 lg:w-96 h-auto mx-auto"
          />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 uppercase tracking-tighter scroll-reveal revealed italic" style={{ animationDelay: '0.2s' }}>
          <span className="text-foreground drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]">
            IRON STUDIO
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4 scroll-reveal revealed" style={{ animationDelay: '0.3s' }}>
          BB Club
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto scroll-reveal revealed" style={{ animationDelay: '0.4s' }}>
          Ginásio Privado em Leiria
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-reveal revealed" style={{ animationDelay: '0.5s' }}>
          <Button 
            variant="default" 
            size="lg"
            className="uppercase font-bold tracking-wide px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Juntar à Comunidade
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary"></div>
        </div>
      </div>
    </section>
  );
};
