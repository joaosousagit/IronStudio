import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  age: number;
  memberSince: string;
  rating: number;
  review: string;
  achievement: string;
}

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Miguel Santos",
      age: 28,
      memberSince: "2023",
      rating: 5,
      review: "O melhor ginásio onde já treinei. Equipamento top, ambiente focado e zero distrações. Consegui ganhar 8kg de massa muscular em 6 meses.",
      achievement: "+8kg massa muscular"
    },
    {
      name: "Pedro Almeida",
      age: 35,
      memberSince: "2023",
      rating: 5,
      review: "Finalmente um ginásio privado sem confusões. Treino sempre sozinho às 6h da manhã. O acesso 24/7 mudou a minha rotina completamente.",
      achievement: "Treino consistente 5x/semana"
    },
    {
      name: "João Ferreira",
      age: 42,
      memberSince: "2024",
      rating: 5,
      review: "Ambiente hardcore a sério. Pessoal dedicado, equipamento profissional e zero palhaçada. Recomendo a qualquer um que leve o treino a sério.",
      achievement: "Melhor forma física aos 42"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              O Que Dizem os Nossos Membros
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultados reais de atletas reais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-strong rounded-lg p-8 hover-3d glow relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground mb-6 relative z-10 leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* Achievement Badge */}
              <div className="glass px-4 py-2 rounded-full mb-4 inline-block">
                <span className="text-sm font-semibold text-primary">
                  {testimonial.achievement}
                </span>
              </div>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.age} anos • Membro desde {testimonial.memberSince}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
