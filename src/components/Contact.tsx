import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/ironbeastsgym', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351910000000', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
              Junta-te a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nós</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Pronto para fazer parte da comunidade Iron Beasts?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Instagram Card */}
            <div className="bg-background border border-border rounded-lg p-8 hover:border-primary transition-[var(--transition-smooth)] shadow-[var(--shadow-elevated)]">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 shadow-[var(--shadow-glow)]">
                <Instagram className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Segue-nos no Instagram</h3>
              <p className="text-muted-foreground mb-6">
                Vê as nossas instalações, conhece a comunidade e fica a par das novidades do Iron Beasts.
              </p>
              <Button 
                variant="hero" 
                className="w-full" 
                onClick={handleInstagramClick}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Ver Instagram
              </Button>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-background border border-border rounded-lg p-8 hover:border-primary transition-[var(--transition-smooth)] shadow-[var(--shadow-elevated)]">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 shadow-[var(--shadow-glow)]">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fala Connosco</h3>
              <p className="text-muted-foreground mb-6">
                Tens dúvidas? Quer conhecer o espaço? Entra em contacto direto com o dono do ginásio.
              </p>
              <Button 
                variant="hero" 
                className="w-full" 
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-background border border-border rounded-lg p-8 shadow-[var(--shadow-elevated)]">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground">contato@ironbeastsgym.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Localização</h4>
                  <p className="text-muted-foreground">Portugal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
