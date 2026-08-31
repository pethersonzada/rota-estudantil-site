'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function GestorLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Tentativa de login com o e-mail: ${email}`);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center items-center gap-2.5 mb-2">
          <svg width="32" height="32" viewBox="0 0 26 26" fill="none">
            <circle cx="4" cy="21" r="3" fill="#0E1524" />
            <path d="M6 19 L18 7" stroke="#0E1524" strokeWidth="2" strokeDasharray="1 4" strokeLinecap="round" />
            <circle cx="21" cy="5" r="3" fill="#FFB020" />
          </svg>
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-950">
          Área do Gestor e Frotas
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Acesse para gerenciar rotas, turmas e acompanhar as vans em tempo real
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-200">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                E-mail corporativo ou de acesso
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-[#0E1524] focus:outline-none focus:ring-[#0E1524] sm:text-sm text-slate-900"
                  placeholder="seu.email@transportadora.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Senha
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  required
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-[#0E1524] focus:outline-none focus:ring-[#0E1524] sm:text-sm text-slate-900"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-[#0E1524] hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0E1524] hover:bg-[#1B2740] transition"
              >
                Entrar no Painel
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-slate-500">Ou</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/"
                className="w-full flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition"
              >
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}