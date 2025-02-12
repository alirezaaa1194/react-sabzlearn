import { getCookie, removeArticle, removeCourse } from "~/utils/utils";
import type { Route } from "./+types/RemoveArticle";

export async function action({ params, request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const articleId = formData.get("articleId");

  try {
    await removeArticle(articleId as string, token as string);
  } catch {
    return { success: false };
  }
}
