import { Button } from "@heroui/button";
import React from "react";
import { useSearchParams } from "react-router";
import type { courseSessionType, singleCourseType } from "~/types/course.type";

function LessonInfo({ course, session }: { course: singleCourseType; session: courseSessionType }) {
  const [searchParams] = useSearchParams();

  return (
    <div className="bg-white dark:bg-darker rounded-xl p-[18px] sm:p-5">
      <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
        <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-10 bg-sky-500 rounded-r-sm "></span>
        <h3 className="font-MorabaBold text-xl md:text-2xl">{course.name}</h3>
      </div>
      <div className="flex pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-b-neutral-200/80 dark:border-b-white/10">
        <div className="inline-flex items-center shrink-0 h-7 bg-sky-50 text-sky-500 dark:bg-sky-500/10 text-sm px-1 ml-2.5 font-DanaDemiBold rounded">{searchParams.get("index")}</div>
        <h4 className="font-DanaMedium sm:text-lg">{session.title}</h4>
      </div>
      <div className="flex justify-between gap-3.5 flex-wrap">
        <a href="#question-section" className="w-full sm:w-36">
          <Button className="w-full sm:w-36 h-13 lg:h-[46px] rounded-lg flex items-center justify-center text-base font-DanaRegular bg-gray-100 dark:bg-dark">سوال دارم!</Button>
        </a>
        <div className="flex gap-y-3.5 gap-x-4 justify-end flex-grow flex-wrap">
          <a href="https://tech.sabzlearn.ir/uploads/ce01010101it/ts-pro/TS-01-intro.mp4?h=_h3qtWjRKknSIW92srRjKw&amp;t=1738507998" className="w-full sm:w-36">
            <Button type="submit" className="w-full sm:w-36 bg-primary hover:bg-primary-hover hover:transition-colors h-13 lg:h-[46px] rounded-lg flex items-center justify-center text-base font-DanaRegular text-white">
              دانلود ویدیو
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LessonInfo;
