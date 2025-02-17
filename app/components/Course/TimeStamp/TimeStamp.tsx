import React from "react";
import useTimeStamp from "~/hooks/useTimeStamp";
import type { singleCourseType } from "~/types/course.type";

function TimeStamp({ discount }: { discount: number | undefined }) {
  const [dayStamp, hourStamp, minStamp, secStamp] = useTimeStamp();

  return (
    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-y-4 gap-x-5 flex-wrap justify-between items-center text-center sm:text-right p-4 xl:h-16 bg-gray-100 lg:bg-white dark:bg-gray-900 lg:dark:bg-darker rounded-lg mt-5 lg:mt-0">
      <span className="font-DanaDemiBold sm:text-xl lg:text-center xl:text-right text-red-500">{discount}% پیشنهاد شگفت انگیز</span>
      <div className="flex items-center gap-3 lg:gap-5">
        <div className="font-DanaLight flex items-center gap-1">
          <span className="font-DanaDemiBold text-base lg:text-2xl">{dayStamp}</span>
          <span className="text-sm lg:text-xl">روز</span>
        </div>
        <div className="font-DanaLight flex items-center gap-1 border-r ps-3">
          <span className="font-DanaDemiBold text-base lg:text-2xl">{hourStamp}</span>
          <span className="text-sm lg:text-xl">ساعت</span>
        </div>
        <div className="font-DanaLight flex items-center gap-1 border-r ps-3">
          <span className="font-DanaDemiBold text-base lg:text-2xl">{minStamp}</span>
          <span className="text-sm lg:text-xl">دقیقه</span>
        </div>
        <div className="font-DanaLight flex items-center w-16 lg:w-20 border-r ps-3">
          <span className="font-DanaDemiBold text-base lg:text-2xl text-red-500 inline-block w-12">{secStamp}</span>
          <span className="text-sm lg:text-xl">ثانیه</span>
        </div>
      </div>
    </div>
  );
}

export default TimeStamp;
