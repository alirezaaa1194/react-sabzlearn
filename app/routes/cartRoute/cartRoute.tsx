import session from "~/sessions.server";
import type { Route } from "./+types/cartRoute";
import { data } from "react-router";

export const action = async ({ request }: Route.ActionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const currentSession = await session.getSession(cookieHeader);

  const formData = await request.formData();
  const courseId = formData.get("courseId");

  const currentCoursesInCart = currentSession.get("coursesId") as string;


    let allCoursesInCart = currentCoursesInCart ? `${currentCoursesInCart}; ${courseId}` : courseId;

    currentSession.set("coursesId", allCoursesInCart);

    return data(
      { courseId },
      {
        headers: { "Set-Cookie": await session.commitSession(currentSession) },
      }
    );

};
