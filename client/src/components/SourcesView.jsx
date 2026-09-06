import React from 'react';
import { Database, ExternalLink, ShieldCheck, Award, BookOpen, Globe } from 'lucide-react';

export default function SourcesView() {
  const sources = [
    {
      name: "Jane's All the World's Aircraft (2024–2025 Edition)",
      publisher: "IHS Jane's Information Group",
      tier: 'TIER_2_DEFENSE_JOURNAL',
      reliability: 'HIGH',
      coverage: 'Global physical dimensions, empty weight, MTOW, engine models, and radar variants.',
      url: 'https://www.janes.com',
    },
    {
      name: 'World Air Forces Directory 2025',
      publisher: 'FlightGlobal / Embraer',
      tier: 'TIER_2_DEFENSE_JOURNAL',
      reliability: 'HIGH',
      coverage: 'Active fleet counts across Air Force, Army Aviation, and Naval Air Arms.',
      url: 'https://www.flightglobal.com',
    },
    {
      name: 'Selected Acquisition Reports (SAR) & Director, Operational Test & Evaluation (DOT&E)',
      publisher: 'United States Department of Defense',
      tier: 'TIER_1_OFFICIAL',
      reliability: 'MAXIMUM',
      coverage: 'F-35 Block 4 telemetry, F-22 Increment 3.2B upgrades, and radar cross-section standards.',
      url: 'https://www.defense.gov',
    },
    {
      name: 'DRDO & HAL Annual Aeronautical Whitepaper',
      publisher: 'Ministry of Defence, Government of India',
      tier: 'TIER_1_OFFICIAL',
      reliability: 'MAXIMUM',
      coverage: 'Tejas Mk1A, Su-30MKI Super Sukhoi upgrade specs, Astra Mk1/Mk2, and BrahMos-A integration.',
      url: 'https://hal-india.co.in',
    },
    {
      name: 'Dassault Aviation Technical Publications',
      publisher: 'Dassault Aviation S.A.',
      tier: 'TIER_1_OFFICIAL',
      reliability: 'MAXIMUM',
      coverage: 'Rafale F3-R / F4 flight envelopes, M88 engine thrust curves, and SPECTRA electronic warfare suite.',
      url: 'https://www.dassault-aviation.com',
    },
    {
      name: 'World Directory of Modern Military Aircraft (WDMMA)',
      publisher: 'WDMMA Aviation Research Group',
      tier: 'TIER_2_DEFENSE_JOURNAL',
      reliability: 'HIGH',
      coverage: 'True Value Rating (TVR) formula calibration and national airpower score benchmarking.',
      url: 'https://www.wdmma.org',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-av-steel/40 bg-gradient-to-r from-av-blue/90 via-av-blue/40 to-av-navy">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-av-sky/10 border border-av-sky/30 text-av-sky text-xs font-mono">
            <Database className="w-3.5 h-3.5" />
            <span>OPEN-SOURCE DEFENSE INTELLIGENCE ATTRIBUTION</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Data Sources & Provenance Catalog
          </h1>
          <p className="text-xs sm:text-sm text-av-light/80 max-w-2xl leading-relaxed">
            Every metric in AeroVault is traceable to authoritative government whitepapers, OEM engineering documentation, or vetted defense aerospace journals.
          </p>
        </div>
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sources.map((source) => (
          <div
            key={source.name}
            className="glass-panel rounded-3xl p-6 border border-av-steel/30 space-y-4 hover:border-av-sky/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase ${
                    source.tier === 'TIER_1_OFFICIAL'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                      : 'bg-av-blue text-av-sky border border-av-steel/40'
                  }`}
                >
                  {source.tier.replace(/_/g, ' ')}
                </span>

                <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{source.reliability} RELIABILITY</span>
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">{source.name}</h3>
                <p className="text-xs font-mono text-av-teal mt-0.5">{source.publisher}</p>
              </div>

              <p className="text-xs text-av-light/80 leading-relaxed border-t border-av-steel/20 pt-2">
                {source.coverage}
              </p>
            </div>

            <a
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-xs font-mono text-av-sky hover:underline pt-2"
            >
              <span>Verify Source Publication</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
