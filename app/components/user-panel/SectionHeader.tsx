import { ChevronLeftMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";

function SectionHeader({ title, linkTitle, linkAdress }: { title: string; linkTitle?: string; linkAdress?: string }) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-darker h-12 md:h-[72px] pl-2 md:pl-6 mb-5 rounded">
      <div className="flex items-center gap-x-3 md:gap-x-6 h-full">
        <div className="w-2 md:w-2.5 h-full bg-sky-500 rounded-sm"></div>
        <span className="text-sky-500 text-sm md:text-lg font-danaBold md:font-DanaDemiBold">{title}</span>
      </div>
      {linkTitle ? (
        <Link to={linkAdress!} className="flex items-center gap-x-1 md:gap-x-2 text-sky-500 text-xs md:text-base font-DanaMedium">
          {linkTitle}
          <ChevronLeftMiniIcon className="size-5" />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default SectionHeader;
