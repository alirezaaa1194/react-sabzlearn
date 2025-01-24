import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        DanaRegular: "DanaRegular",
        DanaMedium: "DanaMedium",
        DanaDemiBold: "DanaDemiBold",
        MorabaLight: "MorabaLight",
        MorabaMedium: "MorabaMedium",
        MorabaBold: "MorabaBold",
      },
      colors: {
        darker: "#242a38",
        dark: "#333c4c",
        primary: "#1eb35b",
        "primary-hover": "#009c4b",
      },
      height: {
        13: "52px",
        25: "100px",
      },
      width: {
        13: "52px",
        54: "216px",
      },
    },
  },
  plugins: [],
} satisfies Config;
