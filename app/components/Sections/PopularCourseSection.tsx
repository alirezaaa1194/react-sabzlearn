import React from "react";
import LinkSectionHeader from "./LinkSectionHeader";
import { Link } from "react-router";
import { ArrowUpLeftMiniIcon } from "public/svg/svgs";
import { getPopularCourses } from "~/utils/utils";
import { useQuery } from "@tanstack/react-query";
import CourseCard from "../Courses/CourseCard";
import type { courseType } from "~/types/course.type";

function PopularCourseSection() {
  const { data: popularCourses } = useQuery({
    queryKey: ["popular-courses"],
    queryFn: getPopularCourses,
  });
  return (
    <section className="container flex flex-col mt-9 lg:mt-20">
      <LinkSectionHeader
        headerTitle="محبوب ترین دوره ها"
        headerDesc="پرمخاطب ترین دوره های رایگان سبزلرن"
        linkElem={
          <Link to="/courses" className="flex items-center gap-x-1.5 text-sm font-DanaMedium hover:transition-colors text-gray-700 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500">
            همه دوره ها
            <ArrowUpLeftMiniIcon className="size-5" />
          </Link>
        }
      />
      <div className="grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
        {popularCourses?.data.slice(0, 8)?.map((course: courseType) => (
          <CourseCard course={course} />
        ))}
      </div>
    </section>
  );
}

export default PopularCourseSection;
