import { answerToComment, answerToTicket, changeUserRole, getCookie, registerHandler } from "~/utils/utils";
import type { Route } from "./+types/ChangeUserRole";

export async function action({ params, request }: Route.LoaderArgs) {
  const formData = await request.formData();

  const newUserInfo = formData.get("newUserInfo");
  try {
    await registerHandler(JSON.parse(newUserInfo as string));
  } catch {
    return { success: false };
  }
}
