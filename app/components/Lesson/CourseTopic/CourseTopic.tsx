import React, { useEffect, useRef } from "react";

import { ChevronDownIcon } from "public/svg/svgs";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Link, useLocation } from "react-router";
import "./CourseTopic.css";
import type { singleCourseType } from "~/types/course.type";

function CourseTopic({ course, sessionId }: { course: singleCourseType; sessionId: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (containerRef.current && itemRef.current) {
      containerRef.current.scrollTo(0, +itemRef.current.offsetTop - +containerRef.current.offsetTop - +containerRef.current.scrollTop);
    }
  }, [location]);

  return (
    <div className="max-h-[600px] overflow-auto pe-2" ref={containerRef}>
      <Accordion variant="splitted" defaultExpandedKeys={["topic"]} id="lesson-page-accrordion" className="outline-none border-none bg-transparent p-0 py-0">
        <AccordionItem key="topic" aria-label="سرفصل ها" title="سرفصل ها" className="p-0 py-0 bg-gray-100 dark:bg-dark inline-block font-DanaDemiBold lg:line-clamp-3 transition-colors" indicator={<ChevronDownIcon className="size-6 rotate-180 transition-transform text-slate-900 dark:text-white" />}>
          {course.sessions.map((session, index) => (
            <div key={session._id} ref={session._id === sessionId ? itemRef : null} className={`session-item py-[18px] border-b dark:border-b-[#ffffff1a] relative ${session._id === sessionId ? "session-item--watching" : ""}`}>
              <Link to={`/lesson/${course.shortName}/${session._id}?index=${index + 1}`} className="block line-clamp-2 font-DanaRegular">
                {session.title}
              </Link>
              <div className="flex items-center justify-between mt-3 sm:mt-2">
                <div className="lesson__status w-[20px] h-[20px] rounded-full border border-primary"></div>
                <span className="min-w-14 text-center text-sm font-danaMedium py-1 px-2.5 text-green-500 bg-transparent border border-green-500 rounded-full">{session.time} </span>
              </div>
            </div>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default CourseTopic;
