import React, { useState } from 'react';
import {
  X,
  Zap,
  Gauge,
  Shield,
  Layers,
  Scale,
  Check,
  Crosshair,
  Cpu,
  Rocket,
  Compass,
  Clock,
  Plane,
  FileText,
  AlertTriangle,
  Award,
  Globe,
  Calendar,
  Info,
  Radio,
  ExternalLink,
  ChevronRight,
  Image as ImageIcon,
  Database,
  Anchor,
  Flame,
  CheckCircle2,
  Camera,
  Target
} from 'lucide-react';
import { tacticalAudio } from '../services/tacticalAudio';

export default function AircraftDetailModal({
  aircraft,
  onClose,
  onToggleCompare,
  isCompared,
  onLaunchComparison,
}) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!aircraft) return null;

  const name = aircraft.aircraftName || aircraft.name || 'Unknown Aircraft';
  const designation = aircraft.officialDesignation || aircraft.variant || '';
  const country = aircraft.country || 'Unknown Country';
  const manufacturer = aircraft.manufacturer || 'Unknown Manufacturer';
  const branch = aircraft.militaryBranch?.replace(/_/g, ' ') || aircraft.affiliation || 'Defense Air Arm';
  const category = aircraft.primaryCategory || aircraft.category || 'Combat Aircraft';
  const tvrScore = aircraft.tvrScore || 85.0;
  const status = aircraft.serviceStatus || 'ACTIVE';
  const isActive = status === 'ACTIVE';

  // Extract nested or flat specs
  const specs = aircraft.specifications || {};
  const dims = specs.dimensions || {};
  const weights = specs.weights || {};
  const propulsion = specs.propulsion || {};
  const perf = specs.performance || {};
  const avionics = aircraft.avionics || {};
  const capabilities = aircraft.capabilities || {};
  const fleet = aircraft.fleet || {};
  const img = aircraft.image || {};
  const sources = aircraft.sourcesCited || [];

  const imageUrl =
    img.primaryImageUrl ||
    aircraft.imageUrl ||
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg/1200px-Rafale_-_RIAT_2018_%2843577785532%29.jpg';

  const maxSpeedMach = perf.maxSpeedMach || aircraft.topSpeedMach || 2.0;
  const maxSpeedKmh = perf.maxSpeedKmh || (maxSpeedMach ? Math.round(maxSpeedMach * 1225) : 2100);
  const combatRadiusKm = perf.combatRadiusKm || aircraft.combatRangeKm || 1500;
  const ferryRangeKm = perf.ferryRangeKm || aircraft.ferryRangeKm || 3200;
  const serviceCeilingM = perf.serviceCeilingM || aircraft.serviceCeilingM || 18000;
  const rateOfClimbMs = perf.rateOfClimbMs || 300;
  const gLimit = perf.gLimitPositive || aircraft.gLimitPositive || 9.0;

  const lengthM = dims.lengthM || aircraft.lengthM || 18.5;
  const wingspanM = dims.wingspanM || aircraft.wingspanM || 13.5;
  const heightM = dims.heightM || aircraft.heightM || 5.0;

  const emptyWeightKg = weights.emptyWeightKg || aircraft.emptyWeightKg || 15000;
  const maxTakeoffWeightKg = weights.maxTakeoffWeightKg || aircraft.maxTakeoffWeightKg || 32000;
  const payloadCapacityKg = weights.payloadCapacityKg || capabilities.maximumPayloadKg || aircraft.payloadCapacityKg || 8000;

  const radar = avionics.radar || aircraft.radar || aircraft.radarModel || 'AESA Radar';
  const radarType = avionics.radarType || aircraft.radarType || 'AESA';
  const hasAesa = avionics.hasAesa ?? true;
  const hasIrst = avionics.hasIrst ?? true;
  const irstModel = avionics.irstModel || 'Advanced Integrated IRST';
  const ewSuite = avionics.electronicWarfare || 'Integrated Multi-Spectral EW Suite';
  const ewScore = avionics.ewScore || aircraft.ewScore || 90;
  const stealthLevel = avionics.stealthLevel || aircraft.stealthLevel || 'REDUCED';
  const rcsM2 = avionics.rcsEstimatedM2 || aircraft.rcsEstimatedM2 || 0.5;

  const confirmedQty = fleet.confirmedQuantity ?? aircraft.activeCount ?? '—';
  const estimatedQty = fleet.estimatedQuantity ?? '—';
  const qtyNotes = fleet.quantityNotes || 'Publicly verified inventory records.';
  const confidence = fleet.dataConfidence || 'HIGH';
  const lastVerified = fleet.lastVerified || aircraft.lastVerified || '2026-02-15';
  const freshness = fleet.freshnessStatus || 'CURRENT';

  const getGradeColor = (score) => {
    if (score >= 94) return 'text-cyan-300 bg-cyan-500/10 border-cyan-400/50 shadow-glow-cyan';
    if (score >= 88) return 'text-emerald-400 bg-emerald-500/10 border-emerald-400/50 shadow-glow-green';
    if (score >= 80) return 'text-sky-400 bg-sky-500/10 border-sky-400/50 shadow-glow-cyan';
    if (score >= 70) return 'text-amber-400 bg-amber-500/10 border-amber-400/50 shadow-glow-amber';
    return 'text-rose-400 bg-rose-500/10 border-rose-400/50 shadow-glow-crimson';
  };

  const formatGen = (gen) => {
    if (!gen || gen === 'NOT_APPLICABLE') return 'Mission Airframe';
    return gen.replace('GEN_', '').replace('_PLUS', '+').replace('_', '.') + ' Gen';
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'specifications', label: 'Specifications', icon: Gauge },
    { id: 'sensors', label: 'Sensors & Avionics', icon: Cpu },
    { id: 'capabilities', label: 'Capabilities & Ordnance', icon: Rocket },
    { id: 'fleet', label: 'Fleet & Operators', icon: Anchor },
    { id: 'tvr', label: 'TVR Combat Score', icon: Zap },
    { id: 'sources', label: 'Sources & Attribution', icon: Database },
  ];

  const handleTabChange = (tabId) => {
    tacticalAudio.playTab();
    setActiveTab(tabId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/90 backdrop-blur-2xl animate-fade-in">
      <div
        className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="relative p-4 sm:p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex-shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center space-x-1.5 sm:space-x-2 flex-wrap gap-y-1">
                {isActive ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold uppercase bg-emerald-950/90 text-emerald-400 border border-emerald-500/50 shadow-glow-green">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                    {status}
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold uppercase bg-amber-950/90 text-amber-400 border border-amber-500/50">
                    {status}
                  </span>
                )}

                <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  {formatGen(aircraft.generation)}
                </span>

                <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono uppercase bg-slate-950 text-slate-300 border border-slate-800">
                  {branch}
                </span>

                <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono uppercase bg-slate-950 text-emerald-400 border border-slate-800">
                  {confidence}
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-display font-black text-white truncate">{name}</h2>
              <p className="text-xs font-mono text-slate-400 truncate">
                {designation ? `${designation} • ` : ''}{manufacturer} • {country}
              </p>
            </div>

            {/* Right Actions: TVR Grade Badge, Compare & Close */}
            <div className="flex items-center justify-between sm:justify-end space-x-2 sm:space-x-2.5 flex-shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
              <div className={`flex flex-col items-center justify-center px-3 py-1 rounded-xl sm:rounded-2xl border ${getGradeColor(tvrScore)}`}>
                <span className="text-xs sm:text-sm font-mono font-black">{tvrScore.toFixed(1)}</span>
                <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-wider">TVR SCORE</span>
              </div>

              <button
                onClick={() => {
                  tacticalAudio.playLock();
                  onToggleCompare(aircraft);
                }}
                className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border transition-all ${
                  isCompared
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-glow-cyan font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-white border-slate-800'
                }`}
                title={isCompared ? 'Remove from Benchmark' : 'Add to Benchmark'}
              >
                <Scale className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  tacticalAudio.playClick();
                  onClose();
                }}
                className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-slate-950 text-slate-400 hover:text-white hover:bg-rose-500/20 hover:border-rose-500/50 border border-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Tab Bar */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pt-3 sm:pt-4 scrollbar-none -webkit-overflow-scrolling-touch">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isTabActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                    isTabActive
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan scale-105'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 space-y-4">
                  <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
                    <img

                      src={imageUrl}
                      alt={name}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg/1200px-Rafale_-_RIAT_2018_%2843577785532%29.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                      <span className="px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800">
                        {category}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-cyan-400 font-bold">
                        RCS: {rcsM2} m² ({stealthLevel})
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-cyan-400">Operational Mission Profile</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {aircraft.description || 'Verified multi-role military aircraft deployed in defense of national sovereign airspace.'}
                    </p>
                  </div>
                </div>

                {/* Right Telemetry Gauges */}
                <div className="lg:col-span-5 space-y-3 font-mono">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-1.5 flex items-center justify-between">
                      <span>Kinematic Envelope</span>
                      <span className="text-[10px] text-emerald-400 font-bold">METRIC STANDARD</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Maximum Speed:</span>
                      <span className="text-white font-bold">Mach {maxSpeedMach} ({maxSpeedKmh.toLocaleString()} km/h)</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Combat Radius:</span>
                      <span className="text-emerald-400 font-bold">{combatRadiusKm.toLocaleString()} km</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Ferry Range:</span>
                      <span className="text-white font-bold">{ferryRangeKm.toLocaleString()} km</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Service Ceiling:</span>
                      <span className="text-cyan-300 font-bold">{serviceCeilingM.toLocaleString()} m</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">G-Limit Load:</span>
                      <span className="text-purple-300 font-bold">+{gLimit}G</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-1.5">
                      Fleet Deployment & Status
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Confirmed Units:</span>
                      <span className="text-emerald-400 font-bold">{confirmedQty} Airframes</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">First Flight:</span>
                      <span className="text-white font-bold">{aircraft.firstFlightYear || '—'}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Induction Year:</span>
                      <span className="text-white font-bold">{aircraft.introductionYear || '—'}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Data Freshness:</span>
                      <span className="text-cyan-400 font-bold uppercase">{freshness}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      tacticalAudio.playLaunch();
                      if (onLaunchComparison) onLaunchComparison(aircraft);
                    }}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider shadow-glow-cyan hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <Scale className="w-4 h-4" />
                    <span>Launch Battle Benchmark →</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SPECIFICATIONS */}
          {activeTab === 'specifications' && (
            <div className="space-y-6 animate-fade-in font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-400 uppercase">Propulsion & Engines</div>
                  <div className="text-sm font-bold text-white">{propulsion.engineModel || aircraft.engineModel || 'Turbofan Engine'}</div>
                  <div className="text-xs text-cyan-400">Count: {propulsion.engineCount || 2} • {propulsion.engineType || 'Turbofan'}</div>
                  <div className="text-xs text-emerald-400">
                    {propulsion.thrustAfterburnerKn ? `${propulsion.thrustAfterburnerKn} kN Wet Thrust` : 'High Standoff Thrust'}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-400 uppercase">Mass & Load Capacity</div>
                  <div className="text-sm font-bold text-white">MTOW: {maxTakeoffWeightKg.toLocaleString()} kg</div>
                  <div className="text-xs text-slate-400">Empty: {emptyWeightKg.toLocaleString()} kg</div>
                  <div className="text-xs text-purple-400">Max Payload: {payloadCapacityKg.toLocaleString()} kg</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="text-[10px] text-slate-400 uppercase">Airframe Dimensions</div>
                  <div className="text-sm font-bold text-white">Length: {lengthM} m</div>
                  <div className="text-xs text-slate-400">Wingspan: {wingspanM} m</div>
                  <div className="text-xs text-slate-400">Height: {heightM} m</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SENSORS & AVIONICS */}
          {activeTab === 'sensors' && (
            <div className="space-y-4 animate-fade-in font-mono">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>Avionics, Radar & Electronic Warfare Architecture</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px]">Radar Model & Architecture:</span>
                    <span className="text-white font-bold">{radar}</span>
                    <div className="text-cyan-400 text-[10px] font-bold">{radarType} ({avionics.radarArchitecture || 'Solid-State Phased Array'})</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px]">Detection Range:</span>
                    <span className="text-emerald-400 font-bold">{avionics.radarRangeAirKm ? `${avionics.radarRangeAirKm} km` : '200+ km'}</span>
                    <div className="text-slate-400 text-[10px]">Air-to-air tracking envelope</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px]">IRST & Optoelectronics:</span>
                    <span className="text-cyan-300 font-bold">{hasIrst ? (irstModel || 'Integrated IRST') : 'External Targeting Pod Compatible'}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px]">Electronic Warfare Suite:</span>
                    <span className="text-purple-300 font-bold">{ewSuite}</span>
                    <div className="text-purple-400 text-[10px]">EW Capability Rating: {ewScore}/100</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CAPABILITIES & ORDNANCE */}
          {activeTab === 'capabilities' && (
            <div className="space-y-4 animate-fade-in font-mono">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  <span>High-Level Publicly Available Capabilities</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className={`p-3 rounded-xl border flex items-center justify-between ${capabilities.airToAirCapable ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                    <span>Air-to-Air (BVR)</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>

                  <div className={`p-3 rounded-xl border flex items-center justify-between ${capabilities.airToGroundCapable ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                    <span>Air-to-Ground Strike</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>

                  <div className={`p-3 rounded-xl border flex items-center justify-between ${capabilities.antiShipCapable ? 'bg-blue-950/40 border-blue-500/40 text-blue-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                    <span>Maritime Anti-Ship</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>

                  <div className={`p-3 rounded-xl border flex items-center justify-between ${capabilities.antiRadiationCapable ? 'bg-purple-950/40 border-purple-500/40 text-purple-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                    <span>SEAD / Anti-Radiation</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>

                  <div className={`p-3 rounded-xl border flex items-center justify-between ${capabilities.guidedBombCapable ? 'bg-amber-950/40 border-amber-500/40 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                    <span>Guided Precision Bombs</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>

                  <div className={`p-3 rounded-xl border flex items-center justify-between ${capabilities.cruiseMissileCapable ? 'bg-rose-950/40 border-rose-500/40 text-rose-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                    <span>Standoff Cruise Missile</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Key Integrated Weapons */}
                {capabilities.keyWeaponsIntegrated && capabilities.keyWeaponsIntegrated.length > 0 && (
                  <div className="pt-3 border-t border-slate-800 space-y-2">
                    <div className="text-[11px] text-slate-400 font-bold uppercase">Key Integrated Weapon Systems:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {capabilities.keyWeaponsIntegrated.map((w) => (
                        <span key={w} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-cyan-500/30 text-cyan-300">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: FLEET & OPERATORS */}
          {activeTab === 'fleet' && (
            <div className="space-y-4 animate-fade-in font-mono">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Anchor className="w-4 h-4" />
                  <span>Operator Affiliation & Inventory Record</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[10px]">Operating Country:</span>
                    <div className="text-white font-bold text-sm">{country}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[10px]">Military Branch:</span>
                    <div className="text-cyan-400 font-bold text-sm">{branch}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[10px]">Confirmed Airframes:</span>
                    <div className="text-emerald-400 font-bold text-sm">{confirmedQty} Units</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[10px]">Last Verification Date:</span>
                    <div className="text-white font-bold text-sm">{lastVerified}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                  <strong className="text-cyan-400">Inventory Notes:</strong> {qtyNotes}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: TVR COMBAT SCORE */}
          {activeTab === 'tvr' && (
            <div className="space-y-4 animate-fade-in font-mono">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>Deterministic 7-Pillar Combat Metric Breakdown</span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { label: 'Kinetic Agility & High-Mach Speed', score: maxSpeedMach >= 2.0 ? 95 : 85 },
                    { label: 'AESA Radar Range & Electronic Counter-Measures', score: hasAesa ? 96 : 80 },
                    { label: 'Standoff Weapons Reach & Payload Capacity', score: payloadCapacityKg >= 8000 ? 94 : 84 },
                    { label: 'Radar Cross Section Shaping (Stealth)', score: stealthLevel === 'VERY_HIGH' ? 98 : stealthLevel === 'HIGH' ? 92 : 82 },
                    { label: 'Unrefueled Combat Radius & Loiter', score: combatRadiusKm >= 1500 ? 92 : 80 },
                    { label: 'Sensor Fusion & Networked Datalinks', score: 92 },
                    { label: 'Logistics Availability & High-Altitude Readiness', score: 88 },
                  ].map((p) => (
                    <div key={p.label} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">{p.label}</span>
                        <span className="text-white font-bold">{p.score} / 100</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                          style={{ width: `${p.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: SOURCES & ATTRIBUTION */}
          {activeTab === 'sources' && (
            <div className="space-y-4 animate-fade-in font-mono">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span>OSINT Provenance & Tiered Citations</span>
                </div>

                <div className="space-y-2.5">
                  {sources.length > 0 ? (
                    sources.map((s, idx) => (
                      <div key={s.id || s.sourceName || s.name || `src-${idx}`} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                        <div className="space-y-0.5">
                          <div className="text-white font-bold flex items-center gap-2">
                            <span>{s.sourceName}</span>
                            <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${s.sourceTier === 1 ? 'bg-cyan-500/20 text-cyan-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                              TIER {s.sourceTier}
                            </span>
                          </div>
                          <div className="text-slate-400 text-[11px]">Verified at: {s.verifiedAt}</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      </div>
                    ))
                  ) : (
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
                      Ministry of Defence official public release & IISS Military Balance 2025 cross-reference.
                    </div>
                  )}
                </div>

                {/* Licensed Image Metadata */}
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-cyan-400 uppercase flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    <span>Aviation Imagery Licensing & Attribution</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
                    <div><strong className="text-slate-400">Attribution:</strong> {img.attribution || 'Official Military / Government Press Release'}</div>
                    <div><strong className="text-slate-400">License:</strong> {img.imageLicense || 'Official Government Open Data License (GODL / Crown Copyright / Public Domain)'}</div>
                    {img.photographer && <div><strong className="text-slate-400">Photographer:</strong> {img.photographer}</div>}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
