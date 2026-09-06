import React, { useState } from 'react';
import {
  Globe,
  Plane,
  Crosshair,
  Anchor,
  Shield,
  Zap,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  Radio,
  CheckCircle2,
  Gauge,
  Compass,
  Cpu,
  Layers,
  HelpCircle
} from 'lucide-react';
import { tacticalAudio } from '../services/tacticalAudio';
import SitrepWidget from './SitrepWidget';


export default function OverviewDashboard({
  aircraftList = [],
  nationsData = [],
  onNavigateTab,
  onSelectCountry,
  onSelectAircraft,
}) {
  const [activeSuperpower, setActiveSuperpower] = useState('IND');

  const totalAircraft = 18742;
  const activeFleet = 15983;
  const trackedNations = 142;
  const avgTvr = 78.4;

  const branchSummary = [
    {
      id: 'airforce',
      branchKey: 'AIR_FORCE',
      name: 'Air Force Fleets',
      icon: Plane,
      count: '11,450+',
      leadAssets: 'F-22A, J-20A, Rafale, Su-30MKI, B-21',
      description: 'Strategic air dominance, supersonic interdiction, long-range standoff cruise strikes, and airborne early warning force multipliers.',
      accent: 'from-av-sky/20 via-av-blue to-av-navy',
      border: 'border-av-sky/40',
      badgeColor: 'text-av-sky bg-av-sky/10 border-av-sky/30',
    },
    {
      id: 'army',
      branchKey: 'ARMY_AVIATION',
      name: 'Army Aviation Fleets',
      icon: Crosshair,
      count: '4,120+',
      leadAssets: 'AH-64E Apache, LCH Prachand, Ka-52M, Z-10',
      description: 'Dedicated high-altitude attack helicopters, battlefield armor interdiction, forward scout reconnaissance, and organic tactical UAVs.',
      accent: 'from-emerald-500/20 via-av-blue to-av-navy',
      border: 'border-emerald-500/40',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      id: 'navy',
      branchKey: 'NAVAL_AVIATION',
      name: 'Naval Aviation Fleets',
      icon: Anchor,
      count: '3,170+',
      leadAssets: 'F/A-18F, F-35C, MiG-29K, Rafale-M, P-8I',
      description: 'Catapult (CATOBAR) and ski-jump (STOBAR) carrier strike wings, anti-submarine warfare (ASW) hunting, and maritime surveillance.',
      accent: 'from-blue-500/20 via-av-blue to-av-navy',
      border: 'border-blue-400/40',
      badgeColor: 'text-blue-300 bg-blue-500/10 border-blue-400/30',
    },
  ];

  const handleBranchClick = (tabId) => {
    tacticalAudio.playTab();
    onNavigateTab(tabId);
  };

  const handleCountryClick = (countryName) => {
    tacticalAudio.playClick();
    onSelectCountry(countryName);
  };

  const handleAircraftClick = (ac) => {
    tacticalAudio.playTab();
    onSelectAircraft(ac);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Top Aerospace Hero Banner */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-av-steel/40 bg-gradient-to-r from-av-blue/90 via-av-blue/40 to-av-navy relative overflow-hidden hud-corner-box">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-av-sky/10 border border-av-sky/30 text-av-sky text-xs font-mono">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-bold">DEFENSE AIR FLEET INTELLIGENCE & TELEMETRY</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight leading-tight">
            Multi-Domain Air Power, Tri-Branch Fleets & TVR Analytics
          </h1>
          <p className="text-xs sm:text-sm text-av-light/90 leading-relaxed font-sans">
            AeroVault provides mathematical True Value Rating (TVR) scoring, cross-verified OSINT provenance, and comprehensive analytics across global Air Force, Army Aviation, and Naval Aviation fleets.
          </p>
        </div>

        {/* Ambient Cockpit Radar Grid Graphic */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-av-sky/15 hidden md:flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 rounded-full border border-av-sky/20 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-av-sky/30 animate-reticle-spin" />
          </div>
        </div>
      </div>

      {/* 4-Stat Core Metric Ribbon */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <div className="glass-panel p-5 rounded-3xl border border-av-steel/30 space-y-1 hud-corner-box">
          <div className="text-[10px] text-av-mist uppercase tracking-wider font-bold">Total Military Aircraft</div>
          <div className="text-2xl sm:text-3xl font-black text-white">{totalAircraft.toLocaleString()}</div>
          <div className="text-[10px] text-av-teal flex items-center gap-1">Global tracked inventory</div>
        </div>

        <div className="glass-panel p-5 rounded-3xl border border-av-steel/30 space-y-1 hud-corner-box">
          <div className="text-[10px] text-av-mist uppercase tracking-wider font-bold">Active Frontline Units</div>
          <div className="text-2xl sm:text-3xl font-black text-av-sky">{activeFleet.toLocaleString()}</div>
          <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> 85.3% Fleet Readiness
          </div>
        </div>

        <div className="glass-panel p-5 rounded-3xl border border-av-steel/30 space-y-1 hud-corner-box">
          <div className="text-[10px] text-av-mist uppercase tracking-wider font-bold">Nations Tracked</div>
          <div className="text-2xl sm:text-3xl font-black text-white">{trackedNations}</div>
          <div className="text-[10px] text-av-mist">Superpowers & air arms</div>
        </div>

        <div className="glass-panel p-5 rounded-3xl border border-av-steel/30 space-y-1 hud-corner-box">
          <div className="text-[10px] text-av-mist uppercase tracking-wider font-bold">Average Fleet TVR</div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-400">{avgTvr}</div>
          <div className="text-[10px] text-av-teal">Calibrated to 7 capability pillars</div>
        </div>
      </div>

      {/* Three Military Aviation Branches Card Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-av-sky" />
              <span>Three Specialized Aviation Branches</span>
            </h2>
            <p className="text-xs text-av-mist">
              Explore specialized combat and support fleets categorized by operational warfare doctrine.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branchSummary.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                onClick={() => handleBranchClick(b.id)}
                className={`group glass-panel rounded-3xl p-6 border ${b.border} flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-all bg-gradient-to-b ${b.accent} hud-corner-box`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-av-navy/90 border border-av-steel/40 text-av-sky shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-xl border ${b.badgeColor}`}>
                      {b.count}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-display font-bold text-white group-hover:text-av-sky transition-colors">
                      {b.name}
                    </h3>
                    <p className="text-xs text-av-light/80 mt-1.5 leading-relaxed font-sans">
                      {b.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-av-steel/20">
                    <span className="text-[10px] font-mono text-av-mist uppercase block">Lead Platforms:</span>
                    <span className="text-xs font-mono text-av-light font-semibold">{b.leadAssets}</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center text-xs font-mono text-av-sky font-bold group-hover:translate-x-1 transition-transform">
                  <span>Explore {b.name}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Air Powers & Featured Combat Dossiers Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Top Airpower Rankings */}
        <div className="glass-panel rounded-3xl p-6 border border-av-steel/30 space-y-4 hud-corner-box">
          <div className="flex items-center justify-between border-b border-av-steel/20 pb-3">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-av-sky" />
              <h3 className="text-base font-display font-bold text-white">Global Airpower Index (WDMMA Model)</h3>
            </div>
            <button
              onClick={() => handleBranchClick('nations')}
              className="text-xs font-mono text-av-sky hover:underline"
            >
              All Nations →
            </button>
          </div>

          <div className="space-y-2.5">
            {nationsData.slice(0, 4).map((n) => (
              <div
                key={n.countryName}
                onClick={() => handleCountryClick(n.countryName)}
                className="p-3.5 rounded-2xl bg-av-blue/30 border border-av-steel/20 hover:border-av-sky/40 transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center space-x-3.5">
                  <span className="text-2xl">{n.flag || '🌐'}</span>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-2 group-hover:text-av-sky transition-colors">
                      <span>{n.countryName}</span>
                      <span className="text-[10px] font-mono font-normal text-av-mist">
                        ({n.totalActiveUnits.toLocaleString()} units)
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-av-teal truncate max-w-xs">
                      {n.primaryFighter || 'Multirole Frontline Wings'}
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono flex-shrink-0 pl-2">
                  <div className="text-xs font-bold text-av-sky">#{n.globalRanking}</div>
                  <div className="text-[10px] text-emerald-400 font-bold">{n.tvrTotal.toFixed(1)} TVR</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Combat Assets Spotlight */}
        <div className="glass-panel rounded-3xl p-6 border border-av-steel/30 space-y-4 hud-corner-box">
          <div className="flex items-center justify-between border-b border-av-steel/20 pb-3">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-av-sky" />
              <h3 className="text-base font-display font-bold text-white">Featured Combat Platforms</h3>
            </div>
            <button
              onClick={() => handleBranchClick('inventory')}
              className="text-xs font-mono text-av-sky hover:underline"
            >
              Explore Full Vault →
            </button>
          </div>

          <div className="space-y-2.5">
            {aircraftList.slice(0, 4).map((ac) => (
              <div
                key={ac.id || ac.name}
                onClick={() => handleAircraftClick(ac)}
                className="p-3 rounded-2xl bg-av-blue/30 border border-av-steel/20 hover:border-av-sky/40 transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <img
                    src={ac.imageUrl}
                    alt={ac.name}
                    className="w-12 h-12 rounded-xl object-cover border border-av-steel/30 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate group-hover:text-av-sky transition-colors font-sans">
                      {ac.name}
                    </div>
                    <div className="text-[10px] font-mono text-av-mist truncate">
                      {ac.country} • {ac.militaryBranch?.replace('_', ' ')}
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono flex-shrink-0 pl-2">
                  <div className="text-xs font-black text-av-sky">{(ac.tvrScore || 80).toFixed(1)}</div>
                  <div className="text-[10px] text-av-teal">{ac.generation?.replace('GEN_', '').replace('_', '.')} Gen</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Sitrep Global Fleet Events Stream */}
      <div className="pt-2">
        <SitrepWidget compact={false} maxItems={6} />
      </div>
    </div>
  );
}

