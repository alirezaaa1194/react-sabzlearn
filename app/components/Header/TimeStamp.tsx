import { ArrowLeftMiniIcon, BellAlertIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import useTimeStamp from "~/hooks/useTimeStamp";

function TimeStamp({ discount }: { discount: number }) {
  const [dayStamp, hourStamp, minStamp, secStamp] = useTimeStamp();

  return (
    <div className="max-w-[1920px] mx-auto lg:px-2.5 py-4 bg-red-500 text-white">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-y-5">
        <div className="flex flex-col lg:flex-row items-center gap-y-3">
          <BellAlertIcon className="hidden lg:inline-block size-7 lg:ml-2" />
          <h6 className="font-DanaDemiBold text-sm sm:text-base text-center lg:text-right">{discount} درصد تخفیف روی تمام دوره ها 😊</h6>
          <Link to="/courses" className="bg-white text-red-500 lg:mr-4 shrink-0 font-DanaRegular text-sm h-10 px-3 rounded-lg flex items-center gap-2">
            مشاهده دوره ها <ArrowLeftMiniIcon className="size-5" />
          </Link>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="flex flex-col items-center justify-center gap-0.5 size-12 border border-white rounded-full">
            <span className="seconds font-DanaDemiBold leading-[18px]">{secStamp}</span>
            <span className="font-DanaLight text-xs/[14px]">ثانیه</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-0.5 size-12 border border-white rounded-full">
            <span className="minutes font-DanaDemiBold leading-[18px]">{minStamp}</span>
            <span className="font-DanaLight text-xs/[14px]">دقیقه</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-0.5 size-12 bg-white text-gray-900 rounded-full">
            <span className="hours font-DanaDemiBold leading-[18px]">{hourStamp}</span>
            <span className="font-DanaLight text-xs/[14px]">ساعت</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-0.5 size-12 bg-white text-gray-900 rounded-full">
            <span className="day font-DanaDemiBold leading-[18px]">{dayStamp}</span>
            <span className="font-danaLight text-xs/[14px]">روز</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeStamp;
