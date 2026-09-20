import React, { useState } from 'react';
import { Plane } from 'lucide-react';

export default function TacticalImage({
  src,
  alt = 'Tactical Airframe',
  className = 'w-full h-full object-cover object-center',
  name = '',
  country = '',
  role = '',
  generation = '',
}) {
  const [hasError, setHasError] = useState(false);

  // If no source is provided or image failed to load, render tactical cyber HUD blueprint
  if (!src || hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden border border-slate-800/80 group">
        {/* Radar grid & concentric tactical rings */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-48 h-48 rounded-full border border-cyan-500 animate-pulse" />
          <div className="absolute w-32 h-32 rounded-full border border-cyan-500/60" />
          <div className="absolute w-16 h-16 rounded-full border border-cyan-500/30" />
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          <div className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12)_0,transparent_70%)]" />
        </div>

        {/* Tactical Airframe Icon */}
        <div className="relative z-10 p-3 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-2 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Plane className="w-8 h-8 text-cyan-400 opacity-90 transition-transform group-hover:scale-110 duration-300" />
        </div>
        
        {/* Airframe Metadata Overlay */}
        <div className="text-center relative z-10 space-y-1 max-w-[90%]">
          <div className="text-xs font-display font-black text-white line-clamp-1 tracking-wide">
            {name || alt}
          </div>
          <div className="text-[10px] font-mono text-cyan-400/90 font-bold uppercase tracking-wider line-clamp-1">
            {country} {role && `• ${role}`}
          </div>
          {generation && (
            <div className="inline-block text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-semibold shadow-sm">
              {generation}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

