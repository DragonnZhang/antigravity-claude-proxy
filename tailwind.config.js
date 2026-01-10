/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.{html,js}",
    "./public/views/**/*.html",
    "./public/js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        space: {
          950: '#09090b',
          900: '#0f0f11',
          850: '#121214',
          800: '#18181b',
          border: '#27272a'
        },
        neon: {
          purple: '#a855f7',
          cyan: '#06b6d4',
          green: '#22c55e',
          yellow: '#eab308',
          red: '#ef4444'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
  daisyui: {
    themes: [{
      antigravity: {
        "primary": "var(--color-neon-purple)",
        "secondary": "var(--color-neon-green)",
        "accent": "var(--color-neon-cyan)",
        "neutral": "var(--color-space-800)",
        "base-100": "var(--color-space-950)",
        "info": "var(--color-neon-cyan)",
        "success": "var(--color-neon-green)",
        "warning": "var(--color-neon-yellow)",
        "error": "var(--color-neon-red)",
      }
    }]
  }
}
