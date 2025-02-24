import React, { use, useState } from "react";
import { Outlet, redirect } from "react-router";
import { getAllCourses, getCookie } from "~/utils/utils";
import type { Route } from "./+types/UserPanelLayout";
import Sidebar from "~/components/user-panel/Sidebar/Sidebar";
import Header from "~/components/user-panel/Header/Header";
import Overlay from "~/components/Overlay/Overlay";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");

  const token = getCookie(cookieHeader, "token");
  const allCourses = await getAllCourses();
  if (!token) {
    return redirect("/");
  }
  return { token, allCourses };
};

function UserPanelLayout({ loaderData }: Route.ComponentProps) {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  return (
    <div className="flex max-w-[1536px] mx-auto">
      <Overlay isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
      <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      <div className="w-full md:w-4/5">
        <Header courses={loaderData.allCourses.data} setIsOpenSidebar={setIsOpenSidebar} />
        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default UserPanelLayout;
