import { SparklesIcon } from "public/svg/svgs";
import React from "react";
import SuggestionCourseBox from "./SuggestionCourseBox";
import type { courseType } from "~/types/course.type";
import NullMessage from "~/components/NullMessage/NullMessage";

function SuggestionCourses({ relatedCourses }: { relatedCourses: courseType[] }) {
  return (
    <div className="hidden lg:block bg-white dark:bg-darker rounded-xl p-[18px] sm:p-5 mt-8">
      <div className="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
        <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-amber-400 rounded-r-sm"></span>
        <SparklesIcon className="hidden md:inline-block text-amber-400 w-10 h-10" />
        <div className="font-MorabaBold text-xl md:text-2xl">دوره های مرتبط</div>
      </div>
      <div className="space-y-4 md:space-y-5">{relatedCourses.length ? relatedCourses.map((suggestionCourse: courseType) => <SuggestionCourseBox key={suggestionCourse._id} suggestionCourse={suggestionCourse} />) : <NullMessage title="دوره ای وجود ندارد." />}</div>
    </div>
  );
}

export default SuggestionCourses;
