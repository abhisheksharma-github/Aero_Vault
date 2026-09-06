import React, { useState } from 'react';
import {
  LayoutDashboard,
  Layers,
  Plane,
  Crosshair,
  Anchor,
  Globe,
  Scale,
  Clock,
  FileText,
  Database,
  CheckCircle2,
  ChevronRight,
  Shield,
  HelpCircle,
  Radio,
  BookOpen,
  Award,
  Flame,
  Zap
} from 'lucide-react';
import { tacticalAudio } from '../services/tacticalAudio';

export default function Sidebar({
  activeTab,
  setActiveTab,
  totalCount,
  selectedCountry,
  setSelectedCountry,
  onResetFilters,
}) {
  const [showGlossary, setShowGlossary] = useState(false);

  const mainNavItems = [
    { id: 'overview', label: 'OVERVIEW', icon: LayoutDashboard, desc: 'Global Defense Intelligence' },
    { id: 'g20countries', label: 'G20 NATIONS EXPLORER', icon: Globe, desc: '19 Nations & EU Air Arms', badge: 'G20 2026' },
    { id: 'directory', label: 'AIRCRAFT DIRECTORY', icon: Plane, desc: 'Verified Multi-Role Fleet', count: totalCount },
    { id: 'rankings', label: 'ATLAS RANKINGS', icon: Award, desc: 'Global Power Leaderboard (2026)', badge: 'TOP 162' },
    { id: 'sitrep', label: 'LIVE SITREP', icon: Radio, desc: 'Real-Time Fleet Events Feed', pulse: true },
    { id: 'inventory', label: 'CLASSIC INVENTORY', icon: Layers, desc: 'Unified Aircraft Inventory' },
    { id: 'naval', label: 'NAVAL FORCES', icon: Anchor, desc: 'Warships & Carrier Intelligence' },
    { id: 'land', label: 'ARMORED LAND FLEET', icon: Crosshair, desc: 'MBTs, Artillery & Air Defense' },
    { id: 'nations', label: 'AIR ARMS (WDMMA)', icon: Globe, desc: 'Airpower Doctrine Breakdown' },
    { id: 'compare', label: 'TACTICAL BENCHMARK', icon: Scale, desc: 'Platform & Combat Showdown' },
    { id: 'timeline', label: 'TIMELINE', icon: Clock, desc: '"What Changed?" Delta Log' },
    { id: 'reports', label: 'INTELLIGENCE REPORTS', icon: FileText, desc: 'Country Strategic Briefings' },
    { id: 'sources', label: 'SOURCES & CITATIONS', icon: Database, desc: 'OSINT Provenance Directory' },
    { id: 'quality', label: 'DATA QUALITY AUDIT', icon: CheckCircle2, desc: 'Verification & Integrity Health' },
  ];

  const handleNavClick = (id) => {
    tacticalAudio.playTab();
    setActiveTab(id);
  };

  const handleCountryClick = (countryName) => {
    tacticalAudio.playClick();
    setSelectedCountry(countryName);
    setActiveTab('directory');
  };

  const glossaryTerms = [
    { term: 'ATLAS (0-100)', desc: 'Automated True Land, Air, and Sea military power index across all sovereign defense arms.' },
    { term: 'AIRS / SEAS / ARMS', desc: 'Domain-specific firepower indices for Air, Naval, and Armored Land combat fleets.' },
    { term: 'TVR (0-100)', desc: 'True Value Rating: Platform-level combat capability score across 7 mission dimensions.' },
    { term: 'AESA / GaN', desc: 'Active Electronically Scanned Array radar using Gallium Nitride semiconductors for extreme range & ECCM.' },
    { term: 'CATOBAR / STOBAR', desc: 'Carrier launch types (Catapult Assisted Takeoff vs Short Takeoff Barrier Arrested).' },
    { term: 'APS (Hard-Kill)', desc: 'Active Protection System on armor intercepting incoming ATGMs/drones (e.g. Trophy, Iron Fist).' },
  ];

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 space-y-4">
      {/* Primary Navigation Card */}
      <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-3 border border-slate-800 shadow-xl space-y-1 hud-corner-box">
        <div className="px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between border-b border-slate-800 mb-2">
          <span className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMMAND NAVIGATION</span>
          </span>
          <span className="text-[9px] text-cyan-400 font-mono">12 SECTORS</span>
        </div>

        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full group relative flex items-center justify-between p-2.5 rounded-2xl text-left transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 via-slate-900 to-transparent text-white border border-cyan-500/40 shadow-glow-cyan font-bold'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white border border-transparent'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-cyan-400 rounded-r-full shadow-glow-cyan" />
              )}
              
              <div className="flex items-center space-x-3 min-w-0 pl-1">
                <div
                  className={`p-2 rounded-xl transition-transform group-hover:scale-105 ${
                    isActive ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan' : 'bg-slate-950 text-cyan-400 group-hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-display tracking-wide font-semibold flex items-center gap-1.5">
                    <span>{item.label}</span>
                    {item.pulse && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">{item.desc}</div>
                </div>
              </div>

              {item.badge && (
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800 font-bold ml-1 flex-shrink-0">
                  {item.badge}
                </span>
              )}

              {item.count !== undefined && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-slate-950 text-cyan-400 border border-slate-800 font-bold ml-1 flex-shrink-0">
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Quick Powerhouse Superpowers Filter */}
      <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-4 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>GLOBAL SUPERPOWERS</span>
          </div>
          {selectedCountry !== 'ALL' && (
            <button
              onClick={() => handleCountryClick('ALL')}
              className="text-[10px] font-mono text-cyan-400 hover:underline"
            >
              Clear Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-1.5 text-xs font-mono">
          {[
            { name: 'India', flag: '🇮🇳' },
            { name: 'United States', flag: '🇺🇸' },
            { name: 'China', flag: '🇨🇳' },
            { name: 'Russia', flag: '🇷🇺' },
            { name: 'United Kingdom', flag: '🇬🇧' },
            { name: 'France', flag: '🇫🇷' },
          ].map((c) => {
            const isSelected = selectedCountry?.toLowerCase() === c.name.toLowerCase();
            return (
              <button
                key={c.name}
                onClick={() => handleCountryClick(c.name)}
                className={`p-2 rounded-xl flex items-center space-x-2 transition-all ${
                  isSelected
                    ? 'bg-cyan-500/20 border border-cyan-500/50 text-white font-bold shadow-glow-cyan'
                    : 'bg-slate-950/70 hover:bg-slate-800 text-slate-300 border border-slate-800/80'
                }`}
              >
                <span className="text-base">{c.flag}</span>
                <span className="truncate text-[11px]">{c.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Non-Tech Friendly Military Intel Glossary */}
      <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-4 border border-slate-800 space-y-2">
        <button
          onClick={() => {
            tacticalAudio.playClick();
            setShowGlossary(!showGlossary);
          }}
          className="w-full flex items-center justify-between text-[11px] font-mono font-bold text-cyan-400 hover:text-white transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>DEFENSE INTEL 101</span>
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
            {showGlossary ? 'HIDE' : 'EXPLAIN'}
          </span>
        </button>

        {showGlossary && (
          <div className="space-y-2 pt-2 border-t border-slate-800 text-[11px] animate-fade-in font-sans">
            {glossaryTerms.map((g) => (
              <div key={g.term} className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                <div className="font-mono font-bold text-cyan-400 text-[10px]">{g.term}</div>
                <div className="text-[11px] text-slate-300 leading-tight mt-0.5">{g.desc}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
