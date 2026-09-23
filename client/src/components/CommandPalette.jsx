import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  Plane,
  Crosshair,
  Anchor,
  Shield,
  Zap,
  Globe,
  FileText,
  Clock,
  Database,
  Layers,
  ArrowRight,
  Sparkles,
  Radio,
  Award
} from 'lucide-react';
import { tacticalAudio } from '../services/tacticalAudio';
import { initialNavalVessels, initialGroundVehicles } from '../data/mockData';

export default function CommandPalette({
  isOpen,
  onClose,
  aircraftList = [],
  onSelectAircraft,
  onNavigateTab,
  onSelectCountry,
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      tacticalAudio.playLock();
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle keyboard events (ESC, Up, Down, Enter)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, results.length));
        tacticalAudio.playClick();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
        tacticalAudio.playClick();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleExecute(results[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!isOpen) return null;

  // Build searchable views
  const views = [
    { type: 'VIEW', title: 'Global Defense Overview', subtitle: 'Tri-branch power metrics & sitrep feed', tab: 'overview', icon: Shield },
    { type: 'VIEW', title: 'ATLAS 2026 Power Leaderboard', subtitle: 'Global multi-domain rankings (162 nations)', tab: 'rankings', icon: Award },
    { type: 'VIEW', title: 'Live Sitrep Defense Stream', subtitle: 'Real-time losses, deliveries, and fleet commissions', tab: 'sitrep', icon: Radio },
    { type: 'VIEW', title: 'Air Combat Fleets', subtitle: 'Unified aircraft inventory & 9-tab dossiers', tab: 'inventory', icon: Plane },
    { type: 'VIEW', title: 'Naval Forces & Carrier Strike', subtitle: 'Warships, supercarriers, destroyers, SSBNs', tab: 'naval', icon: Anchor },
    { type: 'VIEW', title: 'Armored Land Fleets', subtitle: 'Main battle tanks, IFVs, artillery & air defense', tab: 'land', icon: Crosshair },
    { type: 'VIEW', title: 'Multi-Domain Benchmark Station', subtitle: 'Head-to-head split-screen comparison', tab: 'compare', icon: Shield },
    { type: 'VIEW', title: 'Air Arms & Doctrine (WDMMA)', subtitle: 'Country airpower index & modernization', tab: 'nations', icon: Globe },
    { type: 'VIEW', title: 'Timeline & Delta Changelog', subtitle: 'Historical first flights & recent deliveries', tab: 'timeline', icon: Clock },
    { type: 'VIEW', title: 'Intelligence Reports', subtitle: 'Executive summaries & strategic briefings', tab: 'reports', icon: FileText },
    { type: 'VIEW', title: 'OSINT Sources & Citations', subtitle: 'Tier 1-3 defense whitepapers & journals', tab: 'sources', icon: Database },
    { type: 'VIEW', title: 'Data Quality Audit', subtitle: 'Verification health index & consensus score', tab: 'quality', icon: Layers },
  ];

  // Search Airframes
  const matchedAircraft = aircraftList.filter((a) => {
    if (!query) return false;
    const q = query.toLowerCase();
    return (
      a.name.toLowerCase().includes(q) ||
      a.country?.toLowerCase().includes(q) ||
      a.category?.toLowerCase().includes(q) ||
      a.role?.toLowerCase().includes(q) ||
      a.radarModel?.toLowerCase().includes(q)
    );
  }).slice(0, 5).map((a) => ({
    type: 'AIRCRAFT',
    title: a.name,
    subtitle: `${a.country} • ${a.militaryBranch?.replace(/_/g, ' ')} • ${a.generation?.replace('GEN_', '').replace('_', '.')} Gen • TVR ${a.tvrScore || 80}`,
    data: a,
    icon: Zap,
  }));

  // Search Naval Vessels
  const matchedNaval = initialNavalVessels.filter((v) => {
    if (!query) return false;
    const q = query.toLowerCase();
    return (
      v.name.toLowerCase().includes(q) ||
      v.shipClass.toLowerCase().includes(q) ||
      v.country.toLowerCase().includes(q) ||
      (v.pennantNumber && v.pennantNumber.toLowerCase().includes(q))
    );
  }).slice(0, 3).map((v) => ({
    type: 'NAVAL',
    title: v.name,
    subtitle: `${v.country} • ${v.vesselType?.replace(/_/g, ' ')} • ${v.displacementTons?.toLocaleString()} Tons • TVR ${v.tvrScore}`,
    tab: 'naval',
    icon: Anchor,
  }));

  // Search Land Armor
  const matchedGround = initialGroundVehicles.filter((g) => {
    if (!query) return false;
    const q = query.toLowerCase();
    return (
      g.name.toLowerCase().includes(q) ||
      g.country.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q) ||
      (g.mainArmament && g.mainArmament.toLowerCase().includes(q))
    );
  }).slice(0, 3).map((g) => ({
    type: 'LAND',
    title: g.name,
    subtitle: `${g.country} • ${g.category?.replace(/_/g, ' ')} • ${g.mainArmament} • TVR ${g.tvrScore}`,
    tab: 'land',
    icon: Crosshair,
  }));

  const matchedViews = views.filter((v) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return v.title.toLowerCase().includes(q) || v.subtitle.toLowerCase().includes(q);
  }).slice(0, 4);

  const results = query
    ? [...matchedAircraft, ...matchedNaval, ...matchedGround, ...matchedViews]
    : matchedViews;

  const handleExecute = (item) => {
    tacticalAudio.playTab();
    if (item.type === 'AIRCRAFT') {
      onSelectAircraft(item.data);
      onClose();
    } else if (item.tab) {
      onNavigateTab(item.tab);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-24 px-3 sm:px-4 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
      <div 
        className="w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-slate-900 border border-cyan-500/40 shadow-2xl overflow-hidden bg-slate-900/95 hud-corner-box text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative p-3.5 sm:p-4 border-b border-slate-800 flex items-center gap-2.5 sm:gap-3 bg-slate-950/50">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-pulse flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search fighter jets, warships, tanks, countries, weapons, views..."
            className="w-full bg-transparent text-xs sm:text-base text-white placeholder-slate-500 focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-950 border border-slate-800 rounded-lg">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 sm:max-h-96 overflow-y-auto p-2 space-y-1">
          {results.length === 0 ? (
            <div className="p-8 text-center text-slate-500 font-mono text-xs">
              No matching defense assets, sovereign arms, or commands found for &quot;{query}&quot;.
            </div>
          ) : (
            results.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={`${item.type}-${item.title}`}
                  onClick={() => handleExecute(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl flex items-center justify-between cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-cyan-500/15 border border-cyan-500/40 shadow-glow-cyan text-white translate-x-1'
                      : 'border border-transparent hover:bg-slate-800/60 text-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
                    <div className={`p-1.5 sm:p-2 rounded-xl border flex-shrink-0 ${
                      item.type === 'AIRCRAFT' 
                        ? 'bg-cyan-950 text-cyan-400 border-cyan-800' 
                        : item.type === 'NAVAL'
                        ? 'bg-blue-950 text-blue-400 border-blue-800'
                        : item.type === 'LAND'
                        ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2 truncate">
                        <span>{item.title}</span>
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800">
                          {item.type}
                        </span>
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 text-cyan-400 flex-shrink-0 transition-opacity ${
                    isSelected ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="p-2.5 sm:p-3 border-t border-slate-800 bg-slate-950/90 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2 sm:gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px]">↓</kbd></span>
            <span>Select <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px]">↵</kbd></span>
          </div>
          <span className="text-cyan-400 font-bold hidden sm:inline">AEROVAULT GLOBAL COMMAND PALETTE</span>
        </div>
      </div>
    </div>
  );
}
