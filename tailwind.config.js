export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        brand: {
          950: "#050505",
          900: "#0c0c0c",
          850: "#111111",
          800: "#151515",
          700: "#1f1f1f",
          600: "#272727",
        },
        surface: {
          950: "#060606",
          900: "#0f0f0f",
          850: "#141414",
          800: "#1b1b1b",
          700: "#242424",
        },
        accent: {
          orange: "#ff7a18",
          orangeLight: "#ff8f33",
          blue: "#4b8cff",
          blueLight: "#78a9ff",
        },
      },
      boxShadow: {
        glow: "0 0 60px rgba(255, 122, 24, 0.16)",
        soft: "0 22px 90px rgba(0, 0, 0, 0.22)",
        panel: "0 18px 80px rgba(0, 0, 0, 0.18)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top right, rgba(255, 122, 24, 0.22), transparent 24%), radial-gradient(circle at bottom left, rgba(75, 140, 255, 0.14), transparent 32%)",
        "grid-lines": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      borderRadius: {
        xl: "1.75rem",
        "2xl": "2.5rem",
      },
      backdropBlur: {
        xs: "2px",
        sm: "6px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
