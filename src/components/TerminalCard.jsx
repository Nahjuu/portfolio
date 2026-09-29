import React from 'react';

const TerminalCard = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 md:mt-0 font-mono text-sm shadow-2xl rounded-lg overflow-hidden border border-slate-700/50 bg-[#0f172a]/80 backdrop-blur-sm">
      {/* Barra superior de la terminal con botones */}
      <div className="bg-[#1e293b] px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="text-xs text-slate-400 ml-2">nahuel@dev-workspace:~</span>
      </div>

      {/* Contenido de la terminal */}
      <div className="p-5 text-slate-300 space-y-2">
        <div>
          <span className="text-cyan-400">const</span>{' '}
          <span className="text-yellow-300">developer</span> = {'{'}
        </div>
        <div className="pl-4">
          <span className="text-slate-400">name:</span>{' '}
          <span className="text-emerald-400">'Nahuel'</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">location:</span>{' '}
          <span className="text-emerald-400">'Uruguay'</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-400">skills:</span> [
          <span className="text-emerald-400">'React'</span>,{' '}
          <span className="text-emerald-400">'Node.js'</span>,{' '}
          <span className="text-emerald-400">'Supabase'</span>,{' '}
          <span className="text-emerald-400">'Python'</span>],
        </div>
        <div className="pl-4">
          <span className="text-slate-400">languages:</span> [
          <span className="text-emerald-400">'Spanish (Native)'</span>,{' '}
          <span className="text-emerald-400">'English (C1/C2)'</span>],
        </div>
        <div className="pl-4">
          <span className="text-slate-400">status:</span>{' '}
          <span className="text-emerald-400">'Open to opportunities'</span>
        </div>
        <div>{'};'}</div>
        
        <div className="pt-2 text-slate-500 flex items-center gap-1">
          <span className="text-cyan-400">➜</span>
          <span>ready to build...</span>
          <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block"></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalCard;