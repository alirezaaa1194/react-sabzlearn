import { createContext } from "react";

type ThemeContextValueType = {
  themeState: "light" | "dark";
  setThemeState: (param: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextValueType | null>(null);
