import { PlayCircleSolidIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import type { courseType } from "~/types/course.type";
import type { sessionType } from "~/types/session.type";
import { baseUrl } from "~/utils/utils";

function SessionCard({ session, course, sessionIndex }: { session: sessionType; course: courseType; sessionIndex: string }) {
  return (
    <div className="bg-white dark:bg-darker p-3 rounded">
      <div className="relative aspect-video -mx-3 -mt-3 mb-3">
        <img src={`${baseUrl}/courses/covers/${course.cover}`} className="size-full object-cover rounded" alt={session.title} />
        <Link to={`/lesson/${course.shortName}/${session._id}?index=${sessionIndex}`}>
          <PlayCircleSolidIcon className="size-16 md:size-21 absolute inset-0 m-auto text-gray-100" />
        </Link>
      </div>
      <Link to={`/lesson/${course.shortName}/${session._id}?index=${sessionIndex}`} className="block h-12 md:h-14 text-sm md:text-base line-clamp-2 font-DanaDemiBold">
        {session.title}
      </Link>
      <div className="flex items-center justify-between mt-4.5 mb-3 pb-3 border-b border-b-gray-200 dark:border-b-white/10 text-slate-500 dark:text-gray-400 text-xs md:text-sm font-DanaDemiBold">
        <span>فصل 12</span>
        <span>جلسه {sessionIndex}</span>
      </div>
      <span className="block h-8 md:h-12">
        <Link to={`/course/${course.shortName}`} className="mb-3 line-clamp-2 text-xs md:text-sm text-slate-500 dark:text-gray-400 font-DanaRegular">
          {course.name}
        </Link>
      </span>
      <div className="flex items-center gap-x-3">
        <div className="w-24 md:w-28 text-xs md:text-sm text-green-500 shrink-0">
          <span className="font-DanaDemiBold">57% </span>
          مشاهده دوره
        </div>
        <div className="flex-grow h-1.5 bg-gray-100 dark:bg-dark rounded overflow-hidden direction-ltr">
          <div className="bg-green-500 h-full rounded" style={{ width: "57%" }} />
        </div>
      </div>
    </div>
  );
}

export default SessionCard;
