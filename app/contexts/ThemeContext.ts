import { createContext } from "react";

type ThemeContextValueType = {
  themeState: "light" | "dark" | null;
  setThemeState: (param: "light" | "dark" | null) => void;
};

export const ThemeContext = createContext<ThemeContextValueType | null>(null);
