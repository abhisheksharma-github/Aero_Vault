import React, { useState, useEffect } from 'react';
import {
  Shield,
  Search,
  Scale,
  Volume2,
  VolumeX,
  Radio,
  Sparkles,
  Command,
  Globe,
  X,
  Layers,
  CheckCircle2,
  Compass,
  Plane,
  Anchor,
  Crosshair,
  TrendingUp,
  Menu
} from 'lucide-react';
import { tacticalAudio } from '../services/tacticalAudio';

export default function Navbar({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  comparisonList = [],
  onOpenComparison,
  dataSource = 'autonomous-vault',
  onOpenCommandPalette,
}) {
  const [timeStr, setTimeStr] = useState('');
  const [audioEnabled, setAudioEnabled] = useState(tacticalAudio.isEnabled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Live Device Local Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const newState = tacticalAudio.toggleSound();
    setAudioEnabled(newState);
  };

  const handleTabClick = (tab) => {
    tacticalAudio.playTab();
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const navDomainTabs = [
    { id: 'overview', label: 'OVERVIEW', icon: Compass },
    { id: 'g20countries', label: 'G20 NATIONS', icon: Globe, highlight: true },
    { id: 'directory', label: 'AIRCRAFT DIRECTORY', icon: Plane, highlight: true },
    { id: 'rankings', label: 'ATLAS 2026', icon: TrendingUp },
    { id: 'naval', label: 'NAVAL', icon: Anchor },
    { id: 'land', label: 'LAND FORCES', icon: Crosshair },
    { id: 'sitrep', label: 'LIVE SITREP', icon: Radio, pulse: true },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl transition-all">
      {/* Top Telemetry & Status Ticker Bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 text-[11px] font-mono border-b border-slate-800/80 bg-slate-900/60 text-slate-300">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-cyan-400 font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-1.5 animate-pulse shadow-glow-cyan" />
            <span>GLOBAL MILITARY INTEL ONLINE</span>
          </span>
          <span className="text-slate-700">|</span>
          <span>TIME: <strong className="text-white font-bold">{timeStr || '00:00:00'}</strong></span>
          <span className="text-slate-700">|</span>
          <span>DOMAINS: <strong className="text-cyan-400">AIR • NAVAL • LAND • ATLAS COMPOSITE</strong></span>
        </div>
        
        <div className="flex items-center space-x-3">
          <span className="text-slate-400">TELEMETRY:</span>
          <span className="px-2 py-0.5 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800/80 font-semibold text-[10px] tracking-wider">
            {dataSource === 'live-db' ? 'LIVE NEON CLUSTER' : 'AUTONOMOUS VAULT'}
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 text-[10px] font-bold">
            <CheckCircle2 className="w-3 h-3 mr-1" /> VERIFIED OSINT
          </span>
        </div>
      </div>

      {/* Main Tactical Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-3">
          
          {/* Brand Logo & Tag */}
          <div
            className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 cursor-pointer group min-w-0"
            onClick={() => handleTabClick('overview')}
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-950 border border-cyan-500/40 shadow-glow-cyan group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span className="text-base sm:text-xl font-display font-black tracking-wider text-white">
                  AERO<span className="text-cyan-400">VAULT</span>
                </span>
                <span className="px-1.5 py-0.2 text-[8px] sm:text-[9px] font-mono font-bold uppercase rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800">
                  v3.0 PRO
                </span>
              </div>
              <p className="text-[8px] sm:text-[10px] tracking-wider uppercase font-mono text-slate-400 truncate max-w-[130px] sm:max-w-none">
                Global Military Defense Intel
              </p>
            </div>
          </div>

          {/* Center Domain Quick Nav Switcher (Desktop) */}
          <nav className="hidden 2xl:flex items-center space-x-1 bg-slate-900/90 p-1 rounded-2xl border border-slate-800">
            {navDomainTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : tab.highlight
                      ? 'text-cyan-400 hover:text-white hover:bg-slate-800/80'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${tab.pulse ? 'animate-pulse text-emerald-400' : ''}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Command Palette / Search Trigger */}
          <div className="flex-1 min-w-0 max-w-[180px] lg:max-w-xs mx-1 sm:mx-2 relative hidden md:block">
            <button
              onClick={() => {
                tacticalAudio.playClick();
                if (onOpenCommandPalette) onOpenCommandPalette();
              }}
              className="w-full pl-2.5 sm:pl-3 pr-2.5 sm:pr-3.5 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-400 flex items-center justify-between transition-all group min-w-0"
            >
              <div className="flex items-center space-x-1.5 sm:space-x-2 min-w-0">
                <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                <span className="text-[11px] font-sans text-slate-400 group-hover:text-white transition-colors truncate">
                  Search weapons, ships, jets...
                </span>
              </div>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[9px] font-mono text-slate-400 bg-slate-950 border border-slate-800 rounded-md group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors flex-shrink-0 ml-1">
                <Command className="w-2.5 h-2.5" /> K
              </kbd>
            </button>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            
            {/* Audio Feedback Synthesizer Toggle */}
            <button
              onClick={handleToggleSound}
              className={`p-1.5 sm:p-2 rounded-xl border transition-all flex-shrink-0 ${
                audioEnabled
                  ? 'bg-cyan-950/80 border-cyan-800 text-cyan-400 shadow-glow-cyan'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
              title={audioEnabled ? 'Tactical Audio Enabled (Click to Mute)' : 'Audio Muted (Click to Enable)'}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Benchmark / Comparison Dock Trigger */}
            <button
              onClick={() => {
                tacticalAudio.playLock();
                onOpenComparison();
              }}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-mono font-bold transition-all border flex-shrink-0 ${
                comparisonList.length > 0
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 border-cyan-400 shadow-glow-cyan hover:brightness-110'
                  : 'bg-slate-900 border-slate-800 text-slate-200 hover:border-cyan-500/40'
              }`}
            >
              <Scale className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="hidden sm:inline">BENCHMARK</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono font-bold ${
                comparisonList.length > 0 ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-950 text-cyan-400 border border-cyan-800'
              }`}>
                {comparisonList.length}
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="2xl:hidden p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex-shrink-0"
              aria-label="Toggle domain navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-800 bg-slate-950/98 p-4 space-y-3 animate-fade-in shadow-2xl">
          
          {/* Mobile Search Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenCommandPalette) onOpenCommandPalette();
            }}
            className="w-full p-3 rounded-2xl bg-slate-900 border border-slate-800 text-left flex items-center justify-between text-xs text-slate-300"
          >
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Search jets, warships, tanks, countries...</span>
            </div>
            <kbd className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-cyan-400">
              Cmd+K
            </kbd>
          </button>

          {/* Domain Tabs Grid */}
          <div className="grid grid-cols-2 gap-2">
            {navDomainTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center space-x-2 p-3 rounded-xl text-xs font-mono font-bold transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Telemetry Status Info */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mr-1.5 animate-pulse" />
              GLOBAL INTEL ONLINE
            </span>
            <span className="text-white font-bold">{timeStr || 'LOCAL'}</span>
          </div>
        </div>
      )}
    </header>
  );
}

