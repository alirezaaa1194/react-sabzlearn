import session from "~/sessions.server";
import type { Route } from "./+types/removeOfferCode";
import { data } from "react-router";

export async function action({ params, request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const currentSession = await session.getSession(cookieHeader);

  currentSession.unset("offerCode");

  return data(
    { offerCode: currentSession.get("offerCode") },
    {
      headers: { "Set-Cookie": await session.commitSession(currentSession) },
    }
  );
}
