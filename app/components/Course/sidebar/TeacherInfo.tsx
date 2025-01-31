import React from "react";
import type { singleCourseType } from "~/types/course.type";

function TeacherInfo({ course }: { course: singleCourseType }) {
  return (
    <div className="bg-white dark:bg-darker rounded-xl pt-6 px-[18px] pb-[18px] md:py-6 md:px-5 text-center">
      <img className="block mb-4 mx-auto object-cover rounded-full" width="90" height="90" src="/public/images/user-profile.png" alt={course.creator.name} />
      <span className="font-DanaDemiBold text-lg mb-2">{course.creator.name} | مدرس دوره</span>
      <p className="mt-2"></p>
      <a href="https://sabzlearn.ir" className="btn-primary--outline mx-auto mt-4 px-3 w-fit h-9 font-DanaRegular flex items-center rounded-lg text-sm">
        مشاهده پروفایل من
      </a>
    </div>
  );
}

export default TeacherInfo;
