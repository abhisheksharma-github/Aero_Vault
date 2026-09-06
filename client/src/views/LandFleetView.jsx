import React, { useState, useEffect } from 'react';
import {
  Crosshair,
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
  Flame
} from 'lucide-react';
import { apiService } from '../services/api';
import { initialGroundVehicles } from '../data/mockData';
import { tacticalAudio } from '../services/tacticalAudio';

export default function LandFleetView({ onSelectCountry }) {
  const [vehicles, setVehicles] = useState(initialGroundVehicles);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [sortBy, setSortBy] = useState('tvrScore');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedVehicleForModal, setSelectedVehicleForModal] = useState(null);

  const categories = [
    { id: 'ALL', label: 'All Ground Armor' },
    { id: 'MAIN_BATTLE_TANK', label: 'Main Battle Tanks (MBT)' },
    { id: 'IFV', label: 'Infantry Fighting Vehicles (IFV)' },
    { id: 'ARTILLERY', label: 'Self-Propelled Artillery' },
    { id: 'AIR_DEFENSE', label: 'Air Defense (SAM/TEL)' },
  ];

  const countries = ['ALL', 'United States', 'China', 'India', 'Russia', 'United Kingdom', 'France'];

  useEffect(() => {
    let isMounted = true;
    async function loadLand() {
      setLoading(true);
      try {
        const res = await apiService.getGroundVehicles({
          category: selectedCategory,
          country: selectedCountry,
          search: searchQuery,
          sortBy,
          order: sortOrder,
        });
        if (isMounted) {
          setVehicles(res.items || initialGroundVehicles);
        }
      } catch (err) {
        console.warn('Ground fleet fetch error', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadLand();
    return () => { isMounted = false; };
  }, [selectedCategory, selectedCountry, searchQuery, sortBy, sortOrder]);

  const handleResetFilters = () => {
    tacticalAudio.playClick();
    setSelectedCategory('ALL');
    setSelectedCountry('ALL');
    setSearchQuery('');
  };

  return (
    <div className="space-y-8 bg-slate-950 text-slate-100 min-h-screen pb-12 font-sans">
      
      {/* 1. Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6 pt-2">
        <div>
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-1.5">
            <Crosshair className="w-3.5 h-3.5" />
            <span>GLOBAL ARMORED & LAND WARFARE RECON</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight flex items-center gap-3">
            <span>Armored Land Fleets & Ground Force Intelligence</span>
            <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-800/80">
              ARMS 2026
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Mechanized ground force inventories, main battle tanks with active protection systems (APS), self-propelled heavy artillery, and strategic SAM batteries.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            ARMOR PLATFORMS: <strong className="text-cyan-400">{vehicles.length}</strong>
          </div>
        </div>
      </div>

      {/* 2. Filter & Search Controls */}
      <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-4 space-y-4 shadow-xl">
        
        {/* Category Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  tacticalAudio.playTab();
                  setSelectedCategory(cat.id);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
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
              placeholder="Search armor by name, main armament, country (e.g. M1A2, T-90M, S-400)..."
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
                  {c === 'ALL' ? 'All Land Arms' : c}
                </option>
              ))}
            </select>

            {(selectedCategory !== 'ALL' || selectedCountry !== 'ALL' || searchQuery) && (
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

      {/* 3. Armor Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {vehicles.map((vehicle) => {
          return (
            <div
              key={vehicle.id}
              onClick={() => {
                tacticalAudio.playClick();
                setSelectedVehicleForModal(vehicle);
              }}
              className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all p-5 space-y-4 cursor-pointer group shadow-xl hover:-translate-y-1 relative overflow-hidden hud-corner-box"
            >
              {/* Header: Category tag + TVR Score */}
              <div className="flex items-start justify-between gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                  {vehicle.category?.replace(/_/g, ' ')}
                </span>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10px] font-mono text-slate-400">TVR</span>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500 text-slate-950 font-mono font-black text-xs">
                    {vehicle.tvrScore?.toFixed(1) || '85.0'}
                  </span>
                </div>
              </div>

              {/* Vehicle Name & Generation */}
              <div>
                <h3 className="text-lg font-display font-black text-white group-hover:text-cyan-400 transition-colors">
                  {vehicle.name}
                </h3>
                <p className="text-xs font-sans text-slate-400 mt-0.5">
                  {vehicle.generation || 'Armored Combat Vehicle'}
                </p>
              </div>

              {/* Specifications Grid */}
              <div className="space-y-2 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-xs font-mono">
                <div>
                  <div className="text-[10px] text-slate-500">MAIN ARMAMENT</div>
                  <div className="text-slate-200 font-bold mt-0.5 truncate">{vehicle.mainArmament || 'N/A'}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/60">
                  <div>
                    <div className="text-[10px] text-slate-500">POWERPLANT</div>
                    <div className="text-cyan-400 font-bold mt-0.5">{vehicle.enginePowerHp || 1000} HP</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">TOP SPEED</div>
                    <div className="text-slate-200 font-bold mt-0.5">{vehicle.topSpeedKmh || 60} km/h</div>
                  </div>
                </div>
              </div>

              {/* Active & Reserve Fleet status */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs font-mono text-slate-400">
                <span className="text-slate-300 font-bold">{vehicle.country}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400 font-bold">
                    {(vehicle.activeCount || 0).toLocaleString()} Active
                  </span>
                  {vehicle.reserveCount > 0 && (
                    <span className="text-[10px] text-slate-500">
                      (+{vehicle.reserveCount.toLocaleString()} Res)
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {vehicles.length === 0 && (
          <div className="col-span-full py-16 text-center text-slate-500">
            <Crosshair className="w-10 h-10 mx-auto mb-3 text-slate-600" />
            <p className="text-base font-sans">No armored vehicles matched your search criteria.</p>
            <button
              onClick={handleResetFilters}
              className="mt-3 text-xs text-cyan-400 font-mono hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* 4. Detailed Armor Dossier Modal */}
      {selectedVehicleForModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-cyan-400 uppercase font-bold">
                  <span>{selectedVehicleForModal.category?.replace(/_/g, ' ')}</span>
                  <span>•</span>
                  <span>{selectedVehicleForModal.generation}</span>
                </div>
                <h2 className="text-2xl font-display font-black text-white mt-1">
                  {selectedVehicleForModal.name}
                </h2>
                <p className="text-xs text-slate-400 font-sans">
                  {selectedVehicleForModal.country} Ground Armed Forces
                </p>
              </div>
              <button
                onClick={() => setSelectedVehicleForModal(null)}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* TVR Rating & Inventory Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-500">TVR SCORE</div>
                <div className="text-xl font-bold font-display text-cyan-400 mt-1">
                  {selectedVehicleForModal.tvrScore?.toFixed(1) || '85.0'}
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-500">ACTIVE INVENTORY</div>
                <div className="text-xl font-bold font-display text-white mt-1">
                  {(selectedVehicleForModal.activeCount || 0).toLocaleString()}
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-500">COMBAT WEIGHT</div>
                <div className="text-xl font-bold font-display text-white mt-1">
                  {selectedVehicleForModal.weightTons || 45} <span className="text-xs">Tons</span>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] text-slate-500">CREW COMPLEMENT</div>
                <div className="text-xl font-bold font-display text-white mt-1">
                  {selectedVehicleForModal.crew || 3}
                </div>
              </div>
            </div>

            {/* Armament & Survivability */}
            <div className="space-y-3 bg-slate-950/70 p-4 rounded-2xl border border-slate-800 text-xs font-mono">
              <div className="text-[10px] uppercase text-cyan-400 font-bold">
                Armament & Battlefield Survivability
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-slate-400 text-[10px]">MAIN CANNON / MISSILE SYSTEM:</span>
                <span className="text-slate-200 font-semibold">{selectedVehicleForModal.mainArmament}</span>
              </div>
              {selectedVehicleForModal.armorProtection && (
                <div className="flex flex-col gap-1 pt-2 border-t border-slate-800/80">
                  <span className="text-slate-400 text-[10px]">ARMOR & ACTIVE PROTECTION (APS):</span>
                  <span className="text-slate-200 font-semibold">{selectedVehicleForModal.armorProtection}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="text-xs text-slate-300 font-sans leading-relaxed">
              {selectedVehicleForModal.description}
            </div>

            {/* OSINT Citation */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified OSINT Armor Database 2026</span>
              </span>
              <span>Classification: UNCLASSIFIED</span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setSelectedVehicleForModal(null)}
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
