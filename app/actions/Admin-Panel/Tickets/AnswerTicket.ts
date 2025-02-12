import { answerToComment, answerToTicket, getCookie } from "~/utils/utils";
import type { Route } from "./+types/AnswerTicket";

export async function action({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const formData = await request.formData();

  const ticketId = formData.get("mainTicketId");
  const answerBody = formData.get("answerBody");
  try {
    await answerToTicket(token as string, ticketId as string, answerBody as string);
  } catch {
    return { success: false };
  }
}
