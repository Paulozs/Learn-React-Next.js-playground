import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        "Fira Sans": ["Fira Sans", "sans-serif"],
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
} satisfies Config;
