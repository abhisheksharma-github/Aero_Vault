/**
 * AeroVault Tactical Audio Synthesizer (Web Audio API)
 * Generates futuristic cockpit UI acoustic feedback asynchronously without blocking the UI thread.
 */

class TacticalAudioService {
  constructor() {
    this.ctx = null;
    this.isEnabled = false;
    this.isInitializing = false;
    
    // Check localStorage preference if available
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('aerovault_audio_fx');
        this.isEnabled = saved === 'true';
      }
    } catch {
      this.isEnabled = false;
    }
  }

  async init() {
    if (!this.ctx && typeof window !== 'undefined' && !this.isInitializing) {
      this.isInitializing = true;
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      } catch (e) {
        // Fallback gracefully
      } finally {
        this.isInitializing = false;
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      try {
        this.ctx.resume().catch(() => {});
      } catch (e) {}
    }
  }

  toggleSound() {
    this.isEnabled = !this.isEnabled;
    try {
      localStorage.setItem('aerovault_audio_fx', String(this.isEnabled));
    } catch {}
    
    if (this.isEnabled) {
      this.init().then(() => this.playLock());
    }
    return this.isEnabled;
  }

  playClick() {
    if (!this.isEnabled) return;
    // Dispatch asynchronously to never block click event handlers or UI updates
    setTimeout(() => {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.03);
        
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.03);
      } catch (e) {
        // Ignore audio errors
      }
    }, 0);
  }

  playTab() {
    if (!this.isEnabled) return;
    setTimeout(() => {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);
        
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.04);
      } catch (e) {}
    }, 0);
  }

  playLock() {
    if (!this.isEnabled) return;
    setTimeout(() => {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const now = this.ctx.currentTime;
        
        // Dual-tone radar lock ping
        [1400, 1800].forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.04);
          
          gain.gain.setValueAtTime(0.05, now + i * 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.04 + 0.06);
          
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          
          osc.start(now + i * 0.04);
          osc.stop(now + i * 0.04 + 0.06);
        });
      } catch (e) {}
    }, 0);
  }

  playLaunch() {
    if (!this.isEnabled) return;
    setTimeout(() => {
      try {
        this.init();
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(1320, now + 0.12);
        
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.12);
      } catch (e) {}
    }, 0);
  }
}

export const tacticalAudio = new TacticalAudioService();

