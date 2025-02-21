import React, { use } from "react";
import type { MetaFunction } from "react-router";
import CourseCard from "~/components/user-panel/CoursesPage/CourseCard";
import NullMessage from "~/components/user-panel/NullMessage";
import SectionHeader from "~/components/user-panel/SectionHeader";
import { AuthContext } from "~/contexts/AuthContext";
import type { courseType } from "~/types/course.type";

export const meta: MetaFunction = () => {
  return [{ title: "دوره های خریداری شده - پنل کاربری - سبزلرن" }];
};

function courses() {
  const userInfos = use(AuthContext)!;
  const userCourses = userInfos.userInfo.courses;

  return (
    <section className="flex flex-col">
      <SectionHeader title={`دوره های من (${userCourses?.length})`} />
      {userCourses?.length ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:pr-5">
          {[...userCourses].reverse().map((course: courseType) => (
            <CourseCard course={course} />
          ))}
        </div>
      ) : (
        <NullMessage title="هنوز  در دوره ای ثبت نام نکرده اید" />
      )}
    </section>
  );
}

export default courses;
