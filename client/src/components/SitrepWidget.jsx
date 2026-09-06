import React, { useState, useEffect } from 'react';
import {
  Radio,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Flame,
  Plane,
  Anchor,
  Crosshair,
  Calendar,
  CheckCircle2,
  RefreshCw,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { apiService } from '../services/api';
import { initialSitrepEvents } from '../data/mockData';
import { tacticalAudio } from '../services/tacticalAudio';

export default function SitrepWidget({ compact = false, maxItems = 10 }) {
  const [sitreps, setSitreps] = useState(initialSitrepEvents);
  const [loading, setLoading] = useState(false);
  const [domainFilter, setDomainFilter] = useState('ALL'); // 'ALL', 'AIR', 'NAVY', 'LAND'
  const [dataSource, setDataSource] = useState('offline-vault');

  useEffect(() => {
    let isMounted = true;
    async function loadSitreps() {
      setLoading(true);
      try {
        const res = await apiService.getSitreps({
          domain: domainFilter,
          limit: maxItems,
        });
        if (isMounted) {
          setSitreps(res.items || initialSitrepEvents);
          setDataSource(res.source || 'offline-vault');
        }
      } catch (err) {
        console.warn('Sitrep fetch error, using local vault', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadSitreps();
    return () => { isMounted = false; };
  }, [domainFilter, maxItems]);

  // Event category badge color mapping
  const getCategoryBadgeStyle = (eventType) => {
    switch (eventType) {
      case 'SHOT_DOWN':
      case 'DESTROYED':
        return 'bg-red-950/90 text-red-400 border-red-800 shadow-sm shadow-red-950';
      case 'DELIVERED':
      case 'COMMISSIONED':
        return 'bg-emerald-950/90 text-emerald-400 border-emerald-800 shadow-sm shadow-emerald-950';
      case 'RETIRED':
        return 'bg-amber-950/90 text-amber-400 border-amber-800 shadow-sm shadow-amber-950';
      case 'DAMAGED':
        return 'bg-orange-950/90 text-orange-400 border-orange-800 shadow-sm shadow-orange-950';
      case 'ON_ORDER':
      case 'TEST_FLIGHT':
        return 'bg-cyan-950/90 text-cyan-400 border-cyan-800 shadow-sm shadow-cyan-950';
      case 'TRANSFER':
      default:
        return 'bg-purple-950/90 text-purple-400 border-purple-800';
    }
  };

  // Domain icon and color mapping
  const getDomainIcon = (domain) => {
    switch (domain) {
      case 'AIR':
        return <Plane className="w-3 h-3 text-cyan-400" />;
      case 'NAVY':
        return <Anchor className="w-3 h-3 text-blue-400" />;
      case 'LAND':
        return <Crosshair className="w-3 h-3 text-emerald-400" />;
      default:
        return <Radio className="w-3 h-3 text-amber-400" />;
    }
  };

  const domainOptions = [
    { id: 'ALL', label: 'ALL DOMAINS', icon: Radio },
    { id: 'AIR', label: 'AIR', icon: Plane },
    { id: 'NAVY', label: 'NAVY', icon: Anchor },
    { id: 'LAND', label: 'LAND', icon: Crosshair },
  ];

  return (
    <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-5 space-y-4 shadow-xl hud-corner-box">
      
      {/* Header with Pulse Live Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-950/70 border border-cyan-800/60 text-cyan-400">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h2 className="text-sm font-display font-black tracking-wide text-white uppercase flex items-center gap-2">
              <span>LIVE SITREP — GLOBAL FLEET EVENTS</span>
            </h2>
            <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400 mt-0.5">
              <span className="flex items-center text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-ping" />
                LIVE FEED ACTIVE
              </span>
              <span>•</span>
              <span>OSINT VERIFIED STREAM</span>
            </div>
          </div>
        </div>

        {/* Domain Filter Toggle Bar */}
        <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          {domainOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = domainFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => {
                  tacticalAudio.playTab();
                  setDomainFilter(opt.id);
                }}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Events Feed List */}
      <div className="space-y-3">
        {sitreps.map((event) => {
          const dateStr = event.eventDate ? event.eventDate.split('T')[0] : '2025-01-01';
          return (
            <div
              key={event.id}
              className="bg-slate-950/70 rounded-xl p-3.5 border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-2 group"
            >
              {/* Row 1: Domain Tag, Category Badge, Date */}
              <div className="flex items-center justify-between gap-2 text-[10px] font-mono">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-bold">
                    {getDomainIcon(event.domain)}
                    <span>{event.domain}</span>
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded border text-[9px] font-black uppercase tracking-wider ${getCategoryBadgeStyle(
                      event.eventType
                    )}`}
                  >
                    {event.eventType.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-slate-500 text-[10px]">
                  <Calendar className="w-3 h-3" />
                  <span>{dateStr}</span>
                </div>
              </div>

              {/* Row 2: Country Flag + Country Name + Entity Name (Cyan bold) */}
              <div className="flex items-center space-x-2 text-xs font-sans">
                <span className="text-base">{event.countryFlag || '🌐'}</span>
                <span className="font-semibold text-slate-300">{event.country}:</span>
                <span className="font-bold text-cyan-400 font-display group-hover:text-cyan-300 transition-colors">
                  {event.entityName}
                </span>
                {event.location && (
                  <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                    ({event.location})
                  </span>
                )}
              </div>

              {/* Row 3: Concise OSINT Summary */}
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {event.summary}
              </p>

              {/* Row 4: Confidence badge + Source Link button */}
              <div className="flex items-center justify-between pt-1 border-t border-slate-800/40 text-[10px] font-mono">
                <span
                  className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold ${
                    event.confidence === 'VERIFIED'
                      ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/50'
                      : 'bg-amber-950/60 text-amber-400 border border-amber-800/50'
                  }`}
                >
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>{event.confidence || 'VERIFIED'}</span>
                </span>

                {event.sourceUrl && (
                  <a
                    href={event.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <span>View Citation</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          );
        })}

        {sitreps.length === 0 && (
          <div className="py-8 text-center text-slate-500 text-xs font-mono">
            No defense sitrep events found for domain: {domainFilter}
          </div>
        )}
      </div>

    </div>
  );
}
