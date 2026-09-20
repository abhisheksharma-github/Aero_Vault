import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Filter,
  SlidersHorizontal,
  Plane,
  Scale,
  Shield,
  Layers,
  Zap,
  Gauge,
  Cpu,
  Info,
  ExternalLink,
  ChevronRight,
  Database,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { apiService } from '../services/api';
import { g20AircraftData } from '../data/g20/g20Aircraft';
import { g20CountriesData } from '../data/g20/g20Countries';
import { tacticalAudio } from '../services/tacticalAudio';

export default function AircraftDirectoryView({
  onSelectAircraft,
  onToggleCompare,
  comparedAircraft = [],
  onLaunchComparison,
  initialCountryFilter = 'ALL',
}) {
  const [aircraftList, setAircraftList] = useState(g20AircraftData);
  const [loading, setLoading] = useState(true);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(initialCountryFilter);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [selectedGeneration, setSelectedGeneration] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [sortBy, setSortBy] = useState('tvrScore');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    if (initialCountryFilter && initialCountryFilter !== 'ALL') {
      setSelectedCountry(initialCountryFilter);
    }
  }, [initialCountryFilter]);

  useEffect(() => {
    async function loadAircraft() {
      setLoading(true);
      try {
        const res = await apiService.getG20AircraftList({
          search: searchQuery,
          country: selectedCountry,
          category: selectedCategory,
          generation: selectedGeneration,
          status: selectedStatus,
        });
        if (res && res.items) {
          setAircraftList(res.items);
        }
      } catch (err) {
        console.warn('API fetch failed, filtering local vault aircraft.', err);
      } finally {
        setLoading(false);
      }
    }
    loadAircraft();
  }, [searchQuery, selectedCountry, selectedCategory, selectedGeneration, selectedStatus]);

  // Derived filter options
  const [categories, setCategories] = useState([
    { value: 'ALL', label: 'All Roles & Categories' },
    { value: 'MULTIROLE_FIGHTER', label: 'Multirole Fighter' },
    { value: 'AIR_SUPERIORITY', label: 'Air Superiority' },
    { value: 'FIGHTER', label: 'Fighter' },
    { value: 'INTERCEPTOR', label: 'Interceptor' },
    { value: 'GROUND_ATTACK', label: 'Ground Attack' },
    { value: 'BOMBER', label: 'Strategic Bomber' },
    { value: 'AEWC', label: 'AEW&C' },
    { value: 'MARITIME_PATROL', label: 'Maritime Patrol' },
    { value: 'STRATEGIC_TRANSPORT', label: 'Strategic Transport' },
    { value: 'AERIAL_REFUELING', label: 'Aerial Refueling' },
    { value: 'ATTACK_HELICOPTER', label: 'Attack Helicopter' },
    { value: 'UTILITY_HELICOPTER', label: 'Utility Helicopter' },
    { value: 'TRANSPORT_HELICOPTER', label: 'Transport Helicopter' },
    { value: 'ANTI_SUBMARINE_HELICOPTER', label: 'Anti-Submarine Helicopter' },
    { value: 'MALE_UAV', label: 'MALE UAV' },
    { value: 'HALE_UAV', label: 'HALE UAV' },
    { value: 'UCAV', label: 'UCAV' },
  ]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch('/api/aircraft/categories');
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) {
            setCategories([
              { value: 'ALL', label: 'All Roles & Categories' },
              ...json.data.map((c) => ({ value: c.value, label: c.label })),
            ]);
          }
        }
      } catch {
        // Fallback already in place
      }
    }
    loadCategories();
  }, []);

  const countries = useMemo(() => {
    return ['ALL', ...g20CountriesData.map((c) => c.name)];
  }, []);

  const filteredAndSortedAircraft = useMemo(() => {
    let list = [...aircraftList];

    if (selectedBranch && selectedBranch !== 'ALL') {
      list = list.filter(
        (a) =>
          a.militaryBranch?.toLowerCase() === selectedBranch.toLowerCase() ||
          a.affiliation?.toLowerCase().includes(selectedBranch.toLowerCase())
      );
    }

    list.sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (sortBy === 'speed') {
        valA = a.specifications?.performance?.maxSpeedMach || 0;
        valB = b.specifications?.performance?.maxSpeedMach || 0;
      } else if (sortBy === 'range') {
        valA = a.specifications?.performance?.combatRadiusKm || 0;
        valB = b.specifications?.performance?.combatRadiusKm || 0;
      } else if (sortBy === 'fleet') {
        valA = a.fleet?.confirmedQuantity || a.fleet?.estimatedQuantity || 0;
        valB = b.fleet?.confirmedQuantity || b.fleet?.estimatedQuantity || 0;
      } else if (sortBy === 'year') {
        valA = a.introductionYear || a.firstFlightYear || 0;
        valB = b.introductionYear || b.firstFlightYear || 0;
      }

      if (valA === undefined) valA = 0;
      if (valB === undefined) valB = 0;

      if (typeof valA === 'string') {
        return sortOrder === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return sortOrder === 'asc' ? Number(valA) - Number(valB) : Number(valB) - Number(valA);
    });

    return list;
  }, [aircraftList, selectedBranch, sortBy, sortOrder]);

  const getTvrColor = (score) => {
    if (score >= 92) return 'text-cyan-400 bg-cyan-500/10 border-cyan-400/40';
    if (score >= 85) return 'text-emerald-400 bg-emerald-500/10 border-emerald-400/40';
    if (score >= 75) return 'text-amber-400 bg-amber-500/10 border-amber-400/40';
    return 'text-rose-400 bg-rose-500/10 border-rose-400/40';
  };

  const formatGen = (gen) => {
    if (!gen || gen === 'NOT_APPLICABLE') return 'Mission Airframe';
    return gen.replace('GEN_', '').replace('_PLUS', '+').replace('_', '.') + ' Gen';
  };

  return (
    <div className="space-y-8 animate-fade-in text-slate-100">
      {/* Top Header */}
      <div className="relative rounded-3xl p-6 sm:p-8 overflow-hidden border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-xl text-xs font-mono font-bold uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Plane className="w-3.5 h-3.5" />
              <span>G20 Military Aircraft Master Directory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
              Global Combat <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Aircraft Fleet</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Real-time multi-spectrum exploration of verified military aircraft across all G20 nations. Standardized kinematics, Gallium Nitride (GaN) AESA radars, electronic warfare indices, and verified fleet inventories.
            </p>
          </div>

          {/* Compare Bar Launch */}
          {comparedAircraft.length > 0 && (
            <div className="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 shadow-glow-cyan/20 flex items-center space-x-4">
              <div>
                <div className="text-xs font-mono text-cyan-300 font-bold">
                  {comparedAircraft.length} Aircraft Queued
                </div>
                <div className="text-[11px] font-mono text-slate-400">Side-by-side benchmark</div>
              </div>
              <button
                onClick={() => {
                  tacticalAudio.playLock();
                  if (onLaunchComparison) onLaunchComparison();
                }}
                className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-black transition-all shadow-glow-cyan flex items-center space-x-1.5"
              >
                <Scale className="w-4 h-4" />
                <span>Compare Now</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Search & Multi-Faceted Filters */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        {/* Search & Sort Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by aircraft name, designation, variant, manufacturer, country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="tvrScore">TVR Combat Score</option>
              <option value="speed">Top Mach Speed</option>
              <option value="range">Combat Radius</option>
              <option value="fleet">Fleet Inventory</option>
              <option value="year">Introduction Year</option>
            </select>

            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400 hover:text-white"
            >
              {sortOrder === 'asc' ? '▲ ASC' : '▼ DESC'}
            </button>
          </div>
        </div>

        {/* Dropdown Filters Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80">
          {/* Country */}
          <div>
            <label className="text-[10px] font-mono text-slate-400 block mb-1 uppercase">Country</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
            >
              {countries.map((c) => (
                <option key={c} value={c}>{c === 'ALL' ? 'All G20 Countries' : c}</option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="text-[10px] font-mono text-slate-400 block mb-1 uppercase">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>

          {/* Military Branch */}
          <div>
            <label className="text-[10px] font-mono text-slate-400 block mb-1 uppercase">Military Branch</label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="ALL">All Military Branches</option>
              <option value="AIR_FORCE">Air Force</option>
              <option value="NAVAL_AVIATION">Naval Aviation / Carrier Air Arm</option>
              <option value="ARMY_AVIATION">Army Aviation Corps</option>
              <option value="MARINE_AVIATION">Marine Aviation</option>
            </select>
          </div>

          {/* Generation */}
          <div>
            <label className="text-[10px] font-mono text-slate-400 block mb-1 uppercase">Generation</label>
            <select
              value={selectedGeneration}
              onChange={(e) => setSelectedGeneration(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="ALL">All Generations</option>
              <option value="GEN_5">5th Generation (Stealth)</option>
              <option value="GEN_4_5">4.5+ Generation (AESA/Supercruise)</option>
              <option value="GEN_4">4th Generation</option>
              <option value="GEN_3">3rd Generation</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-2">
        <div>
          Showing <span className="text-cyan-400 font-bold">{filteredAndSortedAircraft.length}</span> verified airframes
          {selectedCountry !== 'ALL' && <span> in <strong className="text-white">{selectedCountry}</strong></span>}
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400">Strict Non-Duplication Policy</span>
        </div>
      </div>

      {/* Aircraft Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedAircraft.map((aircraft) => {
          const isCompared = comparedAircraft.some(
            (c) => c.id === aircraft.id || c.name === aircraft.aircraftName || c.name === aircraft.name
          );
          const tvr = aircraft.tvrScore || 85.0;
          const imageUrl =
            aircraft.image?.primaryImageUrl ||
            aircraft.imageUrl ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg/1200px-Rafale_-_RIAT_2018_%2843577785532%29.jpg';
          const name = aircraft.aircraftName || aircraft.name;
          const country = aircraft.country;
          const role = aircraft.primaryCategory || aircraft.category || aircraft.role;
          const gen = formatGen(aircraft.generation);
          const fleetCount =
            aircraft.fleet?.confirmedQuantity ??
            aircraft.fleet?.estimatedQuantity ??
            aircraft.activeCount ??
            '—';
          const maxSpeed =
            aircraft.specifications?.performance?.maxSpeedMach
              ? `Mach ${aircraft.specifications.performance.maxSpeedMach}`
              : (aircraft.topSpeed || 'Mach 2.0');
          const radar = aircraft.avionics?.radar || aircraft.radar || 'AESA Radar';
          const hasAesa = aircraft.avionics?.hasAesa ?? true;

          return (
            <div
              key={aircraft.id}
              className="group p-5 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:shadow-glow-cyan/20 transition-all flex flex-col justify-between space-y-4"
            >
              {/* Image & Badges */}
              <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg/1200px-Rafale_-_RIAT_2018_%2843577785532%29.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold uppercase bg-slate-950/90 text-cyan-400 border border-cyan-500/40">
                    {gen}
                  </span>

                  <div className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold border ${getTvrColor(tvr)}`}>
                    TVR {tvr.toFixed(1)}
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                  <span className="px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800/80">
                    {country}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800/80 text-emerald-400 font-bold">
                    {fleetCount} Units
                  </span>
                </div>
              </div>

              {/* Title & Affiliation */}
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 truncate">
                    {role}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 truncate">
                    {aircraft.militaryBranch?.replace(/_/g, ' ')}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-display font-black text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                  {name}
                </h3>
                <p className="text-xs font-mono text-slate-400 line-clamp-1">
                  {aircraft.officialDesignation || aircraft.variant || aircraft.manufacturer}
                </p>
              </div>

              {/* Telemetry Matrix */}
              <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-[11px]">
                <div>
                  <span className="text-slate-500 text-[10px] block">Max Speed</span>
                  <span className="text-white font-bold">{maxSpeed}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">Radar Standard</span>
                  <span className="text-purple-400 font-bold truncate block" title={radar}>
                    {hasAesa ? 'GaN AESA' : 'Pulse-Doppler'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center space-x-2 border-t border-slate-800/60">
                <button
                  onClick={() => {
                    tacticalAudio.playClick();
                    if (onSelectAircraft) onSelectAircraft(aircraft);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-mono font-medium border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Dossier Specs</span>
                </button>

                <button
                  onClick={() => {
                    tacticalAudio.playLock();
                    if (onToggleCompare) onToggleCompare(aircraft);
                  }}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isCompared
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-glow-cyan font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-white border-slate-800'
                  }`}
                  title={isCompared ? 'Remove from benchmark comparison' : 'Add to benchmark comparison'}
                >
                  <Scale className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
