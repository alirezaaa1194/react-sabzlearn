import { ChevronDownIcon, DocumentTextFillIcon } from "public/svg/svgs";
import React, { useEffect, useRef, useState } from "react";
import "./CourseDesc.css";
import { Button } from "@heroui/button";
import type { singleCourseType } from "~/types/course.type";
import { baseUrl } from "~/utils/utils";

function CourseDesc({ course }: { course: singleCourseType }) {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

  const descRef = useRef<HTMLDivElement | null>(null);

  const seeMoreHandler = () => {
    setIsOpenDesc((prev) => !prev);

    if (descRef.current && isOpenDesc) {
      window.scrollTo(0, descRef.current.offsetTop);
    }
  };

  const containerHeight = Number(descRef.current?.scrollHeight) + 200;

  return (
    <div className="bg-white dark:bg-darker rounded-xl p-[18px] sm:p-5 mt-8" ref={descRef}>
      <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
        <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-10 bg-amber-400 rounded-r-sm "></span>
        <DocumentTextFillIcon className="hidden md:inline-block text-amber-400 w-10 h-10" />
        <div className="font-MorabaBold text-xl md:text-2xl">توضیحات</div>
      </div>
      <div className="relative overflow-hidden">
        <div id="course-desc-container" className={`${isOpenDesc ? "h-fit" : "max-h-[800px]"} font-DanaRegular text-[#374151] dark:text-[#d1d5db] space-y-6`}>
          <img src={`${baseUrl}/courses/covers/${course.cover}`} alt={course.name} />
          {course.description}
        </div>
        {containerHeight > 800 ? <>{!isOpenDesc ? <div className="absolute bottom-0 right-0 left-0 h-[160px] bg-gradient-to-t from-white dark:from-darker from-0% via-white/[55%] dark:via-darker/[55%] via-70% to-white/0 dark:to-darker/0 to-100%"></div> : ""}</> : ""}
      </div>
      {containerHeight > 800 ? (
        <Button onPress ={seeMoreHandler} type="button" className={`btn-primary--outline bg-transparent text-primary mx-auto mt-5 rounded-lg flex items-center font-DanaMedium ${isOpenDesc ? "bg-[#1eb35b1a]" : ""}`}>
          <span>مشاهده {isOpenDesc ? "کمتر" : "بیشتر"} مطلب</span>
          <ChevronDownIcon className={`size-6 ${isOpenDesc ? "rotate-180" : ""}`} />
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

export default CourseDesc;
