import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-[hsl(var(--background-light))] text-[hsl(var(--foreground-light))]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-8">Política de Privacidade</h1>
          <p className="text-sm text-[hsl(var(--muted-foreground-light))] mb-8">Última atualização: Março 2026</p>

          <div className="space-y-8 text-[hsl(var(--foreground-light))] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Responsável pelo Tratamento</h2>
              <p>
                O responsável pelo tratamento dos dados pessoais recolhidos através deste website é o 
                <strong> Iron Studio - Centro de Treinos</strong>, com sede em Leiria, Portugal.
              </p>
              <p className="mt-2">
                Email de contacto: <a href="mailto:ironstudio.bbclub@gmail.com" className="text-primary hover:underline">ironstudio.bbclub@gmail.com</a><br />
                Telefone: <a href="tel:+351910100793" className="text-primary hover:underline">+351 910 100 793</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Dados Pessoais Recolhidos</h2>
              <p>Através deste website, podemos recolher os seguintes dados pessoais:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Nome e apelido</li>
                <li>Endereço de email</li>
                <li>Número de telefone</li>
                <li>Dados de navegação (cookies e tecnologias similares)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Finalidades do Tratamento</h2>
              <p>Os dados pessoais são tratados para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Resposta a pedidos de informação e contacto</li>
                <li>Gestão de inscrições e subscrições no ginásio</li>
                <li>Envio de comunicações relacionadas com os nossos serviços</li>
                <li>Melhoria da experiência de navegação no website</li>
                <li>Análise estatística de utilização do website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Base Legal do Tratamento</h2>
              <p>
                O tratamento dos dados pessoais é efetuado com base no consentimento do titular dos dados, 
                na execução de contrato ou diligências pré-contratuais, e no interesse legítimo do responsável 
                pelo tratamento, nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD) - 
                Regulamento (UE) 2016/679.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Conservação dos Dados</h2>
              <p>
                Os dados pessoais são conservados apenas durante o período necessário para as finalidades 
                que motivaram a sua recolha ou durante o período exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Partilha de Dados</h2>
              <p>
                Os dados pessoais não são partilhados com terceiros, exceto quando necessário para o 
                cumprimento de obrigações legais ou para a prestação dos serviços contratados, sempre 
                com as devidas garantias de segurança.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Direitos dos Titulares</h2>
              <p>Nos termos do RGPD, tens o direito de:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Acesso</strong> — solicitar informação sobre os dados pessoais que tratamos</li>
                <li><strong>Retificação</strong> — corrigir dados incorretos ou incompletos</li>
                <li><strong>Apagamento</strong> — solicitar a eliminação dos teus dados pessoais</li>
                <li><strong>Limitação</strong> — restringir o tratamento dos dados</li>
                <li><strong>Portabilidade</strong> — receber os dados num formato estruturado</li>
                <li><strong>Oposição</strong> — opor-te ao tratamento dos dados</li>
              </ul>
              <p className="mt-2">
                Para exercer qualquer destes direitos, contacta-nos através do email{" "}
                <a href="mailto:ironstudio.bbclub@gmail.com" className="text-primary hover:underline">
                  ironstudio.bbclub@gmail.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Cookies</h2>
              <p>
                Este website utiliza cookies para melhorar a experiência de navegação. Os cookies são 
                pequenos ficheiros de texto armazenados no teu dispositivo. Podes gerir as tuas preferências 
                de cookies a qualquer momento através do banner de cookies presente no website.
              </p>
              <p className="mt-2">Tipos de cookies utilizados:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Cookies essenciais</strong> — necessários para o funcionamento do website</li>
                <li><strong>Cookies analíticos</strong> — ajudam a compreender como o website é utilizado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">9. Segurança</h2>
              <p>
                Implementamos medidas técnicas e organizativas adequadas para proteger os dados pessoais 
                contra acessos não autorizados, alterações, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">10. Reclamações</h2>
              <p>
                Caso consideres que o tratamento dos teus dados pessoais viola o RGPD, tens o direito de 
                apresentar uma reclamação junto da{" "}
                <a 
                  href="https://www.cnpd.pt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Comissão Nacional de Proteção de Dados (CNPD)
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">11. Alterações à Política</h2>
              <p>
                Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. 
                Quaisquer alterações serão publicadas nesta página com a data da última atualização.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
