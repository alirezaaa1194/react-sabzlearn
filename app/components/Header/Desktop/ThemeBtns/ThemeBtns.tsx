import { MoonIcon, SunIcon } from "public/svg/svgs";
import React from "react";

function ThemeBtns() {
  return (
    <button className="w-13 h-13 rounded-full flex items-center justify-center bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white">
      <MoonIcon className="size-6" />
      {/* <SunIcon className="size-6" /> */}
    </button>
  );
}

export default ThemeBtns;
