import React, { useEffect, useState } from "react";
import AllocatoToCourse from "./AllocatoToCourse";
import { baseUrl } from "~/utils/utils";
import type { singleCourseType } from "~/types/course.type";
import TimeStamp from "./TimeStamp/TimeStamp";
import LessionPlyr from "../Lesson/LessionPlyr";
import parse from "html-react-parser";
import { Skeleton } from "@heroui/skeleton";

function CourseInfo({ course, isUserRegisteredToThisCourse }: { course: singleCourseType; isUserRegisteredToThisCourse: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-y-[18px] gap-x-6 sm:gap-x-7 p-[18px] lg:p-0 rounded-xl bg-white dark:bg-darker lg:bg-transparent lg:dark:bg-transparent">
      <div className="w-full lg:w-1/2 flex flex-col justify-between">
        <div className="">
          <h1 className="font-MorabaBold text-[1.375rem]/8 sm:text-[1.625rem]/10 mb-[18px]">{course?.name}</h1>

          {mounted ? (
            <p className="sm:text-lg line-clamp-4 sm:line-clamp-3 font-DanaRegular">{parse(course?.description)}</p>
          ) : (
            <div className="flex flex-col gap-3">
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-300" />
              </Skeleton>
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-300" />
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-300" />
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300" />
              </Skeleton>
            </div>
          )}
        </div>

        {((course.price > 0 && course?.discount) || !course.price) && !isUserRegisteredToThisCourse ? <TimeStamp discount={!course.price ? 100 : course?.discount} /> : null}

        <AllocatoToCourse course={course} isUserRegisteredToThisCourse={isUserRegisteredToThisCourse} />
      </div>
      <div className="w-full lg:w-1/2">
        {isUserRegisteredToThisCourse && course.sessions.length ? (
          <div className="w-full h-full rounded-xl overflow-hidden aspect-video">
            <LessionPlyr video={course.sessions[0]?.video} poster={course?.cover} />
          </div>
        ) : (
          <img src={`${baseUrl}/courses/covers/${course.cover}`} alt={`${course.shortName}-cover`} className="w-full h-full rounded-xl aspect-video" />
        )}
      </div>
    </div>
  );
}

export default CourseInfo;
