import { ArrowLeftCircleMiniIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import type { courseType } from "~/types/course.type";
import { baseUrl } from "~/utils/utils";

function SuggestionCourseBox({ suggestionCourse }: { suggestionCourse: courseType }) {
  return (
    <div className="flex items-center justify-between flex-wrap bg-gray-100 dark:bg-dark rounded-xl py-2 pr-2 pl-4">
      <div className="flex items-center gap-x-4 w-4/5">
        <img className="w-24 rounded-lg aspect-video" src={`${baseUrl}/courses/covers/${suggestionCourse.cover}`} alt={suggestionCourse.name} />
        <Link to={`/course/${suggestionCourse.shortName}`} className="font-DanaMedium line-clamp-2">
          {suggestionCourse.name}
        </Link>
      </div>
      <Link to={`/course/${suggestionCourse.shortName}`} className="flex gap-x-1 items-center justify-between sm:justify-normal text-sky-500 font-DanaDemiBold text-sm">
        مشاهده
        <ArrowLeftCircleMiniIcon className="size-6 md:size-5" />
      </Link>
    </div>
  );
}

export default SuggestionCourseBox;
