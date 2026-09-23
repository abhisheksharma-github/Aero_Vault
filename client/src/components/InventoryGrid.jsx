import React, { useState } from 'react';
import AircraftCard from './AircraftCard';
import {
  Filter,
  ArrowUpDown,
  Layers,
  ShieldCheck,
  Archive,
  Scale,
  X,
  Plane,
  Cpu,
  LayoutGrid,
  Table as TableIcon,
  Zap,
  Gauge,
  Compass,
  Anchor,
  Crosshair
} from 'lucide-react';
import { tacticalAudio } from '../services/tacticalAudio';
import TacticalImage from './TacticalImage';

const categories = [
  { id: 'ALL', label: 'All Categories' },
  { id: 'FIGHTER', label: 'Fighter Jets' },
  { id: 'BOMBER', label: 'Strategic Bombers' },
  { id: 'TRANSPORT', label: 'Heavy Airlifters' },
  { id: 'HELICOPTER', label: 'Helicopters' },
  { id: 'UAV', label: 'Unmanned (UAV)' },
  { id: 'AEWC', label: 'AEW&C / Recon' },
  { id: 'TANKER', label: 'Aerial Tankers' },
];

const generations = [
  { id: 'ALL', label: 'All Gens' },
  { id: 'GEN_5', label: '5th Gen (Stealth)' },
  { id: 'GEN_4_5', label: '4.5+ Gen (AESA)' },
  { id: 'GEN_4', label: '4th Gen' },
  { id: 'GEN_3', label: '3rd Gen' },
  { id: 'GEN_2', label: '2nd Gen' },
  { id: 'GEN_1', label: '1st Gen' },
];

const eras = [
  { id: 'ALL', label: 'All Eras (1947–2026+)' },
  { id: 'VINTAGE', label: 'Vintage (1947–60)' },
  { id: 'COLD_WAR', label: 'Cold War (1961–90)' },
  { id: 'MODERN', label: 'Modern (1991+)' },
];

const statuses = [
  { id: 'ALL', label: 'All Statuses', icon: Layers },
  { id: 'ACTIVE', label: 'In Service / Active', icon: ShieldCheck, color: 'text-emerald-400' },
  { id: 'RETIRED', label: 'Retired / Historic', icon: Archive, color: 'text-rose-400' },
];

