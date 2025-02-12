import { deleteCategory, editCategory, getCookie, removeCourse } from "~/utils/utils";
import type { Route } from "./+types/EditCategory";

export async function action({ params, request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const categoryNewInfo = formData.get("newInfo");
  const categoryId = formData.get("mainCategoryId");

  try {
    await editCategory(token as string, categoryId as string, categoryNewInfo as string);
  } catch {
    return { success: false };
  }
}
