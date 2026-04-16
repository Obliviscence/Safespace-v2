import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        mint: "hsl(var(--mint))",
        sand: "hsl(var(--sand))",
        sky: "hsl(var(--sky))",
        lavender: "hsl(var(--lavender))",
      },
      boxShadow: {
        soft: "0 16px 40px rgba(8, 16, 36, 0.10)",
        elevated: "0 24px 64px rgba(7, 14, 30, 0.14)",
        halo: "0 0 0 1px rgba(255,255,255,0.08), 0 18px 48px rgba(117, 139, 191, 0.12)",
      },
      borderRadius: {
        xl2: "1.375rem",
        xl3: "1.75rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-manrope)"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.03)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        "soft-pulse": "soft-pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
