'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CHINELOS, STORE_INFO, getWhatsAppLink, ChineloItem } from '@/data/products';
import { MessageCircle, Search, X, Eye } from 'lucide-react';

export default function Home() {
  const [busca, setBusca] = useState('');
  const [fotoAmpliada, setFotoAmpliada] = useState<ChineloItem | null>(null);

  const itensFiltrados = CHINELOS.filter((item) => {
    if (!busca.trim()) return true;
    const termo = busca.toLowerCase();
    return (
      item.name.toLowerCase().includes(termo) ||
      item.brand.toLowerCase().includes(termo) ||
      item.id.includes(termo)
    );
  });



  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col">
      {/* Topo / Cabeçalho da Loja */}
      <header className="sticky top-0 z-30 bg-[#161b22]/95 backdrop-blur-md border-b border-white/10 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Nome da Loja */}
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <span>{STORE_INFO.name}</span>
              <span className="text-amber-400 text-lg">🩴</span>
            </h1>
            <p className="text-xs text-slate-400">Catálogo de Chinelos</p>
          </div>

          {/* Links da Loja: Instagram e WhatsApp */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Instagram */}
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm"
              title="Instagram da loja"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="hidden sm:inline">Instagram</span>
            </a>

            {/* WhatsApp */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-sm"
              title="Falar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-emerald-500" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal: Campo de Busca Rápido e Vitrine de Peças */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 space-y-6">
        {/* Barra de pesquisa simples */}
        <div className="relative max-w-md mx-auto sm:mx-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar modelo (ex: Lacoste, Calvin Klein, #01)..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#161b22] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
          />
          {busca && (
            <button
              onClick={() => setBusca('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Grade com as Peças e Valores */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {itensFiltrados.map((item) => (
            <div
              key={item.id}
              className="bg-[#161b22] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-amber-400/40 transition-colors group"
            >
              {/* Foto Real da Peça com Código de Identificação */}
              <div
                className="relative w-full aspect-[4/5] bg-black cursor-pointer overflow-hidden"
                onClick={() => setFotoAmpliada(item)}
                title="Clique para ampliar a foto"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge com o Código do Modelo (ex: #01) */}
                <div className="absolute top-2.5 left-2.5 z-10 px-2 py-1 rounded-md bg-black/80 backdrop-blur-sm border border-white/15 text-[11px] font-black text-amber-400">
                  CÓD #{item.id}
                </div>

                {/* Ícone sutil de Zoom */}
                <div className="absolute bottom-2.5 right-2.5 z-10 p-1.5 rounded-md bg-black/70 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Informações da Peça e Botão */}
              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400">
                    <span>{item.brand}</span>
                    <span className="text-slate-500 font-mono">Ref: #{item.id}</span>
                  </div>
                  <h2 className="text-xs sm:text-sm font-semibold text-white line-clamp-2 mt-0.5 leading-snug">
                    {item.name}
                  </h2>
                </div>

                <div className="pt-2 border-t border-white/5 space-y-2">
                  {/* Valor da Peça */}
                  <div className="text-sm sm:text-base font-black text-white">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </div>

                  {/* Botão de WhatsApp */}
                  <a
                    href={getWhatsAppLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                    title={`Pedir chinelo número ${item.id} no WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-slate-950 text-emerald-500" />
                    <span>Pedir no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal de Foto Ampliada */}
      {fotoAmpliada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setFotoAmpliada(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#161b22] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFotoAmpliada(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full aspect-[4/5] bg-black">
              <Image
                src={fotoAmpliada.image}
                alt={fotoAmpliada.name}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-amber-400 font-black text-xs">
                CÓD #{fotoAmpliada.id}
              </div>
            </div>

            <div className="p-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase">
                  {fotoAmpliada.brand} • Cód #{fotoAmpliada.id}
                </span>
                <h3 className="text-sm font-bold text-white line-clamp-1">{fotoAmpliada.name}</h3>
                <p className="text-base font-black text-white mt-0.5">
                  R$ {fotoAmpliada.price.toFixed(2).replace('.', ',')}
                </p>
              </div>

              <a
                href={getWhatsAppLink(fotoAmpliada)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 flex-shrink-0"
                title={`Pedir chinelo número ${fotoAmpliada.id} no WhatsApp`}
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-emerald-500" />
                <span>Pedir no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Rodapé Simples com Contatos */}
      <footer className="bg-[#161b22] border-t border-white/10 py-6 px-4 text-center text-xs text-slate-400 mt-12 space-y-2">
        <p className="font-bold text-white text-sm">{STORE_INFO.name}</p>
        <div className="flex items-center justify-center gap-4">
          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            Instagram: {STORE_INFO.instagram}
          </a>
          <span>•</span>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            WhatsApp: {STORE_INFO.whatsappDisplay}
          </a>
        </div>
        <p className="text-[11px] text-slate-400 pt-2">
          © {new Date().getFullYear()} {STORE_INFO.name}. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
