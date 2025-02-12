import { getCookie, saveNewCategory } from "~/utils/utils";
import type { Route } from "./+types/AddCategory";

export async function action({ request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const newCategoryInfo = formData.get("newCategoryInfo");

  try {
    await saveNewCategory(token as string, newCategoryInfo);
  } catch {
    return { success: false };
  }
}
