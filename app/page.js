import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900" style={{ fontFamily: 'var(--font-body)' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');
        :root {
          --font-display: 'Bebas Neue', Impact, sans-serif;
          --font-body: 'Inter', system-ui, -apple-system, sans-serif;
        }
        @keyframes drawLine {
          from { height: 0%; }
          to { height: 100%; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translateY(6px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .route-line { animation: drawLine 1.4s ease-out forwards; }
        .route-stop { opacity: 0; animation: popIn 0.5s ease-out forwards; }
        .route-stop:nth-child(1) { animation-delay: 0.3s; }
        .route-stop:nth-child(2) { animation-delay: 0.9s; }
        .route-stop:nth-child(3) { animation-delay: 1.5s; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <circle cx="4" cy="21" r="3" fill="#0E1524" />
              <path d="M6 19 L18 7" stroke="#0E1524" strokeWidth="2" strokeDasharray="1 4" strokeLinecap="round" />
              <circle cx="21" cy="5" r="3" fill="#FFB020" />
            </svg>
            <span className="text-lg font-semibold tracking-tight text-slate-950">Rota Estudantil</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <Link href="#funcionalidades" className="hover:text-slate-950 transition">Funcionalidades</Link>
            <Link href="#beneficios" className="hover:text-slate-950 transition">Benefícios</Link>
            <Link href="#precos" className="hover:text-slate-950 transition">Preços</Link>
          </div>
          <Link
            href="#"
            className="bg-[#0E1524] text-white px-5 py-2.5 rounded-md hover:bg-[#1B2740] transition text-sm font-medium"
          >
            Área do gestor
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-white px-6 pt-20 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <p className="text-sm text-slate-500 mb-5">Para transportadoras, motoristas e escolas</p>
            <h1
              className="text-5xl md:text-[3.6rem] leading-[0.95] text-slate-950 mb-6"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.01em' }}
            >
              A rota que os pais confiam e o gestor enxerga inteira
            </h1>
            <p className="text-lg text-slate-600 max-w-md mb-9 leading-relaxed">
              Acompanhe cada van em tempo real, confirme embarques com um toque
              e avise os responsáveis assim que a criança chegar à escola.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-[#0E1524] text-white px-7 py-3.5 rounded-md font-medium hover:bg-[#1B2740] transition">
                Agendar demonstração
              </button>
              <button className="text-slate-900 font-medium border-b border-slate-300 hover:border-slate-900 transition pb-0.5">
                Ver como funciona
              </button>
            </div>
          </div>

          {/* Diagrama de rota */}
          <div className="relative pl-10 py-4">
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-[#0E1524]/15 route-line"
            />
            <div className="space-y-14">
              <RouteStop
                time="7:12"
                label="Embarque confirmado"
                detail="Maria S. — Rua das Palmeiras, 88"
                dotColor="#1B8A5A"
              />
              <RouteStop
                time="7:24"
                label="Em trajeto"
                detail="Localização ao vivo — 3 paradas restantes"
                dotColor="#FFB020"
                pulse={true}
              />
              <RouteStop
                time="7:41"
                label="Chegada na escola"
                detail="Notificação enviada aos responsáveis"
                dotColor="#0E1524"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de números */}
      <section className="bg-[#0E1524] px-6 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
          <Stat number="12 mil" label="crianças transportadas todos os dias" />
          <Stat number="3.200" label="vans e motoristas conectados" />
          <Stat number="98%" label="das chegadas confirmadas no horário" />
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-slate-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            O que muda no dia a dia da rota
          </h2>
          <p className="text-slate-600 max-w-lg mb-20">
            Três coisas que motorista, gestor e responsável precisam saber a
            todo momento — e que a maioria das planilhas não entrega.
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

      {/* Preços */}
      <section id="precos" className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-slate-950 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            Do motorista autônomo à rede de transportadoras
          </h2>
          <p className="text-slate-600 max-w-lg mb-16">
            O plano cresce junto com o número de rotas que você opera.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <PriceCard
              stops={1}
              name="Van Autônoma"
              price="R$ 79"
              period="/mês, 1 van"
              features={['Rastreamento em tempo real', 'Lista de embarque digital', 'Avisos automáticos aos pais']}
            />
            <PriceCard
              stops={2}
              name="Frota Pequena"
              price="R$ 249"
              period="/mês, até 8 vans"
              features={['Tudo do plano Van Autônoma', 'Painel de gestão centralizado', 'Histórico de pontualidade', 'Suporte prioritário']}
              highlight={true}
            />
            <PriceCard
              stops={3}
              name="Rede Completa"
              price="Sob consulta"
              period="frotas grandes e escolas"
              features={['Tudo do plano Frota Pequena', 'Integração com sistema da escola', 'Gestor de conta dedicado']}
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#0E1524] px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Pronto pra não perder nenhuma criança de vista?
          </h2>
          <p className="text-slate-300 mb-9">
            Quinze minutos de conversa mostram se o Rota Estudantil resolve o
            seu dia a dia. Sem compromisso.
          </p>
          <button className="bg-[#FFB020] text-[#0E1524] px-8 py-3.5 rounded-md font-semibold hover:bg-[#FFC750] transition">
            Agendar demonstração gratuita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-10 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Rota Estudantil. Todos os direitos reservados.</p>
        <p className="mt-1">Tecnologia para um trajeto seguro.</p>
      </footer>
    </main>
  );
}

function RouteStop({ time, label, detail, dotColor, pulse = false }) {
  return (
    <div className="relative route-stop">
      <div
        className="absolute -left-[34px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white"
        style={{ backgroundColor: dotColor, boxShadow: pulse ? `0 0 0 4px ${dotColor}22` : 'none' }}
      />
      <p className="text-xs text-slate-400 mb-1">{time}</p>
      <p className="font-semibold text-slate-950">{label}</p>
      <p className="text-sm text-slate-500">{detail}</p>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-4xl text-[#FFB020] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
        {number}
      </p>
      <p className="text-slate-300 text-sm">{label}</p>
    </div>
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

function PriceCard({ stops, name, price, period, features, highlight = false }) {
  return (
    <div
      className={`rounded-lg p-8 border ${
        highlight ? 'border-[#0E1524] bg-[#0E1524] text-white' : 'border-slate-200 bg-white text-slate-950'
      }`}
    >
      <div className="flex gap-1.5 mb-5">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i <= stops ? (highlight ? 'bg-[#FFB020]' : 'bg-[#0E1524]') : highlight ? 'bg-white/20' : 'bg-slate-200'
            }`}
          />
        ))}
      </div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className={`text-2xl mb-1 ${highlight ? 'text-[#FFB020]' : 'text-slate-950'}`} style={{ fontFamily: 'var(--font-display)' }}>
        {price}
      </p>
      <p className={`text-sm mb-7 ${highlight ? 'text-slate-300' : 'text-slate-500'}`}>{period}</p>
      <ul className="space-y-2.5 mb-8">
        {features.map((f) => (
          <li key={f} className={`text-sm ${highlight ? 'text-slate-200' : 'text-slate-600'}`}>
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-md font-medium transition ${
          highlight ? 'bg-[#FFB020] text-[#0E1524] hover:bg-[#FFC750]' : 'bg-slate-100 text-slate-950 hover:bg-slate-200'
        }`}
      >
        Escolher plano
      </button>
    </div>
  );
}