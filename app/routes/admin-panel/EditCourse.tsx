import React from "react";
import EditCourseForm from "~/components/admin-panel/Courses/AddCourseForm/EditCourseForm";
import type { Route } from "./+types/EditCourse";
import { getAllCategories, getSingleCourse } from "~/utils/utils";

export async function loader({ params }: Route.LoaderArgs) {
  const course = await getSingleCourse(params.courseShortName);
  const categories = await getAllCategories();

  return { course, categories };
}

function EditCourse({ loaderData }: Route.ComponentProps) {

  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          ویرایش <span className="text-secondary">دوره</span>
        </span>
        <EditCourseForm course={loaderData.course.data} categories={loaderData.categories.data} />
      </div>
    </div>
  );
}

export default EditCourse;
