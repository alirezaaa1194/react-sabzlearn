import moment from "jalali-moment";
import { CalendarIcon, PlayCircleSolidIcon, StarMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import type { courseType } from "~/types/course.type";
import { baseUrl } from "~/utils/utils";

function CourseCard({ course }: { course: courseType }) {
  return (
    <div className="flex flex-col bg-white dark:bg-darker px-3 pt-3 rounded">
      <div className="relative aspect-video -mx-3 -mt-3 mb-3">
        <img src={`${baseUrl}/courses/covers/${course.cover}`} className="size-full object-cover rounded" alt={course.name} />
        <Link to={`/course/${course.shortName}`}>
          <PlayCircleSolidIcon className="size-16 md:size-21 absolute inset-0 m-auto text-gray-100" />
        </Link>
      </div>
      <Link to={`/course/${course.shortName}`} className="block h-12 md:h-14 text-sm md:text-base line-clamp-2 font-DanaDemiBold">
        {course.name}
      </Link>
      <div className="flex justify-between gap-2.5 text-slate-500 dark:text-white/70 text-sm pb-3 mt-3 border-b border-b-neutral-200/70 dark:border-b-white/10">
        <div className="flex items-center gap-x-1 hover:text-green-500 transition-colors">
          <CalendarIcon className="size-5" />
          <span className="font-DanaRegular">{moment(course.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</span>
        </div>
        <div className="flex items-center gap-x-0.5 text-yellow-500">
          <span className="font-DanaMedium">5.0</span>
          <StarMiniIcon className="size-5" />
        </div>
      </div>
      <div className="flex items-center gap-x-3 h-12 -mx-3 px-3 mt-auto">
        <div className="w-24 md:w-28 text-xs md:text-sm text-green-500 shrink-0 font-DanaRegular">
          <span className="font-DanaDemiBold">57% </span>
          مشاهده دوره
        </div>
        <div className="flex-grow h-1.5 bg-gray-100 dark:bg-dark rounded overflow-hidden direction-ltr">
          <div className="bg-green-500 h-full rounded" style={{ width: "57%" }} />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
