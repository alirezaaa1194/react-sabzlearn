import React from "react";
import PageNullMessage from "~/components/NullMessage/PageNullMessage";
import type { articleType } from "~/types/article.type";
import CourseCard from "../CourseCard";
import type { courseType } from "~/types/course.type";

function CoursesSection({ filteredCourses }: { filteredCourses: courseType[] }) {
  return (
    <>
      {filteredCourses.length ? (
        <div className="grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredCourses.map((course) => (
            <CourseCard course={course} />
          ))}
        </div>
      ) : (
        <PageNullMessage title="متاسفانه دوره ای مطابق با جستجوی شما پیدا نشد ):" />
      )}
    </>
  );
}

export default CoursesSection;
