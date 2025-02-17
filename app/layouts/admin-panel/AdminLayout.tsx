import React, { useEffect, useState } from "react";
import { data, Outlet, redirect, useLocation } from "react-router";
import { AuthContext } from "~/contexts/AuthContext";
import type { Route } from "./+types/AdminLayout";
import { getAllComments, getAllTickets, getCookie, getMe } from "~/utils/utils";
import type { userType } from "~/types/user.type";
import Header from "~/components/admin-panel/Header/Header";
import Sidebar from "~/components/admin-panel/Header/Sidebar";
import Overlay from "~/components/Overlay/Overlay";
import ProgressBar from "~/components/Progressbar/Progressbar";
import { Toaster } from "react-hot-toast";

export async function loader({ params, request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const userInfo: { data: userType } | { data: null } = token ? await getMe(token) : { data: null };

  const allComments = await getAllComments();
  const allTickets = token && userInfo?.data?.role === "ADMIN" ? await getAllTickets(token as string) : { data: null };

  if (!token || userInfo?.data?.role !== "ADMIN") {
    return redirect("/");
  }

  return { token, userInfo, allComments, allTickets };
}

function AdminLayout({ loaderData }: Route.ComponentProps) {
  const token = loaderData.token;
  const userInfo: userType = loaderData?.userInfo?.data as userType;

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpenSidebar(false);
  }, [location]);

  return (
    <AuthContext value={{ userInfo, token, isUserRegister: !!token }}>
      <Toaster />
      <ProgressBar />
      <div className="flex dark">
        <Overlay isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
        <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
        <div className={`flex flex-col w-full md:w-4/5 transition-all md:translate-x-0 ${isOpenSidebar ? "-translate-x-[268px]" : "translate-x-0"}`}>
          <Header isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} comments={loaderData.allComments.data} tickets={loaderData.allTickets.data} />
          <main className="container py-4 sm:py-2.5 bg-gray-900 h-full text-white">
            <Outlet />
          </main>
        </div>
      </div>
    </AuthContext>
  );
}

export default AdminLayout;
