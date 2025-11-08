import gymInterior from "@/assets/gym-interior.jpg";
import gymEquipment from "@/assets/gym-equipment.jpg";
import gymWide from "@/assets/gym-wide.jpg";
import equipment from "@/assets/equipment.jpg";
import gymWall from "@/assets/gym-wall.jpg";
import service247 from "@/assets/24-7.jpg";

export const Gallery = () => {
  const images = [
    { src: gymInterior, alt: "Interior do Iron Studio" },
    { src: gymEquipment, alt: "Equipamento do ginásio" },
    { src: gymWide, alt: "Vista geral do ginásio" },
    { src: equipment, alt: "Equipamento de treino" },
    { src: gymWall, alt: "Parede do ginásio" },
    { src: service247, alt: "Serviço 24/7" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Galeria
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conhece as nossas instalações
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg glass hover-3d glow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-[var(--transition-smooth)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
