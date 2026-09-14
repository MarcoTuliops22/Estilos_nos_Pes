import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0b0f19",
          card: "#121826",
          cardHover: "#182133",
          border: "#1e293b",
          gold: "#f59e0b",
          goldHover: "#d97706",
          cyan: "#06b6d4",
          cyanHover: "#0891b2",
          whatsapp: "#25D366",
          whatsappHover: "#1ea952",
          surface: "#0f172a",
          muted: "#94a3b8",
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(245, 158, 11, 0.3)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.3)",
        "glow-whatsapp": "0 0 25px -5px rgba(37, 211, 102, 0.35)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
