import React from "react";
import AllocatoToCourse from "./AllocatoToCourse";
import { baseUrl } from "~/utils/utils";
import type { singleCourseType } from "~/types/course.type";

function CourseInfo({ course }: { course: singleCourseType }) {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-y-[18px] gap-x-6 sm:gap-x-7 p-[18px] lg:p-0 rounded-xl bg-white dark:bg-darker lg:bg-transparent lg:dark:bg-transparent">
      <div className="w-full lg:w-1/2 flex flex-col justify-between">
        <div className="">
          <h1 className="font-MorabaBold text-[1.375rem]/8 sm:text-[1.625rem]/10 mb-[18px]">{course.name}</h1>
          <p className="sm:text-lg line-clamp-4 sm:line-clamp-3 font-DanaRegular">{course.description}</p>
        </div>
        <AllocatoToCourse course={course} />
      </div>
      <div className="w-full lg:w-1/2">
        <img src={`${baseUrl}/courses/covers/${course.cover}`} alt={`${course.shortName}-cover`} className="w-full h-full rounded-xl" />
        {/* <video src={`${baseUrl}/courses/covers/b36e8afba55d2275896e1fbda77ec47f7981e20c230f3470f8678b2fc6160515.mp4`} className="w-full h-full rounded-xl" controls></video> */}
      </div>
    </div>
  );
}

export default CourseInfo;
