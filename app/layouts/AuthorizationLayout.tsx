import React, { useEffect, useState } from "react";
import { data, Outlet } from "react-router";
import { AuthContext } from "~/contexts/AuthContext";
import { getCookie, getMe } from "~/utils/utils";
import type { Route } from "./+types/AuthorizationLayout";
import { useQuery } from "@tanstack/react-query";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const token = getCookie(cookieHeader, "token");

  return { token };
};

function AuthorizationLayout({ loaderData }: Route.ComponentProps) {
  const { token } = loaderData;

  if (token) {
    const { data } = useQuery({
      queryKey: ["getme"],
      queryFn: () => getMe(token),
    });

    return (
      <div>
        <AuthContext value={{ userInfo: data?.data, isUserRegister: !!token }}>
          <Outlet />
        </AuthContext>
      </div>
    );
  } else
    return (
      <>
        <Outlet />
      </>
    );
}

export default AuthorizationLayout;
