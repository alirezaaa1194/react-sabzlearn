import { answerToComment, getCookie } from "~/utils/utils";
import type { Route } from "./+types/AnswerComment";

export async function action({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  const commentId = formData.get("mainCommentId");
  const answerBody = formData.get("answerBody");
  try {
    await answerToComment(token as string, commentId as string, answerBody as string);
  } catch {
    return { success: false };
  }
}
