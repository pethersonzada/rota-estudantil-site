import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo - fingindo um ícone de rota */}
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">R</div>
            <span className="text-xl font-bold text-slate-950">Rota<span className='text-blue-600'>Estudantil</span></span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="#funcionalidades" className="hover:text-blue-600 transition">Funcionalidades</Link>
            <Link href="#beneficios" className="hover:text-blue-600 transition">Benefícios</Link>
            <Link href="#precos" className="hover:text-blue-600 transition">Preços</Link>
            <Link href="#" className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition text-xs shadow-sm">
              Área do Gestor
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section - Principal atrativo */}
      <section className="relative bg-slate-50 py-24 sm:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-8">
            Gestão Completa de Transporte Escolar
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-950 leading-[1.1]">
            Simplifique a rota, garanta a <span className="text-blue-600">segurança</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            O Rota Estudantil é a plataforma definitiva para gerenciar vans, monitorar passageiros e otimizar rotas escolares em tempo real.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button className="rounded-full bg-blue-600 px-8 py-3.5 text-lg font-semibold text-white shadow hover:bg-blue-700 transition">
              Agendar Demonstração Gratuita
            </button>
            <button className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition p-2">
              Saiba Mais →
            </button>
          </div>
        </div>
      </section>

      {/* Adicione as próximas seções aqui (Funcionalidades, Preços, etc) */}

       <footer className="border-t border-slate-100 mt-20 py-10 px-6 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Rota Estudantil. Todos os direitos reservados.</p>
        <p className="mt-1">Tecnologia para um trajeto seguro.</p>
      </footer>

    </main>
  );
}