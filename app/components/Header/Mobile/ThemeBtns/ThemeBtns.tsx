import { MoonIcon, SunIcon } from "public/svg/svgs";
import React from "react";
import { useFetcher } from "react-router";

function ThemeBtns() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="POST" action="/switchTheme">
      <div className="w-full pt-3 border-t border-t-neutral-200 dark:border-t-white/10">
        <button className="flex items-center gap-x-2.5 text-sm font-DanaRegular">
          <SunIcon className="size-6 hidden dark:block" />
          <MoonIcon className="size-6 block dark:hidden" />
          <span className="hidden dark:block">تم روشن</span>
          <span className="block dark:hidden">تم تاریک</span>
        </button>
      </div>
    </fetcher.Form>
  );
}

export default ThemeBtns;
