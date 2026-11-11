/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#030712",
          900: "#0B0F1D",
          850: "#0E1528",
          800: "#111827",
          700: "#1E293B",
          600: "#334155",
        },
        navy: {
          deep: "#050816",
          dark: "#0A0F26",
          card: "#0F172A",
        },
        royal: {
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          cyan: "#38BDF8",
        },
        violet: {
          glow: "#C084FC",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
        brand: {
          green: "#35A853",
          teal: "#12B8A6",
          dark: "#123B32",
          light: "#F3FAF6",
          charcoal: "#253B38",
          grey: "#F5F7F6",
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.25)",
        cardHover: "0 12px 30px -4px rgba(124, 58, 237, 0.25)",
        glowViolet: "0 0 50px -10px rgba(124, 58, 237, 0.4)",
        glowBlue: "0 0 50px -10px rgba(37, 99, 235, 0.4)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
