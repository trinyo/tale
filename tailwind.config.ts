import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "dark-background": "#121212",
        "dark-text": "#fafafa",
        "dark-outline": "#bfbfbf",

        "dark-1-normal": "#171717",
        "dark-1-hover": "#1d1d1d",
        "dark-1-press": "#222222",
        "dark-2-normal": "#1c1c1c",
        "dark-2-hover": "#222222",
        "dark-2-press": "#272727",
        "dark-3-normal": "#212121",
        "dark-3-hover": "#272727",
        "dark-3-press": "#2c2c2c",

        "light-background": "#f0f0f0",
        "light-text": "#161616",
        "light-outline": "#4f4f4f",

        "light-1-normal": "#f5f5f5",
        "light-1-hover": "#efefef",
        "light-1-press": "#eaeaea",
        "light-2-normal": "#fafafa",
        "light-2-hover": "#f4f4f4",
        "light-2-press": "#efefef",
        "light-3-normal": "#ffffff",
        "light-3-hover": "#f9f9f9",
        "light-3-press": "#f4f4f4",

        green: "#7fb77e",
        "green-hover": "#78b377",
        "green-press": "#72b071",
        "green-dimmed": "rgba(127, 183, 126, .5)",

        blue: "#5a96e3",
        "blue-hover": "#5190e2",
        "blue-press": "#498be0",
        "blue-dimmed": "rgba(90, 150, 227, .5)",

        yellow: "#f7d060",
        "yellow-hover": "#f7cd56",
        "yellow-press": "#f6ca4d",
        "yellow-dimmed": "rgba(247, 208, 96, .5)",

        red: "#ff6464",
        "red-hover": "#ff5a5a",
        "red-press": "#ff5050",
        "red-dimmed": "rgba(255, 100, 100, .5)",
      },
      borderRadius: {
        8: "8px",
        12: "12px",
        16: "16px",
      },
      fontSize: {
        label: ["12px", "16px"],
        body: ["16px", "22px"],
        body2: ["17px", "23px"],
        subtitle: ["20px", "26px"],
        title4: ["24px", "30px"],
        title3: ["28px", "36px"],
        title2: ["36px", "44px"],
        title1: ["48px", "58px"],
        display: ["64px", "74px"],
      },
      width: {
        flashcard: "calc(100% - 4px)",
      },
      height: {
        flashcard: "calc(100% - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
