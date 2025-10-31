import { Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black uppercase mb-1">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Iron Beasts
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Ginásio Privado 24/7 - Onde as feras treinam
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/ironbeastsgym" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]"
              aria-label="Instagram do Iron Beasts Gym"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Iron Beasts Gym. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
