import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "about", label: "Sobre" },
    { id: "gallery", label: "Galeria" },
    { id: "machines", label: "Máquinas" },
    { id: "features", label: "Vantagens" },
    { id: "pricing", label: "Preços" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-sm border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Iron Studio" className="h-10 w-auto" />
            <span className="font-black text-lg uppercase hidden sm:block text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}>
              IRON STUDIO
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-primary transition-colors font-bold uppercase text-sm tracking-wider"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-3 px-4 text-white hover:bg-card transition-colors font-bold uppercase text-sm"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
