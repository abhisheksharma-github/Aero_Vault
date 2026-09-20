import React, { useState } from 'react';
import { Plane, Shield, Zap } from 'lucide-react';

const FALLBACK_AIRCRAFT_IMG = 'https://images.unsplash.com/photo-1517976487507-5b3b118b625b?auto=format&fit=crop&w=1200&q=80';

export default function TacticalImage({
  src,
  alt = 'Tactical Airframe',
  className = 'w-full h-full object-cover object-center',
  name = '',
  country = '',
  role = '',
  generation = '',
}) {
  const [errorCount, setErrorCount] = useState(0);

  const handleError = (e) => {
    if (errorCount === 0) {
      setErrorCount(1);
      e.currentTarget.src = FALLBACK_AIRCRAFT_IMG;
    } else {
      setErrorCount(2);
    }
  };

  if (errorCount >= 2 || (!src && errorCount > 0)) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden border border-slate-800/80">
        {/* Radar concentric rings background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <div className="w-48 h-48 rounded-full border border-cyan-500 animate-pulse" />
          <div className="absolute w-32 h-32 rounded-full border border-cyan-500/60" />
          <div className="absolute w-16 h-16 rounded-full border border-cyan-500/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_70%)]" />
        </div>

        <Plane className="w-10 h-10 text-cyan-400 mb-2 relative z-10 opacity-80" />
        
        <div className="text-center relative z-10 space-y-1">
          <div className="text-xs font-display font-black text-white line-clamp-1">
            {name || alt}
          </div>
          <div className="text-[10px] font-mono text-cyan-400/90 font-bold uppercase tracking-wider">
            {country} {role && `• ${role}`}
          </div>
          {generation && (
            <div className="inline-block text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
              {generation}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src || FALLBACK_AIRCRAFT_IMG}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
    />
  );
}
