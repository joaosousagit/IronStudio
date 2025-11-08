import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { InstagramIcon, WhatsAppIcon } from "./SocialIcons";

export const Contact = () => {
  const titleReveal = useScrollReveal();
  const card1Reveal = useScrollReveal({ threshold: 0.2 });
  const card2Reveal = useScrollReveal({ threshold: 0.2 });
  const infoReveal = useScrollReveal({ threshold: 0.2 });
  
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/ironstudio_bbclub', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351910000000', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={titleReveal.ref}
            className={`text-center mb-16 scroll-reveal ${titleReveal.isVisible ? 'revealed' : ''}`}
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">
              Vem treinar num ginásio verdadeiramente hardcore
            </h1>
            <p className="text-xl text-[hsl(var(--muted-foreground-light))]">
              Contacta-nos para mais informações
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Instagram Card */}
            <div 
              ref={card1Reveal.ref}
              className={`bg-white border-2 border-[hsl(var(--border-light))] p-10 hover:border-primary transition-all duration-300 scroll-slide-left ${card1Reveal.isVisible ? 'revealed' : ''}`}
            >
              <div className="w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <InstagramIcon className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground-light))] uppercase text-center">Instagram</h3>
              <p className="text-[hsl(var(--muted-foreground-light))] mb-6 text-center">
                Segue-nos para veres as instalações e ficares a par das novidades.
              </p>
              <Button 
                variant="default"
                size="lg"
                className="w-full uppercase font-bold tracking-wide" 
                onClick={handleInstagramClick}
              >
                Ver Instagram
              </Button>
            </div>

            {/* WhatsApp Card */}
            <div 
              ref={card2Reveal.ref}
              className={`bg-white border-2 border-[hsl(var(--border-light))] p-10 hover:border-primary transition-all duration-300 scroll-slide-right ${card2Reveal.isVisible ? 'revealed' : ''}`}
            >
              <div className="w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <WhatsAppIcon className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground-light))] uppercase text-center">WhatsApp</h3>
              <p className="text-[hsl(var(--muted-foreground-light))] mb-6 text-center">
                Contacta-nos diretamente para esclarecer dúvidas ou marcar visita.
              </p>
              <Button 
                variant="default"
                size="lg"
                className="w-full uppercase font-bold tracking-wide" 
                onClick={handleWhatsAppClick}
              >
                Enviar Mensagem
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div 
            ref={infoReveal.ref}
            className={`bg-white border border-[hsl(var(--border-light))] rounded-lg p-8 shadow-[var(--shadow-elevated)] scroll-scale ${infoReveal.isVisible ? 'revealed' : ''}`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-1 text-[hsl(var(--foreground-light))]">Email</h4>
                  <p className="text-[hsl(var(--muted-foreground-light))]">geral@ironstudio.pt</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-1 text-[hsl(var(--foreground-light))]">Localização</h4>
                  <p className="text-[hsl(var(--muted-foreground-light))]">Leiria, Portugal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
