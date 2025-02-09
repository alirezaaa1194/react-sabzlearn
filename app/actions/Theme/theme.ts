import session from "~/sessions.server";
import { data } from "react-router";
import type { Route } from "./+types/theme";

type themeType = "light" | "dark";

export const action = async ({ request }: Route.ActionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const currentSession = await session.getSession(cookieHeader);

  const currentTheme = currentSession.get("theme") as themeType;

  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  currentSession.set("theme", nextTheme);

  return data(
    { theme: nextTheme },
    {
      headers: { "Set-Cookie": await session.commitSession(currentSession) },
    }
  );
};
