import { draftNewArticle, getCookie, saveNewArticle, saveNewCourse } from "~/utils/utils";
import type { Route } from "./+types/DraftArticle";

export async function action({ request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  try {
    await draftNewArticle(token as string, formData);
  } catch {
    return { success: false };
  }
}
