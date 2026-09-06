import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { CheckCircle2, AlertTriangle, ShieldCheck, Database, RefreshCw, Layers, Sparkles, Image, Clock } from 'lucide-react';

export default function DataQualityView() {
  const [quality, setQuality] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuality() {
      setLoading(true);
      try {
        const data = await apiService.getOSINTQuality();
        setQuality(data);
      } catch (err) {
        console.error('Failed fetching OSINT quality:', err);
      } finally {
        setLoading(false);
      }
    }
    loadQuality();
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-av-steel/40 bg-gradient-to-r from-av-blue/90 via-av-blue/40 to-av-navy">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OSINT DATA INTEGRITY & AUDIT PIPELINE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Data Quality & Cross-Source Verification Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-av-light/80 max-w-2xl leading-relaxed">
            Monitor automated validation rules, cross-source consensus deltas, confidence tiers, and pending conflict reviews across the global fleet database.
          </p>
        </div>
      </div>

      {/* Quality Stats Matrix */}
      {quality && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 space-y-1 bg-emerald-950/20 shadow-glow-green">
              <div className="text-[11px] text-emerald-400 uppercase tracking-wider">Verified Records Ratio</div>
              <div className="text-3xl font-black text-emerald-300">{quality.verifiedPercentage}%</div>
              <div className="text-[10px] text-av-mist">Tier 1 & Tier 2 Consensus</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-av-steel/30 space-y-1">
              <div className="text-[11px] text-av-mist uppercase tracking-wider">Integrity Health Index</div>
              <div className="text-3xl font-black text-av-sky">{quality.integrityHealthIndex}/100</div>
              <div className="text-[10px] text-av-teal">Zero synthetic fabrication</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-av-steel/30 space-y-1">
              <div className="text-[11px] text-av-mist uppercase tracking-wider">Conflicts Pending</div>
              <div className="text-3xl font-black text-amber-400">{quality.conflictsPendingReview}</div>
              <div className="text-[10px] text-av-mist">Multi-source discrepancies</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-av-steel/30 space-y-1">
              <div className="text-[11px] text-av-mist uppercase tracking-wider">Sourced Images</div>
              <div className="text-3xl font-black text-white">{quality.totalSourcedImages}</div>
              <div className="text-[10px] text-emerald-400">100% Verified Attribution</div>
            </div>
          </div>

          {/* Verification Hierarchy Guide */}
          <div className="glass-panel rounded-3xl p-6 border border-av-steel/30 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Database className="w-4 h-4 text-av-sky" />
              <span>Multi-Source Provenance & Confidence Taxonomy</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-av-blue/30 border border-av-steel/30 space-y-2">
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold">
                  TIER 1 • VERIFIED (95-100%)
                </span>
                <p className="text-xs text-av-light/80 leading-relaxed">
                  Official Ministry of Defence whitepapers, OEM engineering flight manuals, and parliamentary acquisition records.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-av-blue/30 border border-av-steel/30 space-y-2">
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-[10px] font-bold">
                  TIER 2 • PARTIALLY VERIFIED (80-94%)
                </span>
                <p className="text-xs text-av-light/80 leading-relaxed">
                  Premier aerospace defense publications (Jane's, FlightGlobal, IISS Military Balance, Aviation Week).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-av-blue/30 border border-av-steel/30 space-y-2">
                <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/40 text-[10px] font-bold">
                  TIER 3 • ESTIMATED (60-79%)
                </span>
                <p className="text-xs text-av-light/80 leading-relaxed">
                  Computational electromagnetic modeling (PO/MoM RCS) and cross-checked open-source intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
