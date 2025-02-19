import { Spinner } from "@heroui/react";
import { MoonIcon, SunIcon } from "public/svg/svgs";
import React from "react";
import { useFetcher } from "react-router";

function ThemeBtns({ className }: { className?: string }) {
  const fetcher = useFetcher();

  return (
    <button
      type="submit"
      className={`w-13 h-13 rounded-full hidden lg:flex items-center justify-center bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white ${className}`}
      onClick={() => {
        fetcher.submit(null, { method: "POST", action: "/switchTheme" });
      }}
    >
      {fetcher.state === "loading" ? (
        <Spinner size="sm" color="primary" />
      ) : (
        <>
          <MoonIcon className={`size-6 block dark:hidden`} />
          <SunIcon className="size-6 hidden dark:block" />
        </>
      )}
    </button>
  );
}

export default ThemeBtns;
