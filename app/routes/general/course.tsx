import React from "react";
import type { Route } from "./+types/course";
import { baseUrl, courseTimeHandler, getSingleCourse } from "~/utils/utils";
import type { courseType, singleCourseType } from "~/types/course.type";
import Breadcrumb from "~/components/Breadcrumb/Breadcrumb";
import CourseInfo from "~/components/Course/CourseInfo";
import SummaryInfos from "~/components/Course/SummaryInfos";
import RateBox from "~/components/Course/sidebar/RateBox";
import TeacherInfo from "~/components/Course/sidebar/TeacherInfo";
import ShortLinkBox from "~/components/Course/sidebar/ShortLinkBox";
import CourseDesc from "~/components/Course/CourseDesc/CourseDesc";
import { Accordion, AccordionItem, Button } from "@heroui/react";
import { AcademicCapFillIcon, ChevronDownIcon, PlayCircleIcon } from "public/svg/svgs";
import { Link } from "react-router";
import CourseTopic from "~/components/Course/CourseTopic/CourseTopic";

export async function loader({ params }: Route.LoaderArgs) {
  const course = await getSingleCourse(params["course-name"]);
  return { course };
}

function course({ loaderData }: Route.ComponentProps) {
  const course: singleCourseType = loaderData.course.data;
  console.log(course);

  return (
    <div className="container pt-8 lg:pt-10 flex flex-col gap-y-8 lg:gap-y-10">
      <Breadcrumb titleName="دوره ها" titleLink="/courses" categoryName={course.categoryID.title.split("برنامه نویسی ").join("")} categoryLink={`/course-cat/${course.categoryID.name}`} dataName={course.name} dataLink={`/course/${course.shortName}`} />
      <CourseInfo course={course} />

      <div className="grid grid-cols-12 gap-6 sm:gap-7 lg:mt-10">
        <div className="col-span-12 lg:col-span-8">
          <SummaryInfos course={course} />
          <CourseDesc course={course} />
          <CourseTopic course={course} />


          
        </div>
        <aside className="col-span-12 lg:col-span-4 space-y-8">
          <RateBox course={course} />
          <TeacherInfo course={course} />
          <ShortLinkBox />
        </aside>
      </div>
    </div>
  );
}

export default course;
