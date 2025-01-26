import session from "~/sessions.server";
import { data } from "react-router";
import type { Route } from "./+types/themeRoute";

type themeType = "light" | "dark";

export const action = async ({ request }: Route.ActionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const currentSession = await session.getSession(cookieHeader);

  // گرفتن تم فعلی از کوکی
  const currentTheme = currentSession.get("theme") as themeType;

  // تصمیم‌گیری برای تم بعدی
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  // ذخیره تم جدید در کوکی
  currentSession.set("theme", nextTheme);

  return data(
    { theme: nextTheme }, // ارسال تم جدید به کلاینت
    {
      headers: { "Set-Cookie": await session.commitSession(currentSession) },
    }
  );
};
