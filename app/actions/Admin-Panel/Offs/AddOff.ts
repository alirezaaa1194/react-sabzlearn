import { addOff, getCookie, removeCourse, removeOffs } from "~/utils/utils";
import type { Route } from "./+types/AddOff";
export async function action({ params, request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();
  const newCodeInfo = formData.get("newCodeInfo");

  try {
    await addOff(token as string, JSON.parse(newCodeInfo as string));
  } catch {
    return { success: false };
  }
}
