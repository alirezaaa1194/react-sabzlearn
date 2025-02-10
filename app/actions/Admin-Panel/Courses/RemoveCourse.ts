import { getCookie, removeCourse } from "~/utils/utils";
import type { Route } from "./+types/RemoveCourse";

export async function action({ params, request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const courseId = formData.get("mainCourseId");

  try {
    await removeCourse(courseId as string, token as string);
  } catch {
    return { success: false };
  }
}
