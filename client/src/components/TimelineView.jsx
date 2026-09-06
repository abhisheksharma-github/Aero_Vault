import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { Clock, TrendingUp, Shield, Activity, Sparkles, Filter, Calendar } from 'lucide-react';

export default function TimelineView() {
  const [changes, setChanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('ALL');

  useEffect(() => {
    async function fetchChanges() {
      setLoading(true);
      try {
        const data = await apiService.getOSINTChanges();
        setChanges(data);
      } catch (err) {
        console.error('Failed fetching changes:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchChanges();
  }, []);

  const filteredChanges = changes.filter((c) => {
    if (filterType !== 'ALL' && c.entityType !== filterType) return false;
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-av-steel/40 bg-gradient-to-r from-av-blue/90 via-av-blue/40 to-av-navy">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-av-sky/10 border border-av-sky/30 text-av-sky text-xs font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>HISTORICAL INTELLIGENCE & CHANGE DETECTION</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            "What Changed?" Intelligence Timeline
          </h1>
          <p className="text-xs sm:text-sm text-av-light/80 max-w-2xl leading-relaxed">
            Audit delta modifications in military fleet inventories, 5th-generation stealth inductions, radar upgrades, and cross-verified OSINT changes over time.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 font-mono text-xs">
        {['ALL', 'AIRCRAFT', 'NATION', 'BRANCH'].map((t) => (
          <button
            key={t}
            onClick={() => setFilterType(t)}
            className={`px-4 py-2 rounded-xl transition-all ${
              filterType === t
                ? 'bg-av-sky text-av-navy font-bold shadow-glow-cyan'
                : 'bg-av-blue/40 text-av-light hover:bg-av-blue border border-av-steel/30'
            }`}
          >
            {t === 'ALL' ? 'All Change Events' : `${t} Deltas`}
          </button>
        ))}
      </div>

      {/* Timeline Stream */}
      <div className="glass-panel rounded-3xl p-6 border border-av-steel/30 space-y-6">
        <div className="relative border-l border-av-steel/40 ml-4 pl-6 space-y-8">
          {filteredChanges.map((change) => (
            <div key={change.id} className="relative group">
              {/* Pulsing Node */}
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-av-sky border-2 border-av-navy shadow-glow-cyan group-hover:scale-125 transition-transform" />

              <div className="p-4 rounded-2xl bg-av-blue/30 border border-av-steel/30 hover:border-av-sky/40 transition-all space-y-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded bg-av-navy text-av-sky text-[10px] font-mono font-bold uppercase border border-av-steel/30">
                      {change.entityType}
                    </span>
                    <h3 className="text-sm font-bold text-white">{change.entityName}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-av-mist">
                    {new Date(change.recordedAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs border-t border-av-steel/20">
                  <div>
                    <span className="text-[10px] text-av-mist uppercase block">Field Modified:</span>
                    <span className="text-av-light font-semibold">{change.field}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-av-mist uppercase block">Telemetry Shift:</span>
                    <span className="text-av-mist">{change.previousValue}</span>
                    <span className="mx-1.5 text-av-steel">→</span>
                    <span className="text-white font-bold">{change.newValue}</span>
                    <span className="ml-2 px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      {change.deltaString}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-av-mist uppercase block">Intelligence Provenance:</span>
                    <span className="text-av-teal text-[11px] truncate block">{change.source}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