export default function InventoryGrid({
  aircraftList = [],
  loading,
  selectedStatus,
  setSelectedStatus,
  selectedEra = 'ALL',
  setSelectedEra,
  selectedCategory,
  setSelectedCategory,
  selectedGeneration,
  setSelectedGeneration,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  onSelectAircraft,
  comparisonList = [],
  onToggleCompare,
  onOpenComparison,
  onClearFilters,
}) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  const handleCategoryClick = (catId) => {
    tacticalAudio.playClick();
    setSelectedCategory(catId);
  };

  const handleGenClick = (genId) => {
    tacticalAudio.playClick();
    if (setSelectedGeneration) setSelectedGeneration(genId);
  };

  const handleStatusClick = (stId) => {
    tacticalAudio.playClick();
    setSelectedStatus(stId);
  };

  const handleEraClick = (eraId) => {
    tacticalAudio.playClick();
    if (setSelectedEra) setSelectedEra(eraId);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Filter & Control Toolbar */}
      <div className="glass-panel rounded-3xl p-5 border border-av-steel/30 space-y-4 hud-corner-box">
        
        {/* Row 1: Status Tabs, View Switcher & Sorters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Status View Pills */}
          <div className="flex items-center p-1 rounded-2xl bg-av-dark/90 border border-av-steel/30 overflow-x-auto touch-scroll">
            {statuses.map((st) => {
              const Icon = st.icon;
              const isSelected = selectedStatus === st.id;
              return (
                <button
                  key={st.id}
                  onClick={() => handleStatusClick(st.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-av-sky/20 text-av-sky border border-av-sky/40 shadow-glow-cyan'
                      : 'text-av-mist hover:text-white hover:bg-av-blue/40'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${st.color || 'text-av-mist'}`} />
                  <span>{st.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sorters & View Switcher */}
          <div className="flex items-center justify-between sm:justify-end space-x-2 flex-wrap gap-y-2">
            {/* View Mode Toggle: Grid vs Table */}
            <div className="flex items-center p-1 rounded-xl bg-av-dark/90 border border-av-steel/30">
              <button
                onClick={() => {
                  tacticalAudio.playClick();
                  setViewMode('grid');
                }}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  viewMode === 'grid' ? 'bg-av-sky text-av-navy font-bold' : 'text-av-mist hover:text-white'
                }`}
                title="Tactical Card Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  tacticalAudio.playClick();
                  setViewMode('table');
                }}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  viewMode === 'table' ? 'bg-av-sky text-av-navy font-bold' : 'text-av-mist hover:text-white'
                }`}
                title="Avionics Tabular Data View"
              >
                <TableIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Sorter Dropdown */}
            <div className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl bg-av-dark/90 border border-av-steel/30 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-av-sky flex-shrink-0" />
              <span className="text-av-mist font-mono text-[11px] hidden xs:inline">SORT:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer font-sans text-xs max-w-[120px] sm:max-w-none"
              >
                <option value="tvrScore" className="bg-av-dark">TVR Score</option>
                <option value="topSpeedMach" className="bg-av-dark">Top Mach Speed</option>
                <option value="combatRangeKm" className="bg-av-dark">Combat Radius</option>
                <option value="fleetCount" className="bg-av-dark">Fleet Count</option>
                <option value="name" className="bg-av-dark">Model Name</option>
              </select>
            </div>

            <button
              onClick={() => {
                tacticalAudio.playClick();
                setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
              }}
              className="px-2.5 py-1.5 rounded-xl bg-av-dark/90 border border-av-steel/30 text-xs font-mono text-av-light hover:text-av-sky hover:border-av-sky/40 transition-colors"
              title="Toggle Sort Order"
            >
              {sortOrder.toUpperCase()}
            </button>
          </div>
        </div>

        {/* Row 2: Category Filter Horizontal Scrollbar */}
        <div className="flex items-center space-x-2 overflow-x-auto touch-scroll pb-1 pt-1 scrollbar-none border-t border-av-steel/20">
          <span className="text-[11px] font-mono text-av-mist uppercase flex items-center pr-2 flex-shrink-0">
            <Filter className="w-3 h-3 mr-1 text-av-sky" /> Role:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-av-sky text-av-navy font-bold shadow-glow-cyan'
                    : 'bg-av-dark/80 text-av-mist hover:text-white hover:bg-av-blue/50 border border-av-steel/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Row 3: Era Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto touch-scroll pb-1 pt-1 scrollbar-none border-t border-av-steel/15">
          <span className="text-[11px] font-mono text-av-mist uppercase flex items-center pr-2 flex-shrink-0">
            <Compass className="w-3 h-3 mr-1 text-amber-400" /> Era:
          </span>
          {eras.map((era) => {
            const isSelected = selectedEra === era.id;
            return (
              <button
                key={era.id}
                onClick={() => handleEraClick(era.id)}
                className={`flex-shrink-0 px-2.5 py-0.5 rounded-lg text-[11px] font-mono transition-all ${
                  isSelected
                    ? 'bg-amber-950 text-amber-300 border border-amber-500/50 shadow-glow-amber font-bold'
                    : 'bg-av-dark/60 text-av-mist hover:text-white hover:bg-av-blue/40 border border-av-steel/25'
                }`}
              >
                {era.label}
              </button>
            );
          })}
        </div>

        {/* Row 4: Generation Filter */}
        {(selectedCategory === 'ALL' || selectedCategory === 'FIGHTER' || selectedCategory === 'BOMBER') && (
          <div className="flex items-center space-x-2 overflow-x-auto touch-scroll pb-1 pt-1 scrollbar-none border-t border-av-steel/15">
            <span className="text-[11px] font-mono text-av-mist uppercase flex items-center pr-2 flex-shrink-0">
              <Cpu className="w-3 h-3 mr-1 text-purple-400" /> Gen:
            </span>
            {generations.map((gen) => {
              const isSelected = selectedGeneration === gen.id;
              return (
                <button
                  key={gen.id}
                  onClick={() => handleGenClick(gen.id)}
                  className={`flex-shrink-0 px-2.5 py-0.5 rounded-lg text-[11px] font-mono transition-all ${
                    isSelected
                      ? 'bg-purple-950 text-purple-300 border border-purple-500/50 shadow-glow-cyan font-bold'
                      : 'bg-av-dark/60 text-av-mist hover:text-white hover:bg-av-blue/40 border border-av-steel/25'
                  }`}
                >
                  {gen.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Comparison Floating Quick Dock */}
      {comparisonList.length > 0 && (
        <div className="sticky top-16 sm:top-20 z-30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-av-blue/95 via-av-dark/95 to-av-blue/95 border border-av-sky/40 shadow-glow-cyan backdrop-blur-xl animate-fade-in">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="p-2 rounded-xl bg-av-sky/20 text-av-sky flex-shrink-0">
              <Scale className="w-5 h-5 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Tactical Benchmark Dock</span>
                <span className="px-1.5 py-0.2 rounded bg-av-sky text-av-navy text-[10px] font-mono font-black">
                  {comparisonList.length}/2 Ready
                </span>
              </div>
              <div className="text-[11px] font-mono text-av-mist truncate max-w-[200px] xs:max-w-xs sm:max-w-md">
                {comparisonList.map((a) => a.name).join(' vs ')}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-2">
            {comparisonList.length === 2 && (
              <button
                onClick={() => {
                  tacticalAudio.playLaunch();
                  onOpenComparison();
                }}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-av-sky to-cyan-400 text-av-navy shadow-glow-cyan hover:brightness-110 transition-all font-mono uppercase tracking-wider text-center"
              >
                Launch Showdown →
              </button>
            )}
            {comparisonList.length === 1 && (
              <span className="text-[11px] text-av-sky font-mono animate-pulse">
                Click 2nd platform to compare
              </span>
            )}
          </div>
        </div>
      )}

      {/* Main Display: Grid vs Table Mode */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-80 rounded-3xl bg-av-dark/60 border border-av-steel/20 animate-pulse p-4 space-y-4">
              <div className="h-40 bg-av-blue/40 rounded-2xl" />
              <div className="h-4 bg-av-blue/40 rounded w-3/4" />
              <div className="h-3 bg-av-blue/40 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : aircraftList.length > 0 ? (
        viewMode === 'grid' ? (
          /* Tactical Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {aircraftList.map((aircraft) => (
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
          /* Avionics Tabular Data View */
          <div className="glass-panel rounded-3xl border border-av-steel/30 overflow-hidden shadow-xl hud-corner-box">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-av-blue/50 text-[10px] font-mono text-av-mist uppercase tracking-wider border-b border-av-steel/30">
                  <tr>
                    <th className="p-4">Platform & Variant</th>
                    <th className="p-4">Origin / Operator</th>
                    <th className="p-4">Branch</th>
                    <th className="p-4">Generation</th>
                    <th className="p-4">Top Speed</th>
                    <th className="p-4">Combat Range</th>
                    <th className="p-4">Fleet</th>
                    <th className="p-4 text-right">TVR Score</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-av-steel/15 font-mono">
                  {aircraftList.map((a) => (
                    <tr 
                      key={a.id || a.name}
                      onClick={() => onSelectAircraft(a)}
                      className="hover:bg-av-sky/5 cursor-pointer transition-colors"
                    >
                      <td className="p-4 font-sans font-bold text-white flex items-center gap-3">
                        <div className="w-10 h-8 rounded-lg overflow-hidden border border-av-steel/30 flex-shrink-0 bg-av-navy">
                          <TacticalImage
                            src={a.imageUrl || a.image?.primaryImageUrl}
                            alt={a.name}
                            name={a.name}
                            country={a.country}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="truncate max-w-xs">{a.name}</span>
                      </td>
                      <td className="p-4 text-av-light">{a.country}</td>
                      <td className="p-4 text-av-sky">{a.militaryBranch?.replace('_', ' ')}</td>
                      <td className="p-4 text-purple-300">{a.generation?.replace('GEN_', '').replace('_', '.')} Gen</td>
                      <td className="p-4 text-av-light">{a.topSpeedMach ? `Mach ${a.topSpeedMach}` : (a.topSpeed || '—')}</td>
                      <td className="p-4 text-emerald-400">{a.combatRangeKm ? `${a.combatRangeKm} km` : '—'}</td>
                      <td className="p-4 text-white font-bold">{a.fleetCount || a.activeCount || '1+'}</td>
                      <td className="p-4 text-right">
                        <span className="px-2 py-0.5 rounded-md bg-av-sky/15 text-av-sky border border-av-sky/30 font-bold">
                          {(a.tvrScore || 80).toFixed(1)}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            tacticalAudio.playLock();
                            onToggleCompare(a);
                          }}
                          className={`px-2 py-1 rounded-lg text-[10px] font-mono border transition-all ${
                            comparisonList.some((item) => item.name === a.name)
                              ? 'bg-av-sky text-av-navy border-av-sky font-bold'
                              : 'bg-av-navy text-av-mist hover:text-white border-av-steel/30'
                          }`}
                        >
                          {comparisonList.some((item) => item.name === a.name) ? 'COMPARING' : '+ COMPARE'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      ) : (
        /* Empty State */
        <div className="glass-panel rounded-3xl p-12 text-center border border-av-steel/30 max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-av-blue/40 border border-av-sky/30 flex items-center justify-center mx-auto text-av-sky shadow-glow-cyan">
            <Plane className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">
              No matching airframes found
            </h3>
            <p className="text-xs text-av-mist leading-relaxed max-w-sm mx-auto">
              No aircraft match your current filter parameters in the telemetry vault.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                tacticalAudio.playClick();
                onClearFilters();
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-av-sky/20 text-av-sky border border-av-sky/40 hover:bg-av-sky/30 shadow-glow-cyan transition-all"
            >
              Reset All Tactical Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
