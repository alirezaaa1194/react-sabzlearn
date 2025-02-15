import { getCookie, removeCourse, removeOffs } from "~/utils/utils";
import type { Route } from "./+types/RemoveOff";

export async function action({ params, request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const mainoffId = formData.get("mainoffId");

  try {
    await removeOffs(token as string, mainoffId as string);
  } catch {
    return { success: false };
  }
}
