import React, { useEffect, useState } from "react";
import type { Route } from "./+types/course";
import { getMe, getSingleCourse, saveComment } from "~/utils/utils";
import type { courseType, singleCourseType } from "~/types/course.type";
import Breadcrumb from "~/components/Breadcrumb/Breadcrumb";
import CourseInfo from "~/components/Course/CourseInfo";
import SummaryInfos from "~/components/Course/SummaryInfos";
import RateBox from "~/components/Course/sidebar/RateBox";
import TeacherInfo from "~/components/Course/sidebar/TeacherInfo";
import ShortLinkBox from "~/components/Course/sidebar/ShortLinkBox";
import CourseDesc from "~/components/Course/CourseDesc/CourseDesc";
import CourseTopic from "~/components/Course/CourseTopic/CourseTopic";
import SuggestionCourses from "~/components/Course/SuggestionCourses/SuggestionCourses";
import CommentSection from "~/components/Course/Comment/CommentSection";
import { Toaster } from "react-hot-toast";
import type { MetaFunction } from "react-router";

export async function loader({ params, request }: Route.LoaderArgs) {
  const course = await getSingleCourse(params["course-name"]);

  const cookies = request.headers.get("Cookie");
  const token: string | undefined = cookies
    ?.split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
  const userInfo = token ? await getMe(token) : null;

  const isUserRegisteredToThisCourse = userInfo?.data?.courses.some((userCourse: courseType) => userCourse?._id === course.data._id);
  return { course, isUserRegisteredToThisCourse };
}

export const meta: MetaFunction<typeof loader> = ({ data }: any) => {
  return [{ title: `${data?.course?.data.name} - سبزلرن` }];
};

export async function action({ request, params }: Route.ActionArgs) {
  const formData = await request.formData();
  const commentText: FormDataEntryValue | null = formData.get("commentText");
  const cookies = request.headers.get("Cookie");

  const token: string | undefined = cookies
    ?.split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  const res = await saveComment(commentText, params["course-name"], token);

  return { res };
}

function course({ loaderData }: Route.ComponentProps) {
  const course: singleCourseType = loaderData.course.data;
  const [mounted, setMounted] = useState(false);
  const { isUserRegisteredToThisCourse } = loaderData;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container pt-8 lg:pt-10 flex flex-col gap-y-8 lg:gap-y-10">
      {mounted && <Toaster />}
      <Breadcrumb titleName="دوره ها" titleLink="/courses" categoryName={course.categoryID.title.split("برنامه نویسی ").join("")} categoryLink={`/course-cat/${course.categoryID.name}`} dataName={course.name} dataLink={`/course/${course.shortName}`} />
      <CourseInfo course={course} isUserRegisteredToThisCourse={isUserRegisteredToThisCourse} />

      <div className="grid grid-cols-12 gap-6 sm:gap-7 lg:mt-10">
        <div className="col-span-12 lg:col-span-8">
          <SummaryInfos course={course} />
          <CourseDesc course={course} />
          <CourseTopic course={course} isUserRegisteredToThisCourse={isUserRegisteredToThisCourse} />
          <SuggestionCourses course={course} />

          <CommentSection course={course} />
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
