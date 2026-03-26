import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-lg p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground">
              Este website utiliza cookies para melhorar a tua experiência de navegação. 
              Ao continuar, aceitas a utilização de cookies essenciais e analíticos.{" "}
              <Link to="/privacidade" className="text-primary hover:underline font-medium">
                Saber mais
              </Link>
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              className="text-xs uppercase font-bold tracking-wide"
            >
              Rejeitar
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="text-xs uppercase font-bold tracking-wide"
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
