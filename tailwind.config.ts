import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|button|dropdown|divider|ripple|spinner|menu|popover).js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        DanaLight: "DanaLight",
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
        secondary: "#0a97d4",
        "secondary-hover": "#127bbb",
      },
      height: {
        13: "52px",
        25: "100px",
      },
      width: {
        13: "52px",
        54: "216px",
      },
      transitionDuration: {
        DEFAULT: "150ms",
      },

      screens: {
        lg: "1084px",
      },
    },
  },
  plugins: [
    heroui(),
    function ({ addVariant }: any) {
      addVariant("active", "&.active");
    },
  ],
} satisfies Config;
