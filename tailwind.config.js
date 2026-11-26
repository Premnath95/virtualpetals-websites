/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0D382E", // Deep Dark Green (Procain Primary)
          primaryHover: "#092921",
          dark: "#123B32", // Primary Dark Green
          teal: "#12B8A6", // Secondary Teal
          tealDark: "#0D9488",
          tealLight: "#CCFBF1",
          charcoal: "#253B38", // Dark Charcoal body text
          darkCharcoal: "#172624",
          light: "#F3FAF6", // Crisp light green accent
          grey: "#F8FAFC",
          green: "#35A853",
          greenDark: "#2B8742",
          // Accent subtle gold lighting inspired by Procain corporate aesthetic
          gold: "#D4AF37",
          goldLight: "#FEF9C3",
          goldDark: "#B45309",
          goldGlow: "rgba(212, 175, 55, 0.2)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["var(--font-manrope)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(18, 59, 50, 0.05), 0 1px 2px -1px rgba(18, 59, 50, 0.05)",
        card: "0 4px 24px -2px rgba(18, 59, 50, 0.08)",
        cardHover: "0 16px 36px -4px rgba(18, 59, 50, 0.14)",
        goldGlow: "0 0 25px -3px rgba(212, 175, 55, 0.25)",
        tealGlow: "0 0 25px -3px rgba(18, 184, 166, 0.25)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
