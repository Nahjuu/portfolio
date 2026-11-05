import React from 'react';

const TerminalCard = () => {
  return (
    <div
      data-print="hide"
      className="w-full max-w-md overflow-hidden rounded-card border border-white/10 bg-ink-950/80 font-mono text-sm shadow-card backdrop-blur-sm"
    >
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-ink-800/80 px-4 py-3">
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-red-500/80" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-mist-500">nahuel@dev-workspace:~</span>
      </div>

      {/* Terminal content */}
      <div className="space-y-2 p-5 text-mist-300">
        <div>
          <span className="text-accent-400">const</span>{' '}
          <span className="text-yellow-300">developer</span> = {'{'}
        </div>
        <div className="pl-4">
          <span className="text-mist-500">name:</span>{' '}
          <span className="text-emerald-400">'Nahuel'</span>,
        </div>
        <div className="pl-4">
          <span className="text-mist-500">location:</span>{' '}
          <span className="text-emerald-400">'Uruguay'</span>,
        </div>
        <div className="pl-4">
          <span className="text-mist-500">skills:</span> [
          <span className="text-emerald-400">'React'</span>,{' '}
          <span className="text-emerald-400">'Node.js'</span>,{' '}
          <span className="text-emerald-400">'Supabase'</span>,{' '}
          <span className="text-emerald-400">'Python'</span>],
        </div>
        <div className="pl-4">
          <span className="text-mist-500">languages:</span> [
          <span className="text-emerald-400">'Spanish (Native)'</span>,{' '}
          <span className="text-emerald-400">'English (C1/C2)'</span>],
        </div>
        <div className="pl-4">
          <span className="text-mist-500">status:</span>{' '}
          <span className="text-emerald-400">'Open to opportunities'</span>
        </div>
        <div>{'};'}</div>

        <div className="flex items-center gap-1 pt-2 text-mist-500">
          <span className="text-accent-400">➜</span>
          <span>ready to build...</span>
          <span
            aria-hidden="true"
            className="inline-block h-4 w-2 animate-caret bg-accent-400 motion-reduce:animate-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalCard;
