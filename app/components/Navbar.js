import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
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
  );
}