import React, { Suspense } from "react";
import UserActivityDetails from "~/components/user-panel/IndexPage/userActivityDetails";
import { getAllCourses, getAllSessions, getCookie, getUserTickets } from "~/utils/utils";
import type { Route } from "./+types/my-account";
import session from "~/sessions.server";
import RecentLessons from "~/components/user-panel/IndexPage/RecentLessons";
import type { courseSessionType } from "~/types/course.type";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");
  const currentSession = await session.getSession(cookieHeader);

  const userTickets = await getUserTickets(token);

  const watchedLessonsInCookie = currentSession.get("sessionsId") as string;
  const watchedLessons = watchedLessonsInCookie?.split("; ");

  const allSessions = await getAllSessions();

  const watchedSessions = allSessions?.data?.filter((session: courseSessionType) => watchedLessonsInCookie?.includes(session._id));
  const allCourses = await getAllCourses();

  return { watchedLessons, userTickets, watchedSessions, allCourses };
};

function myAccount({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <UserActivityDetails userTickets={loaderData.userTickets.data} />
      <RecentLessons watchedLessons={loaderData.watchedLessons} watchedSessions={loaderData.watchedSessions} allCourses={loaderData.allCourses.data} />
    </div>
  );
}

export default myAccount;
