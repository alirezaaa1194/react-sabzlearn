import React from "react";

import { AcademicCapFillIcon, ChevronDownIcon, LockClosedIcon, PlayCircleIcon } from "public/svg/svgs";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Link } from "react-router";
import "./CourseTopic.css";
import type { singleCourseType } from "~/types/course.type";
import { courseTimeHandler } from "~/utils/utils";

function CourseTopic({ course }: { course: singleCourseType }) {
  return (
    <div className="bg-white dark:bg-darker rounded-xl p-[18px] sm:p-5 mt-8">
      <div className="flex items-center gap-x-3 mb-6 sm:mb-7 relative">
        <span className="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-10 bg-sky-500 rounded-r-sm"></span>
        <AcademicCapFillIcon className="hidden md:inline-block text-sky-500 w-10 h-10" />
        <div id="lessons" className="font-MorabaBold text-xl md:text-2xl">
          سرفصل ها
        </div>
      </div>
      <div className="space-y-4 md:space-y-5">
        {course.sessions.length ? (
          <Accordion variant="splitted" id="accrordion" className="outline-none border-none bg-transparent p-0 py-0">
            <AccordionItem
              key="topic"
              aria-label="سرفصل ها"
              title={
                <span className="w-full flex justify-between">
                  <span>سرفصل ها</span>
                  <span className="font-DanaRegular text-sm">{courseTimeHandler(course.sessions)} . {course.sessions.length} جلسه </span>
                </span>
              }
              className="p-0 py-0 bg-gray-100 dark:bg-dark inline-block font-DanaDemiBold lg:line-clamp-3 transition-colors"
              indicator={<ChevronDownIcon className="size-6 rotate-180 transition-transform text-slate-900 dark:text-white" />}
            >
              {course.sessions.map((session, index) => (
                <div key={session._id} className="session-item flex items-start justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-4 py-5 group border-b dark:border-b-[#ffffff1a]">
                  <div className="flex items-center flex-grow gap-x-2.5 md:gap-x-3.5 child:transition-colors">
                    <div className="flex items-center justify-center w-8 h-6 md:h-7 text-sm font-DanaDemiBold bg-white dark:bg-white/10 group-hover:bg-green-500 group-hover:text-white rounded">{index + 1}</div>
                    {session.free === 1 || course.isUserRegisteredToThisCourse ? (
                      <Link to={`/lesson/${course.shortName}/${session._id}?index=${index+1}`} className="inline-block lg:max-w-3/4 text-sm md:text-base group-hover:text-green-500 font-DanaRegular transition-colors">
                        {session.title}
                      </Link>
                    ) : (
                      <span className="inline-block lg:max-w-3/4 text-sm md:text-base group-hover:text-green-500 font-DanaRegular transition-colors">{session.title}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-x-1.5 mr-auto group-hover:text-green-500">
                    <span className="text-sm md:text-base font-DanaMedium">{session.time}</span>
                    {session.free === 1 || course.isUserRegisteredToThisCourse ? <PlayCircleIcon className="size-7" /> : <LockClosedIcon className="size-7" />}
                  </div>
                </div>
              ))}
            </AccordionItem>
          </Accordion>
        ) : (
          <h3 className="font-DanaMedium text-center">جلسه ای وجود ندارد.</h3>
        )}
      </div>
    </div>
  );
}

export default CourseTopic;