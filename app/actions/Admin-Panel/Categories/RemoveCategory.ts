import { deleteCategory, getCookie, removeCourse } from "~/utils/utils";
import type { Route } from "./+types/RemoveCategory";

export async function action({ params, request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const categoryId = formData.get("mainCategoryId");

  try {
    await deleteCategory(token as string, categoryId as string);
  } catch {
    return { success: false };
  }
}
