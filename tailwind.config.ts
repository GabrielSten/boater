import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      bg: "#ffffff",
      banner: "#e9ebed",
      active: "#ffffff",
      inactive: "#adbecb",
      orange: "#ed8d25",
      divide: "#394146",
      dark: {
        bg: "#1c262d",
        banner: "#131b1f",
        active: "#ffffff",
        inactive: "#adbecb",
        orange: "#ed8d25",
        divide: "#394146",
      },
    },
  },
  plugins: [],
};
export default config;
