import { MoonIcon, SunIcon } from "public/svg/svgs";
import React, { use, useEffect } from "react";
import { ThemeContext } from "~/contexts/ThemeContext";

function ThemeBtns({ className }: { className?: string }) {
  const themeContext = use(ThemeContext);

  useEffect(() => {
    window.document.cookie = `theme=${themeContext?.themeState}; path=/; expires=11212912981829128`;
  }, [themeContext?.themeState]);

  return (
    <button
      type="submit"
      className={`w-13 h-13 rounded-full hidden lg:flex items-center justify-center bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white ${className}`}
      onClick={() => {
        themeContext?.setThemeState(themeContext.themeState === "light" ? "dark" : "light");
      }}
    >
      <MoonIcon className={`size-6 block dark:hidden`} />
      <SunIcon className="size-6 hidden dark:block" />
    </button>
  );
}

export default ThemeBtns;
