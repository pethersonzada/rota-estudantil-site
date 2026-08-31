import React from 'react';

export default function Pricing() {
  return (
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