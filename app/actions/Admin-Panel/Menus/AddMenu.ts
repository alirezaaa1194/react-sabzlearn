import { getCookie, saveNewCourse, saveNewMenu, saveNewSesson } from "~/utils/utils";
import type { Route } from "./+types/AddMenu";

export async function action({ request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  const menuInfo = formData.get("newMenuInfo");

  try {
    await saveNewMenu(token as string, menuInfo);
  } catch {
    return { success: false };
  }
}
