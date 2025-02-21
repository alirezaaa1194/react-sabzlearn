import React, { useEffect, useState } from "react";
import PageNullMessage from "~/components/NullMessage/PageNullMessage";
import CourseCard from "../CourseCard";
import type { courseType } from "~/types/course.type";
import { Button } from "@heroui/button";
import { ChevronDownIcon } from "public/svg/svgs";
import { useLocation } from "react-router";

function CoursesSection({ filteredCourses }: { filteredCourses: courseType[] }) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const location = useLocation();

  const paginationHandler = () => {
    if ((currentPage + 1) * 12 <= filteredCourses?.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [location]);

  return (
    <>
      {filteredCourses.length ? (
        <div className="flex flex-col items-center">
          <div className="grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredCourses.slice(0, (currentPage + 1) * 12).map((course) => {
              return <CourseCard key={course._id} course={course} />;
            })}
          </div>
          {(currentPage + 1) * 12 < filteredCourses?.length ? (
            <button className="flex items-center gap-1 mt-5 mx-auto h-10 px-3 rounded-lg text-primary bg-transparent border border-primary transition-colors hover:bg-[#1eb35b1a] font-DanaRegular" onClick={paginationHandler}>
              مشاهده بیشتر
              <ChevronDownIcon className="size-5" />
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <PageNullMessage title="متاسفانه دوره ای مطابق با جستجوی شما پیدا نشد ):" />
      )}
    </>
  );
}

export default CoursesSection;
