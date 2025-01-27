import React from "react";
import { Outlet } from "react-router";

function UserPanelLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default UserPanelLayout;
