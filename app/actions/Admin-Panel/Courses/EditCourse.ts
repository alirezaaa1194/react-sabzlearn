import { editCourse, getCookie, saveNewCourse } from "~/utils/utils";
import type { Route } from "./+types/EditCourse";

export async function action({ request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  const courseFormData = new FormData();

  courseFormData.append("name", formData.get("name")!);
  courseFormData.append("description", formData.get("description")!);
  courseFormData.append("shortName", formData.get("shortName")!);
  courseFormData.append("categoryID", formData.get("categoryID")!);
  courseFormData.append("price", formData.get("price")!);
  courseFormData.append("support", formData.get("support")!);
  courseFormData.append("status", formData.get("status")!);
  courseFormData.append("cover", formData.get("cover")!);

  const courseId = formData.get("courseId");

  try {
    await editCourse(token as string, courseFormData, courseId as string);
  } catch {
    return { success: false };
  }
}
