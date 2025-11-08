import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o acesso ao ginásio?",
      answer:
        "O acesso é feito através de um código pessoal que inseris na porta. Assim podes treinar quando quiseres, 24 horas por dia, 7 dias por semana.",
    },
    {
      question: "Que instalações estão disponíveis?",
      answer:
        "Temos equipamento completo de musculação, balneários e chuveiros. É necessário trazer a tua própria toalha.",
    },
    {
      question: "Como faço a inscrição?",
      answer:
        "A inscrição é simples! Contacta-nos através do Instagram (@ironstudio_bbclub) ou WhatsApp e tratamos de tudo.",
    },
    {
      question: "Posso experimentar antes de me inscrever?",
      answer:
        "Sim! Oferecemos um dia experimental por 15€. Assim podes conhecer as instalações e decidir se é o ginásio certo para ti.",
    },
    {
      question: "Como funciona o pagamento?",
      answer:
        "O pagamento mensal de 50€ é feito por MBWay, de forma simples e segura.",
    },
    {
      question: "Há estacionamento?",
      answer:
        "Sim! Temos sempre estacionamento disponível e a localização é muito boa, facilitando o acesso ao ginásio.",
    },
    {
      question: "Qual é a política do ginásio?",
      answer:
        "Promovemos um ambiente focado no treino, sem distrações. Pedimos respeito pelo equipamento e pelos outros membros, e que tragas a tua toalha para usar nas instalações.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perguntas Frequentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo o que precisas saber
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-[var(--shadow-elevated)]"
              >
                <AccordionTrigger className="text-left font-bold hover:text-primary transition-[var(--transition-smooth)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Tens mais dúvidas? Estamos aqui para ajudar!
          </p>
          <a
            href="https://www.instagram.com/ironstudio_bbclub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-[var(--transition-smooth)] font-bold"
          >
            Contacta-nos →
          </a>
        </div>
      </div>
    </section>
  );
};
