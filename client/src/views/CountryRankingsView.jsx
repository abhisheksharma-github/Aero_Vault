import React, { useState, useEffect, useMemo } from 'react';
import {
  Shield,
  Zap,
  Anchor,
  Users,
  DollarSign,
  Search,
  Globe,
  ChevronDown,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  Sparkles,
  Plane,
  Crosshair,
  TrendingUp,
  SlidersHorizontal,
  ExternalLink,
  Layers,
  Award
} from 'lucide-react';
import { apiService } from '../services/api';
import { initialCountryForceProfiles } from '../data/mockData';
import { tacticalAudio } from '../services/tacticalAudio';

export default function CountryRankingsView({ onSelectCountry, onNavigateTab }) {
  const [profiles, setProfiles] = useState(initialCountryForceProfiles);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [domainFilter, setDomainFilter] = useState('ATLAS'); // 'ATLAS', 'AIRS', 'SEAS', 'ARMS'
  const [sortBy, setSortBy] = useState('atlasIndex');
  const [sortOrder, setSortOrder] = useState('desc');
  const [dataSource, setDataSource] = useState('offline-vault');
  const [selectedCountryDetail, setSelectedCountryDetail] = useState(null);

  // Domain filter tabs configuration
  const domainTabs = [
    { id: 'ATLAS', label: 'All Forces (ATLAS)', metric: 'atlasIndex', icon: Shield, desc: 'Composite Multi-Domain Power' },
    { id: 'AIRS', label: 'Air Arms (AIRS)', metric: 'airsIndex', icon: Zap, desc: 'Airpower, 5th-Gen & AEW&C' },
    { id: 'SEAS', label: 'Naval Arms (SEAS)', metric: 'seasIndex', icon: Anchor, desc: 'Carriers, Destroyers & Submarines' },
    { id: 'ARMS', label: 'Ground Arms (ARMS)', metric: 'armsIndex', icon: Crosshair, desc: 'Armored Divisions & Artillery' },
  ];

  // Fetch rankings
  useEffect(() => {
    let isMounted = true;
    async function loadRankings() {
      setLoading(true);
      try {
        const res = await apiService.getCountryRankings({
          sortBy,
          order: sortOrder,
        });
        if (isMounted) {
          setProfiles(res.items || initialCountryForceProfiles);
          setDataSource(res.source || 'offline-vault');
        }
      } catch (err) {
        console.warn('Rankings load failed, fallback to offline vault', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadRankings();
    return () => { isMounted = false; };
  }, [sortBy, sortOrder]);

  // Sorting Handler
  const handleSort = (columnKey) => {
    tacticalAudio.playClick();
    if (sortBy === columnKey) {
      setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
    } else {
      setSortBy(columnKey);
      setSortOrder('desc');
    }
  };

  // Domain filter click
  const handleDomainChange = (tab) => {
    tacticalAudio.playTab();
    setDomainFilter(tab.id);
    setSortBy(tab.metric);
    setSortOrder('desc');
  };

  // Filter and Sort Data in Memory
  const filteredProfiles = useMemo(() => {
    let list = [...profiles];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.country.toLowerCase().includes(q) ||
          p.countryCode.toLowerCase().includes(q) ||
          (p.region && p.region.toLowerCase().includes(q))
      );
    }

    // Dynamic sort
    list.sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (valA === undefined || valA === null) valA = 0;
      if (valB === undefined || valB === null) valB = 0;

      if (typeof valA === 'string') {
        return sortOrder === 'asc'
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      return sortOrder === 'asc' ? valA - valB : valB - valA;
    });

    return list;
  }, [profiles, searchQuery, sortBy, sortOrder]);

  return (
    <div className="space-y-8 bg-slate-950 text-slate-100 min-h-screen pb-12 font-sans">
      
      {/* 1. Header & Title Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6 pt-2">
        <div>
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL MILITARY POWER INDEX (ATLAS 2026)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight flex items-center gap-3">
            <span>Global Defense Power Leaderboard</span>
            <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-800/80">
              ATLAS 2026
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-sans leading-relaxed">
            Standardized multi-domain firepower indexing integrating combat aircraft, carrier strike groups, submarine deterrence, active armor, and audited defense budgets.
          </p>
        </div>

        <div className="flex items-center space-x-3 self-start md:self-auto">
          <div className="text-right hidden sm:block">
            <div className="text-[10px] font-mono text-slate-400">DATA ENGINE:</div>
            <div className="text-xs font-mono font-bold text-cyan-400">
              {dataSource === 'live-db' ? 'LIVE NEON CLUSTER' : 'STANDALONE VAULT'}
            </div>
          </div>
          <button
            onClick={() => {
              tacticalAudio.playClick();
              apiService.reindexIntelligence().then(() => {
                setProfiles([...initialCountryForceProfiles]);
              });
            }}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
            <span>Recalibrate</span>
          </button>
        </div>
      </div>

      {/* 2. Top Metric Ticker (4 Summary Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Nations Tracked */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-800 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all" />
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Sovereign Nations Tracked
            </span>
            <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
              <Globe className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-display font-black text-white">162</span>
            <span className="text-xs font-mono text-cyan-400 font-bold">SOVEREIGN ARMS</span>
          </div>
          <div className="mt-2 text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <Award className="w-3 h-3 text-cyan-400" />
            <span>Global parity with GlobalMilitary.net</span>
          </div>
        </div>

        {/* Card 2: Defense Expenditure */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-800 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all" />
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Global Defense Expenditure
            </span>
            <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-display font-black text-emerald-400">$2.45T</span>
            <span className="text-xs font-mono text-slate-400 font-bold">USD / YR</span>
          </div>
          <div className="mt-2 text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-emerald-400" />
            <span>+6.8% YoY worldwide budget expansion</span>
          </div>
        </div>

        {/* Card 3: Active Combat Airframes */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-800 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all" />
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Active Combat Airframes
            </span>
            <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-display font-black text-white">58,400+</span>
            <span className="text-xs font-mono text-cyan-400 font-bold">AIR WINGS</span>
          </div>
          <div className="mt-2 text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <Plane className="w-3 h-3 text-cyan-400" />
            <span>Fighters, Bombers, AEW&C, Tankers</span>
          </div>
        </div>

        {/* Card 4: Naval Warships & Submarines */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-800 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all" />
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Naval Warships & Subs
            </span>
            <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
              <Anchor className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-display font-black text-white">9,200+</span>
            <span className="text-xs font-mono text-cyan-400 font-bold">HULLS</span>
          </div>
          <div className="mt-2 text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <Shield className="w-3 h-3 text-cyan-400" />
            <span>Carriers, Destroyers, SSBNs, SSNs</span>
          </div>
        </div>

      </div>

      {/* 3. Navigation & Domain Filter Bar + Instant Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
        
        {/* Domain Filter Buttons */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {domainTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = domainFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleDomainChange(tab)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-auto md:min-w-[260px] flex-1 md:flex-initial">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search country name or code (e.g. USA, IND, CHN)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-xs font-sans text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 hover:text-slate-300"
            >
              CLEAR
            </button>
          )}
        </div>

      </div>

      {/* 4. Global Leaderboard: Mobile Cards View (md:hidden) & Desktop Table (hidden md:block) */}
      
      {/* Mobile Card List View (< md) */}
      <div className="md:hidden space-y-3">
        {filteredProfiles.map((country, index) => {
          const rankNumber = index + 1;
          const barWidth = Math.min(100, Math.max(10, country.atlasIndex));

          return (
            <div
              key={country.id || country.countryCode}
              onClick={() => {
                tacticalAudio.playClick();
                setSelectedCountryDetail(country);
              }}
              className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-cyan-500/50 p-3.5 sm:p-4 space-y-3 cursor-pointer shadow-lg active:scale-[0.99] transition-all"
            >
              {/* Header: Rank, Flag, Name, ATLAS Score */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center space-x-2.5 min-w-0">
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-black flex-shrink-0 ${
                      rankNumber === 1
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                        : rankNumber === 2
                        ? 'bg-slate-300/20 text-slate-200 border border-slate-300/40'
                        : rankNumber === 3
                        ? 'bg-amber-700/20 text-amber-400 border border-amber-700/40'
                        : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    #{rankNumber}
                  </span>
                  <span className="text-2xl flex-shrink-0">{country.flagEmoji || '🏳️'}</span>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-white text-sm truncate">
                      {country.country}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      ISO: {country.countryCode} • {country.region || 'Global'}
                    </div>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="text-sm font-display font-black text-cyan-400">
                    {country.atlasIndex.toFixed(1)}
                  </div>
                  <div className="text-[9px] font-mono text-slate-400">ATLAS SCORE</div>
                </div>
              </div>

              {/* ATLAS Progress Bar */}
              <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
                <div
                  className="bg-cyan-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${barWidth}%` }}
                />
              </div>

              {/* 4-Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-center font-mono text-[10px]">
                <div className="p-1 rounded bg-slate-900/60">
                  <span className="text-slate-400 block text-[9px]">AIRS</span>
                  <span className="text-cyan-300 font-bold">{country.airsIndex?.toFixed(1) || '0.0'}</span>
                </div>
                <div className="p-1 rounded bg-slate-900/60">
                  <span className="text-slate-400 block text-[9px]">SEAS</span>
                  <span className="text-cyan-300 font-bold">{country.seasIndex?.toFixed(1) || '0.0'}</span>
                </div>
                <div className="p-1 rounded bg-slate-900/60">
                  <span className="text-slate-400 block text-[9px]">AIR FLEET</span>
                  <span className="text-white font-bold">{(country.totalAircraft || 0).toLocaleString()}</span>
                </div>
                <div className="p-1 rounded bg-slate-900/60">
                  <span className="text-slate-400 block text-[9px]">BUDGET</span>
                  <span className="text-emerald-400 font-bold">${country.defenseBudgetUsd || 0}B</span>
                </div>
              </div>
            </div>
          );
        })}

        {filteredProfiles.length === 0 && (
          <div className="p-8 text-center text-slate-500 bg-slate-900/60 rounded-2xl border border-slate-800">
            <Search className="w-6 h-6 mx-auto mb-2 text-slate-600" />
            <p className="text-xs">No sovereign defense forces matched "{searchQuery}"</p>
          </div>
        )}
      </div>

      {/* Desktop Leaderboard Table (hidden md:block) */}
      <div className="hidden md:block bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/70 text-[11px] font-mono text-slate-400 uppercase tracking-wider select-none">
                <th
                  onClick={() => handleSort('atlasIndex')}
                  className="py-3.5 px-4 cursor-pointer hover:text-cyan-400 transition-colors w-16 text-center"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span>Rank</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-600" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('country')}
                  className="py-3.5 px-4 cursor-pointer hover:text-cyan-400 transition-colors"
                >
                  <div className="flex items-center space-x-1">
                    <span>Country / Sovereign Arm</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-600" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('atlasIndex')}
                  className="py-3.5 px-4 cursor-pointer hover:text-cyan-400 transition-colors min-w-[170px]"
                >
                  <div className="flex items-center space-x-1">
                    <span className="text-cyan-400 font-bold">ATLAS Index</span>
                    {sortBy === 'atlasIndex' ? (
                      sortOrder === 'desc' ? <ArrowDown className="w-3.5 h-3.5 text-cyan-400" /> : <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                    ) : (
                      <ArrowUpDown className="w-3 h-3 text-slate-600" />
                    )}
                  </div>
                </th>
                <th
                  onClick={() => handleSort('airsIndex')}
                  className="py-3.5 px-4 cursor-pointer hover:text-cyan-400 transition-colors text-right"
                >
                  <div className="flex items-center justify-end space-x-1">
                    <span>AIRS</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-600" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('seasIndex')}
                  className="py-3.5 px-4 cursor-pointer hover:text-cyan-400 transition-colors text-right"
                >
                  <div className="flex items-center justify-end space-x-1">
                    <span>SEAS</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-600" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('totalAircraft')}
                  className="py-3.5 px-4 cursor-pointer hover:text-cyan-400 transition-colors text-right"
                >
                  <div className="flex items-center justify-end space-x-1">
                    <span>Air Fleet</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-600" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('totalWarships')}
                  className="py-3.5 px-4 cursor-pointer hover:text-cyan-400 transition-colors text-right"
                >
                  <div className="flex items-center justify-end space-x-1">
                    <span>Warships / Carriers</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-600" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('activeTroops')}
                  className="py-3.5 px-4 cursor-pointer hover:text-cyan-400 transition-colors text-right"
                >
                  <div className="flex items-center justify-end space-x-1">
                    <span>Active Personnel</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-600" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('defenseBudgetUsd')}
                  className="py-3.5 px-4 cursor-pointer hover:text-emerald-400 transition-colors text-right"
                >
                  <div className="flex items-center justify-end space-x-1">
                    <span className="text-emerald-400">Budget ($B)</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-600" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs font-mono">
              {filteredProfiles.map((country, index) => {
                const rankNumber = index + 1;
                const barWidth = Math.min(100, Math.max(10, country.atlasIndex));

                return (
                  <tr
                    key={country.id || country.countryCode}
                    onClick={() => {
                      tacticalAudio.playClick();
                      setSelectedCountryDetail(country);
                    }}
                    className="hover:bg-slate-800/60 cursor-pointer transition-colors group"
                  >
                    {/* Rank */}
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-black ${
                          rankNumber === 1
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm'
                            : rankNumber === 2
                            ? 'bg-slate-300/20 text-slate-200 border border-slate-300/40'
                            : rankNumber === 3
                            ? 'bg-amber-700/20 text-amber-400 border border-amber-700/40'
                            : 'bg-slate-900 text-slate-400 border border-slate-800'
                        }`}
                      >
                        #{rankNumber}
                      </span>
                    </td>

                    {/* Country Name + Flag */}
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl flex-shrink-0">{country.flagEmoji || '🏳️'}</span>
                        <div>
                          <div className="font-display font-bold text-white text-sm group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                            <span>{country.country}</span>
                            <span className="text-[10px] font-mono text-slate-500 font-normal">
                              ({country.countryCode})
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-400 font-sans mt-0.5">
                            {country.region || 'Indo-Pacific / Global'}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* ATLAS Composite Index (Score + mini cyan bar) */}
                    <td className="py-4 px-4">
                      <div className="space-y-1.5">
                        <div className="flex items-baseline justify-between text-xs">
                          <span className="font-black text-cyan-400 text-sm font-display">
                            {country.atlasIndex.toFixed(1)}
                          </span>
                          <span className="text-[10px] text-slate-500">/ 100.0</span>
                        </div>
                        <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
                          <div
                            className="bg-cyan-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* AIRS */}
                    <td className="py-4 px-4 text-right">
                      <span className="px-2 py-1 rounded bg-slate-950 text-cyan-300 border border-slate-800 font-bold">
                        {country.airsIndex?.toFixed(1) || '0.0'}
                      </span>
                    </td>

                    {/* SEAS */}
                    <td className="py-4 px-4 text-right">
                      <span className="px-2 py-1 rounded bg-slate-950 text-cyan-300 border border-slate-800 font-bold">
                        {country.seasIndex?.toFixed(1) || '0.0'}
                      </span>
                    </td>

                    {/* Active Air Fleet */}
                    <td className="py-4 px-4 text-right text-slate-200 font-medium">
                      {(country.totalAircraft || 0).toLocaleString()}
                    </td>

                    {/* Warships / Carriers */}
                    <td className="py-4 px-4 text-right">
                      <div className="text-slate-200 font-medium">
                        {(country.totalWarships || 0).toLocaleString()}
                      </div>
                      {country.aircraftCarriers > 0 && (
                        <div className="text-[10px] text-cyan-400 font-mono">
                          {country.aircraftCarriers} Carrier{country.aircraftCarriers > 1 ? 's' : ''}
                        </div>
                      )}
                    </td>

                    {/* Active Personnel */}
                    <td className="py-4 px-4 text-right text-slate-200 font-medium">
                      {(country.activeTroops || 0).toLocaleString()}
                    </td>

                    {/* Defense Budget */}
                    <td className="py-4 px-4 text-right">
                      <span className="text-emerald-400 font-bold text-sm">
                        ${country.defenseBudgetUsd ? country.defenseBudgetUsd.toFixed(1) : '0.0'}B
                      </span>
                    </td>
                  </tr>
                );
              })}

              {filteredProfiles.length === 0 && (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-500">
                    <Search className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                    <p className="text-sm font-sans">No sovereign defense forces matched "{searchQuery}"</p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-3 text-xs text-cyan-400 hover:underline font-mono"
                    >
                      Clear search filters
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Country Detail Inspection Drawer / Modal */}
      {selectedCountryDetail && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-4 sm:p-6 space-y-5 shadow-2xl relative max-h-[92vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl sm:text-4xl">{selectedCountryDetail.flagEmoji}</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-black text-white">
                    {selectedCountryDetail.country}
                  </h2>
                  <div className="text-xs font-mono text-cyan-400">
                    ISO: {selectedCountryDetail.countryCode} • {selectedCountryDetail.region}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedCountryDetail(null)}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Coverage Banner */}
            {selectedCountryDetail.coverage && (
              <div className={`p-3.5 rounded-2xl border text-xs font-mono flex items-center justify-between ${
                selectedCountryDetail.coverage.completeness >= 0.8
                  ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                  : 'bg-amber-950/30 border-amber-500/30 text-amber-300'
              }`}>
                <div>
                  <div className="font-bold">
                    {selectedCountryDetail.coverage.completeness >= 1.0
                      ? 'Full Multi-Domain Coverage (5/5 Domains)'
                      : `Limited coverage — ${Math.round(selectedCountryDetail.coverage.completeness * 5)} of 5 domains indexed`}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Indexed Assets: {selectedCountryDetail.coverage.aircraftCount} Aircraft • {selectedCountryDetail.coverage.warshipCount} Warships • {selectedCountryDetail.coverage.vehicleCount} Vehicles
                  </div>
                </div>
                <span className="text-base font-bold font-display">
                  {Math.round(selectedCountryDetail.coverage.completeness * 100)}%
                </span>
              </div>
            )}

            {/* Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">ATLAS SCORE</div>
                <div className="text-lg sm:text-xl font-bold font-display text-cyan-400 mt-1">
                  {selectedCountryDetail.atlasIndex.toFixed(1)}
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">AIRS (AIR)</div>
                <div className="text-lg sm:text-xl font-bold font-display text-cyan-400 mt-1">
                  {selectedCountryDetail.airsIndex?.toFixed(1) || '0.0'}
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">SEAS (NAVY)</div>
                <div className="text-lg sm:text-xl font-bold font-display text-cyan-400 mt-1">
                  {selectedCountryDetail.seasIndex?.toFixed(1) || '0.0'}
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">ARMS (LAND)</div>
                <div className="text-lg sm:text-xl font-bold font-display text-cyan-400 mt-1">
                  {selectedCountryDetail.armsIndex?.toFixed(1) || '0.0'}
                </div>
              </div>
            </div>

            {/* Strategic Attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="space-y-2 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Order of Battle</div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Active Troops:</span>
                  <span className="text-white font-bold">{(selectedCountryDetail.activeTroops || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Reserve Force:</span>
                  <span className="text-white font-bold">{(selectedCountryDetail.reserveTroops || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Nuclear Warheads:</span>
                  <span className="text-amber-400 font-bold">{selectedCountryDetail.nuclearWarheads || '0 (Non-Nuclear)'}</span>
                </div>
              </div>

              <div className="space-y-2 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Multi-Domain Fleet</div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Airframes:</span>
                  <span className="text-cyan-400 font-bold">{(selectedCountryDetail.totalAircraft || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Naval Warships:</span>
                  <span className="text-cyan-400 font-bold">{(selectedCountryDetail.totalWarships || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Defense Budget:</span>
                  <span className="text-emerald-400 font-bold">${selectedCountryDetail.defenseBudgetUsd}B USD</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedCountryDetail(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
              >
                Close Dossier
              </button>
              {onSelectCountry && (
                <button
                  onClick={() => {
                    const cName = selectedCountryDetail.country;
                    setSelectedCountryDetail(null);
                    onSelectCountry(cName);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-mono font-bold text-xs hover:brightness-110 shadow-lg shadow-cyan-500/20 text-center"
                >
                  Explore Complete Fleet Inventory →
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

