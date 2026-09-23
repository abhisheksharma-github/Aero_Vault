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
  ChevronDown,
  Shield,
  HelpCircle,
  Radio,
  BookOpen,
  Award,
  Flame,
  Zap,
  SlidersHorizontal
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
  const [mobileSectorsExpanded, setMobileSectorsExpanded] = useState(false);

  const mainNavItems = [
    { id: 'overview', label: 'OVERVIEW', shortLabel: 'Overview', icon: LayoutDashboard, desc: 'Global Defense Intelligence' },
    { id: 'g20countries', label: 'G20 NATIONS EXPLORER', shortLabel: 'G20 Nations', icon: Globe, desc: '19 Nations & EU Air Arms', badge: 'G20 2026' },
    { id: 'directory', label: 'AIRCRAFT DIRECTORY', shortLabel: 'Aircraft', icon: Plane, desc: 'Verified Multi-Role Fleet', count: totalCount },
    { id: 'rankings', label: 'ATLAS RANKINGS', shortLabel: 'ATLAS 2026', icon: Award, desc: 'Global Power Leaderboard (2026)', badge: 'TOP 162' },
    { id: 'sitrep', label: 'LIVE SITREP', shortLabel: 'Live Sitrep', icon: Radio, desc: 'Real-Time Fleet Events Feed', pulse: true },
    { id: 'inventory', label: 'CLASSIC INVENTORY', shortLabel: 'Classic Fleet', icon: Layers, desc: 'Unified Aircraft Inventory' },
    { id: 'naval', label: 'NAVAL FORCES', shortLabel: 'Naval Fleets', icon: Anchor, desc: 'Warships & Carrier Intelligence' },
    { id: 'land', label: 'ARMORED LAND FLEET', shortLabel: 'Land Armor', icon: Crosshair, desc: 'MBTs, Artillery & Air Defense' },
    { id: 'nations', label: 'AIR ARMS (WDMMA)', shortLabel: 'Air Arms', icon: Globe, desc: 'Airpower Doctrine Breakdown' },
    { id: 'compare', label: 'TACTICAL BENCHMARK', shortLabel: 'Benchmark', icon: Scale, desc: 'Platform & Combat Showdown' },
    { id: 'timeline', label: 'TIMELINE', shortLabel: 'Timeline', icon: Clock, desc: '"What Changed?" Delta Log' },
    { id: 'reports', label: 'INTELLIGENCE REPORTS', shortLabel: 'Reports', icon: FileText, desc: 'Country Strategic Briefings' },
    { id: 'sources', label: 'SOURCES & CITATIONS', shortLabel: 'Sources', icon: Database, desc: 'OSINT Provenance Directory' },
    { id: 'quality', label: 'DATA QUALITY AUDIT', shortLabel: 'Data Audit', icon: CheckCircle2, desc: 'Verification & Integrity Health' },
  ];

  const superpowers = [
    { name: 'India', flag: '🇮🇳' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Russia', flag: '🇷🇺' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'France', flag: '🇫🇷' },
  ];

  const handleNavClick = (id) => {
    tacticalAudio.playTab();
    setActiveTab(id);
    setMobileSectorsExpanded(false);
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

  const currentItem = mainNavItems.find((i) => i.id === activeTab) || mainNavItems[0];
  const CurrentIcon = currentItem.icon;

  return (
    <>
      {/* MOBILE (< lg): Horizontal Swipeable Tactical Bar & Quick Drawer */}
      <div className="lg:hidden w-full space-y-3">
        {/* Horizontal Quick Touch Strip */}
        <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-2 border border-slate-800 shadow-xl flex items-center justify-between gap-2">
          
          {/* Scrollable Sector Chips */}
          <div className="flex items-center space-x-1.5 overflow-x-auto py-1 px-1 scrollbar-none flex-1 -webkit-overflow-scrolling-touch">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${item.pulse ? 'animate-pulse text-emerald-400' : ''}`} />
                  <span>{item.shortLabel || item.label}</span>
                  {item.badge && (
                    <span className={`text-[8px] px-1 py-0.2 rounded font-mono ${isActive ? 'bg-slate-950 text-cyan-400' : 'bg-cyan-950 text-cyan-400 border border-cyan-800'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Expand Full Menu Toggle */}
          <button
            onClick={() => {
              tacticalAudio.playClick();
              setMobileSectorsExpanded(!mobileSectorsExpanded);
            }}
            className={`p-2 rounded-xl border text-xs font-mono font-bold flex items-center space-x-1 flex-shrink-0 transition-all ${
              mobileSectorsExpanded
                ? 'bg-cyan-950 text-cyan-400 border-cyan-800'
                : 'bg-slate-950 text-slate-300 hover:text-white border-slate-800'
            }`}
            title="Toggle all 14 defense sectors and superpowers"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileSectorsExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Mobile Expanded Drawer: All 14 Sectors + Superpowers + Glossary */}
        {mobileSectorsExpanded && (
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl p-4 border border-slate-800 space-y-4 animate-fade-in shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5" />
                <span>COMMAND NAVIGATION (14 SECTORS)</span>
              </span>
              <button
                onClick={() => setMobileSectorsExpanded(false)}
                className="text-[10px] font-mono text-slate-400 hover:text-white"
              >
                CLOSE ✕
              </button>
            </div>

            {/* 14 Sectors Grid on Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-2.5 p-2.5 rounded-xl text-left transition-all ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                        : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800/80'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-slate-950 text-cyan-400' : 'bg-slate-900 text-cyan-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-display font-semibold truncate">{item.label}</div>
                      <div className={`text-[10px] font-mono truncate ${isActive ? 'text-slate-800' : 'text-slate-400'}`}>
                        {item.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Superpowers Grid */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase font-bold">
                <span>GLOBAL SUPERPOWERS FILTER</span>
                {selectedCountry !== 'ALL' && (
                  <button onClick={() => handleCountryClick('ALL')} className="text-cyan-400 hover:underline">
                    Clear Filter
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs font-mono">
                {superpowers.map((c) => {
                  const isSelected = selectedCountry?.toLowerCase() === c.name.toLowerCase();
                  return (
                    <button
                      key={c.name}
                      onClick={() => handleCountryClick(c.name)}
                      className={`p-2 rounded-xl flex items-center space-x-1.5 transition-all ${
                        isSelected
                          ? 'bg-cyan-500/20 border border-cyan-500/50 text-white font-bold shadow-glow-cyan'
                          : 'bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800/80'
                      }`}
                    >
                      <span className="text-base flex-shrink-0">{c.flag}</span>
                      <span className="truncate text-[10px]">{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* DESKTOP (lg:): Fixed Tactical Command Sidebar */}
      <aside className="hidden lg:block w-72 flex-shrink-0 space-y-4">
        {/* Primary Navigation Card */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-3 border border-slate-800 shadow-xl space-y-1 hud-corner-box">
          <div className="px-3 py-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between border-b border-slate-800 mb-2">
            <span className="flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-cyan-400" />
              <span>COMMAND NAVIGATION</span>
            </span>
            <span className="text-[9px] text-cyan-400 font-mono">14 SECTORS</span>
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
                
                <div className="flex items-center space-x-3 min-w-0 pl-1 flex-1">
                  <div
                    className={`p-2 rounded-xl transition-transform group-hover:scale-105 flex-shrink-0 ${
                      isActive ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan' : 'bg-slate-950 text-cyan-400 group-hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="truncate min-w-0 flex-1">
                    <div className="text-xs font-display tracking-wide font-semibold flex items-center gap-1.5 min-w-0">
                      <span className="truncate">{item.label}</span>
                      {item.pulse && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
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
            {superpowers.map((c) => {
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
    </>
  );
}

