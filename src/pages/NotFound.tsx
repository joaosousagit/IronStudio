import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/machines/iron-studio-logo.jpg";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-md">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logo} 
            alt="Iron Studio Logo" 
            className="w-24 h-24 mx-auto rounded-full border-2 border-primary/50 shadow-lg"
          />
        </div>

        {/* 404 Number */}
        <h1 className="font-display text-9xl font-bold text-primary mb-4 tracking-tight">
          404
        </h1>

        {/* Message */}
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
          Página não encontrada
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          A página que procuras não existe ou foi movida. 
          Volta à página inicial para continuar a explorar o Iron Studio.
        </p>

        {/* Back to Home Button */}
        <Button asChild size="lg" className="gap-2">
          <Link to="/">
            <Home className="w-5 h-5" />
            Voltar ao Início
          </Link>
        </Button>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
};

export default NotFound;
