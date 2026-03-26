import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-8">Termos e Condições</h1>
          <p className="text-sm text-[hsl(var(--muted-foreground-light))] mb-8">Última atualização: Março 2026</p>

          <div className="space-y-8 text-[hsl(var(--foreground-light))] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Identificação</h2>
              <p>
                O presente website é propriedade e gerido pelo <strong>Iron Studio - Centro de Treinos</strong>, 
                localizado em Leiria, Portugal.
              </p>
              <p className="mt-2">
                Email: <a href="mailto:ironstudio.bbclub@gmail.com" className="text-primary hover:underline">ironstudio.bbclub@gmail.com</a><br />
                Telefone: <a href="tel:+351910100793" className="text-primary hover:underline">+351 910 100 793</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Objeto</h2>
              <p>
                Os presentes Termos e Condições regulam o acesso e utilização do website do Iron Studio, 
                bem como a relação entre o Iron Studio e os seus utilizadores e membros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Acesso ao Espaço</h2>
              <p>O acesso ao Iron Studio está sujeito às seguintes condições:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Idade mínima de 16 anos (menores devem ter autorização do encarregado de educação)</li>
                <li>Subscrição de um plano ativo ou aquisição de passe diário</li>
                <li>Cumprimento do regulamento interno do espaço</li>
                <li>Utilização adequada e responsável dos equipamentos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Planos e Pagamentos</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Os preços apresentados no website são válidos à data de publicação e podem ser alterados sem aviso prévio</li>
                <li>O pagamento é efetuado antecipadamente, por MBWay ou outro método acordado</li>
                <li>Os planos mensais renovam-se automaticamente, salvo cancelamento prévio</li>
                <li>O plano anual requer pagamento integral no ato da subscrição</li>
                <li>Não existem reembolsos parciais por períodos não utilizados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Responsabilidade</h2>
              <p>
                O Iron Studio não se responsabiliza por:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Lesões resultantes do uso inadequado dos equipamentos</li>
                <li>Objetos pessoais perdidos ou danificados nas instalações</li>
                <li>Interrupções temporárias do serviço por manutenção ou força maior</li>
              </ul>
              <p className="mt-2">
                Recomendamos que todos os membros realizem um check-up médico antes de iniciar 
                qualquer programa de treino.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Regras de Utilização</h2>
              <p>Todos os membros devem:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Utilizar toalha durante o treino</li>
                <li>Limpar os equipamentos após utilização</li>
                <li>Arrumar os pesos e acessórios nos locais designados</li>
                <li>Respeitar os restantes utilizadores do espaço</li>
                <li>Não danificar intencionalmente os equipamentos</li>
                <li>Seguir as indicações de segurança do espaço</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Cancelamento</h2>
              <p>
                O cancelamento de planos deve ser comunicado com pelo menos 5 dias de antecedência 
                do próximo período de faturação, através dos nossos canais de contacto (WhatsApp, 
                Instagram ou email).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste website (textos, imagens, logótipos, design) é propriedade do 
                Iron Studio e está protegido por direitos de autor. É proibida a reprodução, 
                distribuição ou utilização sem autorização prévia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">9. Proteção de Dados</h2>
              <p>
                O tratamento de dados pessoais é efetuado em conformidade com o RGPD. Para mais 
                informações, consulta a nossa{" "}
                <a href="/privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">10. Lei Aplicável</h2>
              <p>
                Os presentes Termos e Condições são regidos pela legislação portuguesa. Qualquer 
                litígio será submetido à jurisdição dos tribunais competentes da comarca de Leiria.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">11. Alterações</h2>
              <p>
                O Iron Studio reserva-se o direito de alterar os presentes Termos e Condições a 
                qualquer momento, sendo as alterações publicadas nesta página.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
