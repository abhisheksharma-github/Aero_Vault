import React from 'react';
import { 
  Globe2, 
  ShieldAlert, 
  Zap, 
  Award, 
  ArrowRight, 
  Layers, 
  Plane,
  ChevronRight,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Shield
} from 'lucide-react';
import { tacticalAudio } from '../services/tacticalAudio';

export default function GlobalAirForcesView({
  nations = [],
  onSelectCountry,
}) {
  const handleNationClick = (countryName) => {
    tacticalAudio.playClick();
    onSelectCountry(countryName);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Banner */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-av-steel/40 bg-gradient-to-r from-av-blue/90 via-av-blue/40 to-av-navy hud-corner-box">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-av-sky/10 border border-av-sky/30 text-av-sky text-xs font-mono font-bold mb-2">
              <Globe2 className="w-3.5 h-3.5" />
              <span>GLOBAL THEATER COMBAT FORCES & RANKINGS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
              Superpower Air Commands & Tactical Doctrine
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-av-light/85 max-w-2xl leading-relaxed font-sans">
              Audit the world&apos;s most capable aerial warfare branches with force readiness, strategic bomber capacity, and fighter fleet modernizations.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Superpower Dossiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nations.map((nation) => (
          <div
            key={nation.countryName}
            className="group rounded-3xl glass-panel glass-panel-hover p-6 border border-av-steel/30 flex flex-col justify-between transition-all duration-300 hud-corner-box"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3.5">
                  <span className="text-3xl">{nation.flag || '🌐'}</span>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-av-sky transition-colors">
                      {nation.countryName}
                    </h3>
                    <p className="text-xs font-mono text-av-mist">
                      {nation.airForceName || 'Air Force Command'}
                    </p>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <div className="text-[10px] text-av-mist uppercase">Global Rank</div>
                  <div className="text-xl font-extrabold text-av-sky">#{nation.globalRanking}</div>
                </div>
              </div>

              {/* Status / Posture */}
              <div className="p-3.5 rounded-2xl bg-av-navy/80 border border-av-steel/20 text-xs flex items-center justify-between">
                <span className="text-av-mist font-mono text-[11px]">Primary Strength:</span>
                <span className="font-semibold text-white text-[11px] truncate max-w-[170px]">
                  {nation.primaryStrengths?.[0] || 'Air Dominance Wing'}
                </span>
              </div>

              {/* Stats 2x2 */}
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <div className="p-3 rounded-2xl bg-av-navy/60 border border-av-steel/20">
                  <div className="text-[10px] text-av-mist uppercase">True Value Rating</div>
                  <div className="text-base font-bold text-av-sky mt-0.5">{nation.tvrTotal.toFixed(1)}</div>
                </div>

                <div className="p-3 rounded-2xl bg-av-navy/60 border border-av-steel/20">
                  <div className="text-[10px] text-av-mist uppercase">Modernization</div>
                  <div className="text-base font-bold text-emerald-400 mt-0.5">{nation.modernizationIndex}%</div>
                </div>

                <div className="p-3 rounded-2xl bg-av-navy/60 border border-av-steel/20">
                  <div className="text-[10px] text-av-mist uppercase">Total Inventory</div>
                  <div className="text-base font-bold text-white mt-0.5">{nation.totalActiveUnits.toLocaleString()}</div>
                </div>

                <div className="p-3 rounded-2xl bg-av-navy/60 border border-av-steel/20">
                  <div className="text-[10px] text-av-mist uppercase">Primary Fighter</div>
                  <div className="text-xs font-bold text-cyan-300 mt-1 truncate">{nation.primaryFighter || 'Multirole'}</div>
                </div>
              </div>
            </div>

            {/* Explore Fleet Action */}
            <button
              onClick={() => handleNationClick(nation.countryName)}
              className="mt-5 w-full py-2.5 rounded-xl bg-av-blue/40 hover:bg-av-sky/20 border border-av-steel/30 hover:border-av-sky/50 text-xs font-mono font-bold text-av-light hover:text-white flex items-center justify-center space-x-2 transition-all group-hover:shadow-glow-cyan"
            >
              <span>Explore {nation.countryName} Fleet</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
