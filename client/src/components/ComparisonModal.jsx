import React, { useState } from 'react';
import {
  X,
  Scale,
  Zap,
  Gauge,
  Shield,
  Layers,
  ArrowRightLeft,
  Check,
  Crosshair,
  Compass,
  HelpCircle,
  TrendingUp,
  Cpu,
  Radio,
  Rocket,
  Flame,
  ChevronRight,
  Sparkles,
  AlertCircle,
  Award,
  Anchor,
  Plane
} from 'lucide-react';
import { tacticalAudio } from '../services/tacticalAudio';

export default function ComparisonModal({
  isOpen,
  onClose,
  aircraftA,
  aircraftB,
  allAircraft = [],
  onSelectAircraftA,
  onSelectAircraftB,
}) {
  const [selectedMission, setSelectedMission] = useState('BVR_COMBAT');

  if (!isOpen || !aircraftA) return null;

  const secondAircraft =
    aircraftB || allAircraft.find((a) => a.name !== aircraftA.name) || aircraftA;

  const tvrA = aircraftA.tvrScore || 85.0;
  const tvrB = secondAircraft.tvrScore || 85.0;
  const tvrDiff = (tvrA - tvrB).toFixed(1);

  // 7-Dimension Matrix Scores
  const matrixDimensions = [
    {
      id: 'kinetics',
      label: 'Kinetics & Speed',
      icon: Gauge,
      scoreA: aircraftA.performanceScore || (aircraftA.topSpeedMach ? Math.min(99, aircraftA.topSpeedMach * 42) : 82),
      scoreB: secondAircraft.performanceScore || (secondAircraft.topSpeedMach ? Math.min(99, secondAircraft.topSpeedMach * 42) : 82),
    },
    {
      id: 'avionics',
      label: 'Radar & Sensors',
      icon: Radio,
      scoreA: aircraftA.avionicsScore || (aircraftA.hasAesa ? 95 : 78),
      scoreB: secondAircraft.avionicsScore || (secondAircraft.hasAesa ? 95 : 78),
    },
    {
      id: 'weapons',
      label: 'Weapons & Payload',
      icon: Rocket,
      scoreA: aircraftA.weaponsScore || 86,
      scoreB: secondAircraft.weaponsScore || 86,
    },
    {
      id: 'survivability',
      label: 'Stealth & Survivability',
      icon: Shield,
      scoreA: aircraftA.survivabilityScore || (aircraftA.stealthLevel === 'VERY_HIGH' ? 98 : aircraftA.stealthLevel === 'HIGH' ? 90 : 72),
      scoreB: secondAircraft.survivabilityScore || (secondAircraft.stealthLevel === 'VERY_HIGH' ? 98 : secondAircraft.stealthLevel === 'HIGH' ? 90 : 72),
    },
    {
      id: 'range',
      label: 'Combat Radius',
      icon: Compass,
      scoreA: aircraftA.combatRangeKm ? Math.min(99, (aircraftA.combatRangeKm / 2000) * 85) : 80,
      scoreB: secondAircraft.combatRangeKm ? Math.min(99, (secondAircraft.combatRangeKm / 2000) * 85) : 80,
    },
    {
      id: 'logistics',
      label: 'Fleet Availability & Logistics',
      icon: Layers,
      scoreA: aircraftA.logisticsScore || 80,
      scoreB: secondAircraft.logisticsScore || 80,
    },
  ];

  // Mission Scenarios definitions
  const missionScenarios = [
    {
      id: 'BVR_COMBAT',
      name: 'Beyond Visual Range (BVR) Air Combat',
      desc: 'Evaluates long-range radar detection, active AAM missile range, electronic jamming immunity, and stealth low observability.',
      weights: { avionics: 0.35, survivability: 0.30, weapons: 0.25, kinetics: 0.10 },
    },
    {
      id: 'DOGFIGHT',
      name: 'Within Visual Range (WVR) Dogfight',
      desc: 'Close-in turning combat, instantaneous turn rates, thrust-to-weight ratio, helmet-mounted displays (HMD), and high-off-boresight missiles.',
      weights: { kinetics: 0.45, weapons: 0.30, avionics: 0.15, survivability: 0.10 },
    },
    {
      id: 'CARRIER_OPS',
      name: 'Carrier Strike & Naval Interdiction',
      desc: 'Catapult / Ski-jump launch capability, salt corrosion hardening, maritime strike radar modes, and anti-ship missile integration.',
      weights: { kinetics: 0.20, weapons: 0.35, range: 0.25, avionics: 0.20 },
    },
    {
      id: 'SEAD_STRIKE',
      name: 'Suppression of Enemy Air Defenses (SEAD)',
      desc: 'Penetrating hostile integrated air defense networks (S-400 / Patriot), standoff anti-radiation missile delivery, and stealth.',
      weights: { survivability: 0.40, avionics: 0.30, weapons: 0.20, range: 0.10 },
    },
  ];

  const currentScenario = missionScenarios.find((s) => s.id === selectedMission) || missionScenarios[0];

  // Calculate Scenario Winner
  const calculateScenarioScore = (aircraft) => {
    let score = 0;
    const isCarrierCapable = aircraft.militaryBranch === 'NAVAL_AVIATION';
    
    if (selectedMission === 'BVR_COMBAT') {
      score = (aircraft.hasAesa ? 95 : 75) * 0.35 + 
              (aircraft.stealthLevel === 'VERY_HIGH' ? 98 : aircraft.stealthLevel === 'HIGH' ? 90 : 70) * 0.30 +
              88 * 0.25 + 
              (aircraft.topSpeedMach ? aircraft.topSpeedMach * 40 : 80) * 0.10;
    } else if (selectedMission === 'DOGFIGHT') {
      score = (aircraft.gLimitPositive ? aircraft.gLimitPositive * 10 : 85) * 0.45 +
              (aircraft.hasHmd ? 95 : 75) * 0.30 +
              85 * 0.15 + 80 * 0.10;
    } else if (selectedMission === 'CARRIER_OPS') {
      const navalBonus = isCarrierCapable ? 25 : -20;
      score = 80 * 0.20 + 85 * 0.35 + 82 * 0.25 + (aircraft.hasAesa ? 92 : 75) * 0.20 + navalBonus;
    } else if (selectedMission === 'SEAD_STRIKE') {
      score = (aircraft.stealthLevel === 'VERY_HIGH' ? 98 : aircraft.stealthLevel === 'HIGH' ? 90 : 70) * 0.40 +
              (aircraft.ewScore || 85) * 0.30 +
              90 * 0.20 + 80 * 0.10;
    }
    return Math.min(99, Math.max(40, score));
  };

  const scoreScenarioA = calculateScenarioScore(aircraftA);
  const scoreScenarioB = calculateScenarioScore(secondAircraft);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-av-navy/90 backdrop-blur-2xl animate-fade-in">
      <div 
        className="relative w-full max-w-6xl rounded-3xl glass-panel border border-av-sky/40 shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col bg-av-dark text-av-light hud-corner-box"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Ribbon */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-av-blue via-av-blue/70 to-av-navy border-b border-av-steel/30 flex-shrink-0 flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-av-sky/20 border border-av-sky/40 text-av-sky shadow-glow-cyan flex-shrink-0">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h2 className="text-base sm:text-2xl font-display font-black text-white truncate">
                Multi-Domain Tactical Benchmark Station
              </h2>
              <p className="text-[10px] sm:text-xs font-mono text-av-mist truncate">
                Head-to-head deterministic airframe combat analysis
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              tacticalAudio.playClick();
              onClose();
            }}
            className="p-2 sm:p-2.5 rounded-2xl bg-av-navy/80 text-av-mist hover:text-white hover:bg-rose-500/20 hover:border-rose-500/50 border border-av-steel/40 transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
          
          {/* Fighter vs Fighter Showdown Header Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative">
            
            {/* VS Badge in Center (Desktop) & Center Divider (Mobile) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-av-navy border-2 border-av-sky shadow-glow-cyan items-center justify-center font-display font-black text-sm text-av-sky">
              VS
            </div>

            {/* Aircraft A Card */}
            <div className="p-4 sm:p-5 rounded-3xl glass-panel border border-cyan-500/40 space-y-3 sm:space-y-4 bg-gradient-to-b from-cyan-950/30 to-av-dark hud-corner-box">
              <div className="flex items-center justify-between gap-2 sm:gap-3">
                <select
                  value={aircraftA.name}
                  onChange={(e) => {
                    const match = allAircraft.find((a) => a.name === e.target.value);
                    if (match && onSelectAircraftA) {
                      tacticalAudio.playLock();
                      onSelectAircraftA(match);
                    }
                  }}
                  className="bg-av-navy/90 border border-cyan-500/40 text-white font-display font-bold text-sm sm:text-lg rounded-xl px-2.5 sm:px-3 py-1.5 focus:outline-none focus:border-av-sky w-full font-sans cursor-pointer truncate"
                >
                  {allAircraft.map((a) => (
                    <option key={a.name} value={a.name} className="bg-av-dark text-white font-sans">
                      {a.name} ({a.country})
                    </option>
                  ))}
                </select>
                
                <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-[10px] sm:text-xs font-mono font-black whitespace-nowrap flex-shrink-0">
                  {tvrA.toFixed(1)} TVR
                </span>
              </div>

              <div className="h-32 sm:h-40 rounded-2xl overflow-hidden border border-av-steel/30 bg-av-navy">
                <img src={aircraftA.imageUrl} alt={aircraftA.name} className="w-full h-full object-cover" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded-xl bg-av-navy/80 border border-av-steel/20">
                  <span className="text-av-mist block text-[10px]">Speed:</span>
                  <span className="text-white font-bold text-[11px] truncate block">{aircraftA.topSpeedMach ? `Mach ${aircraftA.topSpeedMach}` : 'Mach 2.0'}</span>
                </div>
                <div className="p-2 rounded-xl bg-av-navy/80 border border-av-steel/20">
                  <span className="text-av-mist block text-[10px]">Radar Reach:</span>
                  <span className="text-cyan-300 font-bold text-[11px] truncate block">{aircraftA.radarRangeAirKm ? `${aircraftA.radarRangeAirKm} km` : '200+ km'}</span>
                </div>
                <div className="p-2 rounded-xl bg-av-navy/80 border border-av-steel/20">
                  <span className="text-av-mist block text-[10px]">Stealth:</span>
                  <span className="text-purple-300 font-bold text-[11px] truncate block">{aircraftA.stealthLevel?.replace('_', ' ') || 'REDUCED'}</span>
                </div>
                <div className="p-2 rounded-xl bg-av-navy/80 border border-av-steel/20">
                  <span className="text-av-mist block text-[10px]">Combat Radius:</span>
                  <span className="text-emerald-400 font-bold text-[11px] truncate block">{aircraftA.combatRangeKm ? `${aircraftA.combatRangeKm} km` : '1,500 km'}</span>
                </div>
              </div>
            </div>

            {/* Mobile VS Pill */}
            <div className="md:hidden flex items-center justify-center -my-2 z-10">
              <span className="px-3 py-0.5 rounded-full bg-av-navy border border-av-sky text-av-sky text-[10px] font-mono font-bold shadow-glow-cyan">
                VS SHOWDOWN
              </span>
            </div>

            {/* Aircraft B Card */}
            <div className="p-4 sm:p-5 rounded-3xl glass-panel border border-emerald-500/40 space-y-3 sm:space-y-4 bg-gradient-to-b from-emerald-950/30 to-av-dark hud-corner-box">
              <div className="flex items-center justify-between gap-2 sm:gap-3">
                <select
                  value={secondAircraft.name}
                  onChange={(e) => {
                    const match = allAircraft.find((a) => a.name === e.target.value);
                    if (match && onSelectAircraftB) {
                      tacticalAudio.playLock();
                      onSelectAircraftB(match);
                    }
                  }}
                  className="bg-av-navy/90 border border-emerald-500/40 text-white font-display font-bold text-sm sm:text-lg rounded-xl px-2.5 sm:px-3 py-1.5 focus:outline-none focus:border-emerald-400 w-full font-sans cursor-pointer truncate"
                >
                  {allAircraft.map((a) => (
                    <option key={a.name} value={a.name} className="bg-av-dark text-white font-sans">
                      {a.name} ({a.country})
                    </option>
                  ))}
                </select>

                <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] sm:text-xs font-mono font-black whitespace-nowrap flex-shrink-0">
                  {tvrB.toFixed(1)} TVR
                </span>
              </div>

              <div className="h-32 sm:h-40 rounded-2xl overflow-hidden border border-av-steel/30 bg-av-navy">
                <img src={secondAircraft.imageUrl} alt={secondAircraft.name} className="w-full h-full object-cover" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded-xl bg-av-navy/80 border border-av-steel/20">
                  <span className="text-av-mist block text-[10px]">Speed:</span>
                  <span className="text-white font-bold text-[11px] truncate block">{secondAircraft.topSpeedMach ? `Mach ${secondAircraft.topSpeedMach}` : 'Mach 2.0'}</span>
                </div>
                <div className="p-2 rounded-xl bg-av-navy/80 border border-av-steel/20">
                  <span className="text-av-mist block text-[10px]">Radar Reach:</span>
                  <span className="text-cyan-300 font-bold text-[11px] truncate block">{secondAircraft.radarRangeAirKm ? `${secondAircraft.radarRangeAirKm} km` : '200+ km'}</span>
                </div>
                <div className="p-2 rounded-xl bg-av-navy/80 border border-av-steel/20">
                  <span className="text-av-mist block text-[10px]">Stealth:</span>
                  <span className="text-purple-300 font-bold text-[11px] truncate block">{secondAircraft.stealthLevel?.replace('_', ' ') || 'REDUCED'}</span>
                </div>
                <div className="p-2 rounded-xl bg-av-navy/80 border border-av-steel/20">
                  <span className="text-av-mist block text-[10px]">Combat Radius:</span>
                  <span className="text-emerald-400 font-bold text-[11px] truncate block">{secondAircraft.combatRangeKm ? `${secondAircraft.combatRangeKm} km` : '1,500 km'}</span>
                </div>
              </div>
            </div>
          </div>


          {/* 7-Pillar Capability Comparison Bars */}
          <div className="glass-panel p-6 rounded-3xl border border-av-steel/30 space-y-4 hud-corner-box">
            <div className="flex items-center justify-between border-b border-av-steel/20 pb-3">
              <h3 className="text-sm font-display font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-av-sky" />
                <span>Head-to-Head 7-Pillar Capability Delta Matrix</span>
              </h3>
              <span className="text-xs font-mono text-av-mist">Scores Calibrated (0–100)</span>
            </div>

            <div className="space-y-4 font-mono">
              {matrixDimensions.map((dim) => {
                const Icon = dim.icon;
                const diff = (dim.scoreA - dim.scoreB).toFixed(0);
                return (
                  <div key={dim.id} className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                        <span>{aircraftA.name.split(' ')[0]}</span>
                        <span>({dim.scoreA})</span>
                      </span>
                      
                      <span className="text-white font-bold flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-av-sky" />
                        <span>{dim.label}</span>
                      </span>

                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <span>({dim.scoreB})</span>
                        <span>{secondAircraft.name.split(' ')[0]}</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 h-2.5 rounded-full overflow-hidden bg-av-navy p-0.5 border border-av-steel/20">
                      <div className="flex justify-end">
                        <div 
                          className="h-full bg-cyan-400 rounded-l-full transition-all duration-500" 
                          style={{ width: `${dim.scoreA}%` }} 
                        />
                      </div>
                      <div className="flex justify-start">
                        <div 
                          className="h-full bg-emerald-400 rounded-r-full transition-all duration-500" 
                          style={{ width: `${dim.scoreB}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tactical Mission Scenario Simulator */}
          <div className="glass-panel p-6 rounded-3xl border border-av-sky/30 space-y-4 bg-gradient-to-r from-av-blue/30 via-av-dark to-av-blue/30 hud-corner-box">
            <div className="flex items-center justify-between border-b border-av-steel/20 pb-3 flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <Crosshair className="w-5 h-5 text-av-sky animate-pulse" />
                <h3 className="text-sm sm:text-base font-display font-bold text-white">
                  Simulated Combat Engagement Arena
                </h3>
              </div>
              <div className="text-xs font-mono text-av-sky font-bold">
                Deterministic Outcome Model
              </div>
            </div>

            {/* Scenario Selector Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
              {missionScenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    tacticalAudio.playTab();
                    setSelectedMission(sc.id);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                    selectedMission === sc.id
                      ? 'bg-av-sky text-av-navy font-bold shadow-glow-cyan scale-105'
                      : 'bg-av-navy/80 text-av-mist hover:text-white border border-av-steel/30'
                  }`}
                >
                  {sc.name}
                </button>
              ))}
            </div>

            {/* Scenario Result Breakdown Card */}
            <div className="p-4 rounded-2xl bg-av-navy/90 border border-av-steel/30 space-y-3 font-mono">
              <div className="text-xs text-av-light/80 font-sans leading-relaxed">
                {currentScenario.desc}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className={`p-4 rounded-2xl border transition-all ${
                  scoreScenarioA >= scoreScenarioB 
                    ? 'bg-cyan-950/40 border-cyan-400/60 shadow-glow-cyan' 
                    : 'bg-av-dark/80 border-av-steel/20 opacity-70'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{aircraftA.name}</span>
                    {scoreScenarioA >= scoreScenarioB && (
                      <span className="px-2 py-0.5 rounded bg-cyan-500 text-av-navy text-[10px] font-black">
                        TACTICAL ADVANTAGE
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-black text-cyan-300 mt-2">{scoreScenarioA.toFixed(1)}/100</div>
                </div>

                <div className={`p-4 rounded-2xl border transition-all ${
                  scoreScenarioB >= scoreScenarioA 
                    ? 'bg-emerald-950/40 border-emerald-400/60 shadow-glow-green' 
                    : 'bg-av-dark/80 border-av-steel/20 opacity-70'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{secondAircraft.name}</span>
                    {scoreScenarioB >= scoreScenarioA && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500 text-av-navy text-[10px] font-black">
                        TACTICAL ADVANTAGE
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-black text-emerald-400 mt-2">{scoreScenarioB.toFixed(1)}/100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
