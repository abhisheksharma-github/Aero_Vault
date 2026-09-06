import React, { useState, useMemo } from 'react';
import AircraftCard from './AircraftCard';
import {
  Plane,
  Crosshair,
  Anchor,
  Filter,
  ArrowUpDown,
  Layers,
  Shield,
  Gauge,
  Sparkles
} from 'lucide-react';
import { tacticalAudio } from '../services/tacticalAudio';

export default function BranchFleetView({
  branchKey,
  aircraftList = [],
  loading,
  onSelectAircraft,
  comparisonList = [],
  onToggleCompare,
  onOpenComparison,
}) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [sortBy, setSortBy] = useState('tvrScore');
  const [sortOrder, setSortOrder] = useState('desc');

  // Branch Profile Details
  const branchMeta = {
    AIR_FORCE: {
      title: 'Air Force Global Fleets',
      icon: Plane,
      description: 'Strategic air dominance fighters, supersonic bombers, tactical transports, aerial tankers, and AEW&C airborne surveillance.',
      badge: 'AIR SUPERIORITY & STRATEGIC REACH',
      accent: 'from-av-sky/20 via-av-blue to-av-navy',
      border: 'border-av-sky/40',
      categories: ['ALL', 'MULTIROLE_FIGHTER', 'AIR_SUPERIORITY', 'BOMBER', 'AEWC', 'STRATEGIC_TRANSPORT', 'AERIAL_REFUELING', 'MALE_UAV'],
    },
    ARMY_AVIATION: {
      title: 'Army Aviation Combat Arms',
      icon: Crosshair,
      description: 'Dedicated high-altitude attack helicopters, battlefield anti-tank interdiction, armed reconnaissance, and organic tactical drones.',
      badge: 'BATTLEFIELD AIR MOBILITY & CLOSE SUPPORT',
      accent: 'from-emerald-500/20 via-av-blue to-av-navy',
      border: 'border-emerald-500/40',
      categories: ['ALL', 'ATTACK_HELICOPTER', 'UTILITY_HELICOPTER', 'TRANSPORT_HELICOPTER', 'MALE_UAV', 'RECON_UAV'],
    },
    NAVAL_AVIATION: {
      title: 'Naval & Carrier Aviation Wings',
      icon: Anchor,
      description: 'Catapult (CATOBAR) and ski-jump (STOBAR) carrier strike fighters, anti-submarine warfare (ASW) hunting, and maritime patrol.',
      badge: 'MARITIME FORCE PROJECTION & SUB-SURFACE ASW',
      accent: 'from-blue-500/20 via-av-blue to-av-navy',
      border: 'border-blue-400/40',
      categories: ['ALL', 'MULTIROLE_FIGHTER', 'FIGHTER', 'MARITIME_PATROL', 'ANTI_SUBMARINE_HELICOPTER', 'NAVAL_HELICOPTER', 'MALE_UAV'],
    },
  }[branchKey] || {
    title: 'Military Branch Fleets',
    icon: Plane,
    description: 'Tactical military aircraft inventory.',
    badge: 'MILITARY AVIATION',
    accent: 'from-av-blue via-av-blue/40 to-av-navy',
    border: 'border-av-steel/40',
    categories: ['ALL'],
  };

  const BranchIcon = branchMeta.icon;

  // Filter aircraft belonging to this branch
  const filteredAircraft = useMemo(() => {
    return aircraftList.filter((a) => {
      if (a.militaryBranch !== branchKey) return false;
      if (selectedCategory !== 'ALL' && a.category !== selectedCategory) return false;
      if (selectedCountry !== 'ALL' && a.country.toLowerCase() !== selectedCountry.toLowerCase()) return false;
      return true;
    }).sort((a, b) => {
      const valA = a[sortBy] ?? 0;
      const valB = b[sortBy] ?? 0;
      const order = sortOrder === 'asc' ? 1 : -1;
      if (typeof valA === 'string') return valA.localeCompare(String(valB)) * order;
      return (Number(valA) - Number(valB)) * order;
    });
  }, [aircraftList, branchKey, selectedCategory, selectedCountry, sortBy, sortOrder]);

  const uniqueCountries = useMemo(() => {
    const list = aircraftList.filter((a) => a.militaryBranch === branchKey).map((a) => a.country);
    return ['ALL', ...Array.from(new Set(list))];
  }, [aircraftList, branchKey]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Branch Banner Header */}
      <div className={`rounded-3xl p-6 sm:p-8 glass-panel border ${branchMeta.border} bg-gradient-to-r ${branchMeta.accent} hud-corner-box`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-av-sky/10 border border-av-sky/30 text-av-sky text-xs font-mono font-bold">
              <BranchIcon className="w-3.5 h-3.5" />
              <span>{branchMeta.badge}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black text-white">{branchMeta.title}</h1>
            <p className="text-xs sm:text-sm text-av-light/85 max-w-2xl leading-relaxed font-sans">
              {branchMeta.description}
            </p>
          </div>

          <div className="px-5 py-3 rounded-2xl bg-av-navy/90 border border-av-steel/40 text-right font-mono self-stretch sm:self-auto">
            <div className="text-[10px] text-av-mist uppercase">Branch Assets In Vault</div>
            <div className="text-2xl font-black text-av-sky">{filteredAircraft.length}</div>
            <div className="text-[10px] text-emerald-400 font-bold">100% Telemetry Verified</div>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="glass-panel rounded-3xl p-4 sm:p-5 border border-av-steel/30 space-y-3 font-mono text-xs hud-corner-box">
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
            <span className="text-av-mist text-[11px] uppercase flex items-center pr-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5 mr-1 text-av-sky" /> Role:
            </span>
            {branchMeta.categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    tacticalAudio.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-av-sky text-av-navy font-bold shadow-glow-cyan'
                      : 'bg-av-navy/80 text-av-mist hover:text-white border border-av-steel/30'
                  }`}
                >
                  {cat.replace(/_/g, ' ')}
                </button>
              );
            })}
          </div>

          {/* Sorter Dropdown */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-av-navy/90 border border-av-steel/30 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-av-sky" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer font-sans"
              >
                <option value="tvrScore" className="bg-av-dark">TVR Score</option>
                <option value="topSpeedMach" className="bg-av-dark">Top Speed</option>
                <option value="combatRangeKm" className="bg-av-dark">Combat Radius</option>
                <option value="fleetCount" className="bg-av-dark">Fleet Count</option>
              </select>
            </div>

            <button
              onClick={() => {
                tacticalAudio.playClick();
                setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
              }}
              className="px-2.5 py-1.5 rounded-xl bg-av-navy/90 border border-av-steel/30 text-xs font-mono text-av-light hover:text-av-sky transition-colors"
            >
              {sortOrder.toUpperCase()}
            </button>
          </div>
        </div>
      </div>

      {/* Aircraft Grid */}
      {filteredAircraft.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAircraft.map((aircraft) => (
            <AircraftCard
              key={aircraft.id || aircraft.name}
              aircraft={aircraft}
              onSelect={onSelectAircraft}
              onToggleCompare={onToggleCompare}
              isCompared={comparisonList.some((item) => (item.id && item.id === aircraft.id) || item.name === aircraft.name)}
            />
          ))}
        </div>
      ) : (
        <div className="glass-panel rounded-3xl p-12 text-center border border-av-steel/30 max-w-lg mx-auto space-y-4 hud-corner-box">
          <BranchIcon className="w-10 h-10 text-av-sky mx-auto" />
          <h3 className="text-base font-bold text-white">No aircraft found in this military branch view</h3>
          <p className="text-xs text-av-mist">Adjust your category or search filter above to display airframes.</p>
        </div>
      )}
    </div>
  );
}
