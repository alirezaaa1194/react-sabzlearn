import { getCookie, saveNewCourse, saveNewSesson } from "~/utils/utils";
import type { Route } from "./+types/AddLesson";

export async function action({ request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  const courseId = formData.get("course") as string;
  const newCourseTitle = formData.get("title");
  const newCourseTime = formData.get("time");
  const newCourseVideo = formData.get("video");
  const newCourseFree = formData.get("free");

  let newCourseFormData = new FormData();

  newCourseFormData.append("title", newCourseTitle!);
  newCourseFormData.append("time", newCourseTime!);
  newCourseFormData.append("video", newCourseVideo!);
  newCourseFormData.append("free", newCourseFree!);

  try {
    await saveNewSesson(token as string, newCourseFormData, courseId);
  } catch {
    return { success: false };
  }
}
