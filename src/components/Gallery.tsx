import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import gymInterior from "@/assets/gym-interior.jpg";
import gymEquipment from "@/assets/gym-equipment.jpg";
import gymWide from "@/assets/gym-wide.jpg";
import equipment from "@/assets/equipment.jpg";
import gymWall from "@/assets/gym-wall.jpg";
import service247 from "@/assets/24-7.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    { src: gymInterior, alt: "Interior do Iron Studio", category: "Espaço" },
    { src: gymEquipment, alt: "Equipamento do ginásio", category: "Equipamento" },
    { src: gymWide, alt: "Vista geral do ginásio", category: "Espaço" },
    { src: equipment, alt: "Equipamento de treino", category: "Equipamento" },
    { src: gymWall, alt: "Parede do ginásio", category: "Ambiente" },
    { src: service247, alt: "Serviço 24/7", category: "Ambiente" },
  ];

  return (
    <>
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">
              Uma imagem vale mais que mil palavras
            </h1>
            <p className="text-xl text-muted-foreground">
              Neste caso temos {images.length} delas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-card border-2 border-border hover:border-primary transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-background/90 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-bold uppercase text-center">{image.category}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-6 h-6 text-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full glass-strong flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-[var(--transition-smooth)] z-10"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-6xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-[var(--shadow-elevated)]"
            />
            <div className="text-center mt-6">
              <span className="glass-strong px-6 py-3 rounded-full text-lg font-semibold text-primary">
                {selectedImage.category}
              </span>
              <p className="text-muted-foreground mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
