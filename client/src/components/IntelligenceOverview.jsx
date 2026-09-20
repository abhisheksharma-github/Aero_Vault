import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Cpu,
  Truck,
  Plane,
  Flame,
  Info,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  Crosshair,
  Radio,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { apiService } from '../services/api';

export default function IntelligenceOverview({
  intelligenceData,
  onSelectCountry,
}) {
  const [selectedMetric, setSelectedMetric] = useState('tvrTotal'); // 'tvrTotal' | 'modernizationIndex' | 'logisticsScore' | 'totalActiveUnits' | 'combatPowerScore'
  const [highlightedCountry, setHighlightedCountry] = useState(intelligenceData[0]?.countryName || 'United States');
  const [countryAnalysis, setCountryAnalysis] = useState(null);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);

  const maxTvR = Math.max(...intelligenceData.map((d) => d.tvrTotal || 0), 250);
  const maxUnits = Math.max(...intelligenceData.map((d) => d.totalActiveUnits || 0), 5500);

  const selectedNation =
    intelligenceData.find((d) => d.countryName === highlightedCountry) || intelligenceData[0];

  useEffect(() => {
    let isMounted = true;
    async function loadAnalysis() {
      if (!highlightedCountry) return;
      setLoadingAnalysis(true);
      try {
        const res = await apiService.getCountryAnalysis(highlightedCountry);
        if (isMounted && res && res.data) {
          setCountryAnalysis(res.data);
        }
      } catch (err) {
        console.warn('Could not load detailed analysis:', err);
      } finally {
        if (isMounted) setLoadingAnalysis(false);
      }
    }

    loadAnalysis();
    return () => { isMounted = false; };
  }, [highlightedCountry]);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* WDMMA Banner Header */}
      <div className="relative rounded-3xl p-6 sm:p-8 glass-panel border border-tactical-cyan/30 overflow-hidden bg-gradient-to-br from-vault-900 via-vault-950 to-vault-900 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-tactical-cyan/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-tactical-cyan/10 border border-tactical-cyan/30 text-tactical-cyan text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WDMMA GLOBAL AIRPOWER INTELLIGENCE SYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              True Value Rating <span className="bg-clip-text text-transparent bg-gradient-to-r from-tactical-cyan via-tactical-blue to-teal-300">(TvR) Matrix</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Unlike raw aircraft quantity counts, the WDMMA True Value Rating weighs combat modernization, 5th-gen stealth assets, strategic logistics/tanker capacity, airborne AEW&C networking, and domestic defense industrial resilience.
            </p>
          </div>

          {/* Superpower Quick Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
            <div className="p-3.5 rounded-2xl bg-vault-900/80 border border-slate-800 text-center">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Top Superpower</div>
              <div className="text-sm font-bold text-tactical-cyan mt-0.5">USA (242.9)</div>
              <div className="text-[10px] text-emerald-400 font-mono">Rank #1 Global</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-vault-900/80 border border-slate-800 text-center">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Top 4th Power</div>
              <div className="text-sm font-bold text-tactical-amber mt-0.5">India (74.8)</div>
              <div className="text-[10px] text-slate-400 font-mono">1,645 Active Units</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-vault-900/80 border border-slate-800 text-center col-span-2 sm:col-span-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Avg Modernization</div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">76.4%</div>
              <div className="text-[10px] text-slate-400 font-mono">5 Major Powers Audited</div>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-2 rounded-2xl glass-panel border border-slate-800">
        <div className="text-xs font-mono text-slate-400 px-3 uppercase">
          Benchmark Metric View:
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'tvrTotal', label: 'True Value Rating (TvR)', icon: Zap },
            { id: 'combatPowerScore', label: 'Combat Airpower', icon: Flame },
            { id: 'modernizationIndex', label: 'Modernization Index (%)', icon: Cpu },
            { id: 'logisticsScore', label: 'Logistics / Support Score', icon: Truck },
            { id: 'totalActiveUnits', label: 'Total Active Fleet Units', icon: Plane },
          ].map((metric) => {
            const Icon = metric.icon;
            const isSelected = selectedMetric === metric.id;
            return (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  isSelected
                    ? 'bg-tactical-cyan text-vault-950 font-bold shadow-glow-cyan'
                    : 'bg-vault-900/60 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{metric.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Ranking Grid & Deep Country Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Rankings List (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Award className="w-5 h-5 text-tactical-amber" />
              <span>Global Military Airpower Rankings</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Sorted by Global Airpower Standing
            </span>
          </div>

          <div className="space-y-3">
            {intelligenceData.map((nation, idx) => {
              const isHighlighted = nation.countryName === highlightedCountry;
              const val = nation[selectedMetric] ?? nation.tvrTotal;
              const maxVal =
                selectedMetric === 'totalActiveUnits'
                  ? maxUnits
                  : selectedMetric === 'tvrTotal'
                  ? maxTvR
                  : 100;
              const pct = Math.min(100, Math.max(5, (val / maxVal) * 100));

              return (
                <div
                  key={nation.countryName}
                  onClick={() => setHighlightedCountry(nation.countryName)}
                  className={`p-4 rounded-2xl glass-panel border cursor-pointer transition-all duration-200 ${
                    isHighlighted
                      ? 'border-tactical-cyan bg-tactical-cyan/5 shadow-glow-cyan'
                      : 'border-slate-800/80 hover:border-slate-700 bg-vault-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-xl bg-vault-800 border border-slate-700 flex items-center justify-center font-mono font-bold text-xs text-tactical-cyan">
                        #{nation.globalRanking || idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{nation.flag || '🌐'}</span>
                          <span className="text-sm font-bold text-white">{nation.countryName}</span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          {nation.totalActiveUnits.toLocaleString()} Active Units • {nation.modernizationIndex}% Modern
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-mono font-black text-tactical-cyan">
                        {typeof val === 'number' ? (selectedMetric === 'totalActiveUnits' ? val.toLocaleString() : val.toFixed(1)) : val}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">
                        {selectedMetric.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  </div>

                  {/* Relative Metric Bar */}
                  <div className="mt-3 w-full h-1.5 rounded-full bg-vault-950 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-tactical-cyan to-teal-400 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deep-Dive Nation Dossier (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-5 bg-gradient-to-b from-vault-900/90 to-vault-950">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{selectedNation?.flag || '🌐'}</span>
                <div>
                  <h4 className="text-lg font-black text-white">{selectedNation?.countryName}</h4>
                  <p className="text-xs font-mono text-tactical-cyan">{selectedNation?.airForceName || 'Air Force Command'}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-tactical-amber/10 text-tactical-amber border border-tactical-amber/30">
                  RANK #{selectedNation?.globalRanking}
                </span>
              </div>
            </div>

            {/* "Why this ranking?" explanation */}
            <div className="p-4 rounded-xl bg-vault-950/80 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-tactical-cyan uppercase flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                Why this ranking?
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {countryAnalysis?.rankingRationale ||
                  `Evaluated across strategic combat airpower, 5th-gen fleet modernization (${selectedNation?.modernizationIndex}%), tanker endurance, and fleet readiness (${selectedNation?.forceReadiness || 85}%).`}
              </p>
            </div>

            {/* Multi-Dimensional Radar Bar Scores */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Capability Dimension Index
              </div>

              {[
                { label: 'Combat Airpower', score: selectedNation?.combatPowerScore || 85, icon: Flame, color: 'from-cyan-400 to-blue-500' },
                { label: 'Fleet Modernization', score: selectedNation?.modernizationIndex || 80, icon: Cpu, color: 'from-emerald-400 to-teal-500' },
                { label: 'Mobility & Logistics', score: selectedNation?.logisticsScore || 82, icon: Truck, color: 'from-blue-400 to-indigo-500' },
                { label: 'AEW&C & ISR Coverage', score: selectedNation?.aewcScore || 75, icon: Radio, color: 'from-amber-400 to-orange-500' },
              ].map((dim) => {
                const Icon = dim.icon;
                return (
                  <div key={dim.label} className="space-y-1 text-xs font-mono">
                    <div className="flex justify-between text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-slate-400" />
                        {dim.label}
                      </span>
                      <span className="text-white font-bold">{dim.score.toFixed(1)} / 100</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-vault-950 overflow-hidden border border-slate-800">
                      <div
                        className={`h-full bg-gradient-to-r ${dim.color} rounded-full transition-all duration-500`}
                        style={{ width: `${Math.min(100, Math.max(10, dim.score))}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Primary Strengths */}
            {selectedNation?.primaryStrengths && selectedNation.primaryStrengths.length > 0 && (
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Primary Strategic Strengths
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedNation.primaryStrengths.map((str) => (
                    <li key={str} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Generation Breakdown */}
            {countryAnalysis?.generationBreakdown && (
              <div className="p-4 rounded-xl bg-vault-950/60 border border-slate-800 space-y-2">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Fleet Generation Breakdown</div>
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono pt-1">
                  <div className="p-2 rounded-lg bg-vault-900 border border-slate-800">
                    <div className="text-purple-400 font-bold">{countryAnalysis.generationBreakdown.gen5Count}</div>
                    <div className="text-[10px] text-slate-400">5th Gen</div>
                  </div>
                  <div className="p-2 rounded-lg bg-vault-900 border border-slate-800">
                    <div className="text-cyan-400 font-bold">{countryAnalysis.generationBreakdown.gen45Count}</div>
                    <div className="text-[10px] text-slate-400">4.5 Gen</div>
                  </div>
                  <div className="p-2 rounded-lg bg-vault-900 border border-slate-800">
                    <div className="text-emerald-400 font-bold">{countryAnalysis.generationBreakdown.gen4Count}</div>
                    <div className="text-[10px] text-slate-400">4th Gen</div>
                  </div>
                  <div className="p-2 rounded-lg bg-vault-900 border border-slate-800">
                    <div className="text-slate-400 font-bold">{countryAnalysis.generationBreakdown.legacyCount}</div>
                    <div className="text-[10px] text-slate-500">Legacy</div>
                  </div>
                </div>
              </div>
            )}

            {/* Primary Strengths */}
            {selectedNation?.primaryStrengths && selectedNation.primaryStrengths.length > 0 && (
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Primary Strategic Strengths
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedNation.primaryStrengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* View Full Air Force Inventory Button */}
            <button
              onClick={() => onSelectCountry(selectedNation?.countryName)}
              className="w-full py-3 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-tactical-cyan to-teal-400 text-vault-950 hover:brightness-110 shadow-glow-cyan transition-all flex items-center justify-center space-x-2 uppercase tracking-wider"
            >
              <span>Explore {selectedNation?.countryName} Fleet in Vault</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
