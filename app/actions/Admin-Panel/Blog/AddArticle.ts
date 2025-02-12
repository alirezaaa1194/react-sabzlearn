import { getCookie, saveNewArticle, saveNewCourse } from "~/utils/utils";
import type { Route } from "./+types/AddArticle";

export async function action({ request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  try {
    await saveNewArticle(token as string, formData);
  } catch {
    return { success: false };
  }
}
