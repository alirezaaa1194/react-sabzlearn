import React from "react";
import type { Route } from "./+types/lesson";
import { baseUrl, courseTimeHandler, getOneSession, getSingleCourse } from "~/utils/utils";

import { type courseSessionType, type singleCourseType } from "~/types/course.type";
import Breadcrumb from "~/components/Breadcrumb/Breadcrumb";
import TeacherInfo from "~/components/Course/sidebar/TeacherInfo";
import LessonInfo from "~/components/Lesson/LessonInfo";
import Question from "~/components/Lesson/Question/Question";
import SummaryInfo from "~/components/Lesson/SummaryInfo";
import CourseTopicContainer from "~/components/Lesson/CourseTopic/CourseTopicContainer";
import CoursePercent from "~/components/Lesson/CoursePercent";
import DownloadBox from "~/components/Lesson/DownloadBox";

export async function loader({ params, request }: Route.LoaderArgs) {
  const cookies = request.headers.get("Cookie");
  const token: string | undefined = cookies
    ?.split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  const session = await getOneSession(params["course-name"], params["lesson-id"], token);
  const course = await getSingleCourse(params["course-name"]);

  return { session: session.data, course: course.data };
}

function lesson({ loaderData }: Route.ComponentProps) {
  const {
    course,
    session,
  }: {
    course: singleCourseType;
    session: {
      session: courseSessionType;
      sessions: courseSessionType[];
    };
  } = loaderData;

  console.log(session.sessions);

  return (
    <main className="container pt-8 lg:pt-10 flex flex-col ">
      <Breadcrumb titleName="دوره ها" titleLink="/courses" categoryName={course.categoryID.title.split("برنامه نویسی ").join("")} categoryLink={`/course-cat/${course.categoryID.name}`} dataName={course.name} dataLink={`/course/${course.shortName}`} />
      {/* <video controls src={`${baseUrl}/courses/covers/${session.session.video}`} className="w-full"  /> */}
      <img className="w-full rounded-lg mt-8 sm:mt-10" src={`${baseUrl}/courses/covers/${course.cover}`} alt={session.session.title} />
      <div className="block md:hidden mt-6">
        <LessonInfo course={course} session={session.session} />
      </div>

      <div className="grid grid-cols-12 gap-6 sm:gap-7 lg:mt-10">
        <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
          <div className="hidden md:block">
            <LessonInfo course={course} session={session.session} />
          </div>
          <Question />
        </div>
        <aside className="col-span-12 lg:col-span-4 space-y-8 order-1 lg:order-2">
          <CourseTopicContainer course={course} session={session.session} />

          <SummaryInfo course={course} sessions={session.sessions} />

          <CoursePercent />

          <TeacherInfo course={course} />

          <DownloadBox />
        </aside>
      </div>
    </main>
  );
}

export default lesson;
