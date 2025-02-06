import { ArrowLeftCircleIcon } from "public/svg/svgs";
import React from "react";
import type { singleCourseType } from "~/types/course.type";

function TeacherInfo({ course }: { course: singleCourseType }) {
  return (
    <div className="bg-white dark:bg-darker p-[18px] sm:p-5 rounded-lg mt-6 lg:mt-8">
      <img src="/public/images/user-profile.png" className="mx-auto rounded-full object-cover" width="90" height="90" alt={course.creator?.name} />
      <p className="font-DanaDemiBold text-lg my-[18px] text-center">{course.creator?.name} | مدرس دوره</p>
      <a href="https://github.com/alirezaaa1194" className="flex items-center justify-center gap-x-2.5 text-green-500 font-DanaMedium">
        مشاهده پروفایل من
        <ArrowLeftCircleIcon className="size-7" />
      </a>
    </div>
  );
}

export default TeacherInfo;
