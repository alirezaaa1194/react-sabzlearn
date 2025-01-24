import { MagnifyingGlassIcon } from "public/svg/svgs";
import React from "react";

function Searchbar() {
  return (
    <div className="h-13 bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white text-sm font-DanaMedium rounded-full flex items-center">
      <input type="text" placeholder="چیو میخوای یاد بگیری؟" className="bg-gray-100 dark:bg-transparent transition-all outline-none border-none px-4 h-full" />
      <button className="p-[14px] ps-0">
        <MagnifyingGlassIcon className="size-6" />
      </button>
    </div>
  );
}

export default Searchbar;
