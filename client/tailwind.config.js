/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        av: {
          navy: '#001226',
          blue: '#0A325C',
          steel: '#49769F',
          teal: '#4E8EA2',
          mist: '#6EA2B3',
          light: '#D6E6F2',
          sky: '#00E5FF',
          white: '#FFFFFF',
        },
        vault: {
          950: '#001226',
          900: '#061a33',
          850: '#0A325C',
          800: '#144272',
          700: '#49769F',
          600: '#4E8EA2',
          500: '#6EA2B3',
        },
        tactical: {
          cyan: '#00E5FF',
          blue: '#7BBDE8',
          emerald: '#10b981',
          green: '#22c55e',
          amber: '#f59e0b',
          crimson: '#ef4444',
          purple: '#a855f7',
        }
      },
      fontFamily: {
        display: ['"Outfit"', '"Inter"', 'system-ui', 'sans-serif'],
        tech: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'hud-glow': '0 0 8px rgba(0, 229, 255, 0.4), inset 0 0 12px rgba(0, 229, 255, 0.1)',
        'aircraft-glow': '0 0 8px #FFFFFF, 0 0 20px #00E5FF',
        'glow-cyan': '0 0 25px -4px rgba(0, 229, 255, 0.45)',
        'glow-blue': '0 0 25px -4px rgba(73, 118, 159, 0.45)',
        'glow-green': '0 0 25px -4px rgba(16, 185, 129, 0.35)',
        'glow-amber': '0 0 25px -4px rgba(245, 158, 11, 0.35)',
        'glow-crimson': '0 0 25px -4px rgba(239, 68, 68, 0.35)',
        'glow-purple': '0 0 25px -4px rgba(168, 85, 247, 0.35)',
      },
      animation: {
        'radar-sweep': 'radarSweep 4s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reticle-spin': 'reticleSpin 12s linear infinite',
      },
      keyframes: {
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reticleSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
