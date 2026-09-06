import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { FileText, Download, Shield, Printer, Sparkles, Award, Globe, CheckCircle } from 'lucide-react';

export default function ReportsView({ nations }) {
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadReport() {
      setLoading(true);
      try {
        const data = await apiService.getNationReport(selectedCountry);
        setReport(data);
      } catch (err) {
        console.error('Failed generating report:', err);
      } finally {
        setLoading(false);
      }
    }
    loadReport();
  }, [selectedCountry]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-av-steel/40 bg-gradient-to-r from-av-blue/90 via-av-blue/40 to-av-navy">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-av-sky/10 border border-av-sky/30 text-av-sky text-xs font-mono">
              <FileText className="w-3.5 h-3.5" />
              <span>DEFENSE INTELLIGENCE DOSSIER GENERATOR</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Military Fleet Capability Reports
            </h1>
            <p className="text-xs sm:text-sm text-av-light/80 max-w-2xl leading-relaxed">
              Generate structured, verifiable capability assessments synthesized from open-source military air order-of-battle (OrBat) data.
            </p>
          </div>

          <div className="flex items-center space-x-2 font-mono text-xs">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-av-navy px-4 py-2 rounded-xl border border-av-steel/40 text-white font-bold focus:outline-none focus:border-av-sky cursor-pointer"
            >
              {nations.map((n) => (
                <option key={n.countryName} value={n.countryName}>
                  {n.countryName} Report
                </option>
              ))}
            </select>

            <button
              onClick={() => window.print()}
              className="p-2.5 rounded-xl bg-av-sky text-av-navy font-bold shadow-glow-cyan hover:brightness-110 flex items-center gap-1.5"
              title="Print Dossier Report"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Generated Dossier Paper Container */}
      {report && (
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-av-steel/40 space-y-8 bg-av-navy/90 text-av-light">
          
          {/* Header Block */}
          <div className="border-b border-av-steel/40 pb-6 space-y-2">
            <div className="flex items-center justify-between font-mono text-xs text-av-mist">
              <span>REPORT IDENTIFIER: <strong className="text-av-sky">{report.id}</strong></span>
              <span>CLASSIFICATION: <strong className="text-emerald-400">{report.classification}</strong></span>
              <span>DATE: <strong className="text-white">{report.generatedDate}</strong></span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide pt-2">
              {report.reportTitle}
            </h2>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-av-sky flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              <span>1. Executive Summary & Fleet Posture</span>
            </h3>
            <p className="text-xs sm:text-sm text-av-light/90 leading-relaxed p-4 rounded-2xl bg-av-blue/30 border border-av-steel/30">
              {report.executiveSummary}
            </p>
          </div>

          {/* Fleet Metrics 4-Box */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-av-blue/40 border border-av-steel/30 space-y-1">
              <div className="text-[10px] text-av-mist uppercase">Total Active Units</div>
              <div className="text-xl font-bold text-white">{report.fleetBreakdown.totalUnits.toLocaleString()}</div>
            </div>
            <div className="p-4 rounded-2xl bg-av-blue/40 border border-av-steel/30 space-y-1">
              <div className="text-[10px] text-av-mist uppercase">Modernization Index</div>
              <div className="text-xl font-bold text-emerald-400">{report.fleetBreakdown.modernizationIndex}%</div>
            </div>
            <div className="p-4 rounded-2xl bg-av-blue/40 border border-av-steel/30 space-y-1">
              <div className="text-[10px] text-av-mist uppercase">Average TVR Rating</div>
              <div className="text-xl font-bold text-av-sky">{report.fleetBreakdown.averageTvr.toFixed(1)}</div>
            </div>
            <div className="p-4 rounded-2xl bg-av-blue/40 border border-av-steel/30 space-y-1">
              <div className="text-[10px] text-av-mist uppercase">5th Gen Stealth Ratio</div>
              <div className="text-xl font-bold text-purple-400">{report.fleetBreakdown.gen5Ratio}%</div>
            </div>
          </div>

          {/* Strategic Domains Assessment */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-av-sky flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>2. Multi-Domain Strategic Capability Assessments</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {report.strategicCapabilities.map((cap) => (
                <div key={cap.domain} className="p-4 rounded-2xl bg-av-blue/30 border border-av-steel/30 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-white">{cap.domain}</span>
                    <span className="px-2 py-0.5 rounded bg-av-sky/20 text-av-sky text-[10px] font-mono">
                      {cap.rating}
                    </span>
                  </div>
                  <p className="text-xs text-av-light/80 leading-relaxed">{cap.assessment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Strategic Assets Table */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-av-sky flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>3. Primary Combat & Force Projection Assets</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono text-left">
                <thead className="bg-av-blue/60 text-av-mist border-b border-av-steel/30">
                  <tr>
                    <th className="p-3">Platform Model</th>
                    <th className="p-3">Operational Role</th>
                    <th className="p-3">Operating Branch</th>
                    <th className="p-3 text-right">TVR Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-av-steel/20">
                  {report.keyStrategicAssets.map((asset) => (
                    <tr key={asset.name} className="hover:bg-av-blue/30 transition-colors">
                      <td className="p-3 font-bold text-white">{asset.name}</td>
                      <td className="p-3 text-av-light">{asset.role}</td>
                      <td className="p-3 text-av-teal">{asset.branch?.replace('_', ' ')}</td>
                      <td className="p-3 text-right text-av-sky font-bold">
                        {asset.tvrScore.toFixed(1)} ({asset.tvrGrade})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sources Cited */}
          <div className="border-t border-av-steel/40 pt-4 text-xs font-mono text-av-mist space-y-1">
            <div className="text-[10px] uppercase font-bold text-av-mist">Verified Open-Source Intelligence References:</div>
            <div className="flex flex-wrap gap-2">
              {report.sourcesCited.map((s) => (
                <span key={s} className="px-2 py-0.5 rounded bg-av-blue/40 border border-av-steel/30 text-[10px] text-av-light">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
