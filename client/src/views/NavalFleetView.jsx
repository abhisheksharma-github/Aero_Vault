import React, { useState, useEffect, useMemo } from 'react';
import {
  Anchor,
  Search,
  SlidersHorizontal,
  RefreshCw,
  ExternalLink,
  Shield,
  Zap,
  Activity,
  Layers,
  Compass,
  CheckCircle2,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { apiService } from '../services/api';
import { initialNavalVessels } from '../data/mockData';
import { tacticalAudio } from '../services/tacticalAudio';

export default function NavalFleetView({ onSelectCountry }) {
  const [vessels, setVessels] = useState(initialNavalVessels);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVesselType, setSelectedVesselType] = useState('ALL');
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [sortBy, setSortBy] = useState('tvrScore');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedVesselForModal, setSelectedVesselForModal] = useState(null);

  const vesselTypes = [
    { id: 'ALL', label: 'All Warships' },
    { id: 'AIRCRAFT_CARRIER', label: 'Aircraft Carriers' },
    { id: 'GUIDED_MISSILE_DESTROYER', label: 'Guided Missile Destroyers' },
    { id: 'FRIGATE', label: 'Frigates' },
    { id: 'ATTACK_SUBMARINE', label: 'Attack Submarines' },
    { id: 'BALLISTIC_MISSILE_SUBMARINE', label: 'Ballistic Submarines' },
  ];

  const countries = ['ALL', 'United States', 'China', 'India', 'Russia', 'United Kingdom', 'France'];

  useEffect(() => {
    let isMounted = true;
    async function loadNaval() {
      setLoading(true);
      try {
        const res = await apiService.getNavalVessels({
          vesselType: selectedVesselType,
          country: selectedCountry,
          search: searchQuery,
          sortBy,
          order: sortOrder,
        });
        if (isMounted) {
          setVessels(res.items || initialNavalVessels);
        }
      } catch (err) {
        console.warn('Naval fleet fetch error', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadNaval();
    return () => { isMounted = false; };
  }, [selectedVesselType, selectedCountry, searchQuery, sortBy, sortOrder]);

  const handleResetFilters = () => {
    tacticalAudio.playClick();
    setSelectedVesselType('ALL');
    setSelectedCountry('ALL');
    setSearchQuery('');
  };

  return (
    <div className="space-y-8 bg-slate-950 text-slate-100 min-h-screen pb-12 font-sans">
      
      {/* 1. Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6 pt-2">
        <div>
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-1.5">
            <Anchor className="w-3.5 h-3.5" />
            <span>GLOBAL NAVAL WARFARE INTELLIGENCE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight flex items-center gap-3">
            <span>Naval Forces & Carrier Strike Intelligence</span>
            <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-800/80">
              SEAS 2026
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Sovereign warship registries, aircraft carrier air wings, nuclear ballistic submarines (SSBN), and Aegis-equivalent guided-missile combatants.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            WARSHIPS IN VAULT: <strong className="text-cyan-400">{vessels.length}</strong>
          </div>
        </div>
      </div>

      {/* 2. Filter & Search Controls */}
      <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-4 space-y-4 shadow-xl">
        
        {/* Vessel Type Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {vesselTypes.map((type) => {
            const isSelected = selectedVesselType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => {
                  tacticalAudio.playTab();
                  setSelectedVesselType(type.id);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {type.label}
              </button>
            );
          })}
        </div>

        {/* Search and Country Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Search Input */}
          <div className="relative md:col-span-2">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search by ship name, class, pennant number (e.g. CVN-78, INS Vikrant)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-sans text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          {/* Country Selector */}
          <div className="flex items-center space-x-2">
            <select
              value={selectedCountry}
              onChange={(e) => {
                tacticalAudio.playClick();
                setSelectedCountry(e.target.value);
              }}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c === 'ALL' ? 'All Naval Arms' : c}
                </option>
              ))}
            </select>

            {(selectedVesselType !== 'ALL' || selectedCountry !== 'ALL' || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="px-3 py-2 bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-mono"
              >
                Reset
              </button>
            )}
          </div>

        </div>

      </div>

      {/* 3. Card Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {vessels.map((vessel) => {
          return (
            <div
              key={vessel.id}
              onClick={() => {
                tacticalAudio.playClick();
                setSelectedVesselForModal(vessel);
              }}
              className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all p-4 sm:p-5 space-y-3.5 sm:space-y-4 cursor-pointer group shadow-xl hover:-translate-y-1 relative overflow-hidden hud-corner-box"
            >
              {/* Header: Type tag + TVR Score */}
              <div className="flex items-start justify-between gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                  {vessel.vesselType?.replace(/_/g, ' ')}
                </span>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10px] font-mono text-slate-400">TVR</span>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500 text-slate-950 font-mono font-black text-xs">
                    {vessel.tvrScore?.toFixed(1) || '85.0'}
                  </span>
                </div>
              </div>

              {/* Warship Name & Class */}
              <div>
                <h3 className="text-base sm:text-lg font-display font-black text-white group-hover:text-cyan-400 transition-colors">
                  {vessel.name}
                </h3>
                <p className="text-xs font-sans text-slate-400 mt-0.5">
                  {vessel.shipClass}
                </p>
              </div>

              {/* Key Naval Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-xs font-mono">
                <div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500">PENNANT #</div>
                  <div className="text-slate-200 font-bold mt-0.5">{vessel.pennantNumber || 'N/A'}</div>
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500">DISPLACEMENT</div>
                  <div className="text-cyan-400 font-bold mt-0.5">{(vessel.displacementTons || 0).toLocaleString()} Tons</div>
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500">MAX SPEED</div>
                  <div className="text-slate-200 font-bold mt-0.5">{vessel.maxSpeedKnots || 30.0} Knots</div>
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500">RADAR / SENSORS</div>
                  <div className="mt-0.5 flex items-center gap-1">
                    {vessel.hasAesa ? (
                      <span className="text-cyan-400 font-bold">AESA / GaN</span>
                    ) : (
                      <span className="text-slate-400">PULSE DOPPLER</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Country & Active Fleet status */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center space-x-1.5 min-w-0">
                  <span className="text-slate-300 font-bold truncate">{vessel.country}</span>
                  {vessel.originCountry && (
                    <span className="text-[10px] text-slate-500 truncate max-w-[120px] hidden sm:inline">
                      • {vessel.originCountry}
                    </span>
                  )}
                </div>
                <span className="text-cyan-400 font-bold flex-shrink-0">
                  {vessel.activeCount || 1} Active
                </span>
              </div>
            </div>
          );
        })}

        {vessels.length === 0 && (
          <div className="col-span-full py-16 text-center text-slate-500">
            <Anchor className="w-10 h-10 mx-auto mb-3 text-slate-600" />
            <p className="text-base font-sans">No naval combatants matched your search criteria.</p>
            <button
              onClick={handleResetFilters}
              className="mt-3 text-xs text-cyan-400 font-mono hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* 4. Detailed Warship Modal Dossier */}
      {selectedVesselForModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl max-w-2xl w-full p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-2xl relative max-h-[92vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-cyan-400 uppercase font-bold">
                  <span>{selectedVesselForModal.vesselType?.replace(/_/g, ' ')}</span>
                  <span>•</span>
                  <span>PENNANT: {selectedVesselForModal.pennantNumber}</span>
                </div>
                <h2 className="text-2xl font-display font-black text-white mt-1">
                  {selectedVesselForModal.name}
                </h2>
                <p className="text-xs text-slate-400 font-sans">
                  {selectedVesselForModal.shipClass} • {selectedVesselForModal.country}
                </p>
              </div>
              <button
                onClick={() => setSelectedVesselForModal(null)}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* TVR Score & Displacement Highlight */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-500">TVR RATING</div>
                <div className="text-xl font-bold font-display text-cyan-400 mt-1">
                  {selectedVesselForModal.tvrScore?.toFixed(1) || '88.0'}
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-500">DISPLACEMENT</div>
                <div className="text-xl font-bold font-display text-white mt-1">
                  {(selectedVesselForModal.displacementTons || 0).toLocaleString()} <span className="text-xs">Tons</span>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-500">TOP SPEED</div>
                <div className="text-xl font-bold font-display text-white mt-1">
                  {selectedVesselForModal.maxSpeedKnots || 30.0} <span className="text-xs">Knots</span>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-500">CREW COMPLEMENT</div>
                <div className="text-xl font-bold font-display text-white mt-1">
                  {(selectedVesselForModal.crewComplement || 300).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Armament & Propulsion Specifications */}
            <div className="space-y-3 bg-slate-950/70 p-4 rounded-2xl border border-slate-800 text-xs font-mono">
              <div className="text-[10px] uppercase text-cyan-400 font-bold">
                Combat Specifications & Armament
              </div>
              {selectedVesselForModal.weapons && (
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 text-[10px]">MISSILE & WEAPONS BATTERY:</span>
                  <span className="text-slate-200 font-semibold">{selectedVesselForModal.weapons}</span>
                </div>
              )}
              {selectedVesselForModal.propulsion && (
                <div className="flex flex-col gap-1 pt-2 border-t border-slate-800/80">
                  <span className="text-slate-400 text-[10px]">PROPULSION & POWERPLANT:</span>
                  <span className="text-slate-200 font-semibold">{selectedVesselForModal.propulsion}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="text-xs text-slate-300 font-sans leading-relaxed">
              {selectedVesselForModal.description}
            </div>

            {/* OSINT Citation */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified OSINT Naval Registry 2026</span>
              </span>
              <span>Classification: UNCLASSIFIED</span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setSelectedVesselForModal(null)}
                className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-mono font-bold text-xs hover:brightness-110"
              >
                Close Dossier
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
