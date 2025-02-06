import { Form, redirect } from "react-router";
import { getCookie } from "~/utils/utils";
import type { Route } from "./+types/logout";
import session from "~/sessions.server";

export async function action({ request }: Route.ActionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const currentSession = await session.getSession(cookieHeader);

  currentSession.unset("coursesId");
  currentSession.unset("token");
  currentSession.unset("offerCode");
  currentSession.unset("sessionsId");

  const updatedSession = await session.commitSession(currentSession);

  return redirect("/", {
    headers: new Headers({
      "Set-Cookie": `${updatedSession}, token=${null}; Path=/; HttpOnly; Secure; Max-Age=-2592000`,
    }),
  });
}
