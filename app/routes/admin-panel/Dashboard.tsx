import { AcademicCapMiniIcon, Squares2x2Icon, UsersIcon, VideoCameraIcon } from "public/svg/svgs";
import React from "react";
import type { Route } from "./+types/Dashboard";
import { getAllCourses, getAllSessions, getAllUsers, getCookie } from "~/utils/utils";
import Chart from "~/components/admin-panel/Dashboard/Chart";
import RecentUser from "~/components/admin-panel/Dashboard/RecentUser";

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const allUsers = await getAllUsers(token as string);
  const allCourses = await getAllCourses();
  const allSessions = await getAllSessions();

  return { allUsers, allCourses, allSessions };
}

function Dashboard({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col md:p-5 gap-5 md:gap-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center justify-between bg-darker shadow-md rounded-md h-24 pe-6 ps-10">
          <div className="flex flex-col gap-4">
            <span className="font-lalezar text-xl relative after:content-[''] after:w-4 after:h-[2px] after:bg-secondary after:shadow-sm after:shadow-secondary after:absolute after:top-0 after:bottom-0 after:my-auto after:-right-5  before:content-[''] before:w-4 before:h-[2px] before:bg-secondary before:shadow-sm before:shadow-secondary before:absolute before:top-0 before:bottom-0 before:my-auto before:-left-5">تعداد ثبت نامی ها</span>
            <span className="text-xl font-lalezar">{loaderData.allUsers?.data?.length}</span>
          </div>
          <UsersIcon className="size-10 text-secondary" />
        </div>
        <div className="flex items-center justify-between bg-darker shadow-md rounded-md h-24 pe-6 ps-10">
          <div className="flex flex-col gap-4">
            <span className="font-lalezar text-xl relative after:content-[''] after:w-4 after:h-[2px] after:bg-secondary after:shadow-sm after:shadow-secondary after:absolute after:top-0 after:bottom-0 after:my-auto after:-right-5  before:content-[''] before:w-4 before:h-[2px] before:bg-secondary before:shadow-sm before:shadow-secondary before:absolute before:top-0 before:bottom-0 before:my-auto before:-left-5">تعداد دوره ها</span>
            <span className="text-xl font-lalezar">{loaderData.allCourses?.data?.length}</span>
          </div>
          <AcademicCapMiniIcon className="size-10 text-secondary" />
        </div>
        <div className="flex items-center justify-between bg-darker shadow-md rounded-md h-24 pe-6 ps-10">
          <div className="flex flex-col gap-4">
            <span className="font-lalezar text-xl relative after:content-[''] after:w-4 after:h-[2px] after:bg-secondary after:shadow-sm after:shadow-secondary after:absolute after:top-0 after:bottom-0 after:my-auto after:-right-5  before:content-[''] before:w-4 before:h-[2px] before:bg-secondary before:shadow-sm before:shadow-secondary before:absolute before:top-0 before:bottom-0 before:my-auto before:-left-5">تعداد جلسات</span>
            <span className="text-xl font-lalezar">{loaderData.allSessions?.data?.length}</span>
          </div>
          <VideoCameraIcon className="size-10 text-secondary" />
        </div>
      </div>
      {/* <Chart  /> */}
      <div className="flex flex-col gap-2 p-4 rounded-md bg-darker">
        <span className="text-white font-lalezar text-xl">
          افراد <span className="text-secondary">اخیرا</span> ثبت نام شده
        </span>
        <RecentUser users={loaderData?.allUsers?.data} />
      </div>
    </div>
  );
}

export default Dashboard;
