import React, { useEffect, useRef } from "react";

import { AcademicCapFillIcon, ChevronDownIcon, LockClosedIcon, LockIcon, PlayCircleIcon } from "public/svg/svgs";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Link } from "react-router";
import "./CourseTopic.css";
import type { courseSessionType, singleCourseType } from "~/types/course.type";
import { baseUrl, courseTimeHandler } from "~/utils/utils";

function CourseTopic({ course, sessionId, isUserRegisteredToThisCourse }: { course: singleCourseType; sessionId: string; isUserRegisteredToThisCourse: boolean }) {
  return (
    <div className="max-h-[600px] overflow-auto pe-2">
      <Accordion variant="splitted" defaultExpandedKeys={["topic"]} id="accrordion"  className="outline-none border-none bg-transparent p-0 py-0">
        <AccordionItem key="topic" aria-label="سرفصل ها" title="سرفصل ها" className="p-0 py-0 bg-gray-100 dark:bg-dark inline-block font-DanaDemiBold lg:line-clamp-3 transition-colors" indicator={<ChevronDownIcon className="size-6 rotate-180 transition-transform text-slate-900 dark:text-white" />}>
          {course.sessions.map((session, index) => (
            <div key={session._id} className={`session-item py-[18px] border-b dark:border-b-[#ffffff1a] relative ${session._id === sessionId ? "session-item--watching" : ""}`}>
              {isUserRegisteredToThisCourse || session.free === 1 ? (
                <Link to={`/lesson/${course.shortName}/${session._id}?index=${index + 1}`} className="block line-clamp-2 font-DanaRegular">
                  {session.title}
                </Link>
              ) : (
                <span className="block line-clamp-2 font-DanaRegular">{session.title}</span>
              )}
              <div className="flex items-center justify-between mt-3 sm:mt-2">
                <div className="lesson__status w-[20px] h-[20px] rounded-full border border-primary"></div>
                {isUserRegisteredToThisCourse || session.free === 1 ? (
                  <div className="min-w-14 text-center text-sm font-danaMedium py-1 px-2.5 text-green-500 bg-transparent border border-green-500 rounded-full">{session.time} </div>
                ) : (
                  <div className="w-[46px] h-[46px] rounded-full flex items-center justify-center border border-red-500 text-red-500 cursor-pointer hover:bg-[#db2e341a] transition-colors">
                    <LockIcon className="size-4" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default CourseTopic;
