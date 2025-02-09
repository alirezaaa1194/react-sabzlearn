import React, { useEffect, useState } from "react";
import { data, Outlet } from "react-router";
import { AuthContext } from "~/contexts/AuthContext";
import { getCookie, getMe } from "~/utils/utils";
import type { Route } from "./+types/AuthorizationLayout";
import { useQuery } from "@tanstack/react-query";
import { CartContext } from "~/contexts/CartContext";
import session from "~/sessions.server";
import ProgressBar from "~/components/Progressbar/Progressbar";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  const currentSession = await session.getSession(cookieHeader);
  const coursesId: any = currentSession.data.coursesId;
  return { token, coursesId };
};

function AuthorizationLayout({ loaderData }: Route.ComponentProps) {
  const { token, coursesId } = loaderData;

  if (token) {
    const { data } = useQuery({
      queryKey: ["getme"],
      queryFn: () => getMe(token),
    });

    return (
      <div>
        <CartContext value={coursesId}>
          <AuthContext value={{ userInfo: data?.data, isUserRegister: !!token, token: token || null }}>
            <ProgressBar />
            <Outlet />
          </AuthContext>
        </CartContext>
      </div>
    );
  } else
    return (
      <>
        <CartContext value={coursesId}>
          <ProgressBar />
          <Outlet />
        </CartContext>
      </>
    );
}

export default AuthorizationLayout;
