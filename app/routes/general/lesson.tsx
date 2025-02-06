import type { Route } from "./+types/lesson";
import { baseUrl, getMe, getOneSession, getSingleCourse } from "~/utils/utils";

import { type courseSessionType, type courseType, type singleCourseType } from "~/types/course.type";
import Breadcrumb from "~/components/Breadcrumb/Breadcrumb";
import TeacherInfo from "~/components/Course/sidebar/TeacherInfo";
import LessonInfo from "~/components/Lesson/LessonInfo";
import Question from "~/components/Lesson/Question/Question";
import SummaryInfo from "~/components/Lesson/SummaryInfo";
import CourseTopicContainer from "~/components/Lesson/CourseTopic/CourseTopicContainer";
import CoursePercent from "~/components/Lesson/CoursePercent";
import DownloadBox from "~/components/Lesson/DownloadBox";
import { data, redirect, useFetcher } from "react-router";
import { Toaster } from "react-hot-toast";
import session from "~/sessions.server";

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

  if (!isUserRegisteredToThisCourse) {
    return redirect(`/course/${course?.data.shortName}`);
  }

  return { lesson: lesson?.data, course: course?.data, isUserRegisteredToThisCourse };
}

export async function action({ params, request }: Route.ActionArgs) {
  const cookies = request.headers.get("Cookie");
  const token: string | undefined = cookies
    ?.split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  const lesson = token ? await getOneSession(params["course-name"], params["lesson-id"], token) : null;
  const course = await getSingleCourse(params["course-name"]);

  if (token) {
    const currentSession = await session.getSession(cookies);
    const savedLessons = (currentSession.get("sessionsId") as string) || "";
    const isSaved = savedLessons?.includes(lesson?.data.session._id);

    if (!isSaved) {
      let allSavedSessionId = savedLessons ? `${savedLessons}; ${course.data.shortName}, ${lesson?.data.session._id}` : `${course.data.shortName}, ${lesson?.data.session._id}`;
      currentSession.set("sessionsId", allSavedSessionId);

      return data(allSavedSessionId, {
        headers: { "Set-Cookie": await session.commitSession(currentSession) },
      });
    }
  }
}

function lesson({ loaderData }: Route.ComponentProps) {
  const {
    course,
    lesson,
    isUserRegisteredToThisCourse,
  }: {
    course: singleCourseType;
    lesson: {
      session: courseSessionType;
      sessions: courseSessionType[];
    };
    isUserRegisteredToThisCourse: boolean;
  } = loaderData;

  const fetcher = useFetcher();
  return (
    <main className="container pt-8 lg:pt-10 flex flex-col ">
      <Toaster />
      <Breadcrumb titleName="دوره ها" titleLink="/courses" categoryName={course.categoryID.title.split("برنامه نویسی ").join("")} categoryLink={`/course-cat/${course.categoryID.name}`} dataName={course.name} dataLink={`/course/${course.shortName}`} />
      <video
        controls
        src={`/public/testVideo.mp4`}
        className="w-full rounded-lg mt-8 sm:mt-10"
        poster={`${baseUrl}/courses/covers/${course.cover}`}
        onPlay={() => {
          fetcher.submit(null, { method: "POST" });
        }}
      />

      {/* <img className="w-full rounded-lg mt-8 sm:mt-10" src={`${baseUrl}/courses/covers/${course.cover}`} alt={lesson.session.title} /> */}

      <div className="block md:hidden mt-6">
        <LessonInfo course={course} session={lesson.session} />
      </div>

      <div className="grid grid-cols-12 gap-6 sm:gap-7 lg:mt-10">
        <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
          <div className="hidden md:block">
            <LessonInfo course={course} session={lesson.session} />
          </div>
          <Question />
        </div>
        <aside className="col-span-12 lg:col-span-4 space-y-8 order-1 lg:order-2">
          <CourseTopicContainer course={course} session={lesson.session} />

          <SummaryInfo course={course} sessions={lesson.sessions} />

          <CoursePercent />

          <TeacherInfo course={course} />

          <DownloadBox />
        </aside>
      </div>
    </main>
  );
}

export default lesson;
