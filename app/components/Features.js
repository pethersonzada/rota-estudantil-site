import React from 'react';

export default function Features() {
  return (
    <>
      {/* Funcionalidades */}
      <section id="funcionalidades" className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-slate-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            O que muda no dia a dia da rota
          </h2>
          <p className="text-slate-600 max-w-lg mb-20">
            Três coisas que motorista, gestor e responsável precisam saber a todo momento — e que a maioria das planilhas não entrega.
          </p>

          <FeatureRow
            title="Rastreamento ao vivo, sem ligar pra ninguém"
            text="O responsável abre o app e vê a van no mapa, com o horário estimado de chegada. Sem grupo de WhatsApp perguntando 'já saiu?'."
            reverse={false}
          />
          <FeatureRow
            title="Embarque e desembarque confirmados por criança"
            text="O motorista marca cada criança na lista ao subir e descer da van. Se alguém não embarcar, o responsável é avisado na hora — não no fim do dia."
            reverse={true}
          />
          <FeatureRow
            title="Aviso automático pra quem precisa saber"
            text="Chegada, atraso, mudança de rota: a mensagem certa vai pro responsável certo, sem o gestor precisar digitar nada."
            reverse={false}
          />
        </div>
      </section>

      {/* Benefícios por público */}
      <section id="beneficios" className="bg-slate-50 px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-slate-950 mb-16" style={{ fontFamily: 'var(--font-display)' }}>
            Pensado pra quem vive a rota
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            <AudienceCard
              audience="Motorista"
              bg="bg-white"
              items={[
                'Lista de embarque na tela, sem papel',
                'Rota otimizada antes de sair da garagem',
                'Um toque pra avisar atraso ou imprevisto',
              ]}
            />
            <AudienceCard
              audience="Gestor da van/frota"
              bg="bg-white"
              items={[
                'Painel com todas as rotas em um só lugar',
                'Histórico de pontualidade por motorista',
                'Alertas automáticos de rota fora do previsto',
              ]}
            />
            <AudienceCard
              audience="Responsável"
              bg="bg-white"
              items={[
                'Localização da van em tempo real',
                'Confirmação de embarque e chegada',
                'Contato direto com o motorista pelo app',
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureRow({ title, text, reverse }) {
  return (
    <div className={`grid md:grid-cols-2 gap-10 items-center py-14 border-t border-slate-200 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <div className="aspect-[4/3] bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center">
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
          <path d="M10 80 Q 40 20, 70 50 T 130 20" stroke="#0E1524" strokeWidth="1.5" strokeDasharray="4 5" fill="none" />
          <circle cx="10" cy="80" r="4" fill="#1B8A5A" />
          <circle cx="70" cy="50" r="4" fill="#FFB020" />
          <circle cx="130" cy="20" r="4" fill="#0E1524" />
        </svg>
      </div>
      <div>
        <h3 className="text-2xl text-slate-950 mb-3 font-semibold">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function AudienceCard({ audience, items, bg }) {
  return (
    <div className={`${bg} p-8`}>
      <h3 className="text-lg font-semibold text-slate-950 mb-5">{audience}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020] mt-1.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}