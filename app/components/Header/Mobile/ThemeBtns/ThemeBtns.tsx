import { MoonIcon, SunIcon } from "public/svg/svgs";
import React, { use, useEffect } from "react";
import { ThemeContext } from "~/contexts/ThemeContext";

function ThemeBtns() {
  const themeContext = use(ThemeContext);

  useEffect(() => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    window.document.cookie = `theme=${themeContext?.themeState || "light"}; path=/; expires=${expires.toUTCString()}`;
  }, [themeContext?.themeState]);

  return (
    <div className="w-full pt-3 border-t border-t-neutral-200 dark:border-t-white/10">
      <button
        className="flex items-center gap-x-2.5 text-sm font-DanaRegular"
        onClick={() => {
          themeContext?.setThemeState(themeContext.themeState === "light" || themeContext.themeState === null ? "dark" : "light");
        }}
      >
        <MoonIcon className="size-6 block dark:hidden" />
        <SunIcon className="size-6 hidden dark:block" />
        <span className="hidden dark:block">تم روشن</span>
        <span className="block dark:hidden">تم تاریک</span>
      </button>
    </div>
  );
}

export default ThemeBtns;
