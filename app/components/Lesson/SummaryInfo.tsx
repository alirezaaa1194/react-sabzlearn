import { ClockIcon, InformationCircleIcon, VideoCameraIcon } from "public/svg/svgs";
import React from "react";
import type { courseSessionType, singleCourseType } from "~/types/course.type";
import { courseTimeHandler } from "~/utils/utils";

function SummaryInfo({ course, sessions }: { course: singleCourseType; sessions: courseSessionType[] }) {
  return (
    <div className="grid grid-cols-3 gap-3.5 !mt-6 lg:!mt-8">
      <div className="flex flex-col gap-y-1.5 items-center pb-3.5 sm:pb-2.5 pt-4 sm:3.5 bg-white dark:bg-darker rounded-lg">
        <InformationCircleIcon className="w-10 h-10 text-green-500 mb-2.5 sm:mb-1.5" />
        <span className="block font-DanaDemiBold text-sm sm:text-base mb-0.5 sm:mb-0">وضعیت دوره</span>
        <span className="text-gray-700 dark:text-gray-400 text-sm font-DanaMedium">{course.status === "start" ? "تکمیل شده" : "تکمیل شده"}</span>
      </div>
      <div className="flex flex-col gap-y-1.5 items-center pb-3.5 sm:pb-2.5 pt-4 sm:3.5 bg-white dark:bg-darker rounded-lg">
        <ClockIcon className="w-10 h-10 text-green-500 mb-2.5 sm:mb-1.5" />
        <span className="block font-DanaDemiBold text-sm sm:text-base mb-0.5 sm:mb-0">زمان دوره</span>
        <span className="text-gray-700 dark:text-gray-400 text-sm font-DanaMedium">{courseTimeHandler(course.sessions)}</span>
      </div>
      <div className="flex flex-col gap-y-1.5 items-center pb-3.5 sm:pb-2.5 pt-4 sm:3.5 bg-white dark:bg-darker rounded-lg">
        <VideoCameraIcon className="w-10 h-10 text-green-500 mb-2.5 sm:mb-1.5" />
        <span className="block font-DanaDemiBold text-sm sm:text-base mb-0.5 sm:mb-0">جلسات دوره</span>
        <span className="text-gray-700 dark:text-gray-400 text-sm font-DanaMedium">{sessions.length}</span>
      </div>
    </div>
  );
}

export default SummaryInfo;
