/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Red Hat Display", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontWeight: {
        extrabold: '900',
        black: '950',
      },
      colors: {
        // Brand book exact colors
        bg: "#FFFFFF",
        surface: "#F7F7F7",
        text: "#2E2C2F",
        "text-muted": "#3A3D42",
        brand: "#FF4937",
        "brand-strong": "#590F13",
        navy: "#202641",
        border: "rgba(46,44,47,0.14)",
        shadow: "rgba(0,0,0,0.10)",

        // Standard semantic mappings
        background: "#FFFFFF",
        foreground: "#2E2C2F",
        primary: {
          DEFAULT: "#FF4937",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F7F7F7",
          foreground: "#2E2C2F",
        },
        destructive: {
          DEFAULT: "#590F13",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F7F7F7",
          foreground: "#3A3D42",
        },
        accent: {
          DEFAULT: "#F7F7F7",
          foreground: "#2E2C2F",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#2E2C2F",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2E2C2F",
        },
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        "2xl": "64px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0,0,0,0.10)",
        md: "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)",
        lg: "0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "350ms",
      },
      fontSize: {
        h1: ["56px", { lineHeight: "1.05" }],
        h2: ["40px", { lineHeight: "1.1" }],
        h3: ["28px", { lineHeight: "1.2" }],
        body: ["16px", { lineHeight: "1.5" }],
        small: ["14px", { lineHeight: "1.4" }],
        micro: ["12px", { lineHeight: "1.3" }],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
}
