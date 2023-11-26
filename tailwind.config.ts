import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        50: "white",
        100: "rgba(255, 255, 255, 0.88)",
        900: "rgb(40, 44, 53)",
        950: "#222",
        primary: { 100: "#cbb6ff", DEFAULT: "#712f93" },
        secondary: { 100: "#ffb3d8", DEFAULT: "#f4669e" },
        link: { 100: "#e8b4ee", DEFAULT: "#b64a99" },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
