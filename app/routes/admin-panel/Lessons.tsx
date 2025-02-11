import AddCourseForm from "~/components/admin-panel/Courses/AddCourseForm/AddCourseForm";
import CoursesList from "~/components/admin-panel/Courses/CoursesList";
import { getAllCategories, getAllCourses, getAllSessions, getCookie, saveNewCourse } from "~/utils/utils";
import LessonsList from "~/components/admin-panel/Lessons/LessonsList";
import type { Route } from "./+types/Lessons";
import AddLessonForm from "~/components/admin-panel/Lessons/AddLessonForm/AddLessonForm";
import type { sessionType } from "~/types/session.type";

export async function loader({ params, request }: Route.LoaderArgs) {
  const allCourses = await getAllCourses();
  const allSessions = await getAllSessions();

  return { allSessions, allCourses };
}

function Lessons({ loaderData }: Route.ComponentProps) {
  const lessons = [...loaderData.allSessions.data].sort((a: sessionType, b: sessionType) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any));
  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          افزودن <span className="text-secondary">جلسه</span> جدید
        </span>
        <AddLessonForm courses={loaderData?.allCourses?.data} />
      </div>
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          لیست <span className="text-secondary">جلسات</span>
        </span>
        <LessonsList lessons={lessons} />
      </div>
    </div>
  );
}

export default Lessons;
