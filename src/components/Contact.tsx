import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "./SocialIcons";

export const Contact = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/ironstudio_bbclub', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351910000000', '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
              Junta-te a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nós</span>
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground-light))]">
              Pronto para fazer parte da comunidade Iron Studio?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Instagram Card */}
            <div className="bg-white border border-[hsl(var(--border-light))] rounded-lg p-8 hover:border-primary transition-[var(--transition-smooth)] shadow-[var(--shadow-elevated)]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <InstagramIcon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[hsl(var(--foreground-light))]">Segue-nos no Instagram</h3>
              <p className="text-[hsl(var(--muted-foreground-light))] mb-6">
                Vê as nossas instalações, conhece a comunidade e fica a par das novidades do Iron Studio.
              </p>
              <Button 
                variant="hero" 
                className="w-full" 
                onClick={handleInstagramClick}
              >
                <InstagramIcon className="mr-2 h-5 w-5" />
                Ver Instagram
              </Button>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white border border-[hsl(var(--border-light))] rounded-lg p-8 hover:border-primary transition-[var(--transition-smooth)] shadow-[var(--shadow-elevated)]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <WhatsAppIcon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[hsl(var(--foreground-light))]">Fala Connosco</h3>
              <p className="text-[hsl(var(--muted-foreground-light))] mb-6">
                Tens dúvidas? Quer conhecer o espaço? Entra em contacto direto com o dono do ginásio.
              </p>
              <Button 
                variant="hero" 
                className="w-full" 
                onClick={handleWhatsAppClick}
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white border border-[hsl(var(--border-light))] rounded-lg p-8 shadow-[var(--shadow-elevated)]">
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
