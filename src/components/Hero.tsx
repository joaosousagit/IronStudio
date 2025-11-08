import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gym-interior.jpg";
import logo from "@/assets/logo.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Grayscale + Red Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'grayscale(100%) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo - 60% width like Catts Gym */}
        <div className="mb-10">
          <img 
            src={logo} 
            alt="Iron Studio Logo" 
            className="w-[60%] max-w-xl h-auto mx-auto"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>

        {/* Location */}
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider mb-12 text-foreground">
          Leiria, Portugal
        </h2>

        {/* CTA Button */}
        <Button 
          variant="outline" 
          size="lg"
          className="uppercase font-bold tracking-wider px-10 py-6 text-lg border-2 hover:bg-foreground hover:text-background"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contactar
        </Button>
      </div>
    </section>
  );
};
