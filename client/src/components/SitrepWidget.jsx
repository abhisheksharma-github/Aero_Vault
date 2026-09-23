import React, { useState, useEffect, useCallback } from 'react';
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
  ChevronRight,
  Globe2,
  Cpu,
  Clock,
  Sparkles
} from 'lucide-react';
import { apiService } from '../services/api';
import { initialSitrepEvents } from '../data/mockData';
import { tacticalAudio } from '../services/tacticalAudio';

// Format relative date (e.g. 5m ago, 2h ago, 1d ago)
function formatRelativeTime(dateString) {
  if (!dateString) return 'RECENT';
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    if (isNaN(diffMs)) return dateString.split('T')[0];

    const diffMinutes = Math.floor(diffMs / 60000);
    if (diffMinutes < 1) return 'JUST NOW';
    if (diffMinutes < 60) return `${diffMinutes}m AGO`;

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}h AGO`;

    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d AGO`;

    return dateString.split('T')[0];
  } catch {
    return dateString.split('T')[0];
  }
}

export default function SitrepWidget({ compact = false, maxItems = 15 }) {
  const [sitreps, setSitreps] = useState(initialSitrepEvents);
  const [loading, setLoading] = useState(false);
  const [domainFilter, setDomainFilter] = useState('ALL'); // 'ALL', 'AIR', 'NAVY', 'LAND', 'STRATEGIC'
  const [dataSource, setDataSource] = useState('offline-vault');
  const [sourcesList, setSourcesList] = useState([]);
  const [liveFeedCount, setLiveFeedCount] = useState(0);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  const loadSitreps = useCallback(async (isManual = false) => {
    setLoading(true);
    if (isManual) {
      tacticalAudio.playTab();
    }
    try {
      const res = await apiService.getSitreps({
        domain: domainFilter,
        limit: maxItems,
      });
      setSitreps(res.items || initialSitrepEvents);
      setDataSource(res.source || 'offline-vault');
      setSourcesList(res.sources || []);
      setLiveFeedCount(res.liveFeedCount || 0);
      setLastRefreshed(new Date());
    } catch (err) {
      console.warn('Sitrep fetch error, using local vault', err);
    } finally {
      setLoading(false);
    }
  }, [domainFilter, maxItems]);

  useEffect(() => {
    loadSitreps();
  }, [loadSitreps]);

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
      case 'UPGRADE':
        return 'bg-indigo-950/90 text-indigo-400 border-indigo-800 shadow-sm shadow-indigo-950';
      case 'TRANSFER':
      default:
        return 'bg-purple-950/90 text-purple-400 border-purple-800';
    }
  };

  // Domain icon mapping
  const getDomainIcon = (domain) => {
    switch (domain) {
      case 'AIR':
        return <Plane className="w-3 h-3 text-cyan-400" />;
      case 'NAVY':
        return <Anchor className="w-3 h-3 text-blue-400" />;
      case 'LAND':
        return <Crosshair className="w-3 h-3 text-emerald-400" />;
      case 'STRATEGIC':
      case 'STRATEGIC_DEFENSE':
        return <Cpu className="w-3 h-3 text-amber-400" />;
      default:
        return <Radio className="w-3 h-3 text-cyan-400" />;
    }
  };

  // Source pill badge mapping
  const getSourceBadge = (event) => {
    const isIdrw = event.sourceTag === 'IDRW' || (event.sourceUrl && event.sourceUrl.includes('idrw.org')) || (event.sourceName && event.sourceName.includes('IDRW'));
    const isDefenceIn = event.sourceTag === 'DEFENCE_IN' || (event.sourceUrl && event.sourceUrl.includes('defence.in')) || (event.sourceName && event.sourceName.includes('Defence.in'));

    if (isIdrw) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-950/70 text-amber-400 border border-amber-700/60 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>IDRW.org</span>
        </span>
      );
    }
    if (isDefenceIn) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-950/70 text-cyan-400 border border-cyan-700/60 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Defence.in</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-purple-950/70 text-purple-300 border border-purple-800/60">
        <span>OSINT Vault</span>
      </span>
    );
  };

  const domainOptions = [
    { id: 'ALL', label: 'ALL DOMAINS', icon: Radio },
    { id: 'AIR', label: 'AIR', icon: Plane },
    { id: 'NAVY', label: 'NAVY', icon: Anchor },
    { id: 'LAND', label: 'LAND', icon: Crosshair },
    { id: 'STRATEGIC', label: 'STRATEGIC', icon: Cpu },
  ];

  return (
    <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-5 space-y-4 shadow-xl hud-corner-box">
      
      {/* Header with Pulse Live Status */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-slate-800 pb-3.5">
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-700/70 text-cyan-400 shadow-inner">
            <Radio className="w-4 h-4 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-display font-black tracking-wide text-white uppercase">
                LIVE SITREP — GLOBAL FLEET EVENTS
              </h2>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-700/50">
                LIVE STREAM
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] font-mono text-slate-400 mt-0.5">
              <span className="flex items-center text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5" />
                IDRW.ORG & DEFENCE.IN CONNECTED
              </span>
              <span>•</span>
              <span className="text-slate-400">OSINT VERIFIED STREAM</span>
              {liveFeedCount > 0 && (
                <>
                  <span>•</span>
                  <span className="text-cyan-400 font-bold">{liveFeedCount} LIVE DISPATCHES</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Action Controls & Domain Tabs */}
        <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
          {/* Refresh Button */}
          <button
            onClick={() => loadSitreps(true)}
            disabled={loading}
            title="Refresh live feeds"
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-800 transition-all"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
            <span className="hidden sm:inline">REFRESH</span>
          </button>

          {/* Domain Filter Toggle Bar */}
          <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800 overflow-x-auto touch-scroll max-w-full scrollbar-none">
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
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold whitespace-nowrap flex-shrink-0 transition-all ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-3 h-3 flex-shrink-0" />
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Events Feed List */}
      <div className="space-y-3">
        {sitreps.map((event) => {
          const relativeTime = formatRelativeTime(event.eventDate);
          return (
            <div
              key={event.id}
              className="bg-slate-950/70 rounded-xl p-3.5 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-950/90 transition-all space-y-2 group shadow-sm"
            >
              {/* Row 1: Domain Tag, Category Badge, Source Badge, Relative Time */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
                <div className="flex items-center flex-wrap gap-1.5">
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
                  {getSourceBadge(event)}
                </div>

                <div className="flex items-center space-x-1.5 text-slate-400 text-[10px]">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span className="font-bold">{relativeTime}</span>
                </div>
              </div>

              {/* Row 2: Country Flag + Country Name + Entity Name */}
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
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-800/80 transition-all font-bold"
                  >
                    <span>Read Full Dispatch</span>
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
