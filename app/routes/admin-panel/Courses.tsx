import AddCourseForm from "~/components/admin-panel/Courses/AddCourseForm/AddCourseForm";
import CoursesList from "~/components/admin-panel/Courses/CoursesList";
import type { Route } from "./+types/Courses";
import { getAllCategories, getAllCourses, getCookie, saveNewCourse } from "~/utils/utils";
import type { MetaFunction } from "react-router";
import type { categoryType } from "~/types/category.type";

export async function loader({ params, request }: Route.LoaderArgs) {
  let allCategories = await getAllCategories();
  const allCourses = await getAllCourses();

  const sortedCategories = [...allCategories.data].sort((a: categoryType, b: categoryType) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any)) as any

  return { sortedCategories, allCourses };
}

export const meta: MetaFunction = () => {
  return [{ title: "دوره ها - پنل مدیریت - سبزلرن" }];
};

function Courses({ loaderData }: Route.ComponentProps) {
  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          افزودن <span className="text-secondary">دوره</span> جدید
        </span>
        <AddCourseForm categories={loaderData.sortedCategories} />
      </div>
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          لیست <span className="text-secondary">دوره ها</span>
        </span>
        <CoursesList courses={loaderData?.allCourses?.data} />
      </div>
    </div>
  );
}

export default Courses;
