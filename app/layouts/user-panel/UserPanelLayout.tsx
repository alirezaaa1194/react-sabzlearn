import React from "react";
import { Outlet, redirect } from "react-router";
import { getCookie } from "~/utils/utils";
import type { Route } from "./+types/UserPanelLayout";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");

  const token = getCookie(cookieHeader, "token");
  if (!token) {
    return redirect("/");
  }

  return token;
};

function UserPanelLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default UserPanelLayout;
