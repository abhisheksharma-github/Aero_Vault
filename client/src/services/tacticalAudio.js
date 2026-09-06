/**
 * AeroVault Tactical Audio Synthesizer (Web Audio API)
 * Generates futuristic cockpit UI acoustic feedback without external audio asset downloads.
 */

class TacticalAudioService {
  constructor() {
    this.ctx = null;
    this.isEnabled = false;
    
    // Check localStorage preference if available
    try {
      const saved = localStorage.getItem('aerovault_audio_fx');
      this.isEnabled = saved === 'true';
    } catch {
      this.isEnabled = false;
    }
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.init();
    this.isEnabled = !this.isEnabled;
    try {
      localStorage.setItem('aerovault_audio_fx', String(this.isEnabled));
    } catch {}
    
    if (this.isEnabled) {
      this.playLock();
    }
    return this.isEnabled;
  }

  playClick() {
    if (!this.isEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.04);
      
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      // Ignore audio failure
    }
  }

  playTab() {
    if (!this.isEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.06);
      
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) {}
  }

  playLock() {
    if (!this.isEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      
      // Dual-tone radar lock ping
      [1400, 1800].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        
        gain.gain.setValueAtTime(0.06, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.08);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.08);
      });
    } catch (e) {}
  }

  playLaunch() {
    if (!this.isEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1320, this.ctx.currentTime + 0.15);
      
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch (e) {}
  }
}

export const tacticalAudio = new TacticalAudioService();
