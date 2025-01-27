import { ArrowUpLeftMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";

type LinkSectionHeaderPropsType = {
  headerTitle: string;
  headerDesc: string;
  linkElem?: React.ReactNode;
};

function LinkSectionHeader({ headerTitle, headerDesc, linkElem }: LinkSectionHeaderPropsType) {
  return (
    <div className="container flex flex-col gap-y-4">
      <div className="link-section-header relative w-fit after:content-[''] after:w-[calc(106%)] after:h-1/2 after:bg-[#1eb35b40] after:absolute after:right-0 after:top-1/2 after:z-20">
        <h4 className="font-MorabaMedium text-base md:text-lg text-gray-700 dark:text-gray-400 relative z-30">{headerTitle}</h4>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="font-MorabaBold text-xl md:text-2xl">{headerDesc}</h2>
        {linkElem}
      </div>
    </div>
  );
}

export default LinkSectionHeader;
