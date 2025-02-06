import React, { use } from "react";
import CourseCard from "~/components/user-panel/CoursesPage/CourseCard";
import SectionHeader from "~/components/user-panel/SectionHeader";
import { AuthContext } from "~/contexts/AuthContext";
import type { courseType } from "~/types/course.type";

function courses() {
  const userInfos = use(AuthContext)!;

  const userCourses = userInfos.userInfo.courses;

  return (
    <section className="flex flex-col">
      <SectionHeader title={`دوره های من (${userCourses?.length})`} />
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:pr-5">
        {userCourses.map((course: courseType) => (
          <CourseCard course={course} />
        ))}
      </div>
    </section>
  );
}

export default courses;
