import React from 'react';
import Link from 'next/link';

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-950 transition">
            &larr; Voltar para a página inicial
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Termos de Uso e Política de Privacidade
        </h1>
        <p className="text-sm text-slate-500 mb-10">Última atualização: 2026</p>

        <div className="space-y-8 text-slate-600 leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar a solução Rota Estudantil, você concorda expressamente em cumprir e estar vinculado aos termos e condições descritos neste documento. Caso não concorde com qualquer parte destes termos, por favor, abstenha-se de utilizar nossa plataforma e nossos aplicativos móveis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">2. Sobre a Solução</h2>
            <p>
              O Rota Estudantil é um ecossistema tecnológico voltado para a otimização, controle de presença e monitoramento de rotas de transporte escolar, interligando motoristas, gestores de frotas e responsáveis de estudantes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">3. Privacidade e Proteção de Dados</h2>
            <p>
              Respeitamos a sua privacidade e a segurança dos dados operacionais e cadastrais inseridos na plataforma. As informações coletadas — como dados de perfil, status de presença e rotas — são utilizadas estritamente para garantir a execução eficiente e segura do serviço de transporte contratado, em conformidade com as diretrizes de proteção de dados vigentes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">4. Propriedade Intelectual e Direitos Autorais</h2>
            <p>
              Todo o código-fonte, arquitetura de software, layouts, marcas, textos e elementos visuais associados à solução Rota Estudantil são de propriedade exclusiva do autor e desenvolvedor Miguel Petherson Silva. É expressamente proibida a reprodução, engenharia reversa, modificação ou distribuição não autorizada dos ativos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">5. Contato</h2>
            <p>
              Dúvidas, solicitações ou notificações referentes a estes termos de uso podem ser direcionadas através dos canais oficiais informados no ecossistema da aplicação.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}