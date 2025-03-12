import type { Route } from "./+types/lesson";
import { baseUrl, getMe, getOneSession, getSingleCourse, getUserTickets } from "~/utils/utils";

import { type courseSessionType, type courseType, type singleCourseType } from "~/types/course.type";
import Breadcrumb from "~/components/Breadcrumb/Breadcrumb";
import TeacherInfo from "~/components/Course/sidebar/TeacherInfo";
import LessonInfo from "~/components/Lesson/LessonInfo";
import Question from "~/components/Lesson/Question/Question";
import SummaryInfo from "~/components/Lesson/SummaryInfo";
import CourseTopicContainer from "~/components/Lesson/CourseTopic/CourseTopicContainer";
import CoursePercent from "~/components/Lesson/CoursePercent";
import DownloadBox from "~/components/Lesson/DownloadBox";
import { data, redirect, useFetcher, useLocation, type MetaFunction } from "react-router";
import { Toaster } from "react-hot-toast";
import session from "~/sessions.server";
import LessionPlyr from "~/components/Lesson/LessionPlyr";
import { useEffect, useState } from "react";

export async function loader({ params, request }: Route.LoaderArgs) {
  const cookies = request.headers.get("Cookie");
  const token: string | undefined = cookies
    ?.split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  const userInfo = token ? await getMe(token) : null;
  const lesson = token ? await getOneSession(params["course-name"], params["lesson-id"], token) : null;
  const course = await getSingleCourse(params["course-name"]);

  const isUserRegisteredToThisCourse = userInfo?.data?.courses.some((userCourse: courseType) => userCourse?._id === course?.data._id);

  const userTickets = token ? await getUserTickets(token as string) : null;
  const supportTickets = token ? userTickets?.data.filter((ticket: any) => ticket?.departmentID?.title === "پشتیبانی") : null;

  if (!isUserRegisteredToThisCourse) {
    return redirect(`/course/${course?.data.shortName}`);
  }

  return { lesson: lesson?.data, course: course?.data, supportTickets };
}

export async function action({ params, request }: Route.ActionArgs) {
  const cookies = request.headers.get("Cookie");
  const token: string | undefined = cookies
    ?.split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  const lesson = token ? await getOneSession(params["course-name"], params["lesson-id"], token) : null;
  if (token) {
    const currentSession = await session.getSession(cookies);
    const savedLessons = (currentSession.get("sessionsId") as string) || "";
    const isSaved = savedLessons?.includes(lesson?.data.session._id);

    const url = new URL(request.url);
    const sessionIndex = url.searchParams.get("index");

    if (!isSaved) {
      let allSavedSessionId = savedLessons ? `${savedLessons}; ${sessionIndex}, ${lesson?.data.session._id}` : `${sessionIndex}, ${lesson?.data.session._id}`;
      currentSession.set("sessionsId", allSavedSessionId);

      return data(allSavedSessionId, {
        headers: { "Set-Cookie": await session.commitSession(currentSession) },
      });
    }
  }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const { lesson }: any = data;
  const { course }: any = data;

  return [{ title: `${lesson?.session.title} - ${course?.name} - سبزلرن` }];
};

function lesson({ loaderData }: Route.ComponentProps) {
  const {
    course,
    lesson,
  }: {
    course: singleCourseType;
    lesson: {
      session: courseSessionType;
      sessions: courseSessionType[];
    };
  } = loaderData;

  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const fetcher = useFetcher();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetcher.submit(null, { method: "POST" });
  }, [location]);

  return (
    <main className="container pt-8 lg:pt-10 flex flex-col ">
      {mounted && <Toaster />}
      <Breadcrumb titleName="دوره ها" titleLink="/courses" categoryName={course.categoryID.title.split("برنامه نویسی ").join("")} categoryLink={`/course-cat/${course.categoryID?.name}`} dataName={course?.name} dataLink={`/course/${course.shortName}`} />
      <div className="w-full rounded-lg mt-8 sm:mt-10 overflow-hidden">
        <LessionPlyr video={lesson.session.video} poster={course.cover} />
      </div>

      {/* <img className="w-full rounded-lg mt-8 sm:mt-10" src={`${course.cover}`} alt={lesson.session.title} /> */}

      <div className="block md:hidden mt-6">
        <LessonInfo course={course} session={lesson.session} videoSrc={`${lesson.session.video}`} />
      </div>

      <div className="grid grid-cols-12 gap-6 sm:gap-7 lg:mt-10">
        <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
          <div className="hidden md:block">
            <LessonInfo course={course} session={lesson.session} videoSrc={`${lesson.session.video}`} />
          </div>
          <Question questions={loaderData.supportTickets} session={lesson.session} />
        </div>
        <aside className="col-span-12 lg:col-span-4 space-y-8 order-1 lg:order-2">
          <CourseTopicContainer course={course} session={lesson.session} />
          <SummaryInfo course={course} sessions={lesson.sessions} />

          <CoursePercent />

          <TeacherInfo course={course} />

          <DownloadBox videoSrc={`${lesson.session.video}`} />
        </aside>
      </div>
    </main>
  );
}

export default lesson;
