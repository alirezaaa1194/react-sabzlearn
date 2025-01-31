import { InformationCircleIcon } from "public/svg/svgs";
import React from "react";

type SummaryInfosBoxPropsType = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function SummaryInfosBox({ icon, title, desc }: SummaryInfosBoxPropsType) {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-white dark:bg-darker pt-4 pb-3.5 sm:py-3 px-[18px] rounded-lg">
      {icon}
      <div className="space-y-0.5 sm:space-y-1">
        <span className="block font-DanaDemiBold text-sm sm:text-base">{title}</span>
        <span className="block text-sm text-gray-700 dark:text-gray-400 font-DanaRegular">{desc}</span>
      </div>
    </div>
  );
}

export default SummaryInfosBox;
