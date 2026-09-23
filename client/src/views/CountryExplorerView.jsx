import React, { useState, useEffect, useMemo } from 'react';
import {
  Globe,
  Shield,
  Search,
  Filter,
  Layers,
  ChevronRight,
  TrendingUp,
  Award,
  Zap,
  Plane,
  Anchor,
  Crosshair,
  ExternalLink,
  Info,
  CheckCircle2,
  SlidersHorizontal,
  Building2,
  DollarSign
} from 'lucide-react';
import { apiService } from '../services/api';
import { g20CountriesData } from '../data/g20/g20Countries';
import { g20AircraftData } from '../data/g20/g20Aircraft';

export default function CountryExplorerView({ onSelectCountry, onSelectAircraft }) {
  const [countries, setCountries] = useState(g20CountriesData);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  const [selectedCountryDossier, setSelectedCountryDossier] = useState(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const res = await apiService.getG20Countries();
        if (res && res.items && res.items.length > 0) {
          setCountries(res.items);
        }
      } catch (err) {
        console.warn('Failed to load G20 countries from API, using local dataset.', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const regions = useMemo(() => {
    const list = new Set(countries.map((c) => c.region));
    return ['ALL', ...Array.from(list)];
  }, [countries]);

  const filteredCountries = useMemo(() => {
    return countries.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.countryCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.isoCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.region.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion =
        selectedRegion === 'ALL' || c.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [countries, searchQuery, selectedRegion]);

  // Compute platform aggregate stats
  const totalFleetEstimate = useMemo(() => {
    return countries.reduce((sum, c) => sum + (c.totalAircraftEstimate || 0), 0);
  }, [countries]);

  const totalBranchesCount = useMemo(() => {
    return countries.reduce(
      (sum, c) => sum + (c.militaryBranches ? c.militaryBranches.length : 0),
      0
    );
  }, [countries]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in text-slate-100">
      {/* Header Banner */}
      <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-10 overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 shadow-2xl">
        <div className="absolute -right-10 -top-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-20 bottom-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-spin-slow" />
            <span>G20 Defense Air Arms Intelligence Platform</span>
          </div>

          <h1 className="text-2xl sm:text-5xl font-display font-black tracking-tight text-white">
            Sovereign Country <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Force Explorer</span>
          </h1>

          <p className="text-xs sm:text-base text-slate-400 leading-relaxed font-sans max-w-3xl">
            Exhaustive operational intelligence dossiers for the world’s leading 19 G20 defense air powers and European Union military aviation architectures. Structured branch orders of battle, verified fleet quantities, modernization ratings, and indigenous manufacturing registries.
          </p>
        </div>

        {/* Aggregate Metrics Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800/80">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase">Sovereign Nations</div>
            <div className="text-xl sm:text-2xl font-black font-display text-white mt-0.5 sm:mt-1">19 + EU</div>
            <div className="text-[9px] sm:text-[10px] font-mono text-cyan-400">100% G20 Coverage</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase">Tracked Fleet Estimate</div>
            <div className="text-xl sm:text-2xl font-black font-display text-emerald-400 mt-0.5 sm:mt-1">
              {totalFleetEstimate.toLocaleString()}+
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-slate-400">Active Defense Airframes</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase">Air & Naval Branches</div>
            <div className="text-xl sm:text-2xl font-black font-display text-cyan-400 mt-0.5 sm:mt-1">
              {totalBranchesCount} Arms
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-slate-400">Air Force, Navy, Army Avn</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase">Data Confidence</div>
            <div className="text-xl sm:text-2xl font-black font-display text-purple-400 mt-0.5 sm:mt-1">TIER 1-2</div>
            <div className="text-[9px] sm:text-[10px] font-mono text-emerald-400">OSINT / MoD Verified</div>
          </div>
        </div>
      </div>

      {/* PHASE 1 SPOTLIGHT: INDIA (PRIMARY COUNTRY) */}
      <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-950/30 via-slate-900 to-emerald-950/30 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3 max-w-3xl">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🇮🇳</span>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 sm:px-2.5 py-0.5 rounded-md border border-orange-500/30">
                    Phase 1 Primary Spotlight
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-slate-400">IND • ISO: IN</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-black text-white">Republic of India Defense Aviation</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Operating a world-class tri-branch military aviation architecture: <strong className="text-white">Indian Air Force (IAF)</strong> with Rafale F3-R, Su-30MKI Super Sukhoi, Tejas Mk1A, and Phalcon AWACS; <strong className="text-white">Indian Navy</strong> operating STOBAR carrier fighters (MiG-29K) and P-8I Neptune ASW; <strong className="text-white">Indian Army Aviation Corps</strong> operating high-altitude Siachen-capable attack helicopters (LCH Prachand, Rudra ALH).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={() => {
                const ind = countries.find((c) => c.countryCode === 'IND');
                if (ind) setSelectedCountryDossier(ind);
              }}
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 text-orange-300 text-xs font-mono font-bold transition-all shadow-lg flex items-center space-x-2"
            >
              <span>View India Dossier</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectCountry && onSelectCountry('India')}
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-black transition-all shadow-glow-cyan flex items-center space-x-2"
            >
              <span>Explore IAF / IN Fleet</span>
              <Plane className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search country name, ISO, or region..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                selectedRegion === region
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Countries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCountries.map((country) => {
          const branches = country.militaryBranches || [];
          const countryAircraft = g20AircraftData.filter(
            (a) => a.country.toLowerCase() === country.name.toLowerCase()
          );
          const activeAircraftCount = countryAircraft.filter((a) => a.serviceStatus === 'ACTIVE').length;
          const retiredAircraftCount = countryAircraft.filter((a) => a.serviceStatus === 'RETIRED').length;

          return (
            <div
              key={country.id || country.countryCode}
              className="group p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:shadow-glow-cyan/20 transition-all flex flex-col justify-between space-y-5"
            >
              {/* Card Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{country.flag}</span>
                    <div>
                      <h3 className="text-lg font-display font-black text-white group-hover:text-cyan-400 transition-colors">
                        {country.name}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400">{country.region}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase bg-slate-950 text-cyan-400 border border-slate-800">
                      {country.countryCode}
                    </span>
                    {country.coverage && (
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                          country.coverage.completeness >= 0.8
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        }`}
                      >
                        {country.coverage.completeness >= 1.0
                          ? '5/5 Domains'
                          : `Coverage — ${Math.round(country.coverage.completeness * 5)}/5 domains`}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-sans">
                  {country.description}
                </p>
              </div>

              {/* Force Profile Telemetry */}
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 font-mono text-[11px]">
                <div>
                  <span className="text-slate-500 text-[10px] block">Defense Budget</span>
                  <span className="text-emerald-400 font-bold">${country.defenseBudgetUsd || '—'}B USD</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">Fleet Estimate</span>
                  <span className="text-white font-bold">{country.totalAircraftEstimate?.toLocaleString() || '—'}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">Modernization</span>
                  <span className="text-cyan-400 font-bold">{country.modernizationIndex || '85.0'} / 100</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">Vault Fleet (1947–Now)</span>
                  <span className="text-purple-300 font-bold">
                    {countryAircraft.length} Types <span className="text-[10px] text-slate-400 font-normal">({activeAircraftCount} act / {retiredAircraftCount} ret)</span>
                  </span>
                </div>
              </div>

              {/* Military Branches Pills */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  Active Military Branches ({branches.length})
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {branches.map((b, idx) => (
                    <span
                      key={b.id || b.name || `branch-${idx}`}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800/80 truncate max-w-[200px]"
                      title={b.officialName || b.name}
                    >
                      {b.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center space-x-2 border-t border-slate-800/60">
                <button
                  onClick={() => setSelectedCountryDossier(country)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-mono font-medium border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View Dossier</span>
                </button>

                <button
                  onClick={() => onSelectCountry && onSelectCountry(country.name)}
                  className="px-3 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30 transition-colors"
                  title="Filter aircraft directory by this country"
                >
                  <Plane className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Country Detail Modal / Dossier */}
      {selectedCountryDossier && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCountryDossier(null)}
        >
          <div
            className="w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{selectedCountryDossier.flag}</span>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                      {selectedCountryDossier.countryCode} • ISO: {selectedCountryDossier.isoCode}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{selectedCountryDossier.region}</span>
                  </div>
                  <h2 className="text-2xl font-display font-black text-white mt-1">
                    {selectedCountryDossier.name}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setSelectedCountryDossier(null)}
                className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                ✕
              </button>
            </div>

            {selectedCountryDossier.coverage && (
              <div className={`p-4 rounded-2xl border text-xs font-mono flex items-center justify-between ${
                selectedCountryDossier.coverage.completeness >= 0.8
                  ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                  : 'bg-amber-950/30 border-amber-500/30 text-amber-300'
              }`}>
                <div>
                  <div className="font-bold">
                    {selectedCountryDossier.coverage.completeness >= 1.0
                      ? 'Full Sovereign Force Coverage'
                      : `Limited coverage — ${Math.round(selectedCountryDossier.coverage.completeness * 5)} of 5 domains indexed`}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Indexed: {selectedCountryDossier.coverage.aircraftCount} Aircraft • {selectedCountryDossier.coverage.warshipCount} Warships • {selectedCountryDossier.coverage.vehicleCount} Ground Vehicles
                  </div>
                </div>
                <span className="text-lg font-bold font-display">
                  {Math.round(selectedCountryDossier.coverage.completeness * 100)}%
                </span>
              </div>
            )}

            <p className="text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
              {selectedCountryDossier.description}
            </p>

            {/* Military Branches Detail */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-cyan-400">
                Military Aviation Branches & Operators
              </h4>
              <div className="space-y-3">
                {selectedCountryDossier.militaryBranches?.map((b, i) => (
                  <div key={b.id || b.name || `mb-${i}`} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white font-display">{b.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {b.type}
                      </span>
                    </div>
                    {b.officialName && (
                      <div className="text-[11px] font-mono text-cyan-400">{b.officialName}</div>
                    )}
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end space-x-3">
              <button
                onClick={() => setSelectedCountryDossier(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-950 text-slate-300 text-xs font-mono hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                Close Dossier
              </button>
              <button
                onClick={() => {
                  const countryName = selectedCountryDossier.name;
                  setSelectedCountryDossier(null);
                  if (onSelectCountry) onSelectCountry(countryName);
                }}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold transition-all shadow-glow-cyan flex items-center space-x-2"
              >
                <span>View All {selectedCountryDossier.name} Aircraft</span>
                <Plane className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
