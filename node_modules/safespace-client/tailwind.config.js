/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cloud: "#f9fbff",
        sky: "#b8ddff",
        lavender: "#d9ccff",
        mint: "#c9f4df",
        peach: "#ffd8bf",
        blush: "#ffd3e1",
        ink: "#506078",
        soft: "#ffffffcc",
        nightCloud: "#23283c",
        nightSky: "#91a6d7",
      },
      fontFamily: {
        sans: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 45px rgba(157, 177, 227, 0.18)",
        float: "0 18px 38px rgba(255, 183, 197, 0.22)",
      },
      backgroundImage: {
        heroGlow:
          "radial-gradient(circle at top left, rgba(184,221,255,0.8), transparent 35%), radial-gradient(circle at 80% 20%, rgba(217,204,255,0.7), transparent 32%), linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,252,255,0.92))",
        pageWash:
          "linear-gradient(180deg, #f9fbff 0%, #fef8fb 42%, #f3fff9 100%)",
        cardTint:
          "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72))",
        bubbleUser:
          "linear-gradient(135deg, rgba(184,221,255,0.95), rgba(217,204,255,0.92))",
        bubbleAi:
          "linear-gradient(135deg, rgba(201,244,223,0.95), rgba(255,216,191,0.92))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(184, 221, 255, 0.55)",
          },
          "50%": {
            boxShadow: "0 0 0 14px rgba(184, 221, 255, 0)",
          },
        },
        fadeRise: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        blinkDots: {
          "0%, 80%, 100%": { opacity: 0.3 },
          "40%": { opacity: 1 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 1.8s ease-in-out infinite",
        "fade-rise": "fadeRise 0.8s ease forwards",
        "blink-dots": "blinkDots 1.2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
