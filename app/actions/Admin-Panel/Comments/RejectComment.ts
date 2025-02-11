import { getCookie, rejectComment } from "~/utils/utils";
import type { Route } from "./+types/RejectComment";

export async function action({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  const commentId = formData.get("mainCommentId");
  try {
    await rejectComment(token as string, commentId as string);
  } catch {
    return { success: false };
  }
}
