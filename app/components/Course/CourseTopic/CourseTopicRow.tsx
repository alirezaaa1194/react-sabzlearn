import { LockClosedIcon, PlayCircleIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import type { courseSessionType, singleCourseType } from "~/types/course.type";

function CourseTopicRow({ course, session, index, isUserRegisteredToThisCourse }: { course: singleCourseType; session: courseSessionType; index: number; isUserRegisteredToThisCourse: boolean }) {
  return (
    <div key={session._id} className="session-item flex items-start justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-4 py-5 group border-b dark:border-b-[#ffffff1a]">
      <div className="flex items-center flex-grow gap-x-2.5 md:gap-x-3.5 child:transition-colors">
        <div className="flex items-center justify-center w-8 h-6 md:h-7 text-sm font-DanaDemiBold bg-white dark:bg-white/10 group-hover:bg-green-500 group-hover:text-white rounded">{index + 1}</div>
        {isUserRegisteredToThisCourse === true ? (
          <Link to={`/lesson/${course.shortName}/${session._id}?index=${index + 1}`} className="inline-block lg:max-w-3/4 text-sm md:text-base group-hover:text-green-500 font-DanaRegular transition-colors">
            {session.title}
          </Link>
        ) : (
          <span className="inline-block lg:max-w-3/4 text-sm md:text-base group-hover:text-green-500 font-DanaRegular transition-colors">{session.title}</span>
        )}
      </div>
      <div className="flex items-center gap-x-1.5 mr-auto group-hover:text-green-500">
        <span className="text-sm md:text-base font-DanaMedium">{session.time}</span>
        {isUserRegisteredToThisCourse ? <PlayCircleIcon className="size-7" /> : <LockClosedIcon className="size-7" />}
      </div>
    </div>
  );
}

export default CourseTopicRow;
