// import { MoonIcon, SunIcon } from "public/svg/svgs";
import { ComputerIcon, MoonIcon, SunIcon } from "public/svg/svgs";
import React from "react";
import { useFetcher } from "react-router";

function ThemeBtns() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="POST" action="/test">
      <button type="submit" className="w-13 h-13 rounded-full flex items-center justify-center bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white">
        <MoonIcon className="size-6 block dark:hidden" />
        <SunIcon className="size-6 hidden dark:block" />
      </button>
    </fetcher.Form>
  );
}

export default ThemeBtns;
