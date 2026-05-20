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
          950: "#020202",
          900: "#050505",
          850: "#0c0c0c",
          800: "#111111",
          700: "#1b1b1b",
          600: "#222222",
        },
        surface: {
          950: "#070707",
          900: "#101010",
          800: "#181818",
          700: "#252525",
        },
        orange: {
          600: "#ff7a18",
          500: "#ff8f33",
          400: "#ffab6f",
        },
        blue: {
          500: "#4b8cff",
          400: "#78a9ff",
          300: "#9dc8ff",
        },
      },
      boxShadow: {
        glow: "0 0 45px rgba(255, 122, 24, 0.18)",
        soft: "0 20px 80px rgba(0, 0, 0, 0.22)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top right, rgba(255, 122, 24, 0.22), transparent 24%), radial-gradient(circle at bottom left, rgba(75, 140, 255, 0.14), transparent 32%)",
      },
      borderRadius: {
        xl: "1.75rem",
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
