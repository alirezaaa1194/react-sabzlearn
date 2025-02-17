import React, { use } from "react";

import { AcademicCapFillIcon, ChevronDownIcon } from "public/svg/svgs";
import { Accordion, AccordionItem } from "@heroui/accordion";
import "./CourseTopic.css";
import type { singleCourseType } from "~/types/course.type";
import { courseTimeHandler } from "~/utils/utils";
import CourseTopicRow from "./CourseTopicRow";
import NullMessage from "~/components/NullMessage/NullMessage";

function CourseTopic({ course, isUserRegisteredToThisCourse }: { course: singleCourseType; isUserRegisteredToThisCourse: boolean }) {
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
                  <span className="font-DanaRegular text-sm">
                    {courseTimeHandler(course.sessions)} . {course.sessions.length} جلسه{" "}
                  </span>
                </span>
              }
              className="p-0 py-0 bg-gray-100 dark:bg-dark inline-block font-DanaDemiBold lg:line-clamp-3 transition-colors"
              indicator={<ChevronDownIcon className="size-6 rotate-180 transition-transform text-slate-900 dark:text-white" />}
            >
              {course.sessions.map((session, index) => (
                <CourseTopicRow key={session._id} course={course} session={session} index={index} isUserRegisteredToThisCourse={isUserRegisteredToThisCourse} />
              ))}
            </AccordionItem>
          </Accordion>
        ) : (
          <NullMessage title="جلسه ای وجود ندارد." />
        )}
      </div>
    </div>
  );
}

export default CourseTopic;
