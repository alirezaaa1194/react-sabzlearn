import type { Route } from "./+types/DeleteComment";
import { baseUrl, deleteComment, getCookie } from "~/utils/utils";

export async function action({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  const commentId = formData.get("mainCommentId");
  try {
    await deleteComment(token as string, commentId as string);
  } catch {
    return { success: false };
  }
}
