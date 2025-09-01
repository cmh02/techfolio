/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: 'rgb(var(--md-sys-color-primary) / <alpha-value>)',
          container: 'rgb(var(--md-sys-color-primary-container) / <alpha-value>)',
          fixed: 'rgb(var(--md-sys-color-primary-fixed) / <alpha-value>)',
          'fixed-dim': 'rgb(var(--md-sys-color-primary-fixed-dim) / <alpha-value>)',
        },
        'on-primary': 'rgb(var(--md-sys-color-on-primary) / <alpha-value>)',
        'on-primary-container': 'rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)',
        'on-primary-fixed': 'rgb(var(--md-sys-color-on-primary-fixed) / <alpha-value>)',
        'on-primary-fixed-variant': 'rgb(var(--md-sys-color-on-primary-fixed-variant) / <alpha-value>)',
        
        // Secondary colors
        secondary: {
          DEFAULT: 'rgb(var(--md-sys-color-secondary) / <alpha-value>)',
          container: 'rgb(var(--md-sys-color-secondary-container) / <alpha-value>)',
          fixed: 'rgb(var(--md-sys-color-secondary-fixed) / <alpha-value>)',
          'fixed-dim': 'rgb(var(--md-sys-color-secondary-fixed-dim) / <alpha-value>)',
        },
        'on-secondary': 'rgb(var(--md-sys-color-on-secondary) / <alpha-value>)',
        'on-secondary-container': 'rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)',
        'on-secondary-fixed': 'rgb(var(--md-sys-color-on-secondary-fixed) / <alpha-value>)',
        'on-secondary-fixed-variant': 'rgb(var(--md-sys-color-on-secondary-fixed-variant) / <alpha-value>)',
        
        // Tertiary colors
        tertiary: {
          DEFAULT: 'rgb(var(--md-sys-color-tertiary) / <alpha-value>)',
          container: 'rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)',
          fixed: 'rgb(var(--md-sys-color-tertiary-fixed) / <alpha-value>)',
          'fixed-dim': 'rgb(var(--md-sys-color-tertiary-fixed-dim) / <alpha-value>)',
        },
        'on-tertiary': 'rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)',
        'on-tertiary-container': 'rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)',
        'on-tertiary-fixed': 'rgb(var(--md-sys-color-on-tertiary-fixed) / <alpha-value>)',
        'on-tertiary-fixed-variant': 'rgb(var(--md-sys-color-on-tertiary-fixed-variant) / <alpha-value>)',
        
        // Error colors
        error: {
          DEFAULT: 'rgb(var(--md-sys-color-error) / <alpha-value>)',
          container: 'rgb(var(--md-sys-color-error-container) / <alpha-value>)',
        },
        'on-error': 'rgb(var(--md-sys-color-on-error) / <alpha-value>)',
        'on-error-container': 'rgb(var(--md-sys-color-on-error-container) / <alpha-value>)',
        
        // Surface colors
        surface: {
          DEFAULT: 'rgb(var(--md-sys-color-surface) / <alpha-value>)',
          variant: 'rgb(var(--md-sys-color-surface-variant) / <alpha-value>)',
          dim: 'rgb(var(--md-sys-color-surface-dim) / <alpha-value>)',
          bright: 'rgb(var(--md-sys-color-surface-bright) / <alpha-value>)',
          tint: 'rgb(var(--md-sys-color-surface-tint) / <alpha-value>)',
          container: {
            lowest: 'rgb(var(--md-sys-color-surface-container-lowest) / <alpha-value>)',
            low: 'rgb(var(--md-sys-color-surface-container-low) / <alpha-value>)',
            DEFAULT: 'rgb(var(--md-sys-color-surface-container) / <alpha-value>)',
            high: 'rgb(var(--md-sys-color-surface-container-high) / <alpha-value>)',
            highest: 'rgb(var(--md-sys-color-surface-container-highest) / <alpha-value>)',
          }
        },
        'on-surface': 'rgb(var(--md-sys-color-on-surface) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)',
        
        // Background colors
        background: 'rgb(var(--md-sys-color-background) / <alpha-value>)',
        'on-background': 'rgb(var(--md-sys-color-on-background) / <alpha-value>)',
        
        // Outline colors
        outline: {
          DEFAULT: 'rgb(var(--md-sys-color-outline) / <alpha-value>)',
          variant: 'rgb(var(--md-sys-color-outline-variant) / <alpha-value>)',
        },
        
        // Utility colors
        shadow: 'rgb(var(--md-sys-color-shadow) / <alpha-value>)',
        scrim: 'rgb(var(--md-sys-color-scrim) / <alpha-value>)',
        
        // Inverse colors
        'inverse-surface': 'rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)',
        'inverse-on-surface': 'rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)',
        'inverse-primary': 'rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)',
      }
      ,
      animation: {
        gradient: "gradient 6s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
