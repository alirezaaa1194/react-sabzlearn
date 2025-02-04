import { DocumentTextIcon } from "public/svg/svgs";
import React from "react";
import CourseTopic from "./CourseTopic";
import type { courseSessionType, singleCourseType } from "~/types/course.type";
import './CourseTopic.css'

function CourseTopicContainer({ course, session, isUserRegisteredToThisCourse }: { course: singleCourseType; session: courseSessionType, isUserRegisteredToThisCourse:boolean }) {
  return (
    <div className="bg-white dark:bg-darker px-[18px] sm:px-5 py-[18px] sm:py-5 rounded-lg mt-6 lg:mt-0">
      <div className="flex items-center gap-x-2 mb-5 pb-5 border-b border-b-neutral-200/60 dark:border-b-white/10">
        <DocumentTextIcon className="w-[30px] h-[30px]" />
        <span className="font-DanaDemiBold text-lg">سرفصل های دوره</span>
      </div>
      <CourseTopic course={course} sessionId={session._id} isUserRegisteredToThisCourse={isUserRegisteredToThisCourse} />
    </div>
  );
}

export default CourseTopicContainer;
