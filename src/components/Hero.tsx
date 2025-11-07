import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gym-interior.jpg";
import logo from "@/assets/logo.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background animate-gradient"></div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 inline-block">
          <img 
            src={logo} 
            alt="Iron Studio Logo" 
            className="w-48 md:w-64 h-auto mx-auto drop-shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tight animate-slide-up">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent neon-text animate-gradient">
            Iron Studio
          </span>
          <br />
          <span className="text-foreground drop-shadow-2xl">BB Club</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Treina à tua maneira. Evolui ao teu ritmo.
          <br />
          Aberto com horário alargado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Juntar à Comunidade
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Saber Mais
          </Button>
        </div>

        {/* 24/7 Badge */}
        <div className="mt-12 inline-block animate-scale-in float">
          <div className="glass-strong rounded-lg px-8 py-4 glow-pulse">
            <p className="text-sm text-muted-foreground mb-1">Sempre Aberto</p>
            <p className="text-4xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              24/7
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
