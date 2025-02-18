import React from "react";
import SummaryInfosBox from "./SummaryInfosBox";
import type { singleCourseType } from "~/types/course.type";
import { courseTimeHandler } from "~/utils/utils";
import moment from "jalali-moment";
import { BriefcaseIcon, CalendarDaysIcon, ClockIcon, InformationCircleIcon, UsersIcon, VideoCameraIcon } from "public/svg/svgs";

function SummaryInfos({ course }: { course: singleCourseType }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      <SummaryInfosBox title="وضعیت دوره" desc={course.status === "start" ? "درحال ضبط" : "پیش فروش"} icon={<InformationCircleIcon className="w-10 h-10 sm:w-11 sm:h-11 text-green-500" />} />
      <SummaryInfosBox title="مدت زمان دوره" desc={`${courseTimeHandler(course.sessions)}`} icon={<ClockIcon className="w-10 h-10 sm:w-11 sm:h-11 text-green-500" />} />
      <SummaryInfosBox title="آخرین بروزرسانی" desc={moment(course.updatedAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")} icon={<CalendarDaysIcon className="w-10 h-10 sm:w-11 sm:h-11 text-green-500" />} />
      <SummaryInfosBox title="روش پشتیبانی" desc={course.support} icon={<UsersIcon className="w-10 h-10 sm:w-11 sm:h-11 text-green-500" />} />
      <SummaryInfosBox title="پیش نیاز" desc="" icon={<BriefcaseIcon className="w-10 h-10 sm:w-11 sm:h-11 text-green-500" />} />
      <SummaryInfosBox title="نوع مشاهده" desc="دانلودی/آنلاین" icon={<VideoCameraIcon className="w-10 h-10 sm:w-11 sm:h-11 text-green-500" />} />
    </div>
  );
}

export default SummaryInfos;
