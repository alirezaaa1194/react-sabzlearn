import { MoonIcon, SunIcon } from "public/svg/svgs";
import React, { use, useEffect } from "react";
import { ThemeContext } from "~/contexts/ThemeContext";

function ThemeBtns({ className }: { className?: string }) {
  const themeContext = use(ThemeContext);

  useEffect(() => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    window.document.cookie = `theme=${themeContext?.themeState || "light"}; path=/; expires=${expires.toUTCString()}`;
  }, [themeContext?.themeState]);

  return (
    <button
      type="submit"
      className={`w-13 h-13 rounded-full hidden lg:flex items-center justify-center bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white ${className}`}
      onClick={() => {
        themeContext?.setThemeState(themeContext.themeState === "light" || themeContext.themeState === null ? "dark" : "light");

      }}
    >
      <MoonIcon className={`size-6 block dark:hidden`} />
      <SunIcon className="size-6 hidden dark:block" />
    </button>
  );
}

export default ThemeBtns;
