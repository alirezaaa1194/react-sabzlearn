import session from "~/sessions.server";
import type { Route } from "./+types/saveOfferCode";
import { data } from "react-router";

export async function action({ params, request }: Route.ActionArgs) {
  const formData = await request.formData();
  const offerCode = formData.get("offerCode");

  const cookieHeader = request.headers.get("Cookie");
  const currentSession = await session.getSession(cookieHeader);

  currentSession.set("offerCode", offerCode);

  return data(
    { offerCode },
    {
      headers: { "Set-Cookie": await session.commitSession(currentSession) },
    }
  );
}
