import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grSkin1: "#fae1dd",
        grSkin2: "#fcd5ce",
        grSkin3: "#fec5bb",
        DarkBlue: "#0d182e"
      },
    },
  },
  plugins: [],
};
export default config;
