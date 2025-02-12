import { deleteMenu, getCookie, removeCourse, removeLesson } from "~/utils/utils";
import type { Route } from "./+types/RemoveMenu";

export async function action({ request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const mainMenuId = formData.get("mainMenuId");

  try {
    await deleteMenu(token as string, mainMenuId as string);
  } catch {
    return { success: false };
  }
}
