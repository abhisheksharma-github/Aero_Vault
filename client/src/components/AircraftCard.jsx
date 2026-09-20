import React from 'react';
import {
  Zap,
  Gauge,
  Shield,
  Scale,
  ExternalLink,
  Compass,
  Check,
  Radio,
  Plane,
  Anchor,
  Crosshair,
  Flame
} from 'lucide-react';
import { tacticalAudio } from '../services/tacticalAudio';

import TacticalImage from './TacticalImage';

export default function AircraftCard({
  aircraft,
  onSelect,
  onToggleCompare,
  isCompared,
}) {
  const isActive = aircraft.serviceStatus === 'ACTIVE';

  // TVR Score Color Gradient & Rating Bracket
  const getTvRStyle = (score) => {
    if (score >= 94) return { color: 'text-cyan-300', border: 'border-cyan-400', bg: 'bg-cyan-500/10', glow: 'shadow-glow-cyan', grade: 'S+' };
    if (score >= 88) return { color: 'text-emerald-400', border: 'border-emerald-400', bg: 'bg-emerald-500/10', glow: 'shadow-glow-green', grade: 'S' };
    if (score >= 80) return { color: 'text-sky-400', border: 'border-sky-400', bg: 'bg-sky-500/10', glow: 'shadow-glow-cyan', grade: 'A+' };
    if (score >= 70) return { color: 'text-amber-400', border: 'border-amber-400', bg: 'bg-amber-500/10', glow: 'shadow-glow-amber', grade: 'B' };
    return { color: 'text-rose-400', border: 'border-rose-400', bg: 'bg-rose-500/10', glow: 'shadow-glow-crimson', grade: 'C' };
  };

  const tvrStyle = getTvRStyle(aircraft.tvrScore || 80);

  const formatGen = (gen) => {
    if (!gen) return null;
    return gen.replace('GEN_', '').replace('_PLUS', '+').replace('_', '.') + ' Gen';
  };

  const getBranchBadge = (branch) => {
    if (branch === 'NAVAL_AVIATION') {
      return { label: 'Navy Air', icon: Anchor, color: 'text-blue-300 bg-blue-950/80 border-blue-500/40' };
    }
    if (branch === 'ARMY_AVIATION') {
      return { label: 'Army Air', icon: Crosshair, color: 'text-emerald-300 bg-emerald-950/80 border-emerald-500/40' };
    }
    return { label: 'Air Force', icon: Plane, color: 'text-cyan-300 bg-cyan-950/80 border-cyan-500/40' };
  };

  const branchBadge = getBranchBadge(aircraft.militaryBranch);
  const BranchIcon = branchBadge.icon;

  const handleCardClick = () => {
    tacticalAudio.playTab();
    onSelect(aircraft);
  };

  const handleCompareClick = (e) => {
    e.stopPropagation();
    tacticalAudio.playLock();
    onToggleCompare(aircraft);
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl glass-panel glass-panel-hover overflow-hidden border border-av-steel/30 transition-all duration-300 hud-corner-box">
      
      {/* Top Media Header */}
      <div 
        className="relative h-48 w-full overflow-hidden bg-av-navy cursor-pointer" 
        onClick={handleCardClick}
      >
        <TacticalImage
          src={aircraft.imageUrl || aircraft.image?.primaryImageUrl}
          alt={aircraft.name}
          name={aircraft.name}
          country={aircraft.country}
          role={aircraft.role || aircraft.primaryCategory}
          generation={formatGen(aircraft.generation)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-av-navy via-av-navy/30 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
            {isActive ? (
              <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-950/85 text-emerald-400 border border-emerald-500/50 shadow-glow-green">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                ACTIVE
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-950/85 text-rose-400 border border-rose-500/50">
                RETIRED
              </span>
            )}

            {aircraft.generation && (
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono uppercase bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 font-bold">
                {formatGen(aircraft.generation)}
              </span>
            )}

            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-mono uppercase border font-bold ${branchBadge.color}`}>
              <BranchIcon className="w-3 h-3" />
              <span>{branchBadge.label}</span>
            </span>
          </div>

          {/* Quick Compare Button */}
          <button
            onClick={handleCompareClick}
            className={`p-2 rounded-xl backdrop-blur-md transition-all ${
              isCompared
                ? 'bg-av-sky text-av-navy shadow-glow-cyan font-bold scale-105'
                : 'bg-av-navy/80 text-av-mist hover:text-white border border-av-steel/40 hover:border-av-sky/50'
            }`}
            title={isCompared ? 'Remove from Benchmark Comparison' : 'Add to Benchmark Comparison'}
          >
            {isCompared ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Scale className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* TVR Grade Floating Chip */}
        <div className={`absolute bottom-3 right-3 flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-av-navy/90 border ${tvrStyle.border} backdrop-blur-md shadow-lg`}>
          <Zap className={`w-3.5 h-3.5 ${tvrStyle.color} animate-pulse`} />
          <span className={`text-xs font-mono font-black ${tvrStyle.color}`}>
            {(aircraft.tvrScore || 80).toFixed(1)}
          </span>
          <span className="text-[9px] font-mono font-bold px-1 rounded bg-white/10 text-white">
            {tvrStyle.grade}
          </span>
        </div>

        {/* Operator Badge bottom left */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-1.5">
          <span className="text-xs font-mono text-av-sky font-bold tracking-wide uppercase px-2 py-0.5 rounded-md bg-av-navy/80 backdrop-blur-md border border-av-steel/30">
            {aircraft.country}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3
            onClick={handleCardClick}
            className="text-base font-display font-bold text-white group-hover:text-av-sky transition-colors cursor-pointer flex items-center justify-between"
          >
            <span className="truncate">{aircraft.name}</span>
            <ExternalLink className="w-3.5 h-3.5 text-av-mist opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1" />
          </h3>
          <p className="text-xs text-av-mist mt-1 line-clamp-2 leading-relaxed">
            {aircraft.description}
          </p>
        </div>

        {/* Telemetry Chips */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-av-steel/20 text-[11px] font-mono">
          <div className="flex items-center space-x-1.5 text-av-light/90">
            <Gauge className="w-3.5 h-3.5 text-av-sky" />
            <span className="truncate">
              {aircraft.topSpeedMach ? `Mach ${aircraft.topSpeedMach}` : (aircraft.topSpeed || 'Mach 2.0')}
            </span>
          </div>
          <div className="flex items-center space-x-1.5 text-av-light/90">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span className="truncate">
              {aircraft.combatRangeKm ? `${aircraft.combatRangeKm} km radius` : '1,500 km'}
            </span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono text-av-mist border-t border-av-steel/15">
          <div>
            Active: <strong className="text-white">{aircraft.activeCount || aircraft.fleetCount || '—'} units</strong>
          </div>
          <button
            onClick={handleCardClick}
            className="text-av-sky hover:text-white font-bold flex items-center space-x-1 transition-colors group-hover:translate-x-0.5"
          >
            <span>Full Dossier</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
