import { answerToComment, answerToTicket, changeUserRole, getCookie } from "~/utils/utils";
import type { Route } from "./+types/ChangeUserRole";

export async function action({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  const userNewRoleInfo = formData.get("userNewRoleInfo");
  try {
    await changeUserRole(token as string, userNewRoleInfo as string);
  } catch {
    return { success: false };
  }
}
