import { getCookie, removeCourse, removeLesson } from "~/utils/utils";
import type { Route } from "./+types/RemoveLesson";

export async function action({ request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const lessonId = formData.get("mainLessonId");

  try {
    await removeLesson(lessonId as string, token as string);
  } catch {
    return { success: false };
  }
}
