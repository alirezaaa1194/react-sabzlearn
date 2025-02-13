import { answerToComment, answerToTicket, banUser, changeUserRole, getCookie, removeUser } from "~/utils/utils";
import type { Route } from "./+types/ChangeUserRole";

export async function action({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  const userId = formData.get("userId");
  try {
    await banUser(token as string, userId as string);
  } catch {
    return { success: false };
  }
}
