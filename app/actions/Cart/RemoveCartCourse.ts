import session from "~/sessions.server";
import { data } from "react-router";
import type { Route } from "./+types/RemoveCartCourse";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const mainCourseId = formData.get("courseId");

  const cookieHeader = request.headers.get("Cookie");
  const currentSession = await session.getSession(cookieHeader);
  const coursesId: any = currentSession.data.coursesId;

  const splitedCoursesId = coursesId.split("; ");
  let filteredCoursesId = splitedCoursesId.filter((ids: string) => ids !== mainCourseId).join("; ");
  currentSession.set("coursesId", filteredCoursesId);

  return data(
    { currentSession },
    {
      headers: { "Set-Cookie": await session.commitSession(currentSession) },
    }
  );
}
