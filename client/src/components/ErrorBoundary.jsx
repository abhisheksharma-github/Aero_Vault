import React, { Component } from 'react';
import { ShieldAlert, RefreshCw, RotateCcw, AlertTriangle } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('AeroVault Tactical Error Boundary caught an exception:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-vault-950 text-slate-100 flex items-center justify-center p-6 radar-grid selection:bg-tactical-cyan/20 selection:text-tactical-cyan font-sans">
          <div className="max-w-xl w-full rounded-3xl glass-panel border border-rose-500/40 p-8 shadow-glow-crimson space-y-6 text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-rose-950/80 border border-rose-500/50 flex items-center justify-center mx-auto text-rose-400 shadow-glow-crimson animate-pulse">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-950/80 text-rose-400 border border-rose-500/40 uppercase tracking-wider">
                Telemetry Interruption Detected
              </span>
              <h2 className="text-2xl font-black text-white mt-2">
                Tactical System Fault
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                AeroVault encountered an unexpected interface exception while processing military intelligence telemetry. The core data vault remains secure.
              </p>
            </div>

            {this.state.error && (
              <div className="p-4 rounded-xl bg-vault-900/90 border border-slate-800 text-left font-mono text-xs text-rose-300 max-h-32 overflow-y-auto scrollbar-none">
                <div className="text-[10px] text-slate-500 uppercase mb-1">Diagnostic Fault Log:</div>
                <div className="break-all">{this.state.error.toString()}</div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-vault-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset View State</span>
              </button>

              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-tactical-cyan to-teal-400 text-vault-950 hover:brightness-110 shadow-glow-cyan transition-all flex items-center justify-center space-x-2 uppercase tracking-wider"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Tactical Console</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
