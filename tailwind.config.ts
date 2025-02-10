import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|button|checkbox|dropdown|input|modal|pagination|radio|select|skeleton|toggle|table|popover|divider|ripple|spinner|form|menu|listbox|scroll-shadow|spacer).js"
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
        lalezar: "lalezar",
      },
      colors: {
        darker: "#242a38",
        dark: "#333c4c",
        primary: "#1eb35b",
        "primary-hover": "#009c4b",
        secondary: "#0a97d4",
        "secondary-hover": "#127bbb",
        "red-500": "#db2e34",

        "white-50": "#f0f0f0",
        "primary-blue": "#471aaa",
        "blue-hover": "#391588",
      },
      height: {
        13: "52px",
        25: "100px",
      },
      width: {
        13: "52px",
        54: "216px",
        67: "268px",
      },
      transitionDuration: {
        DEFAULT: "150ms",
      },
      screens: {
        lg: "1084px",
      },
      padding: {
        67: "268px",
      },
      boxShadow: {
        "primary-shadow": "0px 8px 24px rgba(149, 157,165, .2)",
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
