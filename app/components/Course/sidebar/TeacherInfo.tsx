import { Button } from "@heroui/button";
import { ArrowLeftCircleIcon } from "public/svg/svgs";
import React from "react";
import type { singleCourseType } from "~/types/course.type";

function TeacherInfo({ course }: { course: singleCourseType }) {
  return (
    <div className="bg-white dark:bg-darker rounded-xl pt-6 px-[18px] pb-[18px] md:py-6 md:px-5 text-center !mt-6 lg:!mt-8">
      <img className="block mb-4 mx-auto object-cover rounded-full" width="90" height="90" src="/public/images/user-profile.png" alt={course.creator?.name} />
      <span className="font-DanaDemiBold text-lg mb-2">{course.creator?.name} | مدرس دوره</span>
      <p className="mt-2"></p>

      <a href="https://github.com/alirezaaa1194" className="flex items-center justify-center gap-x-2.5 mt-3 text-green-500 font-DanaMedium">
        مشاهده پروفایل من
        <ArrowLeftCircleIcon className="size-7" />
      </a>
    </div>
  );
}

export default TeacherInfo;
